"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";

const ecosystem = [
  {
    title: "Government Institutions",
    desc: "The Pentagon, State Department, U.S. Capitol, National Security Council. The rooms where national policy is made and executed.",
  },
  {
    title: "International Organizations",
    desc: "The World Bank, IMF, and the institutions that shape global economic policy and development finance.",
  },
  {
    title: "Think Tanks",
    desc: "Brookings, CSIS, Atlantic Council, RAND, Carnegie Endowment. Where research becomes policy and policy becomes action.",
  },
  {
    title: "Embassies & Diplomatic Missions",
    desc: "200+ embassies concentrated in a single city. Direct access to how nations represent themselves and negotiate interests.",
  },
  {
    title: "Political Risk & Strategy Firms",
    desc: "Eurasia Group, The Asia Group, Albright Stonebridge. The private sector firms that help corporations navigate geopolitical risk.",
  },
  {
    title: "NGOs & Development Organizations",
    desc: "CARE, IRC, World Wildlife Fund, Human Rights Watch. The organizations working at the intersection of global crisis and humanitarian response.",
  },
];

const tracks = [
  {
    label: "TRACK A",
    color: "#4A6D8C",
    name: "National Security & Defense Policy",
    desc: "Hard power, intelligence, strategic planning. For students drawn to how nations protect and project their interests on the global stage.",
    explore: [
      "Intelligence analysis",
      "Defense policy",
      "Diplomatic strategy",
      "National security law",
      "Strategic communications",
    ],
    meet: "The Pentagon · CSIS · NSC · Atlantic Council · Political risk consultancies",
  },
  {
    label: "TRACK B",
    color: "#B8913A",
    name: "International Business & Trade",
    desc: "Global markets, geopolitical risk, economic development. For students who think in systems and see opportunity — and consequence — across borders.",
    explore: [
      "International trade policy",
      "Geopolitical risk analysis",
      "Global finance",
      "Emerging markets",
      "Economic development",
    ],
    meet: "U.S. Chamber of Commerce · World Bank · IMF · Eurasia Group · International Trade Administration",
  },
  {
    label: "TRACK C",
    color: "#5E8C6A",
    name: "Global Impact & Development",
    desc: "Humanitarian response, international development, NGO leadership. For students who want their career to move the world forward — and need to understand the systems it takes to do it.",
    explore: [
      "Humanitarian response",
      "International development",
      "Global health policy",
      "Environmental sustainability",
      "NGO leadership",
    ],
    meet: "World Bank · CARE · IRC · WWF · UN development agencies",
  },
];

const schedule = [
  {
    day: "Sunday",
    theme: "Arrival & Orientation",
    desc: "Full group. Context, cohort formation, and an opening session that sets the tone for the week. Students meet their teacher-guides, their cohort, and each other.",
  },
  {
    day: "Monday",
    theme: "National Power & Global Security",
    desc: "Marquee: The Pentagon. Cohort rotations: CSIS / U.S. Chamber of Commerce / World Resources Institute. Students meet practitioners in their track — learning what the work actually looks like and the paths that led them there.",
  },
  {
    day: "Tuesday",
    theme: "Diplomacy & Statecraft",
    desc: "Marquee: U.S. Department of State. Cohort rotations: Atlantic Council / U.S.-China Business Council / WWF. Evening: Embassy reception — an inside look at how nations engage each other in practice.",
  },
  {
    day: "Wednesday",
    theme: "Congress, Policy & Decision-Making",
    desc: "Marquee: U.S. Capitol — committee staff briefings. Cohort rotations: Eurasia Group / International Trade Administration / CARE. Students sit across from the people who draft, debate, and implement policy.",
  },
  {
    day: "Thursday",
    theme: "Markets, Influence & Global Impact",
    desc: "Morning cohort rotations: USIP / The Asia Group / IRC. Afternoon Marquee: World Bank. From geopolitical risk to humanitarian response — the full arc of how global events translate into careers.",
  },
  {
    day: "Friday",
    theme: "Careers & Synthesis",
    desc: "Full group. A candid career panel with mid-career professionals across all three tracks — their paths in, what the work actually looks like day to day, and what they wish they'd known earlier. Followed by open reflection time for students to process the week alongside their cohort and teacher.",
  },
  {
    day: "Saturday",
    theme: "Departure",
    desc: "",
  },
];

const inclusions = [
  "Round-trip airfare",
  "Hotel accommodation",
  "All meals",
  "Ground transportation",
  "Full programming & venue access",
  "Insurance coverage",
  "Curriculum materials",
  "Program certificate",
];

const safetyFacts: { stat: string; desc: React.ReactNode }[] = [
  { stat: "1:8–10", desc: "student-to-adult ratio" },
  { stat: "FBI-cleared", desc: "adult staff throughout" },
  { stat: "$2M+", desc: "liability insurance coverage" },
  { stat: "Daily", desc: "parent updates" },
  { stat: "CPR-certified", desc: "staff on all activities" },
  { stat: "Comprehensive", desc: "evacuation insurance" },
];

export default function GlobalAffairsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1920&q=80"
          alt="U.S. Capitol building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/50" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 w-full">
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-[#1A9E96] text-[12px] md:text-[13px] tracking-[0.2em] mb-6"
              style={{ fontWeight: 500, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              APERION | GLOBAL AFFAIRS
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.4}>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6 max-w-[750px]"
              style={{ fontWeight: 300, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              Six days. The full ecosystem of international affairs.
            </h1>
          </FadeIn>

          <FadeIn onLoad delay={0.6}>
            <p
              className="text-[17px] mb-4 max-w-[600px]"
              style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              Washington D.C. &middot; June 7&ndash;13, 2026
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.7}>
            <p
              className="text-[16px] leading-relaxed mb-10 max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.8)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              Three tracks. Real institutions. The professionals who shape
              global events — and the students ready to meet them.
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.9}>
            <Link
              href="/apply"
              className="inline-block rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] font-medium text-white hover:bg-[#178a83] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Apply Now &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why Global Affairs */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHY THIS FIELD
            </p>
            <h2
              className="text-[#1A1A1A] text-[32px] md:text-[44px] leading-tight mb-10 max-w-[750px]"
              style={{ fontWeight: 300 }}
            >
              The world is more consequential than ever. The careers navigating
              it are nearly invisible to students.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5 max-w-[800px] mb-16">
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                The WEF&rsquo;s 2025 Global Risks Report names state-based
                armed conflict as the top immediate risk facing the world. 64%
                of experts anticipate a fragmented global order defined by great
                power competition. Misinformation and disinformation rank as
                the top short-term risk for the second consecutive year. The
                professionals navigating these challenges — intelligence
                analysts, foreign service officers, development economists,
                political risk consultants — are in extraordinary demand. And
                almost no high school student knows they exist.
              </p>
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                Global affairs meets every criterion Aperion uses to select a
                program vertical: no traditional educational pathway, high and
                growing workforce demand, and a geographic concentration that
                makes immersive access possible. Washington D.C. is not one of
                several options. It is the only city on earth where the entire
                ecosystem — government, international organizations, think
                tanks, embassies, NGOs, and the private sector — sits within a
                single week&rsquo;s reach.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-col md:flex-row gap-6">
            {[
              { num: "200+", label: "Embassies and diplomatic missions in Washington D.C." },
              { num: "20+", label: "Major think tanks concentrated in D.C." },
              { num: "64%", label: "of global experts anticipate great power competition defining the next decade (WEF 2025)" },
            ].map((s) => (
              <StaggerItem key={s.num} className="flex flex-1">
                <div className="bg-[#1B2A4A] rounded-lg p-8 text-center flex flex-col w-full">
                  <p
                    className="text-[#1A9E96] text-[48px] md:text-[64px] leading-none mb-3"
                    style={{ fontWeight: 300 }}
                  >
                    {s.num}
                  </p>
                  <p className="text-white/70 text-[14px] leading-relaxed flex-grow">
                    {s.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WASHINGTON D.C.
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              No other city puts this much in one place.
            </h2>
            <p className="text-white/60 text-[16px] mb-16 max-w-[640px]">
              A single week in Washington D.C. gives students access to an
              ecosystem that takes most professionals years to build
              relationships inside.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((item) => (
              <StaggerItem key={item.title} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 border-l-[4px] border-l-[#1A9E96] h-full">
                  <h3
                    className="text-[#1A1A1A] text-[17px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Three Tracks */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THREE TRACKS
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Choose your lens. Experience all three worlds.
            </h2>
            <p className="text-[#4A4A4A] text-[16px] mb-16 max-w-[720px]">
              Students select a primary track for deep-dive practitioner
              sessions — but the week is designed for exploration, not siloing.
              Cross-cohort rotations and all-group marquee sessions mean every
              student experiences the full breadth of global affairs.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {tracks.map((track) => (
              <StaggerItem key={track.label}>
                <div
                  className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10"
                  style={{ borderLeftWidth: "8px", borderLeftColor: track.color }}
                >
                  <p
                    className="text-[12px] tracking-[0.15em] mb-3"
                    style={{ color: track.color, fontWeight: 500 }}
                  >
                    {track.label}
                  </p>
                  <h3
                    className="text-[#1A1A1A] text-[22px] md:text-[26px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {track.name}
                  </h3>
                  <p className="text-[#4A4A4A] text-[16px] leading-relaxed mb-6 max-w-[700px]">
                    {track.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p
                        className="text-[#1A1A1A] text-[13px] tracking-[0.08em] uppercase mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        You&rsquo;ll explore
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {track.explore.map((item) => (
                          <span
                            key={item}
                            className="text-[13px] text-[#4A4A4A] bg-[#F5F2EB] px-3 py-1.5 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p
                        className="text-[#1A1A1A] text-[13px] tracking-[0.08em] uppercase mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        You&rsquo;ll meet professionals at
                      </p>
                      <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                        {track.meet}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12">
            <p
              className="text-[#4A4A4A] text-[18px] leading-snug text-center italic"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Not sure which track fits? Register interest and we&rsquo;ll help
              you find the right fit.
            </p>
          </FadeIn>
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
              THE PROGRAM
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Seven nights. Six days. One city that changes everything.
            </h2>
            <p className="text-white/60 text-[16px] mb-16 max-w-[720px]">
              The week is structured around three types of experiences — track
              deep-dives with practitioners in your chosen field, cross-cohort
              rotations to experience other tracks, and all-group marquee
              sessions at Washington D.C.&rsquo;s most consequential
              institutions.
            </p>
          </FadeIn>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-[#1A9E96]/40" />

            <StaggerContainer className="space-y-10">
              {schedule.map((item) => (
                <StaggerItem key={item.day}>
                  <div className="flex gap-6 md:gap-10">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#1A9E96] mt-1.5" />
                    </div>
                    <div className={item.desc ? "pb-2" : ""}>
                      <p
                        className="text-[#1A9E96] text-[13px] tracking-[0.1em] mb-1"
                        style={{ fontWeight: 500 }}
                      >
                        {item.day}
                      </p>
                      <h3
                        className="text-white text-[18px] md:text-[20px] mb-2"
                        style={{ fontWeight: 600 }}
                      >
                        {item.theme}
                      </h3>
                      {item.desc && (
                        <p className="text-white/70 text-[15px] leading-relaxed max-w-[600px]">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <p
            className="text-[#4A4A4A] text-[14px] italic mt-12"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Program itinerary is illustrative. Specific institutions and
            meetings are tailored for each cohort and subject to change.
          </p>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE FULL EXPERIENCE
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              The week is the centerpiece. Not the whole program.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Before",
                timing: "6–8 weeks pre-program",
                title: "Pre-Program Curriculum",
                desc: "Three modules delivered through your teacher prepare students to arrive curious, not overwhelmed. Career foundations, global context, and program preparation — calibrated for engagement, not academic burden.",
              },
              {
                phase: "During",
                timing: "6 days in D.C.",
                title: "Immersive Week",
                desc: "Real institutions. Real professionals. Track deep-dives, cross-cohort rotations, and all-group marquee sessions. The experience that changes how students see what's possible.",
              },
              {
                phase: "After",
                timing: "2–4 weeks post-program",
                title: "Post-Program Integration",
                desc: "Career exploration reflection. Updated academic plan. Students leave with a clearer map of what energized them, what didn't, and what questions they want to keep chasing — with their teacher to help turn that clarity into action.",
              },
            ].map((item) => (
              <StaggerItem key={item.phase} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 border-t-[4px] border-t-[#1A9E96] flex flex-col h-full">
                  <p
                    className="text-[#1A9E96] text-[12px] tracking-[0.1em] mb-1"
                    style={{ fontWeight: 500 }}
                  >
                    {item.phase.toUpperCase()}
                  </p>
                  <p className="text-[#4A4A4A]/60 text-[13px] mb-4">
                    {item.timing}
                  </p>
                  <h3
                    className="text-[#1A1A1A] text-[18px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Access & Credibility */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHY APERION
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-8"
              style={{ fontWeight: 300 }}
            >
              Access takes years to build. Students benefit from day one.
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-8">
              The institutional relationships that make this program possible —
              inside the Pentagon, the State Department, the World Bank, and the
              think tanks that shape global policy — were built over a career at
              the intersection of government, international affairs, and
              education. Aperion&rsquo;s co-founder brings firsthand experience
              from the White House National Security Council. That access is the
              program&rsquo;s foundation.
            </p>
            <Link
              href="/about"
              className="text-[#1A9E96] text-[14px]"
              style={{ fontWeight: 500 }}
            >
              Learn more about the founders &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              ALL-INCLUSIVE
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Everything handled. No surprises.
            </h2>
            <p className="text-[#4A4A4A] text-[16px] mb-16 max-w-[560px]">
              One enrollment covers the full program — from wheels up to wheels
              down.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {inclusions.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-4 bg-white border border-black/[0.08] rounded-lg p-5">
                  <div className="w-8 h-8 rounded-lg bg-[#1A9E96]/10 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#1A9E96]" />
                  </div>
                  <span className="text-[#1A1A1A] text-[15px]">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12">
            <p
              className="text-[#4A4A4A] text-[16px] italic text-center"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Pricing is available upon request. We share program investment
              details during the enrollment conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              SAFETY
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              Teacher-led. Professionally staffed. Fully covered.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFacts.map((fact) => (
              <StaggerItem key={fact.stat}>
                <div className="flex items-start gap-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 mt-0.5"
                  >
                    <circle cx="10" cy="10" r="10" fill="#1A9E96" fillOpacity="0.12" />
                    <path
                      d="M6 10.5l2.5 2.5L14 8"
                      stroke="#1A9E96"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <span
                      className="text-[#1B2A4A] text-[15px]"
                      style={{ fontWeight: 600 }}
                    >
                      {fact.stat}
                    </span>{" "}
                    <span className="text-[#4A4A4A] text-[15px]">
                      {fact.desc}
                    </span>
                  </div>
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
              Limited enrollment. Washington D.C. &middot; June 7&ndash;13, 2026
            </p>
            <p className="text-white/50 text-[15px] mb-10 max-w-[520px] mx-auto">
              This is the first Aperion program. Enrollment is intentionally
              limited to ensure an exceptional experience for every student.
            </p>
            <a
              href="/Aperion_Program_Brochure_DC.pdf"
              download="Aperion_Global_Affairs_Brochure.pdf"
              className="inline-flex items-center gap-2 text-[#1A9E96] text-[15px] hover:underline transition-colors mb-6"
              style={{ fontWeight: 500 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M8 2v9m0 0l-3-3m3 3l3-3M3 13h10" stroke="#1A9E96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download the Program Brochure
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] font-medium text-white hover:bg-[#178a83] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Apply Now &rarr;
              </Link>
              <Link
                href="/apply"
                className="rounded-full border border-white/80 px-8 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
                style={{ fontWeight: 500 }}
              >
                Questions? Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
