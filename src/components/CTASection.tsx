import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

interface CTASectionProps {
  heading: string;
  description: string;
  buttons: CTAButton[];
  theme?: "sage" | "charcoal" | "fog";
}

const externalIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const themeConfig = {
  sage: {
    section: "py-16 md:py-20 bg-sage text-white",
    heading: "text-3xl font-bold mb-4",
    description: "text-white/80 mb-8",
    primary: "inline-block bg-white hover:bg-fog text-sage font-semibold px-8 py-4 rounded-full transition-colors",
    outline: "inline-block border-2 border-white text-white hover:bg-white hover:text-sage font-semibold px-6 py-3 rounded-full transition-colors",
  },
  charcoal: {
    section: "py-16 md:py-20 bg-charcoal text-white",
    heading: "text-3xl md:text-4xl font-bold mb-4",
    description: "text-white/80 mb-8 text-lg",
    primary: "inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg",
    outline: "inline-block border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-6 py-3 rounded-full transition-colors",
  },
  fog: {
    section: "py-16 md:py-20 bg-fog",
    heading: "text-2xl font-bold text-charcoal mb-4",
    description: "text-slate mb-8",
    primary: "inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-6 py-3 rounded-full transition-colors",
    outline: "inline-block border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-full transition-colors",
  },
} as const;

export default function CTASection({ heading, description, buttons, theme = "fog" }: CTASectionProps) {
  const t = themeConfig[theme];

  return (
    <section className={t.section}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className={t.heading}>{heading}</h2>
        <p className={t.description}>{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((btn) =>
            btn.external ? (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.variant === "outline" ? t.outline : t.primary}
              >
                {btn.label}
                {externalIcon}
              </a>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                className={btn.variant === "outline" ? t.outline : t.primary}
              >
                {btn.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
