"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import DealerCard from "@/src/components/DealerCard";
import { searchDealers, type DealerResult } from "@/src/lib/dealers/search";

export default function FindRetailerPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<DealerResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const outcome = await searchDealers(search);
    setLoading(false);

    if (outcome.status === "invalid_zip") {
      setError("Please enter a valid 5-digit zip code.");
      setResults(null);
      return;
    }

    if (outcome.status === "not_found") {
      setError("Could not find that zip code. Please try again.");
      setResults(null);
      return;
    }

    setResults(outcome.results);
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Find a Retailer
          </h1>
          <p className="text-slate text-lg">
            Enter your zip code to find authorized Dutch Craft dealers within 50
            miles.
          </p>
          <div className="mt-8 border-t-2 border-sky-300" />
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your zip code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              maxLength={5}
              className="flex-1 border border-border rounded-full px-6 py-4 text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-sky-300 text-white font-semibold px-8 py-4 rounded-full hover:bg-navy-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {results === null && !error && (
            <p className="text-center text-slate py-8">
              Enter your zip code above to find dealers near you.
            </p>
          )}

          {results !== null && results.length === 0 && (
            <p className="text-center text-slate py-12">
              No retailers found within 50 miles. Please try a different zip
              code or{" "}
              <a
                href="/contact"
                className="text-sky-300 hover:text-navy-700 transition-colors"
              >
                contact us
              </a>{" "}
              for help finding a dealer near you.
            </p>
          )}

          {results !== null && results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((r) => (
                <DealerCard
                  key={`${r.dealer.dealerName}-${r.dealer.locationName ?? r.dealer.zip}`}
                  dealer={r.dealer}
                  distance={r.distance}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
