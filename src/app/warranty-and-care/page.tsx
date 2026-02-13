import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import CTASection from "@/src/components/CTASection";
import WarrantyTable from "@/src/components/WarrantyTable";
import WarrantyTerms from "@/src/components/WarrantyTerms";
import MattressCare from "@/src/components/MattressCare";

export const metadata: Metadata = {
  title: "Warranty & Care | Dutch Craft Mattress",
  description: "Learn about Dutch Craft Mattress warranty coverage and care instructions to keep your handcrafted mattress in top condition.",
};

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

      <CTASection
        theme="fog"
        heading="Have Questions?"
        description="Contact your authorized Dutch Craft retailer or reach out to us directly for warranty inquiries or care questions."
        buttons={[
          { label: "Find a Retailer", href: "/find-a-retailer" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
      />

      <Footer />
    </div>
  );
}
