import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Текст */}

          <div>

            <div className="mb-6 inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700">
              Онлайн-интенсив для родителей детей 1–4 классов
            </div>

            <h1 className="text-5xl font-bold leading-tight text-zinc-900 lg:text-6xl">
              Помогаем детям
              <br />
              учиться
              <span className="text-pink-600">
                {" "}спокойно
              </span>
              <br />
              и с удовольствием
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-600">
              Авторская методика Анастасии Гладких помогает детям
              развивать память, внимание, мышление и уверенность
              в своих силах без скучных занятий и постоянного
              контроля родителей.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                href="#contact"
                className="rounded-2xl bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
              >
                Записаться
              </Link>

              <Link
                href="#about"
                className="rounded-2xl border border-zinc-300 px-8 py-4 font-semibold text-zinc-700 transition hover:border-pink-400"
              >
                Подробнее
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-zinc-500">

              <div>
                <span className="font-bold text-zinc-900">
                  14+
                </span>{" "}
                лет опыта
              </div>

              <div>
                <span className="font-bold text-zinc-900">
                  1000+
                </span>{" "}
                учеников
              </div>

              <div>
                <span className="font-bold text-zinc-900">
                  Онлайн
                </span>{" "}
                по всему Казахстану
              </div>

            </div>

          </div>

          {/* Фото */}

          <div className="relative">

            <div className="absolute -left-10 top-12 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />

            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

 <Image
  src="/images/anastasia.webp"
  alt="Анастасия Гладких"
  width={620}
  height={840}
  priority
  loading="eager"
  sizes="(max-width: 1024px) 90vw, 520px"
  className="h-auto w-full max-w-[520px] object-cover"
/>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}