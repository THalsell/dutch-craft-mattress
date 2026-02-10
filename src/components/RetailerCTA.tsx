export default function RetailerCTA() {
  return (
    <section id="retailer" className="bg-fog py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-4">Find a Retailer Near You</h2>
        <p className="text-slate mb-8">Experience Dutch Craft Mattress quality in person at an authorized retailer.</p>
        <a
          href="/find-a-retailer"
          className="inline-block bg-sage hover:bg-sage-dark text-white font-medium px-8 py-3 rounded transition-colors"
        >
          Find a Retailer
        </a>
      </div>
    </section>
  );
}
