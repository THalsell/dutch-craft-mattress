import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import WarrantyTable from "@/src/components/WarrantyTable";
import WarrantyTerms from "@/src/components/WarrantyTerms";
import MattressCare from "@/src/components/MattressCare";

export default function WarrantyAndCarePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-fog py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Warranty & Care
          </h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            We stand behind every mattress we make. Learn about our warranty coverage
            and how to keep your mattress in top condition.
          </p>
        </div>
      </section>

      <WarrantyTable />
      <WarrantyTerms />
      <MattressCare />

      {/* Contact for Questions */}
      <section className="py-16 md:py-20 bg-fog">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Have Questions?</h2>
          <p className="text-slate mb-8">
            Contact your authorized Dutch Craft retailer or reach out to us directly for
            warranty inquiries or care questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/find-a-retailer"
              className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Find a Retailer
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
