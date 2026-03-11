import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Aperion builds immersive career discovery programs placing high school students inside real institutions alongside real professionals. Explore our current and future program verticals.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
