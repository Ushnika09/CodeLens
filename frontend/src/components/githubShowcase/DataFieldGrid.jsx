import { GITHUB_CATEGORY_COLORS } from "./githubPublicData";

export default function DataFieldGrid({ fields }) {
  return (
    <section className="border-4 border-black bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-black uppercase tracking-wider">100 Public Data Fields</h3>
        <span className="text-xs font-black uppercase tracking-widest text-gray-500">Full catalog</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {fields.map((item) => (
          <article key={item.id} className="border-2 border-black p-4 bg-gray-50">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">#{item.id}</span>
              <span className={`h-2 w-10 ${GITHUB_CATEGORY_COLORS[item.category] || "bg-black"}`} />
            </div>
            <p className="mt-2 text-sm font-black tracking-wide">{item.field}</p>
            <p className="mt-1 text-[11px] font-black uppercase tracking-widest text-gray-500">{item.category}</p>
            <p className="mt-2 text-xs font-bold leading-relaxed text-gray-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
