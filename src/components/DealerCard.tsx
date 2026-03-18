import type { DealerLocation } from "@/src/data/dealers";
import { formatTierLabel } from "@/src/lib/dealers/utils";

type Props = {
  dealer: DealerLocation;
  distance: number;
};

const tierBadgeStyles: Record<DealerLocation["tier"], string> = {
  signature: "bg-navy-700 text-white",
  select: "bg-fog text-slate border border-border",
  authorized: "text-muted border border-border",
};

function buildDirectionsUrl(dealer: DealerLocation): string {
  const destination = `${dealer.dealerName} ${dealer.address1}, ${dealer.city}, ${dealer.state} ${dealer.zip}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export default function DealerCard({ dealer, distance }: Props) {
  const directionsUrl = buildDirectionsUrl(dealer);

  return (
    <div className="border border-border rounded-lg p-6 bg-white">
      {/* Header row: name + distance */}
      <div className="flex justify-between items-start gap-4 mb-2">
        <div>
          <h3 className="text-lg font-semibold text-charcoal leading-snug">
            {dealer.dealerName}
          </h3>
          {dealer.locationName && (
            <p className="text-sm text-slate mt-0.5">{dealer.locationName}</p>
          )}
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mt-2 ${tierBadgeStyles[dealer.tier]}`}
          >
            {formatTierLabel(dealer.tier)}
          </span>
        </div>
        <span className="text-sm text-muted whitespace-nowrap pt-1">
          {distance.toFixed(1)} mi
        </span>
      </div>

      {/* Address */}
      <p className="text-slate text-sm mt-3">
        {dealer.address1}
        <br />
        {dealer.city}, {dealer.state} {dealer.zip}
      </p>

      {/* Phone */}
      {dealer.phone && (
        <a
          href={`tel:${dealer.phone}`}
          className="text-sky-300 hover:text-navy-700 text-sm font-medium mt-2 inline-block transition-colors"
        >
          {dealer.phone}
        </a>
      )}

      {/* Action links */}
      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-charcoal border border-charcoal px-4 py-1.5 rounded-full hover:bg-charcoal hover:text-white transition-colors"
        >
          Get Directions
        </a>
        {dealer.website && (
          <a
            href={dealer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-sky-300 border border-sky-300 px-4 py-1.5 rounded-full hover:bg-sky-300 hover:text-white transition-colors"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}
