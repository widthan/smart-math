import Image from "next/image";

import Container from "@/components/layout/Container";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto h-[600px] w-[450px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/anastasia.webp"
              alt="Анастасия"
              fill
              sizes="450px"
              className="object-cover"
            />
          </div>

          <div>
            <span className="font-semibold uppercase tracking-widest text-pink-600">
              Автор курса
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Анастасия Гладких
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Более 14 лет помогает детям начальной школы учиться
              легко, спокойно и с интересом.
            </p>

            <p className="mt-6 leading-8 text-zinc-600">
              Учитель начальных классов, репетитор, методист,
              педагог дополнительного образования.
              За годы практики выработала систему,
              которая помогает детям становиться самостоятельными,
              а родителям перестать ежедневно бороться
              с домашними заданиями.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <AboutCard value="14+" label="лет опыта" />
              <AboutCard value="1000+" label="учеников" />
              <AboutCard value="100%" label="практика" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}