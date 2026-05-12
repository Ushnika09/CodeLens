import DataFieldGrid from "../components/githubShowcase/DataFieldGrid";
import FieldCategoryChart from "../components/githubShowcase/FieldCategoryChart";
import GitHubDataTable from "../components/githubShowcase/GitHubDataTable";
import GitHubStatsPanel from "../components/githubShowcase/GitHubStatsPanel";
import { GITHUB_PUBLIC_DATA_FIELDS } from "../components/githubShowcase/githubPublicData";

const activityPulse = [
  { month: "Jan", score: 66 },
  { month: "Feb", score: 74 },
  { month: "Mar", score: 81 },
  { month: "Apr", score: 78 },
  { month: "May", score: 88 },
  { month: "Jun", score: 93 },
];

const topSignalRows = [
  { metric: "Public repositories analyzed", value: "120" },
  { metric: "Public commits discovered", value: "8,400+" },
  { metric: "Public pull requests indexed", value: "1,260" },
  { metric: "Public issue interactions", value: "2,030" },
  { metric: "Public stars tracked", value: "970" },
];

export default function GitHubIntelligencePage() {
  const groupedMap = GITHUB_PUBLIC_DATA_FIELDS.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const groupedCounts = Object.entries(groupedMap).map(([category, count]) => ({ category, count }));

  return (
    <div className="w-full flex-1 px-4 py-10 sm:px-6 lg:px-10 bg-gray-50">
      <div className="mx-auto max-w-[1400px] space-y-8">
        <header className="border-4 border-black bg-white p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-500">GitHub Public Intelligence</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Full 100-Field Data Showcase
          </h1>
          <p className="mt-4 max-w-4xl text-sm sm:text-base font-semibold text-gray-700">
            This page demonstrates the maximum public GitHub information surface in a frontend-only milestone.
            It combines KPI cards, category graphs, signal tables, and a complete field-by-field map.
          </p>
        </header>

        <GitHubStatsPanel
          totalFields={GITHUB_PUBLIC_DATA_FIELDS.length}
          categoryCount={groupedCounts.length}
          visualBlocks={4}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <FieldCategoryChart groupedCounts={groupedCounts} total={GITHUB_PUBLIC_DATA_FIELDS.length} />

          <article className="border-4 border-black bg-white p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-black uppercase tracking-wider">Activity Pulse</h3>
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Visual trend</span>
            </div>

            <div className="mt-6 space-y-4">
              {activityPulse.map((item) => (
                <div key={item.month} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest">
                    <span>{item.month}</span>
                    <span>{item.score}</span>
                  </div>
                  <div className="h-3 w-full border-2 border-black bg-gray-100">
                    <div className="h-full bg-black" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-2 border-black">
              <table className="w-full border-collapse">
                <tbody>
                  {topSignalRows.map((row) => (
                    <tr key={row.metric} className="border-t-2 border-black first:border-t-0 odd:bg-gray-50">
                      <td className="px-4 py-3 text-xs font-black uppercase tracking-wider">{row.metric}</td>
                      <td className="px-4 py-3 text-right text-sm font-black">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <GitHubDataTable fields={GITHUB_PUBLIC_DATA_FIELDS} />
        <DataFieldGrid fields={GITHUB_PUBLIC_DATA_FIELDS} />
      </div>
    </div>
  );
}
