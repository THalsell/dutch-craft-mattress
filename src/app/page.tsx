import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import TrustBadges from "@/src/components/TrustBadges";
import Features from "@/src/components/Features";
import BuiltSmarter from "@/src/components/BuiltSmarter";
import BrandStory from "@/src/components/BrandStory";
import FeaturedCollections from "@/src/components/FeaturedCollections";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import { contact } from "@/src/data/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Features />
      <BuiltSmarter />
      <BrandStory />
      <FeaturedCollections />
      <CTASection
        theme="charcoal"
        heading="Ready to Experience Better Sleep?"
        description="Browse our complete collection online and have your handcrafted mattress delivered directly to your door."
        buttons={[{ label: "Shop From Home", href: contact.shopUrl, external: true }]}
      />
      <CTASection
        theme="fog"
        heading="Find a Retailer Near You"
        description="Experience Dutch Craft Mattress quality in person at an authorized retailer."
        buttons={[{ label: "Find a Retailer", href: "/find-a-retailer" }]}
      />
      <Footer />
    </div>
  );
}
