import Container from "@/components/layout/Container";

const results = [
  {
    number: "01",
    title: "Лучше концентрируется",
    description:
      "Ребёнку становится проще удерживать внимание на задании и доводить начатое до конца.",
  },
  {
    number: "02",
    title: "Быстрее запоминает",
    description:
      "Осваиваем приёмы, которые помогают запоминать информацию осознанно, а не за счёт механической зубрёжки.",
  },
  {
    number: "03",
    title: "Увереннее решает задачи",
    description:
      "Ребёнок учится анализировать условие, искать решение и не бояться ошибаться.",
  },
  {
    number: "04",
    title: "Становится самостоятельнее",
    description:
      "Постепенно уменьшается необходимость в постоянных подсказках и контроле со стороны родителей.",
  },
];

export default function Results() {
  return (
    <section className="bg-[#0F3B6D] py-28 text-white">
      <Container>
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">

          <div className="lg:sticky lg:top-32 lg:self-start">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              Результат
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Что изменится
              <br />
              после интенсива
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-blue-100">
              Наша цель — не просто научить ребёнка отдельным
              приёмам. Мы хотим сформировать навыки, которые
              помогут ему увереннее справляться с учёбой каждый день.
            </p>

            <div className="mt-10 h-px w-24 bg-blue-300/50" />

            <p className="mt-6 text-sm leading-6 text-blue-200">
              Результат зависит от возраста ребёнка,
              его исходного уровня и регулярности занятий.
            </p>

          </div>

          <div className="divide-y divide-white/15">

            {results.map((result) => (
              <article
                key={result.number}
                className="group grid gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-[80px_1fr]"
              >

                <div className="text-sm font-semibold tracking-[0.2em] text-blue-300">
                  {result.number}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-blue-200">
                    {result.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-lg leading-8 text-blue-100">
                    {result.description}
                  </p>
                </div>

              </article>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}