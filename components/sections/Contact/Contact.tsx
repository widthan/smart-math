import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0F3B6D] py-28 text-white"
    >
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-3xl" />

      <Container>
        <div className="relative grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              Запись на интенсив
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Давайте поможем
              <br />
              ребёнку раскрыть
              <br />
              свои возможности
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
              Оставьте заявку. Мы свяжемся с вами,
              ответим на вопросы и расскажем,
              как проходит интенсив.
            </p>

            <div className="mt-10 space-y-4">

              <ContactPoint text="Подберём подходящий формат участия" />

              <ContactPoint text="Ответим на вопросы о программе" />

              <ContactPoint text="Расскажем о подготовке к интенсиву" />

            </div>

          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10">

            <div className="mb-8">

              <h3 className="text-2xl font-bold text-slate-900">
                Оставить заявку
              </h3>

              <p className="mt-2 text-slate-500">
                Заполните форму — это займёт около минуты.
              </p>

            </div>

            <ContactForm />

          </div>

        </div>
      </Container>
    </section>
  );
}

function ContactPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-blue-100">
        ✓
      </div>

      <span className="text-blue-100">
        {text}
      </span>

    </div>
  );
}