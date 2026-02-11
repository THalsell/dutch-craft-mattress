import Image from "next/image";

const reviews = [
  {
    name: "Kathleen Carmical",
    text: "My husband is in the mattress business and in our five year marriage, we have gone through 4 mattresses! He finally brought home a Dutch Craft foam mattress and I am finally sleeping well. It has been two months now and I still like it — unlike my pillow tops from major brands that made indentations within a month.",
  },
  {
    name: "Mattress Warehouse",
    text: "I've sold Dutchcraft mattresses for many years along with big brands such as Serta, Simmons, Therapedic etc. My customers and I could not be happier with the quality craftsmanship and service we receive from Dutchcraft. Highly recommend.",
  },
  {
    name: "Jason Smith",
    text: "These people make an amazing product.",
  },
  {
    name: "David Hershberger",
    text: "We have used Dutch Craft products for many years. Never had any issues. Keep up the great work!",
  },
  {
    name: "William Cherry",
    text: "Nicely put together. Quality mattresses!",
  },
  {
    name: "Kendra Tabor",
    text: "We purchased 5 queen mattresses for our new home. COULD NOT be happier. Different models, and very pleased with each one. Mattress covers and pillows are excellent as well. HIGHLY recommend Dutch Craft.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function BrandStory() {
  return (
    <section id="about" className="relative min-h-100 flex items-center">
      <Image
        src="/DC.png"
        alt="Dutch Craft Mattress craftsmanship"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          What Our Customers Say
        </h2>
        <p className="text-white/70 text-center mb-10 text-sm">Reviews from Google and Facebook</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Stars />
              <p className="text-white/85 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <p className="text-white font-medium text-sm">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
