import Container from "@/components/layout/Container";

const features = [
  "Диагностика текущего уровня ребёнка",
  "Практические задания на память и внимание",
  "Развитие логического и математического мышления",
  "Работа с педагогами интенсива",
  "Рекомендации для дальнейшего развития",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#F7F9FC] py-28"
    >
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F3B6D]">
            Участие в интенсиве
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Инвестиция в навыки,
            <br />
            которые останутся с ребёнком
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Мы собрали программу так, чтобы за время интенсива
            ребёнок получил максимум практики и внимания педагогов.
          </p>

        </div>

        <div className="mx-auto max-w-5xl">

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">

            <div className="grid lg:grid-cols-[1fr_360px]">

              <div className="p-8 sm:p-12">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F3B6D]">
                  Что входит
                </p>

                <h3 className="mt-4 text-3xl font-bold text-slate-900">
                  Полная программа интенсива
                </h3>

                <div className="mt-8 space-y-5">

                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F3B6D]/10 text-sm font-bold text-[#0F3B6D]">
                        ✓
                      </div>

                      <p className="text-lg leading-7 text-slate-600">
                        {feature}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

              {/* <div className="flex flex-col justify-between bg-[#0F3B6D] p-8 text-white sm:p-12">

             

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
                    Стоимость
                  </p>

                  <div className="mt-5 flex items-end gap-3">
                    <span className="text-5xl font-bold">
                      50 000 ₸
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-blue-100">
                    Полное участие ребёнка
                    в программе интенсива.
                  </p>

                </div> 

                <a
                  href="#contact"
                  className="mt-10 rounded-2xl bg-white px-7 py-4 text-center font-semibold text-[#0F3B6D] transition duration-300 hover:bg-blue-50"
                >
                  Оставить заявку
                </a>

              </div> */}

            </div>

          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            После заявки мы свяжемся с вами, ответим на вопросы
            и расскажем о формате участия.
          </p>

        </div>

      </Container>
    </section>
  );
}