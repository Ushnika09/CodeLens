export default function GitHubDataTable({ fields }) {
  return (
    <section className="border-4 border-black bg-white p-6 overflow-hidden">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-black uppercase tracking-wider">Structured Data Table</h3>
        <span className="text-xs font-black uppercase tracking-widest text-gray-500">API-ready mapping</span>
      </div>

      <div className="mt-6 overflow-auto border-2 border-black">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-widest">#</th>
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-widest">Field Key</th>
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-widest">Category</th>
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-widest">Description</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((item) => (
              <tr key={item.id} className="border-t-2 border-black even:bg-gray-50">
                <td className="px-4 py-3 text-xs font-black tracking-widest">{item.id}</td>
                <td className="px-4 py-3 text-xs font-bold">{item.field}</td>
                <td className="px-4 py-3 text-xs font-black uppercase tracking-wider">{item.category}</td>
                <td className="px-4 py-3 text-xs font-semibold text-gray-700">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
