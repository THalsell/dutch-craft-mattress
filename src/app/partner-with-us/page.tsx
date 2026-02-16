"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { contact } from "@/src/data/contact";
import { row, table, section, wrapEmailHtml } from "@/src/lib/email-builder";

export default function PartnerWithUsPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const body = table(
      row("Name", form.name) +
      row("Company", form.company) +
      row("Email", form.email) +
      row("Phone", form.phone) +
      row("Location", form.location)
    ) + (form.message ? section("Message", `<p style="font-size:14px;color:#222;white-space:pre-wrap">${form.message}</p>`) : "");

    const html = wrapEmailHtml("Partner With Us Inquiry", body);

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-charcoal mb-4">Inquiry Submitted!</h1>
            <p className="text-slate mb-6">
              Thank you, {form.name}. Our team will review your inquiry and be in touch soon.
            </p>
            <Link href="/" className="inline-block bg-sky-300 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-300/90 transition-colors">
              Back to Home
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

      {/* Hero */}
      <section className="bg-sky-300 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partner With Us</h1>
          <p className="text-white/80 text-lg">
            Interested in carrying Dutch Craft mattresses? Fill out the form below and our team will be in touch.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">

          {status === "error" && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-700">Something went wrong. Please try again or email us directly at {contact.ownerEmail}.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-1">Store Location / City, State</label>
              <input
                type="text"
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Tell us about your business and why you'd like to partner with Dutch Craft..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-sky-300 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-300/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
