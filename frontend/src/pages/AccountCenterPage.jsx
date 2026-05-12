import { Link } from "react-router-dom";

const quickSettings = [
  { label: "Portfolio URL", value: "https://yourportfolio.dev" },
  { label: "LinkedIn URL", value: "https://linkedin.com/in/username" },
  { label: "Preferred Role", value: "Backend Engineer" },
  { label: "Availability", value: "Open to opportunities" },
];

export default function AccountCenterPage() {
  return (
    <div className="w-full flex-1 px-4 py-10 sm:px-6 lg:px-10 bg-gray-50">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="border-4 border-black bg-white p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-500">Profile Controls</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight">Account Center</h1>
          <p className="mt-3 text-sm font-bold text-gray-700 max-w-2xl">
            Connect external profiles, maintain your professional links, and power up your CodeLens profile insights.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="border-4 border-black bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-black uppercase tracking-widest">GitHub Connection</h2>
              <span className="px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.18em]">Frontend Mode</span>
            </div>

            <p className="mt-3 text-sm font-semibold text-gray-700">
              Connect GitHub to unlock 100 public data signals for skill analytics, project intelligence, and contribution insights.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="px-5 py-3 border-4 border-black bg-black text-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Connect with GitHub
              </button>
              <Link
                to="/github-intelligence"
                className="px-5 py-3 border-4 border-black bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Preview Data View
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="border-2 border-black p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Status</p>
                <p className="mt-2 text-sm font-black uppercase">Not Connected</p>
              </div>
              <div className="border-2 border-black p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Scope</p>
                <p className="mt-2 text-sm font-black uppercase">Public Data</p>
              </div>
              <div className="border-2 border-black p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Fields</p>
                <p className="mt-2 text-sm font-black uppercase">100</p>
              </div>
            </div>
          </article>

          <article className="border-4 border-black bg-white p-6 sm:p-8">
            <h2 className="text-xl font-black uppercase tracking-widest">Career & Portfolio Links</h2>
            <p className="mt-3 text-sm font-semibold text-gray-700">
              Keep profile links up to date so your profile remains recruiter-ready.
            </p>

            <div className="mt-5 space-y-4">
              {quickSettings.map((setting) => (
                <label key={setting.label} className="block">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{setting.label}</span>
                  <input
                    type="text"
                    defaultValue={setting.value}
                    className="mt-2 w-full border-2 border-black px-3 py-3 text-sm font-bold focus:outline-none"
                  />
                </label>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 w-full border-4 border-black bg-white px-5 py-3 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Save (UI Demo)
            </button>
          </article>
        </section>
      </div>
    </div>
  );
}
