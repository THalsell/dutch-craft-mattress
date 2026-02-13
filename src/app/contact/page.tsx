import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { contact } from "@/src/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | Dutch Craft Mattress",
  description: "Get in touch with Dutch Craft Mattress. Call us, visit our factory in Celina, TN, or reach out for inquiries and support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-sky-300 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg">
            We&apos;d love to hear from you. Reach out to our team for inquiries, support, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Phone */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-2">Phone</h3>
              <a href={`tel:${contact.phoneTel}`} className="text-sky-300 hover:text-sky-300/80 font-medium">{contact.phone}</a>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-2">Address</h3>
              <p className="text-slate">{contact.address.street}</p>
              <p className="text-slate">{contact.address.city}, {contact.address.state} {contact.address.zip}</p>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-2">Hours</h3>
              <p className="text-slate">Monday - Friday</p>
              <p className="text-slate">9:00 AM - 5:00 PM</p>
              <p className="text-slate mt-1">Closed Saturday & Sunday</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
