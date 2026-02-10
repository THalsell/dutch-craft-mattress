import Image from 'next/image';

const features = [
  {
    title: "No National Advertising",
    description: "We invest in materials and craftsmanship—not marketing campaigns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="#003a63" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "No Corporate Overhead",
    description: "Factory-attached offices keep costs low and quality high.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="#003a63" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Family Owned & Operated",
    description: "No investors or boards—just family values and accountability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="#003a63" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Handcrafted Quality",
    description: "Built with care, precision, and materials chosen to last.",
    icon: <Image src="/icons/hand-crafted.png" alt="Handcrafted" width={144} height={144} className="w-36 h-36 object-contain" style={{ filter: "brightness(0) saturate(100%) invert(15%) sepia(60%) saturate(1200%) hue-rotate(180deg) brightness(70%) contrast(100%)" }} />,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">
          Why Dutch Craft?
        </h2>
        <p className="text-charcoal text-center max-w-2xl mx-auto mb-12">
          The finest quality bedding at the best value. Our savings come from efficiency, not shortcuts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center p-8 overflow-visible">
              <div className="mb-4 w-36 min-h-36 flex items-center justify-center shrink-0">{f.icon}</div>
              <div className="relative p-6 overflow-visible">
                <Image src="/brush-strokes.png" alt="" fill className="object-fill top-4" />
                <h3 className="text-lg font-semibold text-charcoal mb-2 relative z-10">{f.title}</h3>
                <p className="text-charcoal text-sm relative z-10">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
