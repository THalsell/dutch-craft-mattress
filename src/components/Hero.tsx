import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-sky-300">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
        {/* Text side */}
        <div className="flex flex-col justify-center px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Traditionally Built Better
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Quality materials and expert craftsmanship for your best night&apos;s sleep.
          </p>
          <Link
            href="/collections"
            className="inline-block self-start bg-white text-sky-300 font-semibold px-6 py-3 rounded-full hover:bg-fog transition-colors text-sm"
          >
            View Collections
          </Link>
        </div>
        {/* Image grid side */}
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="relative h-75">
            <Image src="/home1.jpg" alt="Dutch Craft Mattress" fill className="object-cover" priority />
          </div>
          <div className="relative h-75">
            <Image src="/kid.png" alt="Child sleeping comfortably" fill className="object-cover" />
          </div>
          <div className="relative h-75">
            <Image src="/couple.png" alt="Couple sleeping comfortably" fill className="object-cover" />
          </div>
          <div className="relative h-75">
            <Image src="/teen.png" alt="Teen sleeping comfortably" fill className="object-cover" />
          </div>
          <div className="relative h-75">
            <Image src="/lifestyle.png" alt="Lifestyle" fill className="object-cover" />
          </div>
          <div className="relative h-75">
            <Image src="/home.jpg" alt="Bed" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
