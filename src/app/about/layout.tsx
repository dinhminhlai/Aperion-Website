import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aperion",
  description:
    "Aperion was founded by a former White House NSC official and a Fulbright Scholar educator who saw the same problem from opposite sides — and built the solution together.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
