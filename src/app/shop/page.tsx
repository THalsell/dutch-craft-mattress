import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { contact } from "@/src/data/contact";

export const metadata: Metadata = {
  title: "Shop From Home | Dutch Craft Mattress",
  description: "Our online store is coming soon. Shop Dutch Craft Mattress handcrafted mattresses from the comfort of your home.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-sky-300 font-semibold uppercase tracking-widest text-sm mb-4">Online Store</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Coming Soon</h1>
          <p className="text-slate text-lg leading-relaxed mb-10">
            Our online shop at{" "}
            <a
              href={contact.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:underline"
            >
              shopdutchcraft.com
            </a>{" "}
            is on its way. Check back soon to browse and order our handcrafted mattresses from the comfort of your home.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
