import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Students | Aperion",
  description:
    "Aperion places high school students inside real institutions alongside real professionals — at the exact moment they're making decisions about courses, colleges, and futures. See it to become it.",
};

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
