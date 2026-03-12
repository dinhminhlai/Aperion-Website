"use client";

import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";

export default function StudentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <img
          src="/students-hero.jpg"
          alt="Students exploring a professional environment"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/[0.45]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(27,42,74,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 py-32 lg:py-40">
          <FadeIn onLoad>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-6"
              style={{ fontWeight: 500 }}
            >
              FOR STUDENTS
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.1}>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6 max-w-[700px]"
              style={{ fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              You can&rsquo;t choose what you&rsquo;ve never seen.
            </h1>
          </FadeIn>
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-white/90 text-[17px] leading-relaxed max-w-[580px] mb-10"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}
            >
              Most students graduate knowing about five careers. Aperion exists
              to change that — by putting you in the rooms where real work
              happens, alongside the people doing it.
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.3}>
            <Link
              href="/programs/global-affairs"
              className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
              style={{ fontWeight: 500 }}
            >
              See the Program &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* The Honest Problem */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE REALITY
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              The system wasn&rsquo;t built to show you what&rsquo;s out there.
            </h2>
            <p className="text-[#4A4A4A] text-[17px] leading-relaxed max-w-[680px] mb-16">
              No one is failing you. But there are doors the system
              wasn&rsquo;t built to open.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                title: "Your career knowledge comes from a narrow window",
                desc: "Research shows students can name about five careers at graduation. Two of them are usually their parents\u2019 jobs. The rest come from TV. That\u2019s the window most students choose from \u2014 not because they lack curiosity, but because no one opened a bigger one.",
              },
              {
                title: "The tools you have don\u2019t go far enough",
                desc: "Career assessments tell you what you might like. Career days give you 90 seconds with a stranger in a gymnasium. Neither one puts you in the actual room \u2014 meeting the actual person \u2014 doing the actual work. Information isn\u2019t experience.",
              },
              {
                title: "The exposure gap is real \u2014 but it\u2019s fixable",
                desc: "83% of high school graduates lack confidence in their career choices. Not because they\u2019re not smart enough or motivated enough. Because they never had a chance to explore \u2014 meaningfully, immersively, alongside peers asking the same questions. Aperion is built to fix that.",
              },
            ].map((card) => (
              <StaggerItem key={card.title} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 border-t-[4px] border-t-[#1A9E96] flex flex-col h-full">
                  <h3
                    className="text-[#1A1A1A] text-[17px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* This Is For You — Both of You */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHO THIS IS FOR
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-6"
              style={{ fontWeight: 300 }}
            >
              Whether you know exactly what you want — or have absolutely no
              idea.
            </h2>
            <p
              className="text-white/85 text-[17px] leading-relaxed italic text-center max-w-[600px] mx-auto mb-16"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Aperion is built for two very different students. Both leave with
              something real.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <StaggerItem className="flex">
              <div className="bg-white rounded-lg p-10 flex flex-col h-full">
                <div className="w-16 h-[3px] bg-[#1A9E96] mb-6" />
                <h3
                  className="text-[#1A1A1A] text-[22px] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  You have a direction.
                </h3>
                <div className="text-[#4A4A4A] text-[15px] leading-relaxed space-y-4 flex-grow">
                  <p>
                    You already know you&rsquo;re interested in international
                    affairs, policy, business, or making a global impact.
                    You&rsquo;ve done the research. You&rsquo;ve picked the
                    courses. You think you know where you&rsquo;re headed.
                  </p>
                  <p>
                    Aperion accelerates that. Meeting a political risk consultant
                    at Eurasia Group transforms a vague interest in &ldquo;global
                    stuff&rdquo; into a specific, actionable path. Standing in the
                    Pentagon makes &ldquo;I want to work in national
                    security&rdquo; feel real in a way it never did before. You
                    leave with depth, conviction, and a college essay that writes
                    itself.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="flex">
              <div className="bg-white rounded-lg p-10 flex flex-col h-full">
                <div className="w-16 h-[3px] bg-[#1A9E96] mb-6" />
                <h3
                  className="text-[#1A1A1A] text-[22px] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  You have no idea.
                </h3>
                <div className="text-[#4A4A4A] text-[15px] leading-relaxed space-y-4 flex-grow">
                  <p>
                    You&rsquo;re not sure what you want. Maybe you&rsquo;re good
                    at a lot of things. Maybe nothing has grabbed you yet. Maybe
                    you&rsquo;re doing the courses everyone told you to do, hoping
                    direction will arrive on its own.
                  </p>
                  <p>
                    It won&rsquo;t — unless something shows it to you. Aperion is
                    that something. You&rsquo;ll meet professionals doing work you
                    didn&rsquo;t know existed. Some of it will leave you cold.
                    Some of it will light something up. Both outcomes are
                    valuable. Discovery and elimination are equally useful maps.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <p
              className="text-[#1A9E96] text-[17px] leading-relaxed italic text-center mt-12 max-w-[640px] mx-auto"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              The program doesn&rsquo;t tell you what to become. It expands what
              you know is possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What the Week Actually Feels Like */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE EXPERIENCE
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Not a school trip. Not a resume line. Something harder to explain.
            </h2>
            <p className="text-[#4A4A4A] text-[17px] leading-relaxed max-w-[740px] mb-20">
              The design test for every Aperion program: would you describe it to
              your friends as &ldquo;an amazing trip where I met people doing
              incredible work&rdquo; — or as &ldquo;a school project we had to
              do&rdquo;? The answer has to be the first one. Always.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                num: "01",
                title: "You\u2019re in the actual rooms",
                desc: "Not a campus classroom. Not a virtual tour. The Pentagon briefing room. The World Bank. The think tanks where foreign policy gets made. Physical presence changes what\u2019s possible \u2014 you feel the weight of the work in a way no screen can replicate.",
              },
              {
                num: "02",
                title: "You meet the actual people",
                desc: "Not speakers. Not panels. Practitioners \u2014 intelligence analysts, development economists, political risk consultants, foreign service officers \u2014 who show up to that building every day. You hear about their path in, what the work actually looks like, and what they wish they\u2019d known at your age.",
              },
              {
                num: "03",
                title: "You go with your peers",
                desc: "Discovery is better together. You\u2019ll explore alongside students asking the same big questions about direction and identity \u2014 the same uncertainty, the same curiosity. The peer cohort is part of the experience. The conversations that start in DC don\u2019t stop when you get home.",
              },
            ].map((item) => (
              <StaggerItem key={item.num}>
                <div>
                  <span
                    className="text-[#1A9E96] text-[48px] md:text-[56px] block mb-4"
                    style={{ fontWeight: 300 }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="text-[#1A1A1A] text-[20px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[720px] px-6 lg:px-8 text-center">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE TIMING
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-10"
              style={{ fontWeight: 300 }}
            >
              Sophomore and junior year. The decisions that shape the next
              decade.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6 text-left">
              <p className="text-white/80 text-[16px] leading-relaxed">
                This isn&rsquo;t something to do after you figure out what you
                want. It&rsquo;s how you figure out what you want — before
                you&rsquo;ve committed to a major, before you&rsquo;ve built a
                college application around an interest you&rsquo;re not sure
                about, before you&rsquo;ve spent a year in a direction that
                doesn&rsquo;t fit.
              </p>
              <p className="text-white/80 text-[16px] leading-relaxed">
                Students who arrive at college knowing why they chose their path
                get more from it — better courses, more meaningful
                extracurriculars, and college essays written from genuine
                conviction, not fabricated interest. Aperion builds that clarity
                earlier — while the plan is still forming.
              </p>
            </div>
            <div className="w-16 h-[2px] bg-[#1A9E96] mx-auto mt-12" />
          </FadeIn>
        </div>
      </section>

      {/* What You Leave With */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE OUTCOME
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Not a certificate. A clearer map.
            </h2>
            <p className="text-[#4A4A4A] text-[17px] leading-relaxed max-w-[700px] mb-16">
              You won&rsquo;t leave with a career decided. You&rsquo;ll leave
              with something more useful — a framework for understanding what
              energizes you, what doesn&rsquo;t, and what questions you want to
              keep chasing.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: "Careers you didn\u2019t know existed",
                desc: "You\u2019ll encounter professional paths \u2014 political risk consulting, development finance, humanitarian logistics, trade policy \u2014 that almost no high school student knows are options. Some will resonate. Some won\u2019t. All of them expand the map.",
              },
              {
                title: "Clarity through elimination",
                desc: "Knowing what doesn\u2019t fit is as valuable as knowing what does. Students who return saying \u2018that\u2019s not for me \u2014 but this other thing I saw is fascinating\u2019 have gained enormous clarity. Aperion counts that as a win.",
              },
              {
                title: "A peer cohort who gets it",
                desc: "You\u2019ll spend a week with students who are asking the same questions. That cohort doesn\u2019t disappear when you get home. Shared discovery creates connections that last \u2014 people who were in the rooms with you, asking the same questions, at the same moment.",
              },
              {
                title: "A college application that means something",
                desc: "Students who\u2019ve stood in a Pentagon briefing room and met a foreign service officer don\u2019t have to fabricate interest in their essays. The experience is real. The conviction it produces is real. Admissions officers notice the difference.",
              },
            ].map((card) => (
              <StaggerItem key={card.title} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 border-t-[4px] border-t-[#1A9E96] flex flex-col h-full">
                  <h3
                    className="text-[#1A1A1A] text-[17px] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[15px] leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Current Program */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              NOW ENROLLING
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-3"
              style={{ fontWeight: 300 }}
            >
              Aperion | Global Affairs
            </h2>
            <p className="text-[#1A1A1A] text-[18px] mb-2" style={{ fontWeight: 500 }}>
              Washington D.C.
            </p>
            <p className="text-[#1A9E96] text-[15px] mb-8" style={{ fontWeight: 500 }}>
              June 7&ndash;13, 2026
            </p>
            <p className="text-[#4A4A4A] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-10">
              Three tracks — National Security, International Business, and
              Global Impact. Six days inside the full ecosystem of international
              affairs. The Pentagon, World Bank, State Department, think tanks,
              embassies, and the professionals who work inside them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs/global-affairs"
                className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Explore the Program &rarr;
              </Link>
              <Link
                href="/apply"
                className="inline-block rounded-full border-2 border-[#1B2A4A] px-10 py-4 text-[15px] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white transition-colors"
                style={{ fontWeight: 500 }}
              >
                Apply Now &rarr;
              </Link>
            </div>
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
              The first step is finding out what&rsquo;s out there.
            </h2>
            <p className="text-white/70 text-[16px] mb-10">
              You don&rsquo;t have to know what you want. You just have to be
              curious.
            </p>
            <Link
              href="/apply"
              className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
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
