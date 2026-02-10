const navLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About Us" },
  { href: "/why-were-different", label: "Why We're Different" },
  { href: "/warranty-and-care", label: "Warranty & Care" },
  { href: "/find-a-retailer", label: "Find a Retailer" },
];

const companyLinks = [
  { href: "/partner-with-us", label: "Partner with Us" },
  { href: "/partner-with-us#careers", label: "Careers" },
  { href: "/partner-with-us#dealer", label: "Become a Dealer" },
];

function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
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
          <a
            href="/shop-from-home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Shop From Home
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-xs text-white/50 mt-2">Opens in a new tab</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm text-white/70 mb-4">
            Get in touch with our team for inquiries, support, or partnership opportunities.
          </p>
          <p className="text-sm text-white/70">
            <span className="block">Dutch Craft Sleep Products</span>
            <span className="block">Tennessee, USA</span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Dutch Craft Mattress. All rights reserved.
      </div>
    </footer>
  );
}
