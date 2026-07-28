import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="bg-pink-600 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold">
            Запишитесь на интенсив
          </h2>

          <p className="mt-6 text-lg text-pink-100">
            Оставьте контакты, и мы свяжемся с вами.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  );
}