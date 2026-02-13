"use client";

import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { contact } from "@/src/data/contact";
import { sectionClass, sectionTitle } from "@/src/lib/form-styles";

interface ApplicationShellProps {
  title: string;
  pdfHref: string;
  firstName: string;
  status: "idle" | "sending" | "sent" | "error";
  certified: boolean;
  setCertified: (v: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

export default function ApplicationShell({
  title,
  pdfHref,
  firstName,
  status,
  certified,
  setCertified,
  onSubmit,
  children,
}: ApplicationShellProps) {
  if (status === "sent") {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-charcoal mb-4">Application Submitted!</h1>
            <p className="text-slate mb-6">
              Thank you for applying, {firstName}. Your application has been sent to our HR team and we will be in touch.
            </p>
            <Link href="/careers" className="inline-block bg-sky-300 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-300/90 transition-colors">
              Back to Careers
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-sky-300 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/80 text-lg">
            Fill out the form below to apply. You can also{" "}
            <a href={pdfHref} target="_blank" className="underline text-white hover:text-white/80">
              download a printable version
            </a>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {status === "error" && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-700">Something went wrong. Please try again or email your application to {contact.applicationsEmail}.</p>
            </div>
          )}

          <form onSubmit={onSubmit}>
            {children}

            {/* Disclaimer */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Disclaimer &amp; Signature</h2>
              <p className="text-slate text-sm mb-4">
                I certify that my answers are true and complete to the best of my knowledge. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release.
              </p>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={certified}
                  onChange={(e) => setCertified(e.target.checked)}
                  className="mt-1 accent-sky-300 w-4 h-4"
                  required
                />
                <span className="text-sm text-charcoal">I certify the above information is true and complete. *</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-sky-300 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-300/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-xs text-slate text-center mt-4">
              You can also{" "}
              <a href={pdfHref} target="_blank" className="text-sky-300 hover:text-sky-300/80 underline">
                download the printable PDF
              </a>{" "}
              and email it to {contact.applicationsEmail}.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
