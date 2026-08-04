import Link from "next/link";
import Container from "../Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">

      <Container>

        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F3B6D] text-lg font-bold text-white shadow-md">
              S
            </div>

            <div className="leading-none">

              <div className="text-xl font-bold tracking-tight text-slate-900">
                Smart Math
              </div>

              <div className="text-xs tracking-[0.25em] text-slate-500 uppercase">
                Education Studio
              </div>

            </div>

          </Link>

          <nav className="hidden items-center gap-10 lg:flex">

            <a
              href="#about"
              className="font-medium text-slate-600 transition duration-300 hover:text-[#0F3B6D]"
            >
              О проекте
            </a>

            <a
              href="#program"
              className="font-medium text-slate-600 transition duration-300 hover:text-[#0F3B6D]"
            >
              Программа
            </a>

            <a
              href="#reviews"
              className="font-medium text-slate-600 transition duration-300 hover:text-[#0F3B6D]"
            >
              Отзывы
            </a>

            <a
              href="#contact"
              className="rounded-2xl bg-[#0F3B6D] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#18508F]"
            >
              Записаться
            </a>

          </nav>

        </div>

      </Container>

    </header>
  );
}