export default function TrustStrip() {
  const items = [
    { value: '1.4M+', label: 'Users across our platforms' },
    { value: '2017–2025', label: 'Apps launched' },
    { value: 'Multiple', label: 'Trademarks and patent filings' },
    { value: '100%', label: 'Founder-owned since 2025' },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 py-16 text-center md:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.label}>
            <div className="text-4xl font-medium text-slate-900">{item.value}</div>
            <div className="mt-2 text-base text-slate-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


