"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const accordionItems = [
  {
    title: "Is my student safe?",
    content: [
      "Safety is the foundation everything else is built on. Here\u2019s how the program is structured:",
      "Your student\u2019s own teacher leads the group \u2014 not a stranger. Adult-to-student ratio of 1:10, maintained throughout the program. All adults on the program are FBI fingerprint-cleared and background-screened before departure. CPR and First Aid certified staff on-site at all times. $2M+ per-incident insurance coverage, including travel medical, participant accident, and emergency evacuation coverage. Daily photo and video updates sent directly to parents every evening. A dedicated emergency contact line \u2014 always staffed, always answered.",
      "In the event of a medical situation, we have protocols in place for immediate response, including pre-identified medical facilities in the DC area and a crisis communication plan activated within minutes of any incident.",
      "This isn\u2019t a liability checklist. It\u2019s how we operate.",
    ],
  },
  {
    title: "What\u2019s the actual value here?",
    content: [
      "The return on an approximately $4,500 program isn\u2019t a career decided \u2014 it\u2019s a student who arrives at the next set of decisions better equipped to make them.",
      "Aperion accelerates clarity. Students leave with a stronger sense of what energizes them, what questions they want to keep chasing, and what they can confidently set aside. That clarity informs the choices that follow: which courses to take, which extracurriculars are worth investing in, how to frame a college application around something genuine. Not because the program handed them a direction \u2014 but because they built a real experiential foundation to reason from.",
      "The flexibility stays intact. Students who return from Aperion aren\u2019t locked in \u2014 they\u2019re better positioned to keep exploring from a place of informed curiosity rather than guesswork. Discovery doesn\u2019t stop after one week. But a week like this gives it traction.",
      "Compare the alternative: a student who arrives at college with no meaningful exposure to the professional world, changes direction twice, and spends years recovering time and tuition that better information could have saved. Aperion is the investment that sharpens the decisions downstream \u2014 while leaving room for the journey to continue.",
      "All pricing is all-inclusive. Travel, housing, meals, programming, insurance, pre-program curriculum, post-program materials \u2014 one fee, no add-ons, no surprises.",
    ],
  },
  {
    title: "Who\u2019s behind this program?",
    content: [
      "Aperion was founded by Kerri Fulginiti and Dinh Lai.",
      "Kerri is a career educator with experience across Fairfax County Public Schools and Eanes ISD in Texas. She is a Fulbright Scholar who spent three weeks inside Japanese schools and communities \u2014 and built this program because she has spent her career watching the system fall short of what students actually need.",
      "Dinh spent his career inside the institutions the program visits \u2014 including roles at the Pentagon and the White House National Security Council. He built this program because he knows what standing in those rooms does to a young person, and he wants more students to have that access.",
      "Between them: real institutional access, real educational expertise, and 30+ years of combined experience in government, education, and international operations.",
    ],
  },
  {
    title: "Will this be too intense for my student?",
    content: [
      "The program is substantive, not pressure-filled. Students explore; they don\u2019t perform. There\u2019s no competition, no evaluation, no expectation that they arrive with answers.",
      "The design principle is that the experience should feel like an adventure and a privilege \u2014 not an academic exercise. Students who feel they\u2019re in an optional and exciting experience remain open to discovery. Students who feel they\u2019re under pressure close off. We design hard against the second outcome.",
      "Your student doesn\u2019t have to know what they want. They just have to be curious. That\u2019s enough.",
    ],
  },
  {
    title: "What does logistics look like?",
    content: [
      "We handle everything from wheels up to wheels down.",
      "One all-inclusive fee covers: round-trip flights from a hub airport, hotel accommodations (students and teachers in the same hotel), all meals, all ground transportation, full programming, insurance, and pre/post program curriculum materials.",
      "Parents receive: a pre-departure briefing with the full week itinerary, daily photo and video updates, a 24/7 emergency contact line, and a post-program debrief.",
      "You will know where your student is, who they\u2019re with, and what they\u2019re doing. Every day.",
    ],
  },
];

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-white border border-black/[0.08] rounded-lg border-l-[4px] border-l-[#1A9E96] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
      >
        <span
          className="text-[#1A1A1A] text-[17px] lg:text-[18px] pr-4"
          style={{ fontWeight: 600 }}
        >
          {title}
        </span>
        <span
          className={`text-[#1A9E96] text-[22px] transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-6 lg:pb-8 space-y-4">
              {content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#4A4A4A] text-[15px] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ParentsPage() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ minHeight: "90vh" }}>
        <img
          src="/parents-hero.jpg"
          alt="Parent and student together"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/[0.50]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(27,42,74,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 flex flex-col justify-center text-center"
          style={{ minHeight: "90vh", paddingTop: "8rem", paddingBottom: "6rem" }}
        >
          <FadeIn onLoad>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-6"
              style={{ fontWeight: 500 }}
            >
              FOR PARENTS
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.1}>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6 max-w-[800px] mx-auto"
              style={{ fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              Your student is making decisions that will shape the next decade.
              Aperion gives them real exposure to help inform those decisions.
            </h1>
          </FadeIn>
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-white/90 text-[17px] leading-relaxed max-w-[640px] mx-auto mb-10"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}
            >
              Aperion is an immersive career discovery program that places high
              school students inside real institutions — alongside the
              professionals who work there. Teacher-led, curriculum-integrated,
              and built around the moment your student is choosing courses,
              colleges, and futures.
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.3}>
            <Link
              href="/programs"
              className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
              style={{ fontWeight: 500 }}
            >
              See the Program &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* The Problem Worth Solving */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHY THIS MATTERS
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              The career exposure gap is real. And the window to close it is
              shorter than you think.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div className="space-y-5">
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                  Research shows high school students can name about five careers
                  at graduation. Usually two of them are their parents&rsquo;
                  jobs. The rest come from TV and social media — not from
                  exposure to the actual range of what&rsquo;s possible.
                </p>
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                  83% of high school graduates lack confidence in their career
                  choices. Not because they&rsquo;re not capable. Because they
                  were never given the chance to explore with any real depth or
                  context.
                </p>
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
                  Sophomore and junior year is when that starts to matter: course
                  selection, college application positioning, extracurricular
                  choices. The decisions that get made in those years are made
                  with almost no information. Aperion exists to change that —
                  before those decisions get locked in.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-4">
                {[
                  { stat: "5", label: "careers the average student can name at graduation" },
                  { stat: "83%", label: "of graduates lack confidence in their career direction" },
                  { stat: "90%", label: "of students want more career exploration \u2014 and aren\u2019t getting it" },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="bg-white border border-black/[0.08] rounded-lg p-6 border-t-[4px] border-t-[#1A9E96] text-center flex-1"
                  >
                    <p
                      className="text-[#1B2A4A] text-[36px] mb-2"
                      style={{ fontWeight: 300 }}
                    >
                      {item.stat}
                    </p>
                    <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Aperion Actually Is */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE PROGRAM
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Not a tour. Not a summer camp. Something that requires more of
              your student — and gives back more in return.
            </h2>
            <p
              className="text-[#4A4A4A] text-[17px] leading-relaxed italic text-center max-w-[700px] mx-auto mb-16"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Aperion is an immersive career discovery program. We take small
              cohorts of high school students inside the real institutions of a
              specific professional field — alongside the practitioners doing the
              work — led by their own teacher, with curriculum before and after
              the experience.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: "Real institutions, real professionals",
                desc: "Not campus simulations. Not guest speakers in a hotel ballroom. Your student stands in Pentagon briefing rooms, World Bank headquarters, and the offices of think tanks that shape foreign policy \u2014 meeting the people who show up to those buildings every day.",
              },
              {
                title: "Teacher-led, not stranger-led",
                desc: "Your student\u2019s own teacher leads the program \u2014 not a tour guide or a program coordinator they just met. The trusted adult relationship is already built. That continuity \u2014 before, during, and after \u2014 is what turns a week of exposure into lasting clarity.",
              },
              {
                title: "Discovery, not pressure",
                desc: "We don\u2019t tell students what to become. Some leave knowing exactly what direction they want to pursue. Some leave knowing what doesn\u2019t fit \u2014 which is equally valuable. All leave with wider horizons and sharper questions. Nothing is decided; everything is expanded.",
              },
              {
                title: "Explored alongside peers",
                desc: "Your student doesn\u2019t go alone \u2014 and they don\u2019t go with strangers assembled from a spreadsheet. They go with a cohort of peers who are navigating the same big questions about direction and identity. The conversations that start in a Pentagon hallway or a World Bank conference room don\u2019t stop when the week ends.",
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

      {/* Your Role in the Process */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              YOUR ROLE
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Parents aren&rsquo;t bystanders. You&rsquo;re part of how this
              works.
            </h2>
            <p
              className="text-[#4A4A4A] text-[17px] leading-relaxed italic text-center max-w-[700px] mx-auto mb-16"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Career discovery doesn&rsquo;t begin when your student boards a
              plane and end when they come home. The conversations you have —
              before, during, and after — are part of what makes the experience
              stick. Aperion gives you the tools and guidance to have them well.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                title: "Before: Prime the conversation",
                desc: "We send parents a pre-program guide that explains what your student will experience, what questions to ask in the weeks leading up to departure, and how to create space for curiosity without adding pressure. The goal is to arrive with an open mind \u2014 and parents help set that tone.",
              },
              {
                title: "During: Stay connected without hovering",
                desc: "Daily photo and video updates keep you close to the experience as it unfolds. We also share brief evening summaries of what the cohort did and saw each day \u2014 so you can ask specific, informed questions when your student calls, rather than the generic \u2018how was it?\u2019 that gets a one-word answer.",
              },
              {
                title: "After: Turn a week into a direction",
                desc: "The week ends. The thinking doesn\u2019t. We provide parents with a post-program conversation guide \u2014 specific prompts and frameworks to help your student process what resonated, what surprised them, and what they want to explore next. The students who get the most from Aperion are the ones whose parents stay curious alongside them.",
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

          <FadeIn delay={0.2}>
            <p
              className="text-[#4A4A4A] text-[16px] leading-relaxed italic text-center mt-12 max-w-[640px] mx-auto"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Career discovery is a conversation, not an event. Aperion supports
              your side of it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
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
            {[
              { stat: "1:8\u201310", desc: "student-to-adult ratio" },
              { stat: "FBI-cleared", desc: "adult staff throughout" },
              { stat: "$2M+", desc: "liability insurance coverage" },
              { stat: "Daily", desc: "parent updates" },
              { stat: "CPR-certified", desc: "staff on all activities" },
              { stat: "Comprehensive", desc: "evacuation insurance" },
            ].map((fact) => (
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

      {/* The Five Things Parents Need to Know */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHAT PARENTS ASK US
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              The questions every parent asks. Answered directly.
            </h2>
            <p
              className="text-white/85 text-[17px] leading-relaxed italic text-center max-w-[600px] mx-auto mb-16"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              We&rsquo;ve organized this around the five things parents tell us
              matter most. No buried answers.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who Leads the Program */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              PROGRAM LEADERSHIP
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              Founded by people who&rsquo;ve been in the rooms — and built the
              program because they know what access does.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <StaggerItem className="flex">
              <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 flex flex-col h-full">
                <h3
                  className="text-[#1A1A1A] text-[20px] mb-1"
                  style={{ fontWeight: 600 }}
                >
                  Kerri Fulginiti
                </h3>
                <p
                  className="text-[#1A9E96] text-[14px] mb-5"
                  style={{ fontWeight: 500 }}
                >
                  Co-Founder &amp; Curriculum Lead
                </p>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed flex-grow">
                  Kerri is a career educator who has taught in two of the
                  country&rsquo;s most respected school systems: Fairfax County,
                  Virginia and Eanes ISD in Texas. A Fulbright Scholar, she
                  experienced firsthand how immersive access to new professional
                  environments transforms how you think — and spent years inside
                  the systems that are supposed to provide career exposure to
                  students, watching them fall short.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex">
              <div className="bg-white border border-black/[0.08] rounded-lg p-8 lg:p-10 flex flex-col h-full">
                <h3
                  className="text-[#1A1A1A] text-[20px] mb-1"
                  style={{ fontWeight: 600 }}
                >
                  Dinh Lai
                </h3>
                <p
                  className="text-[#1A9E96] text-[14px] mb-5"
                  style={{ fontWeight: 500 }}
                >
                  Co-Founder &amp; Program Director
                </p>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed flex-grow">
                  Dinh&rsquo;s career took him from a refugee upbringing with no
                  professional network to roles at the Pentagon, the White House
                  National Security Council, and executive positions at global
                  companies across Asia. He built Aperion because he knows —
                  from lived experience — that access to institutions and
                  practitioners at the right moment changes what a young person
                  believes is possible for themselves.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <p className="text-center mt-12">
              <Link
                href="/about"
                className="rounded-full bg-[#1A9E96] px-8 py-3 text-[14px] text-white hover:bg-[#178a83] transition-colors inline-block"
                style={{ fontWeight: 500 }}
              >
                More on the founding story &rarr;
              </Link>
            </p>
          </FadeIn>
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
            <p
              className="text-[#1A1A1A] text-[18px] mb-2"
              style={{ fontWeight: 500 }}
            >
              Washington D.C.
            </p>
            <p
              className="text-[#1A9E96] text-[15px] mb-8"
              style={{ fontWeight: 500 }}
            >
              June 7&ndash;13, 2026
            </p>
            <p className="text-[#4A4A4A] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-10">
              Three tracks — National Security, International Business, and
              Global Impact. Six days inside the full ecosystem of international
              affairs: the Pentagon, World Bank, State Department, think tanks,
              embassies, and the professionals who work inside them. Teacher-led.
              All-inclusive. Limited enrollment.
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
              Questions before you&rsquo;re ready to apply?
            </h2>
            <p className="text-white/70 text-[16px] mb-10">
              We&rsquo;re happy to talk through the program, answer questions
              about fit, or connect you with a teacher who&rsquo;s already
              involved.
            </p>
            <Link
              href="/apply"
              className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Get in Touch &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
