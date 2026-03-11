import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Affairs | Aperion Programs",
  description:
    "Aperion | Global Affairs places high school students inside the Pentagon, World Bank, State Department, and D.C.'s full international affairs ecosystem. Washington D.C. · June 7–13, 2026.",
};

export default function GlobalAffairsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
