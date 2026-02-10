const warranties = [
  { name: "Warranty A", duration: "1 Year", type: "Non-Prorated" },
  { name: "Warranty B", duration: "3 Years", type: "Non-Prorated" },
  { name: "Warranty C", duration: "5 Years", type: "Non-Prorated" },
  { name: "Warranty D", duration: "8 Years", type: "Non-Prorated" },
  { name: "Warranty E", duration: "10 Years", type: "Non-Prorated" },
  { name: "Warranty F", duration: "12 Years", type: "Non-Prorated" },
  { name: "Warranty G", duration: "15 Years", type: "Non-Prorated" },
  { name: "Warranty H", duration: "20 Years", type: "Non-Prorated" },
];

export default function WarrantyTable() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Warranty Overview</h2>
        <p className="text-slate text-center mb-8 max-w-2xl mx-auto">
          All Dutch Craft warranties are non-prorated, meaning you get full coverage for
          the entire warranty period.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-fog">
                <th className="text-left py-4 px-6 font-semibold text-charcoal border-b border-border">Warranty</th>
                <th className="text-left py-4 px-6 font-semibold text-charcoal border-b border-border">Duration</th>
                <th className="text-left py-4 px-6 font-semibold text-charcoal border-b border-border">Type</th>
              </tr>
            </thead>
            <tbody>
              {warranties.map((warranty, index) => (
                <tr key={warranty.name} className={index % 2 === 0 ? "bg-white" : "bg-fog/50"}>
                  <td className="py-4 px-6 text-charcoal border-b border-border">{warranty.name}</td>
                  <td className="py-4 px-6 text-slate border-b border-border">{warranty.duration}</td>
                  <td className="py-4 px-6 border-b border-border">
                    <span className="inline-block bg-sage/15 text-sage text-sm px-3 py-1 rounded-full">
                      {warranty.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate text-sm text-center mt-6 bg-fog p-4 rounded-lg">
          <strong>Note:</strong> Warranty length varies by mattress model. Check your specific product
          for warranty details, or ask your retailer.
        </p>
      </div>
    </section>
  );
}
