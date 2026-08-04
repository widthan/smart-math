import Container from "@/components/layout/Container";

const items = [
  {
    title: "Авторская методика",
    text: "Практическая система, проверенная на сотнях учеников. Без скучной зубрежки и перегрузки.",
  },
  {
    title: "14+ лет опыта",
    text: "Многолетняя работа с детьми младшего школьного возраста и глубокое понимание их особенностей.",
  },
  {
    title: "Поддержка родителей",
    text: "Вы получите понятные рекомендации и инструменты, которые сможете применять каждый день.",
  },
  {
    title: "Онлайн из любой точки",
    text: "Занимайтесь дома в удобное время без поездок и лишнего стресса.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.25em] text-pink-600">
            Почему Smart Math
          </span>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 lg:text-4xl">
            Мы учим не просто считать,
            <br />
            а думать самостоятельно
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Главная цель курса — помочь ребенку стать увереннее,
            полюбить учебу и научиться самостоятельно справляться
            со школьными задачами.
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-zinc-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}