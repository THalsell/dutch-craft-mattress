import { dealers, type DealerLocation } from "@/src/data/dealers";
import { haversineDistance } from "./geo";
import { normalizeZip, isValidZip, geocodeZip } from "./zip";

export type DealerResult = {
  dealer: DealerLocation;
  distance: number;
};

export type SearchOutcome =
  | { status: "invalid_zip" }
  | { status: "not_found" }
  | { status: "success"; results: DealerResult[] };

export async function searchDealers(
  rawZip: string,
  radiusMiles = 50,
): Promise<SearchOutcome> {
  const zip = normalizeZip(rawZip);

  if (!isValidZip(zip)) {
    return { status: "invalid_zip" };
  }

  const coords = await geocodeZip(zip);
  if (!coords) {
    return { status: "not_found" };
  }

  const results = dealers
    .map((dealer) => ({
      dealer,
      distance: haversineDistance(
        coords.lat,
        coords.lng,
        dealer.latitude,
        dealer.longitude,
      ),
    }))
    .filter((r) => r.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance);

  return { status: "success", results };
}
