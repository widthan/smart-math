import Container from "@/components/layout/Container";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <section className="bg-zinc-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Для кого
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Этот интенсив подойдет,
            если...
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            emoji="📚"
            title="Домашнее задание — стресс"
            description="Каждый вечер превращается в борьбу."
          />

          <BenefitCard
            emoji="😥"
            title="Ребёнок не уверен в себе"
            description="Боится ошибок и быстро сдается."
          />

          <BenefitCard
            emoji="⏰"
            title="Уроки занимают весь вечер"
            description="На отдых почти не остается времени."
          />

          <BenefitCard
            emoji="🎯"
            title="Хочется самостоятельности"
            description="Чтобы ребёнок учился без постоянного контроля."
          />
        </div>
      </Container>
    </section>
  );
}