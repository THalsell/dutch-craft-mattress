import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory Application | Dutch Craft Mattress",
  description: "Apply for a factory position at Dutch Craft Mattress. Positions include foam cutting, box building, mattress assembly, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
