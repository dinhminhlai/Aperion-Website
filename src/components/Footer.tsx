import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1.4fr_0.8fr_1fr] gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              className="text-[15px] tracking-[0.16em] text-white mb-4"
              style={{ fontWeight: 300 }}
            >
              APERION
            </div>
            <p
              className="text-white/60 text-[15px] italic"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              From five careers to five hundred
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[13px] font-medium tracking-[0.12em] text-white/40 uppercase mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/programs/global-affairs" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  Global Affairs
                </Link>
                <span className="text-[12px] text-white/40 ml-1.5">Washington D.C.</span>
              </li>
              {[
                { name: "Technology & Entrepreneurship", city: "San Francisco" },
                { name: "Global Finance & Development", city: "New York" },
                { name: "Energy & AI Infrastructure", city: "Houston" },
                { name: "Biotech & Health Innovation", city: "Boston" },
                { name: "Space & Aerospace", city: "Los Angeles" },
                { name: "Climate & Sustainability", city: "Denver" },
              ].map((prog) => (
                <li key={prog.name}>
                  <span className="text-[14px] text-white/40">{prog.name}</span>
                  <span className="text-[12px] text-white/30 ml-1.5">{prog.city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[13px] font-medium tracking-[0.12em] text-white/40 uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/teachers" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/parents" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  Parents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-medium tracking-[0.12em] text-white/40 uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-[14px] text-white/70">Austin, Texas</li>
              <li className="text-[14px] text-white/70">hello@aperionhq.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1A9E96]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-white/40">
              &copy; 2026 Aperion. All rights reserved.
            </p>
            <p className="text-[13px] text-white/40">
              Austin, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
