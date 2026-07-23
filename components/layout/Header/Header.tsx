export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <h1 className="text-2xl font-bold">
          Smart Math
        </h1>

        <nav className="flex gap-8">
          <a href="#">Главная</a>
          <a href="#">О тренинге</a>
          <a href="#">Отзывы</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
    </header>
  );
}