"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";

const inclusions = [
  { icon: "✈", label: "Round-trip airfare" },
  { icon: "🏨", label: "Hotel accommodation" },
  { icon: "🍽", label: "All meals" },
  { icon: "🚐", label: "Ground transportation" },
  { icon: "📋", label: "Full programming & event access" },
  { icon: "🛡", label: "Insurance coverage" },
  { icon: "📚", label: "Curriculum materials" },
  { icon: "📜", label: "Program certificate" },
];

const days = [
  {
    day: "Day 1",
    title: "Orientation",
    desc: "Full group. Set context, meet cohort, briefing on the week ahead.",
  },
  {
    day: "Days 2–3",
    title: "Track Deep-Dives",
    desc: "Practitioner-led sessions in your chosen field. Real professionals, real environments.",
    extra: "Plus: Marquee Sessions — All-cohort experiences at landmark institutions.",
  },
  {
    day: "Day 4",
    title: "Cross-Cohort Rotations",
    desc: "Step outside your track. Every student experiences the other two fields.",
    extra: "Plus: Marquee Sessions — All-cohort experiences at landmark institutions.",
  },
  {
    day: "Day 5",
    title: "Capstone",
    desc: "Full group. Synthesize the week. Present insights. Leave with a framework.",
  },
];

const locations = [
  {
    name: "The Pentagon",
    desc: "The nerve center of American defense and national security.",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80",
  },
  {
    name: "World Bank",
    desc: "Where global economic policy meets development impact.",
    img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80",
  },
  {
    name: "Embassies",
    desc: "Diplomatic missions where foreign policy becomes personal.",
    img: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1920&q=80",
  },
  {
    name: "Think Tanks",
    desc: "Where research shapes the decisions that shape the world.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn onLoad>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6"
              style={{ fontWeight: 300 }}
            >
              Six days. Real institutions.
              <br />
              Real professionals.
            </h1>
            <p className="text-white/70 text-[17px]">
              Washington D.C. | June 7&ndash;13, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHAT&rsquo;S INCLUDED
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              All-inclusive at $5,000.
            </h2>
            <p className="text-[#4A4A4A] text-[17px] mb-16 max-w-[600px]">
              One price. Everything covered. No add-ons, no surprises.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-center gap-4 bg-white border border-black/[0.08] rounded-lg p-5">
                  <span className="text-[24px]" role="img">{item.icon}</span>
                  <span className="text-[#1A1A1A] text-[15px]">{item.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Week */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE WEEK
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              Day by day.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#1A9E96]/40 hidden md:block" />

            <StaggerContainer className="space-y-12">
              {days.map((d) => (
                <StaggerItem key={d.day}>
                  <div className="flex gap-8 md:gap-12">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#1A9E96] shrink-0" />
                    </div>
                    <div>
                      <p
                        className="text-[#1A9E96] text-[13px] tracking-[0.1em] mb-2"
                        style={{ fontWeight: 500 }}
                      >
                        {d.day}
                      </p>
                      <h3
                        className="text-white text-[22px] mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        {d.title}
                      </h3>
                      <p className="text-white/70 text-[15px] leading-relaxed max-w-[500px]">
                        {d.desc}
                      </p>
                      {d.extra && (
                        <p className="text-[#1A9E96]/80 text-[14px] mt-3 italic">
                          {d.extra}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHERE YOU&rsquo;LL GO
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              The rooms that matter.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <StaggerItem key={loc.name}>
                <div className="group bg-white border border-black/[0.08] rounded-lg overflow-hidden">
                  <div className="relative h-[240px]">
                    <Image
                      src={loc.img}
                      alt={loc.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-[#1A1A1A] text-[18px] mb-2"
                      style={{ fontWeight: 600 }}
                    >
                      {loc.name}
                    </h3>
                    <p className="text-[#4A4A4A] text-[15px]">{loc.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Students Take Away */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Not a career decided. A map expanded.
            </h2>
            <div className="w-16 h-px bg-[#1A9E96] mx-auto my-10" />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Career Clarity", desc: "A deeper understanding of what energizes you — and what doesn't." },
              { title: "Expanded Awareness", desc: "Exposure to careers you didn't know existed, from people living them." },
              { title: "Professional Network", desc: "Connections with practitioners and a peer cohort asking the same big questions." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div>
                  <h3 className="text-[#1A9E96] text-[16px] font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-16">
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
