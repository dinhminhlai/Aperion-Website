import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program",
  description: "Six days inside real institutions with real professionals. Washington D.C., June 7–13, 2026. All-inclusive at $5,000.",
};

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
