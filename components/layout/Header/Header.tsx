export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <h1 className="text-2xl font-bold">
          Smart Math
        </h1>

        <nav className="flex gap-8">
         <a href="#about">О курсе</a>
<a href="#program">Программа</a>
<a href="#reviews">Отзывы</a>
<a href="#contact">Записаться</a>
        </nav>
      </div>
    </header>
  );
}