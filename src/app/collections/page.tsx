import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import CollectionsGrid from "@/src/components/CollectionsGrid";

export const metadata: Metadata = {
  title: "Collections | Dutch Craft Mattress",
  description: "Explore our full range of handcrafted mattress collections — from plush comfort to firm support, built with premium materials.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CollectionsGrid />
      <Footer />
    </div>
  );
}
