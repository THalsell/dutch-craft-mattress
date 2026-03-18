import type { DealerLocation } from "@/src/data/dealers";

export function formatTierLabel(tier: DealerLocation["tier"]): string {
  switch (tier) {
    case "signature":
      return "Dutch Craft Signature Gallery™";
    case "select":
      return "Select Dealer";
    case "authorized":
      return "Authorized Dealer";
  }
}
