"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: form.fullName,
        phone: form.phone,
        email: form.email,
      }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Спасибо! Мы скоро свяжемся с вами.");

      setForm({
        fullName: "",
        phone: "",
        email: "",
      });

      return;
    }

    alert("Ошибка отправки. Попробуйте позже.");
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto grid max-w-2xl gap-5"
    >
      <input
        type="text"
        placeholder="Ваше имя"
        value={form.fullName}
        onChange={(e) =>
          setForm({
            ...form,
            fullName: e.target.value,
          })
        }
        className="rounded-xl px-5 py-4 text-black"
        required
      />

      <input
        type="tel"
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
        className="rounded-xl px-5 py-4 text-black"
        required
      />

      <input
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        className="rounded-xl px-5 py-4 text-black"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-white py-4 font-bold text-pink-600 transition hover:bg-zinc-100 disabled:opacity-60"
      >
        {loading ? "Отправка..." : "Записаться"}
      </button>
    </form>
  );
}