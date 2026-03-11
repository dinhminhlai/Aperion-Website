import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Teachers",
  description:
    "Aperion is teacher-led from start to finish. Teachers prepare students before the program, lead the immersive week, and guide post-program integration. Learn how to bring Aperion to your school.",
};

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
