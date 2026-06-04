export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-black text-white">
            Blue Horseshoe Foundation
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Empowering communities through education, wellness,
            technology, entrepreneurship, and positive digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm text-slate-400">
          <div>
            <h3 className="mb-4 font-bold text-white">Organization</h3>

            <ul className="space-y-3">
              <li><a href="/about">About</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/media">Media</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Community</h3>

            <ul className="space-y-3">
              <li><a href="/get-involved">Get Involved</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Blue Horseshoe Foundation. All rights reserved.
      </div>
    </footer>
  );
}
