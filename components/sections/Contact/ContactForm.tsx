"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: String(formData.get("fullName") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),

      // Поле требуется существующим API.
      experience: "Родитель ученика младших классов",

      source: "Сайт",
      status: "Новая",
    };

    if (!data.fullName || !data.phone || !data.email) {
      setError("Пожалуйста, заполните все обязательные поля.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Не удалось отправить заявку"
        );
      }

      form.reset();
      setSuccess(true);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте ещё раз."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5"
    >
      <Field
        name="fullName"
        type="text"
        label="Ваше имя"
        placeholder="Имя"
      />

      <Field
        name="phone"
        type="tel"
        label="Телефон"
        placeholder="+7 (___) ___-__-__"
      />

      <Field
        name="email"
        type="email"
        label="E-mail"
        placeholder="example@mail.com"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-2xl bg-[#0F3B6D] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#18508F] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Отправляем заявку..." : "Оставить заявку"}
      </button>

      {success && (
        <div className="rounded-xl bg-emerald-50 p-4 text-center text-sm font-medium text-emerald-700">
          Заявка успешно отправлена. Мы свяжемся с вами.
        </div>
      )}

      {error && (
        <div className="rounded-xl bg-red-50 p-4 text-center text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <p className="text-center text-xs leading-5 text-slate-400">
        Нажимая кнопку, вы соглашаетесь на обработку
        предоставленных данных.
      </p>
    </form>
  );
}

function Field({
  name,
  type,
  label,
  placeholder,
}: {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">
        {label}
      </span>

      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F3B6D] focus:bg-white focus:ring-4 focus:ring-blue-900/5"
      />
    </label>
  );
}