"use client";

import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";

const cohorts = [
  {
    id: "national-security",
    num: "01",
    color: "#4A6D8C",
    title: "National Security",
    description: [
      "Intelligence analysis, defense policy, diplomatic strategy, national security law. This track is for students drawn to the machinery of how nations protect their people, project their values, and navigate a complex geopolitical landscape.",
      "You'll work alongside practitioners who brief senior leaders, shape defense strategy, and negotiate on behalf of the United States. This isn't a lecture — it's immersion.",
    ],
    explore: [
      "Intelligence analysts",
      "Foreign service officers",
      "Defense policy advisors",
      "National security attorneys",
    ],
  },
  {
    id: "international-business",
    num: "02",
    color: "#B8913A",
    title: "International Business",
    description: [
      "Global trade, international finance, economic development, emerging markets. This track is for students who think in systems, see opportunity across borders, and want to understand how capital, commerce, and policy intersect on a global stage.",
      "You'll meet economists shaping development agendas, executives navigating multinational markets, and policy advisors who bridge business and government.",
    ],
    explore: [
      "World Bank economists",
      "Trade policy advisors",
      "Multinational executives",
      "Development finance specialists",
    ],
  },
  {
    id: "global-impact",
    num: "03",
    color: "#5E8C6A",
    title: "Global Impact",
    description: [
      "Humanitarian response, international development, NGO leadership, global health policy. This track is for students who want their career to move the world forward — not from the sidelines, but from inside the organizations doing the work.",
      "You'll engage with directors who run crisis response operations, health specialists designing intervention programs, and economists measuring impact at scale.",
    ],
    explore: [
      "NGO directors",
      "USAID program officers",
      "Global health specialists",
      "International development economists",
    ],
  },
];

export default function CohortsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn onLoad>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6"
              style={{ fontWeight: 300 }}
            >
              Three tracks. Your choice.
            </h1>
            <p className="text-white/70 text-[17px] max-w-[640px]">
              Students choose a primary track — but the week includes
              cross-cohort rotations and all-group marquee sessions.
              You&rsquo;ll experience all three worlds.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cohort Sections */}
      {cohorts.map((cohort, i) => (
        <section
          key={cohort.id}
          id={cohort.id}
          className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-[#F5F2EB]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                <FadeIn>
                  <span
                    className="text-[72px] md:text-[96px] leading-none block"
                    style={{ color: cohort.color, fontWeight: 300 }}
                  >
                    {cohort.num}
                  </span>
                </FadeIn>
              </div>

              <div className="lg:col-span-10">
                <FadeIn>
                  <div
                    className="h-1 w-12 rounded-full mb-6"
                    style={{ backgroundColor: cohort.color }}
                  />
                  <h2
                    className="text-[#1A1A1A] text-[32px] md:text-[42px] leading-tight mb-8"
                    style={{ fontWeight: 300 }}
                  >
                    {cohort.title}
                  </h2>
                </FadeIn>

                <FadeIn delay={0.15}>
                  {cohort.description.map((p, j) => (
                    <p
                      key={j}
                      className="text-[#4A4A4A] text-[16px] leading-relaxed mb-4"
                    >
                      {p}
                    </p>
                  ))}
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h3
                    className="text-[#1A1A1A] text-[16px] mt-8 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    What you&rsquo;ll explore
                  </h3>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cohort.explore.map((item) => (
                      <StaggerItem key={item}>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: cohort.color }}
                          />
                          <span className="text-[#4A4A4A] text-[15px]">
                            {item}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeIn>

                <FadeIn delay={0.45} className="mt-10">
                  <Link
                    href="/apply"
                    className="inline-block rounded-full px-8 py-3 text-[14px] font-medium text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: cohort.color, fontWeight: 500 }}
                  >
                    Apply for {cohort.title} &rarr;
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Ready to choose your track?
            </h2>
            <p className="text-white/70 text-[16px] mb-10">
              Washington D.C. | June 7&ndash;13, 2026 | Limited enrollment
            </p>
            <Link
              href="/apply"
              className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] font-medium text-white hover:bg-[#178a83] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Apply Now &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
