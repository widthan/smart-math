import Container from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Диагностика",
    text: "Определяем сильные стороны ребёнка и выявляем, что мешает ему учиться спокойно.",
  },
  {
    number: "02",
    title: "Развитие памяти",
    text: "Учим запоминать быстрее и надолго без бессмысленного заучивания.",
  },
  {
    number: "03",
    title: "Развитие мышления",
    text: "Ребёнок начинает понимать материал, а не просто повторять его.",
  },
  {
    number: "04",
    title: "Самостоятельность",
    text: "Домашние задания выполняются увереннее и с меньшей помощью родителей.",
  },
];

export default function Journey() {
  return (
    <section className="py-20">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.25em] text-[#0F3B6D]">
            Как проходит обучение
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Пошаговая система,
            которая действительно работает
          </h2>

        </div>

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-8 top-0 h-full w-px bg-[#EAF2FA]" />

          <div className="space-y-12">

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-8"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF2FA] font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <div className="flex-1 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-xl">

                  <h3 className="text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-600">
                    {step.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}