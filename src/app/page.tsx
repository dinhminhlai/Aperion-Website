"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { motion, useReducedMotion } from "framer-motion";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1920&q=80"
          alt="Washington D.C. aerial view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/45" />

        <div
          className="relative z-10 text-center px-6 max-w-[800px] py-16"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }}
        >
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-[#1A9E96] text-[12px] md:text-[13px] tracking-[0.2em] mb-8"
              style={{ fontWeight: 500, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              IMMERSIVE CAREER DISCOVERY
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.4}>
            <h1
              className="text-[#FFFFFF] text-[42px] md:text-[72px] leading-[1.05] mb-2"
              style={{ fontWeight: 300, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              Your students can name
              <br />
              five careers.
            </h1>
          </FadeIn>

          <FadeIn onLoad delay={0.6}>
            <p
              className="text-[#1A9E96] text-[42px] md:text-[72px] leading-[1.05] mb-8"
              style={{ fontWeight: 300, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              We&rsquo;ll show them five hundred.
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.8}>
            <p
              className="text-[16px] md:text-[17px] leading-relaxed max-w-[600px] mx-auto mb-10"
              style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              We place high school students inside the real institutions of a
              professional field — alongside the practitioners who work there.
              Teacher-led. Curriculum-integrated. Not simulations. Not campus
              visits. The rooms where consequential work happens — discovered
              alongside a peer cohort navigating the same journey.
            </p>
          </FadeIn>

          <FadeIn onLoad delay={1.0}>
            <div className="flex justify-center">
              <Link
                href="/programs"
                className="rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] font-medium text-white hover:bg-[#178a83] transition-colors"
                style={{ fontWeight: 500 }}
              >
                See How It Works
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-60"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-[#F5F2EB]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full h-px bg-[#1A9E96]/30" />
        </div>
        <div className="py-24 lg:py-32">
          <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
            <FadeIn>
              <blockquote
                className="text-[24px] md:text-[32px] leading-snug text-[#1A1A1A] italic mb-8"
                style={{ fontFamily: "var(--font-lora), serif" }}
              >
                &ldquo;Most students can name about five careers. Two of them
                are their parents&rsquo;.&rdquo;
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[16px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
                The rest come from television and social media. From this narrow
                window, students choose courses, build college applications, and
                commit to directions that shape the next decade of their
                lives. The consequences are measurable: 83% of graduates lack
                confidence in their career direction. 90% of students want more
                career exploration — only 39% have access to any meaningful
                program at all. And the programs that exist provide information,
                not experience. Aperion changes the equation.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[13px] text-[#4A4A4A]/60">
                Suzy Welch, <em>Becoming You</em> (HarperCollins, 2025) &middot;
                ECMC Foundation, <em>Question the Quo</em>
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full h-px bg-[#1A9E96]/30" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE APERION EXPERIENCE
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              Real institutions. Real professionals. Real clarity.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <StaggerItem>
              <div>
                <span
                  className="text-[#1A9E96] text-[48px] md:text-[56px] block mb-4"
                  style={{ fontWeight: 300 }}
                >
                  01
                </span>
                <h3 className="text-white text-[20px] font-semibold mb-3">
                  Go Inside the Work
                </h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  We place students in real professional environments — the rooms
                  where consequential work actually happens. Not simulations, not
                  panels. Authentic access to practitioners doing the work, in the
                  institutions that define their fields.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <span
                  className="text-[#1A9E96] text-[48px] md:text-[56px] block mb-4"
                  style={{ fontWeight: 300 }}
                >
                  02
                </span>
                <h3 className="text-white text-[20px] font-semibold mb-3">
                  Leave With Clarity
                </h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  Not a career decided — a map expanded. Students leave knowing
                  what energizes them, what doesn&rsquo;t, and what questions they
                  want to keep chasing. Discovery and elimination are both
                  valuable outcomes.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <span
                  className="text-[#1A9E96] text-[48px] md:text-[56px] block mb-4"
                  style={{ fontWeight: 300 }}
                >
                  03
                </span>
                <h3 className="text-white text-[20px] font-semibold mb-3">
                  No One Goes Alone
                </h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  Aperion is teacher-led and cohort-based. Students travel with
                  their own teacher — someone who knows them, their strengths,
                  and their goals — and alongside peers navigating the same
                  questions about direction and identity. The teacher bridges
                  inspiration and action. The cohort makes discovery social, not
                  solitary.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Cohort Preview */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              APERION | GLOBAL AFFAIRS &middot; WASHINGTON D.C.
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              The Inaugural Program
            </h2>
            <Link
              href="/programs/global-affairs"
              className="rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] font-medium text-white hover:bg-[#178a83] transition-colors mb-6 inline-block"
              style={{ fontWeight: 500 }}
            >
              Explore the Washington D.C. Program →
            </Link>
            <p className="text-[#4A4A4A] text-[16px] mb-16 max-w-[640px]">
              Our inaugural program explores the world of international affairs
              through three distinct tracks.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                color: "#4A6D8C",
                title: "National Security",
                desc: "Intelligence, diplomacy, defense policy. For students drawn to how nations protect and project their interests.",
                href: "/programs/global-affairs#national-security",
              },
              {
                color: "#B8913A",
                title: "International Business",
                desc: "Global trade, finance, economic development. For students who think in systems and see opportunity across borders.",
                href: "/programs/global-affairs#international-business",
              },
              {
                color: "#5E8C6A",
                title: "Global Impact",
                desc: "NGOs, humanitarian work, international development. For students who want their career to move the world forward.",
                href: "/programs/global-affairs#global-impact",
              },
            ].map((cohort) => (
              <StaggerItem key={cohort.title} className="flex">
                <div className="group flex flex-col bg-white border border-black/[0.08] rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="h-1 w-12 rounded-full mb-6"
                    style={{ backgroundColor: cohort.color }}
                  />
                  <h3
                    className="text-[#1A1A1A] text-[20px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {cohort.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-6 flex-grow">
                    {cohort.desc}
                  </p>
                  <Link
                    href={cohort.href}
                    className="text-[14px] font-medium transition-colors"
                    style={{ color: cohort.color, fontWeight: 500 }}
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote
              className="text-[22px] md:text-[28px] leading-snug text-[#1A1A1A] italic mb-6"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              &ldquo;I came in thinking I might want to work in government. I
              left having met a political risk consultant, a development
              economist, and a foreign service officer — none of whom I knew
              existed. That week didn&rsquo;t narrow my options. It multiplied
              them.&rdquo;
            </blockquote>
            <p className="text-[14px] text-[#4A4A4A]/60">
              — Program Participant, Aperion Global Affairs &middot; Washington
              D.C.
            </p>
          </FadeIn>
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
              The pilot cohort is now open.
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
