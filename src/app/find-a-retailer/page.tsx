"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { dealers, Dealer } from "@/src/data/dealers";

function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8; // Earth radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Simple US zip code to approximate lat/lng lookup using the zip code API
async function geocodeZip(zip: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!res.ok) return null;
    const data = await res.json();
    const place = data.places?.[0];
    if (!place) return null;
    return { lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) };
  } catch {
    return null;
  }
}

interface Result {
  dealer: Dealer;
  distance: number;
}

export default function FindRetailerPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const zip = search.trim();
    if (!/^\d{5}$/.test(zip)) {
      setError("Please enter a valid 5-digit zip code.");
      setResults(null);
      return;
    }

    setLoading(true);
    setError("");
    const coords = await geocodeZip(zip);
    setLoading(false);

    if (!coords) {
      setError("Could not find that zip code. Please try again.");
      setResults(null);
      return;
    }

    const nearby = dealers
      .map((dealer) => ({
        dealer,
        distance: haversineDistance(coords.lat, coords.lng, dealer.lat, dealer.lng),
      }))
      .filter((r) => r.distance <= 50)
      .sort((a, b) => a.distance - b.distance);

    setResults(nearby);
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-sky-300 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find a Retailer</h1>
          <p className="text-white/80 text-lg">
            Enter your zip code to find authorized Dutch Craft dealers within 50 miles.
          </p>
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
          {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
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
              No retailers found within 50 miles. Please try a different zip code or contact us for help finding a dealer near you.
            </p>
          )}
          {results !== null && results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((r) => (
                <div key={r.dealer.name} className="border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-charcoal">{r.dealer.name}</h3>
                    <span className="text-sm text-muted whitespace-nowrap ml-4">
                      {r.distance.toFixed(1)} mi
                    </span>
                  </div>
                  <p className="text-slate text-sm">
                    {[r.dealer.address, r.dealer.city, r.dealer.state, r.dealer.zip].filter(Boolean).join(", ")}
                  </p>
                  {r.dealer.phone && (
                    <a href={`tel:${r.dealer.phone}`} className="text-sky-300 hover:text-navy-700 text-sm font-medium mt-2 inline-block">
                      {r.dealer.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
