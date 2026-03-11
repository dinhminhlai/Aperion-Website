import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cohorts",
  description: "Three tracks: National Security, International Business, and Global Impact. Choose your field and go inside the work.",
};

export default function CohortsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
