"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    q: "Do I have to chaperone the full trip?",
    a: "Yes — and that's intentional. Your presence during the immersive week is central to the Aperion model. You're not a chaperone. You're the program leader. Aperion provides full adult staffing support so you can focus on your students, not logistics.",
  },
  {
    q: "How much time does the pre and post-program work require?",
    a: "Pre-program is three modules over 6–8 weeks — roughly one session per week, with all materials provided by Aperion. Post-program is 2–4 weeks of guided reflection. We calibrate everything to be meaningful without becoming a burden.",
  },
  {
    q: "Can students from any school apply?",
    a: "The pilot program is open to high school students nationally. Students participate as part of a teacher-led cohort, not as individual enrollees — the teacher relationship is central to the model.",
  },
  {
    q: "What does the program cost families?",
    a: "Pricing is all-inclusive and available upon request. We share program investment details directly with teachers and families during the enrollment conversation.",
  },
  {
    q: "What do I need from my school administration?",
    a: "Aperion provides full documentation for administrators — insurance details, supervision ratios, curriculum alignment, and compliance information. We make the approval process straightforward.",
  },
  {
    q: "What if I'm interested but not sure my school is ready?",
    a: "Start the conversation. We work with teachers at every stage — from early curiosity to active enrollment. There's no commitment required to explore whether Aperion is the right fit.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[#1A1A1A] text-[16px]" style={{ fontWeight: 500 }}>
          {q}
        </span>
        <span
          className={`text-[#1A9E96] text-[20px] transition-transform duration-300 shrink-0 ml-4 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[#4A4A4A] text-[15px] leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#1A9E96" fillOpacity="0.12" />
      <path d="M6 10.5l2.5 2.5L14 8" stroke="#1A9E96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const teacherProfiles = {
  left: [
    {
      title: "AP Government / History / IB Humanities",
      desc: "Your curriculum already explores the systems Aperion takes students inside. The program is an extension of what you're already teaching.",
    },
    {
      title: "Model UN Sponsors",
      desc: "Your students already think in terms of nations, policy, and global stakes. Aperion puts them in the rooms where those stakes play out.",
    },
    {
      title: "Social Studies & Civics",
      desc: "Career exploration in global affairs is a natural extension of civic education — and a powerful motivator for deeper engagement.",
    },
  ],
  right: [
    {
      title: "College & Career Counselors",
      desc: "You're already having the career conversation. Aperion gives you a tool that goes further than any assessment or career day can.",
    },
    {
      title: "CTE Coordinators",
      desc: "Aperion targets the careers CTE programs can't reach — the ones with no traditional pathway and extraordinary demand.",
    },
    {
      title: "Any teacher who has watched a student drift",
      desc: "If you've ever wished you could give a student a moment of genuine discovery — one that changes how they see what's possible — this is that.",
    },
  ],
};

export default function TeachersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ minHeight: "92vh" }}>
        <img
          src="/Teacher - student presentation - pexels-kampus-5940831.jpg"
          alt="Teacher leading a student presentation"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/[0.50]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(27,42,74,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 flex flex-col justify-center text-center" style={{ minHeight: "92vh", paddingTop: "8rem", paddingBottom: "6rem" }}>
          <FadeIn onLoad>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-6"
              style={{ fontWeight: 500 }}
            >
              FOR TEACHERS
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.1}>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6 max-w-[750px] mx-auto"
              style={{ fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              You&rsquo;re not sending students on a trip. You&rsquo;re leading
              one.
            </h1>
          </FadeIn>
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-white/90 text-[17px] leading-relaxed max-w-[640px] mx-auto mb-10"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}
            >
              Aperion is built for teachers who want to extend their impact
              beyond the classroom — and give students access to careers,
              professionals, and environments the system alone can&rsquo;t
              provide.
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.3}>
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

      {/* Who This Is For */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHO THIS IS FOR
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-8"
              style={{ fontWeight: 300 }}
            >
              For teachers who became teachers to change lives — and want a
              bigger stage to do it.
            </h2>
            <p
              className="text-[#4A4A4A] text-[17px] leading-relaxed italic text-center max-w-[700px] mx-auto mb-16"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              Most teachers entered the profession to make a difference. Many
              find that the classroom walls limit how far that influence can
              reach. Aperion is built for teachers who want to extend their
              impact beyond those walls — and give students access to
              institutions and careers the system alone can&rsquo;t provide.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                title: "Expand what students believe is possible",
                desc: "You already see the potential in your students. Aperion gives you the platform to show them careers, environments, and paths they couldn\u2019t discover on their own \u2014 expanding the map before they have to choose a direction.",
              },
              {
                title: "Be in the room when it happens",
                desc: "The moment a student realizes a career exists \u2014 and that it could be theirs \u2014 is one of the most powerful things a teacher can witness. Aperion puts you in that room, alongside your students, when discovery happens.",
              },
              {
                title: "Bridge inspiration and action",
                desc: "Inspiration without follow-through fades. Because you know your students \u2014 their strengths, their questions, their trajectory \u2014 you\u2019re the only adult who can turn a week of discovery into a changed academic plan, a new extracurricular, a college essay written with genuine conviction.",
              },
              {
                title: "Take your curriculum where it actually happens",
                desc: "You teach about the systems that shape the world. Aperion takes your students inside those systems \u2014 the institutions, the professionals, the decisions. What you\u2019ve been teaching in the classroom becomes real in a way no textbook can replicate.",
              },
              {
                title: "Give every student the access usually reserved for a few",
                desc: "Career exposure has always been unevenly distributed \u2014 a function of zip code, family network, and proximity to opportunity. Aperion democratizes that access. You\u2019re the reason your students get in the room.",
              },
              {
                title: "Go further than the system alone allows",
                desc: "School counselors are stretched too thin. CTE programs don\u2019t reach the careers students need most. Digital platforms offer information, not experience. You\u2019ve seen these gaps up close. Aperion is built to fill them \u2014 with you leading the way.",
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

      {/* Why Teacher-Led Matters */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE DIFFERENCE
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              Other programs assemble strangers. Aperion travels with teachers.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div className="space-y-5">
                <p className="text-white/70 text-[16px] leading-relaxed">
                  Every other program in this space sends students to campus
                  classrooms or assembles cohorts led by staff they&rsquo;ve
                  never met. There is nothing wrong with that. But it produces a
                  fundamentally different experience.
                </p>
                <p className="text-white/70 text-[16px] leading-relaxed">
                  When a teacher who has known a student for two years watches
                  them light up in a Pentagon briefing room — and can connect
                  that moment to what they know about that student&rsquo;s
                  strengths, questions, and trajectory — the impact compounds.
                  The teacher becomes the bridge between inspiration and action.
                </p>
                <p className="text-white/70 text-[16px] leading-relaxed">
                  That bridge is what Aperion is built on. Teacher continuity
                  before, during, and after is not a feature. It is the model.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-5">
              {[
                {
                  title: "Known and trusted",
                  desc: "Students are more open to discovery with an adult they already trust. That openness is where transformation happens.",
                },
                {
                  title: "Context that compounds",
                  desc: "You know which student needs a push and which needs permission to slow down. That knowledge is irreplaceable.",
                },
                {
                  title: "Continuity that converts",
                  desc: "Without post-program integration, inspiration fades. You're the reason it doesn't.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-white border border-black/[0.08] rounded-lg p-6 border-l-[4px] border-l-[#1A9E96]">
                    <h3
                      className="text-[#1A1A1A] text-[16px] mb-2"
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
        </div>
      </section>

      {/* Bringing It To Life — The Teacher's Role */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              BRINGING IT TO LIFE
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Here&rsquo;s what leading an Aperion program actually looks like.
            </h2>
            <p className="text-[#4A4A4A] text-[16px] mb-16 max-w-[720px]">
              The aspiration is real. So is the structure that makes it
              possible. Here is what the experience looks like from the
              teacher&rsquo;s seat — before, during, and after the immersive
              week.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                phase: "Before the Program",
                timing: "6–8 weeks",
                title: "Prepare",
                desc: "You deliver three pre-program modules to your students — calibrated for engagement, not academic burden. Career foundations, global context, and program preparation. Aperion provides everything. You bring the relationship.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4" y="6" width="20" height="18" rx="2" stroke="#1A9E96" strokeWidth="1.5" />
                    <path d="M4 11h20M10 6V3M18 6V3" stroke="#1A9E96" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                phase: "During the Program",
                timing: "6 days",
                title: "Lead",
                desc: "You travel with your students. You're in the rooms with them — the Pentagon, the World Bank, the think tanks. You observe what resonates, ask follow-up questions on their behalf, and help them process what they're experiencing in real time. Your presence is the difference between a trip and a transformation.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 4v8l5 3" stroke="#1A9E96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="6" y="16" width="16" height="8" rx="1.5" stroke="#1A9E96" strokeWidth="1.5" />
                    <path d="M10 16v-2a4 4 0 018 0v2" stroke="#1A9E96" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                phase: "After the Program",
                timing: "2–4 weeks",
                title: "Integrate",
                desc: "You guide students through post-program reflection — a career exploration essay, an updated academic plan, and a civic engagement project. You help them turn what they felt during the week into concrete decisions about courses, extracurriculars, and college applications.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 22l5-5 4 4 7-9" stroke="#1A9E96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="22" cy="8" r="3" stroke="#1A9E96" strokeWidth="1.5" />
                  </svg>
                ),
              },
            ].map((card) => (
              <StaggerItem key={card.title} className="flex">
                <div className="bg-white border border-black/[0.08] rounded-lg p-8 border-t-[4px] border-t-[#1A9E96] flex flex-col h-full">
                  <div className="mb-4">{card.icon}</div>
                  <p className="text-[#4A4A4A]/60 text-[13px] mb-1">
                    {card.phase} &middot; {card.timing}
                  </p>
                  <h3
                    className="text-[#1A1A1A] text-[20px] mb-3"
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

      {/* What Aperion Handles */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHAT WE DO
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              You focus on your students. We handle everything else.
            </h2>
            <p className="text-[#4A4A4A] text-[16px] mb-16 max-w-[640px]">
              Your role is to know your students and lead the experience.
              Aperion manages the rest — end to end.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <h3
                className="text-[#1A1A1A] text-[16px] tracking-[0.08em] uppercase mb-6"
                style={{ fontWeight: 600 }}
              >
                Aperion handles:
              </h3>
              <ul className="space-y-4">
                {[
                  "All logistics — flights, hotel, meals, ground transportation",
                  "Venue access and institutional relationships",
                  "Program curriculum and pre-work materials",
                  "Adult staffing at 1:8–10 ratio",
                  "Insurance, safety protocols, and compliance",
                  "Parent communications and daily updates",
                  "Post-program reflection framework",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#4A4A4A] text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h3
                className="text-[#1A1A1A] text-[16px] tracking-[0.08em] uppercase mb-6"
                style={{ fontWeight: 600 }}
              >
                You bring:
              </h3>
              <ul className="space-y-4">
                {[
                  "Your relationship with your students",
                  "Knowledge of who they are and what they need",
                  "Presence during the immersive week",
                  "Pre and post-program facilitation",
                  "The bridge between inspiration and action",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#1B2A4A] text-[15px] leading-relaxed" style={{ fontWeight: 500 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How to Bring Aperion to Your School */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              GET STARTED
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              Three steps. We make them easy.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                num: "01",
                title: "Express Interest",
                desc: "Fill out the form below or email us. Tell us about your school, your students, and what you're hoping to accomplish. We'll set up a conversation — no commitment required.",
              },
              {
                num: "02",
                title: "We Build the Plan Together",
                desc: "Aperion works with you to identify the right students, prepare the pre-program materials, and handle all logistics. You'll know exactly what to expect before the first module begins.",
              },
              {
                num: "03",
                title: "Lead the Experience",
                desc: "You travel with your students. You're in the rooms. You help them process what they're seeing and connect it to who they are. We support you throughout — before, during, and after.",
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div>
                  <span
                    className="text-[#1A9E96] text-[48px] md:text-[56px] block mb-4"
                    style={{ fontWeight: 300 }}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-white text-[20px] font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              COMMON QUESTIONS
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-12"
              style={{ fontWeight: 300 }}
            >
              Frequently asked.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="border-t border-black/[0.08]">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
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
              Ready to lead the experience?
            </h2>
            <p className="text-white/70 text-[16px] mb-10">
              Tell us about your school and your students. We&rsquo;ll take it
              from there.
            </p>
            <Link
              href="/apply"
              className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] font-medium text-white hover:bg-[#178a83] transition-colors"
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
