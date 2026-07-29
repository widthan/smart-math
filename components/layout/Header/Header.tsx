export default function Header() {
  return (
<header
  className="
    sticky
    top-0
    z-50
    border-b
    border-zinc-100
    bg-white
    shadow-sm
  "
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
  <a
  href="#hero"
  className="text-2xl font-bold text-zinc-900 transition hover:text-pink-600"
>
  Smart Math
</a>

      <nav className="flex gap-8 text-zinc-800">

  <a
    href="#hero"
    className="font-medium transition hover:text-pink-600"
  >
    Главная
  </a>

  <a
    href="#about"
    className="font-medium transition hover:text-pink-600"
  >
    Об авторе
  </a>

  <a
    href="#program"
    className="font-medium transition hover:text-pink-600"
  >
    Программа
  </a>

  <a
    href="#reviews"
    className="font-medium transition hover:text-pink-600"
  >
    Отзывы
  </a>

  <a
    href="#contact"
    className="font-medium transition hover:text-pink-600"
  >
    Контакты
  </a>

</nav>
      </div>
    </header>
  );
}