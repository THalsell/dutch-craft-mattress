import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver Application | Dutch Craft Mattress",
  description: "Apply for a Class A truck driver position at Dutch Craft Mattress. Fill out the online application or download a printable PDF.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
