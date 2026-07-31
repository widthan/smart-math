"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    });

    if (response.ok) {
      router.push("/admin");
    } else {
      setError("Неверный логин или пароль");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
      >

        <h1 className="mb-8 text-center text-3xl font-bold">
          Вход в CRM
        </h1>

        <input
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="mb-4 w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-xl border p-4"
        />

        {error && (
          <p className="mb-4 text-red-500">
            {error}
          </p>
        )}

        <button
          className="w-full rounded-xl bg-pink-600 py-4 text-white"
        >
          Войти
        </button>

      </form>

    </main>
  );
}