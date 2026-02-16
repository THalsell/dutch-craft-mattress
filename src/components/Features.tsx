import Image from 'next/image';
import Link from 'next/link';

const panels = [
  {
    title: 'Foam Cut In-House',
    body: 'We control every foam cut to ensure consistency, durability, and comfort — no outsourcing, no shortcuts.',
    image: '/foam-cut-in-house.png',
    cta: { label: 'How we build', href: '/why-were-different' },
  },
  {
    title: 'Sewn in Our Own Facility',
    body: 'Every cover is stitched in-house for precise fit and long-term durability.',
    image: '/sewn-in-factory.png',
    cta: { label: 'Our process', href: '/why-were-different' },
  },
  {
    title: 'Two-Sided Construction',
    body: 'Designed to be flipped and used longer — not replaced sooner.',
    image: '/collections/nightfall/nightfall-allure.png',
    cta: { label: 'Learn more', href: '/why-were-different' },
  },
  {
    title: 'Built for Longevity',
    body: 'Backed by warranties up to 20 years because quality should last.',
    image: '/longevity.png',
    cta: { label: 'Our warranty', href: '/warranty-and-care' },
    contain: true,
  },
];

export default function Features() {
  return (
    <section className="flex flex-col gap-px bg-white">
      {/* Full-width quote banner */}
      <div className="bg-charcoal px-6 py-10 md:py-14">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-3">
            From the Beginning
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Traditionally Built Better
          </h3>
          <p className="text-white/75 text-sm md:text-base leading-relaxed italic mb-6">
            &ldquo;We started Dutch Craft with one goal: build mattresses the way
            they used to be built — with real materials, honest construction,
            and a commitment to lasting comfort. Every mattress leaves our
            factory with the same care we&rsquo;d put into one for our
            own family.&rdquo;
          </p>
          <Link
            href="/about"
            className="border border-white bg-white/10 text-white text-sm px-6 py-2.5 rounded hover:bg-white/20 transition-colors"
          >
            Our story
          </Link>
        </div>
      </div>

      {/* Top row — 2 panels side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white">
        {panels.slice(0, 2).map((panel) => (
          <div key={panel.title} className="relative min-h-[260px] md:min-h-[300px] lg:min-h-[340px] bg-charcoal">
            <Image
              src={panel.image}
              alt={panel.title}
              fill
              className={panel.contain ? "object-contain" : "object-cover"}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/60 to-[#1a1a1a]/40" />
            <div className="relative z-10 flex flex-col items-center text-center h-full p-8 md:p-10 lg:p-12 pt-10 md:pt-12 lg:pt-14">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {panel.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
                  {panel.body}
                </p>
              </div>
              <Link
                href={panel.cta.href}
                className="inline-block mt-auto border border-white bg-black/30 text-white text-sm px-5 py-2 rounded hover:bg-black/50 transition-colors"
              >
                {panel.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row — 2 panels side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white">
        {panels.slice(2, 4).map((panel) => (
          <div key={panel.title} className="relative min-h-[260px] md:min-h-[300px] lg:min-h-[340px] bg-charcoal">
            <Image
              src={panel.image}
              alt={panel.title}
              fill
              className={panel.contain ? "object-contain" : "object-cover"}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/60 to-[#1a1a1a]/40" />
            <div className="relative z-10 flex flex-col items-center text-center h-full p-8 md:p-10 lg:p-12 pt-10 md:pt-12 lg:pt-14">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {panel.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
                  {panel.body}
                </p>
              </div>
              <Link
                href={panel.cta.href}
                className="inline-block mt-auto border border-white bg-black/30 text-white text-sm px-5 py-2 rounded hover:bg-black/50 transition-colors"
              >
                {panel.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
