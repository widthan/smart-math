import Container from "@/components/layout/Container";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-white py-28"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-[#0F3B6D]">
            Почему родители выбирают Smart Math
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            После интенсива ребёнок
            <br />
            начинает учиться увереннее
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Мы не заставляем детей зубрить.
            Мы развиваем мышление, память и внимание,
            благодаря которым школьная программа
            становится понятной и интересной.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <BenefitCard
            title="Понимание материала"
            description="Ребёнок начинает понимать темы, а не запоминать их механически."
          />

          <BenefitCard
            title="Самостоятельность"
            description="Домашние задания выполняются быстрее и без постоянной помощи родителей."
          />

          <BenefitCard
            title="Уверенность"
            description="Исчезает страх ошибок, появляется желание отвечать и проявлять инициативу."
          />

          <BenefitCard
            title="Развитие мышления"
            description="Улучшается память, внимание, логика и способность концентрироваться."
          />

        </div>

      </Container>
    </section>
  );
}