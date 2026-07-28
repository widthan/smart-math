export default function ContactForm() {
  return (
    <form className="mx-auto grid max-w-2xl gap-5">

      <input
        type="text"
        placeholder="Ваше имя"
        className="rounded-xl px-5 py-4 text-black"
      />

      <input
        type="tel"
        placeholder="Телефон"
        className="rounded-xl px-5 py-4 text-black"
      />

      <input
        type="email"
        placeholder="E-mail"
        className="rounded-xl px-5 py-4 text-black"
      />

      <button
        className="rounded-xl bg-white py-4 font-bold text-pink-600 transition hover:bg-zinc-100"
      >
        Записаться
      </button>

    </form>
  );
}