/**
 * Strip non-digits and cap at 5 characters.
 */
export function normalizeZip(input: string): string {
  return input.trim().replace(/\D/g, "").slice(0, 5);
}

/**
 * Returns true for a 5-digit US ZIP code.
 */
export function isValidZip(zip: string): boolean {
  return /^\d{5}$/.test(zip);
}

/**
 * Resolves a ZIP code to lat/lng via the zippopotam.us public API.
 *
 * To switch to a paid nationwide geocoding service later, replace
 * this function body — the signature stays the same.
 */
export async function geocodeZip(
  zip: string,
): Promise<{ lat: number; lng: number } | null> {
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!res.ok) return null;
    const data = await res.json();
    const place = data.places?.[0];
    if (!place) return null;
    return {
      lat: parseFloat(place.latitude),
      lng: parseFloat(place.longitude),
    };
  } catch {
    return null;
  }
}
