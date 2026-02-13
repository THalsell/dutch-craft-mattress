import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Retailer | Dutch Craft Mattress",
  description: "Find an authorized Dutch Craft Mattress retailer near you. Enter your zip code to locate dealers within 50 miles.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
