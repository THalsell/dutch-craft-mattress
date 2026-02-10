import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="about" className="relative min-h-100 flex items-center">
      <Image
        src="/DC.png"
        alt="Dutch Craft Mattress craftsmanship"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Experience Unmatched Comfort
        </h2>
        <p className="text-white/85 leading-relaxed text-lg">
          At Dutch Craft Mattress, every mattress is handcrafted with care using superior materials and
          time-tested construction methods. Our commitment to traditional craftsmanship means no shortcuts
          and no compromises — delivering real value you can trust.
        </p>
      </div>
    </section>
  );
}
