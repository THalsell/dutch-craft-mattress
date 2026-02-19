import Link from "next/link";
import { contact } from "@/src/data/contact";

const navLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About Us" },
  { href: "/why-were-different", label: "Why We're Different" },
  { href: "/warranty-and-care", label: "Warranty & Care" },
  { href: "/find-a-retailer", label: "Find a Retailer" },
];

const companyLinks = [
  { href: "/partner-with-us", label: "Partner with Us" },
  { href: "/careers", label: "Careers" },
];

function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <LinkList title="Navigation" links={navLinks} />
        <LinkList title="Company" links={companyLinks} />
        <div>
          <h4 className="font-semibold mb-4">Shop Online</h4>
          <p className="text-sm text-white/70 mb-4">
            Browse our complete collection and order directly from our official online store.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-sky-300 hover:bg-navy-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Shop From Home
          </Link>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <Link href="/contact" className="block text-sm text-white/70 hover:text-white transition-colors mb-4">
            Send us a message
          </Link>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white/70 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Dutch Craft Mattress. All rights reserved.
      </div>
    </footer>
  );
}
