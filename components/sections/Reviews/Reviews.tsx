import Container from "@/components/layout/Container";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-pink-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-pink-600">
            Отзывы родителей
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Что говорят родители
            после обучения
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <ReviewCard
            author="Елена"
            text="Через две недели сын сам начал делать уроки. Мы впервые перестали ругаться вечером."
          />

          <ReviewCard
            author="Марина"
            text="Очень много практических советов. Уже после первого занятия увидела изменения."
          />

          <ReviewCard
            author="Светлана"
            text="Ребенок стал увереннее, перестал бояться ошибок и начал заниматься самостоятельно."
          />
        </div>
      </Container>
    </section>
  );
}