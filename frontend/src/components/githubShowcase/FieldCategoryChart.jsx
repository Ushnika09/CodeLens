import { GITHUB_CATEGORY_COLORS } from "./githubPublicData";

export default function FieldCategoryChart({ groupedCounts, total }) {
  return (
    <section className="border-4 border-black bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-black uppercase tracking-wider">Category Distribution</h3>
        <span className="text-xs font-black uppercase tracking-widest text-gray-500">All {total} fields</span>
      </div>

      <div className="mt-6 space-y-4">
        {groupedCounts.map(({ category, count }) => {
          const percent = Math.round((count / total) * 100);
          return (
            <div key={category} className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest">
                <span>{category}</span>
                <span>{count} fields</span>
              </div>
              <div className="h-4 w-full border-2 border-black bg-gray-100">
                <div
                  className={`h-full ${GITHUB_CATEGORY_COLORS[category] || "bg-black"}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
