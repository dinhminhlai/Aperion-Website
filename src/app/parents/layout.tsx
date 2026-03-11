import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents | Aperion",
  description:
    "Everything parents need to know about Aperion — safety, value, credibility, logistics, and what your student actually does. Teacher-led, all-inclusive, real institutions.",
};

export default function ParentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
