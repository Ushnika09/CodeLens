import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center px-4 py-20 bg-white">
      <div className="w-full max-w-3xl border-4 border-black p-10 sm:p-16 bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] text-center">
        <p className="text-9xl font-black uppercase tracking-tighter text-black leading-none select-none">
          404
        </p>
        <div className="mt-6 mb-10 border-t-4 border-black pt-8">
          <p className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-black">
            PAGE NOT FOUND
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-black">
            The page you are looking for does not exist.
          </p>
        </div>
        <Link
          to="/"
          className="inline-block py-5 px-12 bg-black text-white text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-colors"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
}
