"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function PartnerWithUsPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Partner With Us Inquiry");
    const body = encodeURIComponent(
      `Partner With Us Inquiry\n\n` +
      `Name: ${form.name}\n` +
      `Company: ${form.company}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Location: ${form.location}\n\n` +
      `Message:\n${form.message}`
    );
    window.location.href = `mailto:eli@twlakes.net?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-sage py-16">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
                placeholder="Tell us about your business and why you'd like to partner with Dutch Craft..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sage text-white py-3 px-6 rounded-lg font-medium hover:bg-sage/90 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
