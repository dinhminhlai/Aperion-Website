"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/teachers", label: "Teachers" },
  { href: "/students", label: "Students" },
  { href: "/parents", label: "Parents" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePrograms, setMobilePrograms] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobilePrograms(false);
  }, [pathname]);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isPrograms = pathname.startsWith("/programs");

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1B2A4A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Wordmark */}
          <Link
            href="/"
            className="font-light text-[15px] tracking-[0.16em] text-white"
            style={{ fontWeight: 300 }}
          >
            APERION
          </Link>

          {/* Center: Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Programs dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link
                href="/programs"
                className={`group relative text-[14px] font-medium text-white/90 hover:text-white transition-colors tracking-wide ${
                  isPrograms ? "text-white" : ""
                }`}
                style={{ fontWeight: 500 }}
              >
                Programs
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="inline-block ml-1.5 -mt-0.5"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#1A9E96] transition-all duration-300 group-hover:w-full ${
                    isPrograms ? "w-full" : "w-0"
                  }`}
                />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[380px] bg-[#1B2A4A] border border-white/10 rounded-lg shadow-2xl"
                  >
                    <div className="p-5">
                      <Link
                        href="/programs/global-affairs"
                        className="block px-4 py-3 rounded-md hover:bg-white/5 transition-colors"
                      >
                        <span className="text-white text-[14px] block" style={{ fontWeight: 500 }}>
                          Global Affairs
                        </span>
                        <span className="text-white/50 text-[13px]">
                          Washington D.C.
                        </span>
                      </Link>
                      <div className="px-4 py-3 rounded-md cursor-default">
                        <span className="text-white/40 text-[14px] flex items-center gap-2 whitespace-nowrap" style={{ fontWeight: 500 }}>
                          Technology &amp; Entrepreneurship
                          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                            Coming Soon
                          </span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[14px] font-medium text-white/90 hover:text-white transition-colors tracking-wide ${
                  pathname === link.href ? "text-white" : ""
                }`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#1A9E96] transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="hidden lg:block">
            <Link
              href="/apply"
              className="rounded-full bg-[#1A9E96] px-6 py-2.5 text-[14px] font-medium text-white transition-all hover:bg-[#178a83]"
              style={{ fontWeight: 500 }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden bg-[#1B2A4A]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {/* Programs with sub-items */}
              <div>
                <button
                  onClick={() => setMobilePrograms(!mobilePrograms)}
                  className="text-[16px] font-medium text-white/90 hover:text-white transition-colors flex items-center gap-2"
                  style={{ fontWeight: 500 }}
                >
                  Programs
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-200 ${mobilePrograms ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobilePrograms && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-3 flex flex-col gap-3">
                        <Link
                          href="/programs/global-affairs"
                          className="text-[15px] text-white/70 hover:text-white transition-colors"
                        >
                          Global Affairs
                          <span className="text-white/40 text-[13px] ml-2">Washington D.C.</span>
                        </Link>
                        <span className="text-[15px] text-white/40 flex items-center gap-2">
                          Technology &amp; Entrepreneurship
                          <span className="text-[10px] text-white bg-[#1A9E96] px-2 py-0.5 rounded-full" style={{ fontWeight: 500 }}>
                            Coming Soon
                          </span>
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[16px] font-medium text-white/90 hover:text-white transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                className="mt-2 inline-block rounded-full bg-[#1A9E96] px-6 py-3 text-center text-[14px] font-medium text-white"
                style={{ fontWeight: 500 }}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
