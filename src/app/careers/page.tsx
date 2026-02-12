import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-sage py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Searching for a New Job?</h1>
          <p className="text-white/80 text-lg">
            Look no further — our Dutch Craft manufacturers have many great opportunities for everybody.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

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
              Fill out one of the applications below online, or download a printable version and email it to{" "}
              <a href="mailto:alicia@dutchcraftmattress.com" className="text-sage font-medium hover:text-sage/80 transition-colors">
                alicia@dutchcraftmattress.com
              </a>.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-charcoal font-medium">You can also mail or drop off your application:</p>
              <p className="text-slate mt-2">Dutch Craft</p>
              <p className="text-slate">1012 Mitchell St</p>
              <p className="text-slate">Celina, TN 38551</p>
              <p className="text-slate mt-3">
                Applications are also available for in-person pickup Monday–Friday, 8:00 AM to 5:00 PM.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 text-center">
                <a
                  href="/careers/driver-application"
                  className="block bg-sage text-white py-3 px-6 rounded-lg font-medium hover:bg-sage/90 transition-colors"
                >
                  Driver Application
                  <span className="block text-sm text-white/70 mt-1">Class A Required</span>
                </a>
                <a
                  href="/careers/driver-application.pdf"
                  target="_blank"
                  className="inline-block text-sm text-sage hover:text-sage/80 mt-2 underline"
                >
                  Download printable version (PDF)
                </a>
              </div>
              <div className="flex-1 text-center">
                <a
                  href="/careers/factory-application"
                  className="block bg-sage text-white py-3 px-6 rounded-lg font-medium hover:bg-sage/90 transition-colors"
                >
                  Factory Application
                </a>
                <a
                  href="/careers/factory-application.pdf"
                  target="_blank"
                  className="inline-block text-sm text-sage hover:text-sage/80 mt-2 underline"
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
