import Container from "@/components/layout/Container";
import TeacherCard from "./TeacherCard";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F9FC] py-28"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-[#0F3B6D]">
            Команда Smart Math
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Интенсив проводят
            <br />
            практикующие педагоги
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Мы ежедневно работаем с детьми младшего школьного возраста
            и знаем, как сделать обучение понятным,
            интересным и результативным.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          <TeacherCard
            image="/images/anastasia.webp"
            name="Анастасия Гладких"
            role="Руководитель проекта"
            description="Автор методики Smart Math. Более 14 лет помогает детям развивать память, внимание и логическое мышление, превращая обучение в понятный и увлекательный процесс."
          />

          <TeacherCard
            image="/images/teacher2.webp"
            name="Ирина"
            role="Методист программы"
            description="Специалист по начальному образованию. Помогает детям выстроить прочную базу знаний, развивает самостоятельность и уверенность в собственных силах."
          />

          <TeacherCard
            image="/images/teacher3.webp"
            name="Алия"
            role="Педагог интенсива"
            description="Проводит практические занятия по развитию памяти, внимания и мышления, используя современные игровые и авторские методики."
          />

        </div>

      </Container>
    </section>
  );
}