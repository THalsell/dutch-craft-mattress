import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    chip: 'In-House',
    title: 'Foam Cut In-House',
    body: 'We control every foam cut to ensure consistency, durability, and comfort — no outsourcing, no shortcuts.',
    image: '/foam-cut-in-house.png',
  },
  {
    chip: 'Craftsmanship',
    title: 'Sewn in Our Own Facility',
    body: 'Every cover is stitched in-house for precise fit and long-term durability.',
    image: '/sewn-in-factory.png',
  },
  {
    chip: 'Design',
    title: 'Two-Sided Construction',
    body: 'Designed to be flipped and used longer — not replaced sooner.',
    image: '/2-sided-flippable.png',
  },
  {
    chip: 'Durability',
    title: 'Built for Longevity',
    body: 'Backed by warranties up to 15 years because quality should last.',
    image: '/built-for-longevity.png',
  },
];

export default function Features() {
  return (
    <section className="relative bg-fog">
      {/* Accent top border */}
      <div className="h-1 bg-sky-300" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-charcoal mb-4">
            Built Differently
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate max-w-2xl mx-auto">
            Every mattress is made start-to-finish in our own facility — cut, sewn, and assembled by hand.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-border overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-5"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-5 pt-0 flex flex-col flex-1">
                <span className="inline-block self-start text-xs font-semibold uppercase tracking-wide text-sky-800 bg-sky-300/20 px-2.5 py-1 rounded-full mb-3">
                  {item.chip}
                </span>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote callout */}
        <div className="mt-14 md:mt-20 bg-white rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="border-l-4 border-sky-300 px-8 md:px-12 py-10 md:py-14">
            {/* Quote icon */}
            <svg
              className="w-10 h-10 text-sky-300/40 mb-4 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-charcoal mb-4">
                Traditionally Built Better
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-slate italic">
                &ldquo;From our humble beginnings many years ago, we made a commitment
                to handcraft the finest mattress available using only the highest
                quality materials to ensure comfort and longevity.
                Traditionally Built Better.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/why-were-different"
            className="bg-sky-300 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-400 transition-colors"
          >
            Why We&rsquo;re Different
          </Link>
          <Link
            href="/find-a-retailer"
            className="border border-charcoal text-charcoal font-semibold px-8 py-3 rounded-lg hover:bg-charcoal hover:text-white transition-colors"
          >
            Find a Retailer
          </Link>
        </div>
      </div>
    </section>
  );
}
