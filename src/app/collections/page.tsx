import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import CollectionsGrid from "@/src/components/CollectionsGrid";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CollectionsGrid />
      <Footer />
    </div>
  );
}
