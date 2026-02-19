"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "success" : "error");
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-slate/60 focus:outline-none focus:ring-2 focus:ring-sky-300 transition";

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">Contact Us</h1>
          <p className="text-slate mb-10">Have a question? Fill out the form below and we'll get back to you.</p>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-green-700 font-semibold text-lg">Message sent!</p>
              <p className="text-green-600 mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-sky-300 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-full transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
