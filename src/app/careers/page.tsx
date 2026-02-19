import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Dutch Craft Mattress",
  description: "Join the Dutch Craft team. We have open positions in mattress assembly, foam cutting, sewing, truck loading, and Class A truck driving.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Searching for a New Job?</h1>
          <p className="text-slate text-lg">
            Look no further — our Dutch Craft manufacturers have many great opportunities for everybody.
          </p>
          <div className="mt-8 border-t-2 border-sky-300" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* Positions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Open Positions</h2>
            <p className="text-slate mb-4">
              Our factory offers positions in foam cutting, box building, mattress assembly, truck loading, and cover sewing. We are also seeking Class A truck drivers.
            </p>
          </div>

          {/* Applications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-charcoal mb-4">How to Apply</h2>
            <p className="text-slate mb-6">
              Fill out one of the applications below online.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <div className="flex-1 flex flex-col text-center">
                <Link
                  href="/careers/driver-application"
                  className="flex-1 flex flex-col items-center justify-center bg-sky-300 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-300/90 transition-colors"
                >
                  Driver Application
                  <span className="block text-sm text-white/70 mt-1">Class A Required</span>
                </Link>
                <a
                  href="/careers/driver-application.pdf"
                  target="_blank"
                  className="inline-block text-sm text-sky-300 hover:text-sky-300/80 mt-2 underline"
                >
                  Download printable version (PDF)
                </a>
              </div>
              <div className="flex-1 flex flex-col text-center">
                <Link
                  href="/careers/factory-application"
                  className="flex-1 flex flex-col items-center justify-center bg-sky-300 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-300/90 transition-colors"
                >
                  Factory Application
                  <span className="block text-sm text-white/70 mt-1">&nbsp;</span>
                </Link>
                <a
                  href="/careers/factory-application.pdf"
                  target="_blank"
                  className="inline-block text-sm text-sky-300 hover:text-sky-300/80 mt-2 underline"
                >
                  Download printable version (PDF)
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
