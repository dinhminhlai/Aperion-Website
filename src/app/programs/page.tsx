"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";

const stats = [
  { num: "5", label: "careers the average student can name at graduation" },
  { num: "83%", label: "of graduates lack confidence in their career choices" },
  { num: "39%", label: "have access to any career exploration program at all" },
  { num: "90%", label: "want more career learning experiences" },
];

const competitors = [
  {
    name: "Civic & Field-Specific Programs",
    verdict: "Deep in one lane. Blind to the rest.",
    desc: "Programs built around a single field give students depth in one area \u2014 but leave the vast landscape of careers undiscovered. Most students don\u2019t need more depth in a field they already know. They need breadth across fields they\u2019ve never encountered.",
  },
  {
    name: "Pre-College & University Programs",
    verdict: "Campus simulations, not real institutions.",
    desc: "Students assemble on university campuses to study fields \u2014 not to experience them. The work happens elsewhere. No curriculum integration, no teacher continuity, and no access to the actual environments where careers play out.",
  },
  {
    name: "School Counselors",
    verdict: "Bandwidth, not expertise.",
    desc: "Counselors cannot be labor market experts across every emerging field. The average counselor serves 400+ students. Meaningful, personalized career exploration \u2014 at depth, across industries \u2014 isn\u2019t structurally possible at that ratio.",
  },
  {
    name: "Career Days & Job Fairs",
    verdict: "A snapshot where a window should be.",
    desc: "Career days give students 90 seconds with a professional in a gymnasium. It is better than nothing. It is nowhere near enough to understand what a career actually feels like, demands, or offers \u2014 or whether it could be theirs.",
  },
  {
    name: "Digital Platforms & Assessments",
    verdict: "Data about careers. Not experience of them.",
    desc: "Naviance, YouScience, and their peers generate profiles and suggest pathways. They cannot replicate the experience of standing in a room where consequential work happens \u2014 meeting the person who does it \u2014 and feeling something shift.",
  },
  {
    name: "All Existing Programs Combined",
    verdict: "Information informs. It rarely ignites.",
    desc: "A student can read about a career, watch a documentary, or sit through a panel. None of it creates the moment of discovery that changes how a student sees what\u2019s possible. Inspiration requires presence. Existing programs provide valuable information \u2014 but stop short of the moment that changes a student\u2019s trajectory. Aperion picks up where they leave off.",
  },
];

const criteria = [
  {
    num: "01",
    title: "No Traditional Pathway",
    desc: "The field has no CTE program, no school-based exposure mechanism, and no accessible route for students to discover it on their own. The careers are consequential — often shaping global systems — but invisible to the average high schooler.",
  },
  {
    num: "02",
    title: "High Workforce Demand + Labor Gaps",
    desc: "The sector is growing, driven by macro trends that aren't slowing down. There is genuine talent demand and documented workforce gaps — meaning students who discover this field early have a real runway.",
  },
  {
    num: "03",
    title: "Geographic Clustering",
    desc: "70% or more of the sector's jobs concentrate in 3–5 cities. That geographic density makes physical immersion efficient and powerful — one week in the right city puts students inside an entire ecosystem.",
  },
];

const valueProps = [
  {
    title: "Access to Careers Beyond Your Network",
    desc: "Experience fields you'd never discover through family connections or local opportunity. Especially careers invisible to students without industry proximity.",
  },
  {
    title: "Learn From People Actually Doing the Work",
    desc: "Move beyond assessments and job descriptions. Spend real time with practitioners — not speakers, not panels. People who show up to that building every day.",
  },
  {
    title: "Discover the Full Range Within a Field",
    desc: "A single industry contains dozens of distinct career paths. Students leave understanding not just that a field exists, but how many ways there are to work inside it.",
  },
  {
    title: "Make Informed Decisions That Matter Now",
    desc: "High school is the inflection point. Course selection, college applications, extracurriculars — decisions made now shape the next decade. Exposure before those decisions changes their quality.",
  },
  {
    title: "Build on What You're Already Learning",
    desc: "Your own teacher leads the program. Someone who knows your strengths, your goals, and your classroom. The experience connects to your curriculum — not away from it.",
  },
  {
    title: "Experience Work Where It Actually Happens",
    desc: "Physical presence changes what's possible. Standing in a Pentagon briefing room or a World Bank conference hall creates understanding that no screen can replicate.",
  },
  {
    title: "Explore Alongside Your Peers",
    desc: "Discovery is social. Students navigate the same uncertainty together — the same big questions about direction and identity. Shared exploration normalizes the unknown and sparks conversations that continue long after the week ends.",
  },
];

const futurePrograms = [
  {
    name: "Technology & Entrepreneurship",
    city: "San Francisco",
    desc: "AI ethics, venture capital, climate technology, and the infrastructure of the innovation economy. Built for students drawn to the intersection of technology and its consequences.",
  },
  {
    name: "Global Finance & Development",
    city: "New York",
    desc: "International banking, impact investing, multilateral development, and fintech \u2014 where capital meets global policy. Wall Street, the UN, and the world\u2019s leading foundations in one city.",
  },
  {
    name: "Energy & AI Infrastructure",
    city: "Houston",
    desc: "The AI revolution runs on power. Grid modernization, data center engineering, energy transition, and the CHIPS Act buildout \u2014 the careers behind the technology reshaping every industry.",
  },
  {
    name: "Biotech & Health Innovation",
    city: "Boston",
    desc: "Where breakthroughs become treatments. Biotech startups, health policy, FDA regulatory science, and digital health \u2014 the non-clinical careers driving medicine forward.",
  },
  {
    name: "Space & Aerospace",
    city: "Los Angeles",
    desc: "From JPL to commercial launch. Satellite systems, defense space, orbital logistics, and the commercial space economy \u2014 careers most students don\u2019t know exist.",
  },
  {
    name: "Climate & Sustainability",
    city: "Denver",
    desc: "The green transition needs professionals. Renewable energy engineering, climate policy, carbon markets, and sustainable infrastructure \u2014 anchored at NREL and Colorado\u2019s climate tech corridor.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1920&q=80"
          alt="Chicago skyline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/45" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 w-full">
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-[#1A9E96] text-[12px] md:text-[13px] tracking-[0.2em] mb-6"
              style={{ fontWeight: 500, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              APERION PROGRAMS
            </p>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6 max-w-[700px]"
              style={{ fontWeight: 300, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              The careers that will define their lives are ones they&rsquo;ve never heard of.
            </h1>
            <p
              className="text-white/70 text-[17px] leading-relaxed max-w-[640px]"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
            >
              Aperion places high school students inside real professional
              institutions — alongside the practitioners doing the work, in
              the cities where careers cluster. Not software. Not simulations.
              Physical presence in the rooms where it happens.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE GAP
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16 max-w-[700px]"
              style={{ fontWeight: 300 }}
            >
              Most students graduate with a career map the size of a postcard.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Stats */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.num}>
                    <p
                      className="text-[#1B2A4A] text-[56px] md:text-[72px] leading-none mb-2"
                      style={{ fontWeight: 600 }}
                    >
                      {stat.num}
                    </p>
                    <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Copy */}
            <FadeIn delay={0.15}>
              <div className="space-y-5">
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                  Most of what students know about careers comes from two
                  sources: their parents, and television. From this narrow
                  window, they choose courses, build college applications, and
                  commit to directions that will shape the next decade of their
                  lives.
                </p>
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                  The programs that do exist — career days, online assessments,
                  summer camps — provide information, not experience. A student
                  can read about a foreign service officer. That is entirely
                  different from sitting across from one.
                </p>
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                  Aperion changes the equation. Not with more information. With
                  access.
                </p>
                <p className="text-[13px] text-[#4A4A4A]/50 mt-8">
                  Sources: ECMC Foundation <em>Question the Quo</em> &middot;
                  Suzy Welch, <em>Becoming You</em> (HarperCollins, 2025)
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Existing Programs Fall Short */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE LANDSCAPE
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Information doesn&rsquo;t inspire. Discovery requires presence.
            </h2>
            <p className="text-white/60 text-[16px] mb-16 max-w-[640px]">
              Every existing solution gets students closer to a career — but
              stops short of the moment that actually changes them. That moment
              requires being in the room.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((comp) => (
              <StaggerItem key={comp.name} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 h-full border-t-[4px] border-t-[#1A9E96]">
                  <p
                    className="text-[#4A4A4A] text-[11px] tracking-[0.12em] uppercase mb-3"
                    style={{ fontWeight: 500 }}
                  >
                    {comp.name}
                  </p>
                  <p
                    className="text-[#1A1A1A] text-[18px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {comp.verdict}
                  </p>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How Aperion Selects Verticals */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              OUR FRAMEWORK
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4 max-w-[700px]"
              style={{ fontWeight: 300 }}
            >
              We go where the work clusters — and where no pathway exists.
            </h2>
            <p className="text-[#4A4A4A] text-[16px] mb-16 max-w-[640px]">
              Not every career field is right for Aperion. We apply three
              criteria before building a program. All three must be met.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {criteria.map((c) => (
              <StaggerItem key={c.num}>
                <div>
                  <span
                    className="text-[#1A9E96] text-[48px] md:text-[56px] block mb-4"
                    style={{ fontWeight: 300 }}
                  >
                    {c.num}
                  </span>
                  <h3
                    className="text-[#1A1A1A] text-[20px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-16">
            <p
              className="text-[#4A4A4A] text-[20px] md:text-[24px] leading-snug text-center italic max-w-[700px] mx-auto"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Every Aperion program exists because a field met all three — and
              students had no other way in.
            </p>
          </FadeIn>

          <FadeIn className="mt-12">
            <div className="bg-[#FDFCF9] border-l-[3px] border-l-[#1A9E96] rounded-r-lg p-8 lg:p-10 max-w-[800px] mx-auto">
              <p
                className="text-[#4A4A4A] text-[17px] leading-relaxed italic"
                style={{ fontFamily: "var(--font-lora), serif" }}
              >
                Some of the fields we&rsquo;ll build programs for don&rsquo;t
                fully exist yet. Technology is rewriting what work looks like
                faster than any school system can track. We don&rsquo;t know the
                name of every career that will matter in 2035 — but we&rsquo;ll
                be in the cities where those careers are being invented, building
                programs to expose students early, before the rest of the world
                catches up.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Student Value Propositions */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHAT STUDENTS GAIN
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Built for two kinds of students. Valuable for both.
            </h2>
            <p className="text-white/60 text-[16px] mb-16 max-w-[640px]">
              Some students arrive knowing exactly what they want. Others have
              no idea. Aperion is designed for both — and delivers different but
              equally real value to each.
            </p>
          </FadeIn>

          {/* Two archetype cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <StaggerItem>
              <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 h-full border-l-[4px] border-l-[#1A9E96]">
                <h3
                  className="text-[#1A1A1A] text-[18px] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  The student with direction
                </h3>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                  For students with existing focus, Aperion accelerates the
                  path. Meeting a political risk analyst at Eurasia Group
                  transforms a vague interest in &ldquo;global stuff&rdquo; into
                  a specific, actionable direction. Research confirms: students
                  with career clarity achieve better academic outcomes.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 h-full border-l-[4px] border-l-[#1A9E96]">
                <h3
                  className="text-[#1A1A1A] text-[18px] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  The student without direction
                </h3>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                  For students who are drifting, Aperion provides the spark.
                  Exposure to careers they didn&rsquo;t know existed creates the
                  moment of discovery that transforms listlessness into purpose.
                  Elimination is as valuable as discovery — knowing what
                  doesn&rsquo;t fit is also a map.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Seven value props */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {valueProps.map((vp, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-[#1A9E96]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-3 h-3 rounded-sm bg-[#1A9E96]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] mb-2" style={{ fontWeight: 600 }}>
                      {vp.title}
                    </h4>
                    <p className="text-white/60 text-[14px] leading-relaxed">
                      {vp.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Timing Argument */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHY NOW
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-10"
              style={{ fontWeight: 300 }}
            >
              The moment that matters most is sophomore and junior year.
            </h2>
            <div className="space-y-5 mb-16">
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                Most people don&rsquo;t begin serious career exploration until
                their mid-twenties — after college major changes, false starts,
                and expensive misdirection. The gap between discovery and
                decision costs years. Aperion accelerates the starting line.
              </p>
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                Colleges today reward students who demonstrate depth and
                direction — what admissions officers call the &ldquo;spike.&rdquo;
                Early career clarity allows students to build compelling
                academic trajectories, choose meaningful extracurriculars, and
                arrive at college applications with authentic conviction rather
                than fabricated interest. Aperion democratizes this advantage.
              </p>
            </div>
            <div className="w-full h-px bg-[#1A9E96]/30" />
          </FadeIn>
        </div>
      </section>

      {/* Current & Future Programs */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE PROGRAMS
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              One program live. More on the way.
            </h2>
          </FadeIn>

          {/* Global Affairs — Active */}
          <FadeIn className="mb-8">
            <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 border-l-[4px] border-l-[#4A6D8C]">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  href="/apply"
                  className="text-[11px] text-white bg-[#1A9E96] px-3 py-1 rounded-full"
                  style={{ fontWeight: 500 }}
                >
                  NOW ENROLLING
                </Link>
                <span className="text-[13px] text-[#4A4A4A]">
                  Washington D.C.
                </span>
              </div>
              <h3
                className="text-[#1A1A1A] text-[24px] md:text-[28px] mb-2"
                style={{ fontWeight: 600 }}
              >
                Aperion | Global Affairs
              </h3>
              <p
                className="text-[#4A4A4A] text-[14px] mb-4"
                style={{ fontWeight: 500 }}
              >
                June 7&ndash;13, 2026
              </p>
              <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-6 max-w-[700px]">
                Three tracks. One city. The full ecosystem of international
                affairs — national security, global business, and humanitarian
                impact — concentrated in Washington D.C., where the work
                actually happens.
              </p>
              <Link
                href="/programs/global-affairs"
                className="rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] text-white hover:bg-[#178a83] transition-colors inline-block"
                style={{ fontWeight: 500 }}
              >
                Explore the Program &rarr;
              </Link>
            </div>
          </FadeIn>

          {/* On the Horizon */}
          <FadeIn delay={0.15}>
            <p
              className="text-[#4A4A4A] text-[16px] mb-5"
              style={{ fontWeight: 500 }}
            >
              On the horizon
            </p>
            <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-8 max-w-[700px]">
              Each program targets career fields with high workforce demand, no
              traditional school pathway, and deep geographic clustering —
              ensuring students meet the people and institutions actually doing
              the work.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futurePrograms.map((prog) => (
              <StaggerItem key={prog.name} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 opacity-70 flex flex-col h-full border-t-[4px] border-t-[#1A9E96]" style={{ filter: "grayscale(20%)" }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-[11px] px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.08)",
                        color: "rgba(0,0,0,0.4)",
                        fontWeight: 500,
                      }}
                    >
                      IN DEVELOPMENT
                    </span>
                    <span className="text-[13px] text-[#4A4A4A]/60">
                      {prog.city}
                    </span>
                  </div>
                  <h3
                    className="text-[#1A1A1A] text-[18px] mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    Aperion | {prog.name}
                  </h3>
                  <p className="text-[#4A4A4A]/60 text-[14px] leading-relaxed flex-grow">
                    {prog.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              The inaugural cohort is now open.
            </h2>
            <p className="text-white/70 text-[16px] mb-3">
              Aperion | Global Affairs &middot; Washington D.C. &middot; June
              7&ndash;13, 2026
            </p>
            <p className="text-white/50 text-[15px] mb-10">
              Limited enrollment. Teacher-led. All-inclusive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs/global-affairs"
                className="rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] font-medium text-white hover:bg-[#178a83] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Explore Global Affairs &rarr;
              </Link>
              <Link
                href="/apply"
                className="rounded-full border border-white/80 px-8 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
                style={{ fontWeight: 500 }}
              >
                Apply Now &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
