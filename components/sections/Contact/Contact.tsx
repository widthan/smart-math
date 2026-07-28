"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

export default function Contact() {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
console.log({
  name,
  phone,
  email,
  message,
});
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      email,
      message,
    }),
  });

  if (response.ok) {
    alert("Спасибо! Заявка отправлена.");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  } else {
    alert("Ошибка отправки.");
  }
};
  return (
    <section
      id="contact"
      className="bg-pink-600 py-24 text-white"
    >
      <Container>
        <div className="mx-auto max-w-3xl">

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Записаться на интенсив
            </h2>

            <p className="mt-4 text-lg text-pink-100">
              Заполните форму, и мы свяжемся с вами
              в ближайшее время.
            </p>
          </div>

          <form   onSubmit={handleSubmit}
  className="space-y-6 rounded-3xl bg-white p-10 text-zinc-900 shadow-2xl">

          <input
  type="text"
  placeholder="Ваше имя"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>

          <input
  type="tel"
  placeholder="Телефон"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>

<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>


           <textarea
  rows={5}
  placeholder="Сообщение"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>

            <button
  type="submit"
  className="w-full rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
>
  Записаться
</button>

          </form>

        </div>
      </Container>
    </section>
  );
}