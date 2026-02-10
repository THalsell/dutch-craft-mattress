import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import BuiltSmarter from "@/src/components/BuiltSmarter";
import BrandStory from "@/src/components/BrandStory";
import ShopFromHomeCTA from "@/src/components/ShopFromHomeCTA";
import RetailerCTA from "@/src/components/RetailerCTA";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BuiltSmarter />
      <BrandStory />
      <ShopFromHomeCTA />
      <RetailerCTA />
      <Footer />
    </div>
  );
}
