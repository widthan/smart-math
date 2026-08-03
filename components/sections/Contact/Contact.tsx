"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

export default function Contact() {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [city, setCity] = useState("");
const [workplace, setWorkplace] = useState("");
const [experience, setExperience] = useState("");
const [telegram, setTelegram] = useState(true);
const [reason, setReason] = useState("");
const [source, setSource] = useState("");
const [message, setMessage] = useState("");
const [isSuccess, setIsSuccess] = useState(false);
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  fullName: name,
  phone,
  email,
  city,
  workplace,
  experience,
  telegram,
  reason,
  source,
}),
  });

if (response.ok) {
  setIsSuccess(true);

  setName("");
  setPhone("");
  setEmail("");
  setCity("");
setWorkplace("");
setExperience("");
setTelegram(true);
setReason("");
setSource("");
  setMessage("");

  window.history.replaceState({}, "", "/");
} else {
  alert("Ошибка отправки.");
}
};
if (isSuccess) {
  return (
    <section
      id="contact"
      className="bg-pink-600 py-24 text-white"
    >
      <Container>
        <div
  className="
    mx-auto
    max-w-2xl
    rounded-3xl
    bg-white
    p-12
    text-center
    text-zinc-900
    shadow-2xl
    animate-[fadeIn_.6s_ease-out]
  "
>

          <div
  className="
    mb-6
    text-7xl
    animate-[pop_.5s_ease-out]
  "
>
  ✅
</div>

          <h2 className="text-4xl font-bold">
            Спасибо!
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Мы получили вашу заявку.
            <br />
            Анастасия свяжется с вами
            в ближайшее время.
          </p>

        </div>
      </Container>
    </section>
  );
}
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
<input
  type="text"
  placeholder="Город"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>
<input
  type="text"
  placeholder="Школа или место работы"
  value={workplace}
  onChange={(e) => setWorkplace(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>
<select
  value={experience}
  onChange={(e) => setExperience(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
>
  <option value="">Стаж работы</option>
  <option>До 1 года</option>
  <option>1–3 года</option>
  <option>3–7 лет</option>
  <option>Более 7 лет</option>
</select>

<select
  value={telegram ? "yes" : "no"}
  onChange={(e) => setTelegram(e.target.value === "yes")}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
>
  <option value="yes">
    Telegram на этом номере — Да
  </option>

  <option value="no">
    Telegram на этом номере — Нет
  </option>
</select>
<textarea
  rows={5}
  placeholder="Почему хотите попасть на интенсив?"
  value={reason}
  onChange={(e) => setReason(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>
           <textarea
  rows={5}
  placeholder="Сообщение"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
/>

<select
  value={source}
  onChange={(e) => setSource(e.target.value)}
  className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-pink-500"
>
  <option value="">Откуда вы узнали о нас?</option>
  <option>Instagram</option>
  <option>Google</option>
  <option>Рекомендация</option>
  <option>Другое</option>
</select>

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