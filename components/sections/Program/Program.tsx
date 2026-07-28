import Container from "@/components/layout/Container";
import ProgramCard from "./ProgramCard";

export default function Program() {
  return (
    <section id="program" className="bg-white py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-pink-600">
            Программа курса
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            За 4 занятия вы получите
            готовую систему обучения
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Без сложной теории. Только практические инструменты,
            которые можно применять уже на следующий день.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ProgramCard
            number="01"
            title="Почему ребенок не хочет учиться"
            description="Разберем настоящие причины отсутствия мотивации и желания делать уроки."
          />

          <ProgramCard
            number="02"
            title="Как развить самостоятельность"
            description="Пошаговая система, которая избавит родителей от постоянного контроля."
          />

          <ProgramCard
            number="03"
            title="Развитие памяти и внимания"
            description="Игры, упражнения и приемы, которыми ребенок сможет пользоваться ежедневно."
          />

          <ProgramCard
            number="04"
            title="Домашние задания без конфликтов"
            description="Как сделать выполнение уроков спокойным и предсказуемым процессом."
          />
        </div>
      </Container>
    </section>
  );
}