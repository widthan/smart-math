import Container from "@/components/layout/Container";
import ResultCard from "./ResultCard";

export default function Results() {
  return (
    <section id="results" className="py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-pink-600">
            После курса
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Что изменится
            после прохождения интенсива
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Вы получите понятную систему, которую сможете применять
            каждый день без давления и конфликтов.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ResultCard
            title="Ребёнок станет самостоятельнее"
            description="Перестанет ждать подсказок и начнет выполнять задания увереннее."
          />

          <ResultCard
            title="Домашние задания перестанут быть войной"
            description="Вы научитесь помогать правильно, без криков и слез."
          />

          <ResultCard
            title="Появится уверенность"
            description="Ребёнок перестанет бояться ошибок и начнет пробовать новое."
          />

          <ResultCard
            title="Освободится время всей семьи"
            description="Уроки будут занимать меньше времени, а вечера станут спокойнее."
          />
        </div>
      </Container>
    </section>
  );
}