export default function GitHubStatsPanel({ totalFields, categoryCount, visualBlocks }) {
  const cards = [
    { label: "Public Fields", value: totalFields, accent: "bg-black text-white" },
    { label: "Data Categories", value: categoryCount, accent: "bg-white text-black" },
    { label: "Visual Modules", value: visualBlocks, accent: "bg-black text-white" },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <article key={card.label} className={`border-4 border-black p-5 ${card.accent}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{card.label}</p>
          <p className="mt-3 text-4xl font-black tracking-tight">{card.value}</p>
        </article>
      ))}
    </section>
  );
}
