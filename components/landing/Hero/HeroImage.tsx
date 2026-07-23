import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center">
      <div className="relative h-[550px] w-[430px] overflow-hidden rounded-[40px] shadow-2xl">
        <Image
          src="/images/anastasia.webp"
          alt="Анастасия Валерьевна"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}