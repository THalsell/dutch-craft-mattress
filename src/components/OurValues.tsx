export default function OurValues() {
  return (
    <section className="py-16 md:py-20 bg-fog">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Our Values</h2>
        <p className="text-slate text-center max-w-2xl mx-auto mb-12">
          The Dutch Craft family and its President, Eli Schmucker, are committed to handcrafting the
          highest quality mattresses at an honest price. That&apos;s the Dutch Craft Promise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">Handcrafted Quality</h3>
            <p className="text-slate text-sm">
              Every mattress is handcrafted to the highest standard using the finest materials available.
              No shortcuts, no compromises.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">Commitment</h3>
            <p className="text-slate text-sm">
              Committed to delivering honest quality and value in every product we make.
              Your satisfaction is our priority.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">Integrity</h3>
            <p className="text-slate text-sm">
              No inferior foams or fiber. Just the highest quality mattress available,
              handcrafted with integrity for you and your family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
