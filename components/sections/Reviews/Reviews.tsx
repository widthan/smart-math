import Container from "@/components/layout/Container";

const reviews = [
  {
    text: "После занятий ребёнок стал гораздо увереннее. Раньше каждое домашнее задание превращалось в спор, а сейчас он чаще пытается разобраться самостоятельно.",
    name: "Елена",
    role: "мама ученика 2 класса",
  },
  {
    text: "Мне понравилось, что здесь не заставляют просто заучивать материал. Ребёнку объясняют логику, и он действительно начинает понимать, почему получается именно так.",
    name: "Марина",
    role: "мама ученицы 3 класса",
  },
  {
    text: "Сын сначала не хотел заниматься, но формат его заинтересовал. Особенно понравились задания на память и логическое мышление.",
    name: "Алексей",
    role: "папа ученика 4 класса",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-28"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F3B6D]">
            Отзывы родителей
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Что говорят
            <br />
            родители
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Для нас важно не количество занятий,
            а изменения, которые родители замечают
            в повседневной учебе ребёнка.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={review.name}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-[#F7F9FC] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >

              <div className="text-5xl leading-none text-[#0F3B6D]/20">
                “
              </div>

              <p className="mt-4 flex-1 text-lg leading-8 text-slate-600">
                {review.text}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">

                <div className="font-semibold text-slate-900">
                  {review.name}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  {review.role}
                </div>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}