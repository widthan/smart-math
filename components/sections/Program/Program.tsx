import Container from "@/components/layout/Container";

const program = [
  {
    number: "01",
    title: "Диагностика",
    description:
      "Определяем сильные стороны ребёнка и зоны, которые требуют дополнительного внимания.",
  },
  {
    number: "02",
    title: "Память и внимание",
    description:
      "Осваиваем практические упражнения для концентрации, запоминания и обработки информации.",
  },
  {
    number: "03",
    title: "Логическое мышление",
    description:
      "Учимся анализировать информацию, находить закономерности и самостоятельно искать решения.",
  },
  {
    number: "04",
    title: "Математическое мышление",
    description:
      "Разбираем задачи через понимание логики, а не механическое применение готовых формул.",
  },
  {
    number: "05",
    title: "Практика",
    description:
      "Закрепляем полученные навыки через игровые задания, упражнения и реальные школьные ситуации.",
  },
];

export default function Program() {
  return (
    <section
      id="program"
      className="bg-[#F7F9FC] py-28"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F3B6D]">
            Программа интенсива
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            От диагностики
            <br />
            к уверенности
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Каждый этап имеет свою задачу.
            Мы последовательно развиваем навыки,
            которые помогают ребёнку увереннее справляться
            с учебными задачами.
          </p>

        </div>

        <div className="mx-auto max-w-5xl">

          {program.map((item, index) => (
            <div
              key={item.number}
              className="relative grid gap-8 pb-12 last:pb-0 md:grid-cols-[100px_1fr]"
            >

              {index !== program.length - 1 && (
                <div className="absolute left-[49px] top-14 hidden h-[calc(100%-24px)] w-px bg-slate-200 md:block" />
              )}

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-bold tracking-widest text-[#0F3B6D] shadow-sm">
                {item.number}
              </div>

              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  {item.description}
                </p>

              </article>

            </div>
          ))}

        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-blue-100 bg-blue-50/70 p-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="font-semibold text-[#0F3B6D]">
                Главное
              </p>

              <p className="mt-2 text-slate-600">
                Ребёнок не просто получает знания —
                он учится самостоятельно ими пользоваться.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-2xl bg-[#0F3B6D] px-7 py-3 text-center font-semibold text-white transition hover:bg-[#18508F]"
            >
              Узнать подробнее
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}