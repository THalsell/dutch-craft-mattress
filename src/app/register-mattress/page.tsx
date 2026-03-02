"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function RegisterMattressPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    purchaseDate: "",
    mattressModel: "",
    mattressSize: "",
    whyBought: "",
    dealershipName: "",
    dealershipCity: "",
    dealershipState: "",
    withFoundation: "",
    dealershipFeedback: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "success" : "error");
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-slate/60 focus:outline-none focus:ring-2 focus:ring-sky-300 transition";

  const req = <span className="text-red-500">*</span>;

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Register Your Mattress
          </h1>
          <p className="text-slate mb-2">
            Register your Dutch Craft mattress to activate your warranty.
          </p>
          <p className="text-xs text-slate/70 mb-10">Fields marked with * are required.</p>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-green-700 font-semibold text-lg">Registration submitted!</p>
              <p className="text-green-600 mt-1">
                Your mattress warranty has been registered. We&apos;ll be in touch at {form.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Full Name {req}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Address {req}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street address, city, state, ZIP"
                  className={inputClass}
                  value={form.address}
                  onChange={(e) => set("address", e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Email Address {req}
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>

              {/* Date of Purchase */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Date of Purchase {req}
                </label>
                <input
                  type="date"
                  required
                  className={inputClass}
                  value={form.purchaseDate}
                  onChange={(e) => set("purchaseDate", e.target.value)}
                />
              </div>

              {/* Mattress Model + Size */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Mattress Name {req}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Posture Perfect"
                  className={inputClass}
                  value={form.mattressModel}
                  onChange={(e) => set("mattressModel", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Mattress Size {req}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Queen"
                  className={inputClass}
                  value={form.mattressSize}
                  onChange={(e) => set("mattressSize", e.target.value)}
                />
              </div>

              {/* Why did you buy this mattress */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Why did you buy this mattress? {req}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what led you to choose Dutch Craft…"
                  className={inputClass}
                  value={form.whyBought}
                  onChange={(e) => set("whyBought", e.target.value)}
                />
              </div>

              {/* Where purchased */}
              <fieldset className="flex flex-col gap-3">
                <legend className="text-sm font-medium text-charcoal mb-1">
                  Where was this mattress purchased? {req}
                </legend>
                <input
                  type="text"
                  required
                  placeholder="Dealership name"
                  className={inputClass}
                  value={form.dealershipName}
                  onChange={(e) => set("dealershipName", e.target.value)}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="City"
                    className={inputClass}
                    value={form.dealershipCity}
                    onChange={(e) => set("dealershipCity", e.target.value)}
                  />
                  <input
                    type="text"
                    required
                    placeholder="State"
                    className={inputClass}
                    value={form.dealershipState}
                    onChange={(e) => set("dealershipState", e.target.value)}
                  />
                </div>
              </fieldset>

              {/* Purchased with matching foundation */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Was this mattress purchased with a matching foundation? {req}
                </label>
                <div className="flex gap-6">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer text-charcoal">
                      <input
                        type="radio"
                        name="withFoundation"
                        required
                        value={opt}
                        checked={form.withFoundation === opt}
                        onChange={(e) => set("withFoundation", e.target.value)}
                        className="accent-sky-300 w-4 h-4"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Dealership feedback (optional) */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Dealership Feedback{" "}
                  <span className="text-slate/60 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="How was your experience at the dealership?"
                  className={inputClass}
                  value={form.dealershipFeedback}
                  onChange={(e) => set("dealershipFeedback", e.target.value)}
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-sky-300 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-full transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Submitting…" : "Register Mattress"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
