import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-10 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>
            <h3 className="text-xl font-bold">
              Smart Math
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              © 2026 Все права защищены
            </p>
          </div>

          <div className="flex gap-6 text-zinc-300">
            <a href="#about">О курсе</a>
            <a href="#program">Программа</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contact">Записаться</a>
          </div>

        </div>
      </Container>
    </footer>
  );
}