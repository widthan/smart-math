import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="w-full max-w-xl rounded-3xl bg-white/80 p-12 text-center shadow-2xl backdrop-blur">

        <div className="mb-6 text-6xl">
          🎉
        </div>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900">
          Спасибо!
        </h1>

        <p className="mb-8 text-lg text-zinc-600">
          Ваша заявка успешно отправлена.
          <br />
          Мы свяжемся с вами в ближайшее время.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
        >
          Вернуться на главную
        </Link>

      </div>

    </main>
  );
}