"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ minHeight: "90vh" }}>
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Team collaboration"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/[0.55]" />
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
              OUR STORY
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.1}>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6 max-w-[750px] mx-auto"
              style={{ fontWeight: 300, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              Two paths. One observation. The same conviction.
            </h1>
          </FadeIn>
          <FadeIn onLoad delay={0.2}>
            <p
              className="text-white/90 text-[17px] leading-relaxed max-w-[600px] mx-auto"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}
            >
              A refugee who became a White House national security official. An
              educator who studied learning across continents. They arrived at
              the same problem from opposite directions — and decided to build
              the solution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Origin — Founders */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE FOUNDERS
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-20"
              style={{ fontWeight: 300 }}
            >
              Different backgrounds. The same question.
            </h2>
          </FadeIn>

          {/* Kerri's story — text left, accent right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            <FadeIn>
              <div>
                <h3
                  className="text-[#1B2A4A] text-[20px] mb-6"
                  style={{ fontWeight: 600 }}
                >
                  Kerri Fulginiti — Co-Founder &amp; Curriculum Lead
                </h3>
                <div className="space-y-5 text-[#4A4A4A] text-[16px]" style={{ lineHeight: 1.8 }}>
                  <p>
                    Kerri grew up in a family of educators — immersed from an
                    early age in the conviction that teaching is the mechanism
                    through which a society either expands or limits what the
                    next generation can become. She built her career on that
                    conviction, working in two of the country&rsquo;s most
                    respected school systems: Fairfax County, Virginia, and Eanes
                    ISD in Texas.
                  </p>
                  <p>
                    In Fairfax County, she worked at a Title I school focused on
                    gifted and talented education. What she saw crystallized
                    something she would carry forward: talent is distributed
                    equally across zip codes, but opportunity is not. The
                    students had extraordinary capability. What many lacked was
                    the exposure to channel it into something purposeful.
                  </p>
                  <p>
                    She went deeper than classroom observation — collaborating
                    with research universities on applied mathematics pedagogy,
                    studying how thoughtful intervention design changes outcomes.
                    The evidence was consistent: the limiting factor was never
                    the students. It was always the system.
                  </p>
                  <p>
                    Then came the experience that reframed everything. Kerri was
                    selected for the Fulbright Japan fellowship — an immersive
                    program that placed American educators inside Japanese
                    schools and communities for three weeks. Removed from her own
                    context, placed inside a fundamentally different one, she
                    experienced firsthand what happens when access to new
                    environments transforms how you think. The realization was
                    immediate: if immersive access could do this for educators,
                    imagine what it could do for students.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-start lg:items-center h-full">
                <div
                  className="bg-[#1B2A4A] rounded-lg border-l-[6px] border-l-[#1A9E96]"
                  style={{ padding: "40px" }}
                >
                  <p
                    className="text-white text-[17px] italic"
                    style={{ fontFamily: "var(--font-lora), serif", lineHeight: 1.8 }}
                  >
                    &ldquo;If immersive access could do this for educators,
                    imagine what it could do for students.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Dinh's story — accent left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <div className="flex items-start lg:items-center h-full">
                <div
                  className="bg-[#1B2A4A] rounded-lg border-l-[6px] border-l-[#1A9E96]"
                  style={{ padding: "40px" }}
                >
                  <p
                    className="text-white text-[17px] italic"
                    style={{ fontFamily: "var(--font-lora), serif", lineHeight: 1.8 }}
                  >
                    &ldquo;He discovered these careers because someone showed
                    them to him — because at critical moments, he was given
                    access to people and environments that revealed possibilities
                    he couldn&rsquo;t have imagined on his own.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <div>
                <h3
                  className="text-[#1B2A4A] text-[20px] mb-6"
                  style={{ fontWeight: 600 }}
                >
                  Dinh Lai — Co-Founder &amp; Program Director
                </h3>
                <div className="space-y-5 text-[#4A4A4A] text-[16px]" style={{ lineHeight: 1.8 }}>
                  <p>
                    In the late 1970s, Dinh Lai&rsquo;s family escaped communist
                    Vietnam as political asylum seekers. They arrived in the
                    United States with nothing except what refugees carry: the
                    hope that a new country would offer what the old one no
                    longer could.
                  </p>
                  <p>
                    The United States government granted them political asylum.
                    Dinh&rsquo;s parents worked relentlessly. And Dinh was
                    relentlessly curious — about how the world worked, about what
                    people did for a living, about what was possible beyond the
                    boundaries of what he could see. But curiosity without
                    direction only goes so far. Mentors and sponsors appeared at
                    critical moments, giving that curiosity shape and opening
                    doors that hard work alone could not have unlocked. Teachers
                    saw potential and invested in it. The American system, at its
                    best, did what it promises: it gave a family with nothing a
                    legitimate path to everything.
                  </p>
                  <p>
                    Dinh became a Presidential Management Fellow and entered
                    public service — drawn by the desire to give back to the
                    country that had transformed his family&rsquo;s trajectory.
                    He served in the Pentagon in the Office of the Secretary of
                    Defense, where he walked corridors where the strategic
                    decisions that had shaped his family&rsquo;s fate were made.
                    He served on the National Security Council at the White
                    House, working at the intersection of policy and national
                    interest at the highest levels of government. He represented
                    the United States in an official capacity — a fact that still
                    stops him cold when he considers it: someone who entered this
                    country as a political asylum seeker, representing it to the
                    world.
                  </p>
                  <p>
                    His career moved into the private sector and across the
                    globe: international trade at Cargill, global business at
                    MetLife in Tokyo, and executive leadership at a
                    Singapore-based startup he helped scale to over 40 markets
                    and a valuation exceeding $2 billion.
                  </p>
                  <p>
                    Through all of it — the Pentagon, the White House, the
                    boardrooms in Tokyo — one question persisted: How did I get
                    here? Not self-congratulation. Genuine inquiry. Dinh grew up
                    in a refugee family with no professional networks in
                    Washington. No one could have described what a political risk
                    consultant does or mapped the path from college to the State
                    Department. The curiosity was always there — but he
                    discovered these careers because someone channeled it,
                    because at critical moments, he was given access to people
                    and environments that revealed possibilities he couldn&rsquo;t
                    have imagined on his own.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Convergence */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[760px] px-6 lg:px-8 text-center">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              WHY APERION EXISTS
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-12"
              style={{ fontWeight: 300 }}
            >
              The same problem. Seen from opposite sides.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6 text-left" style={{ lineHeight: 1.8 }}>
              <p className="text-white/80 text-[16px]">
                Kerri saw it from the supply side: an educator who spent years
                inside the systems responsible for preparing students and
                watched those systems fall short. Not from lack of effort, but
                from structural limitations no amount of incremental improvement
                could overcome. School counselors stretched too thin. CTE
                programs built for technical careers, not knowledge-economy
                fields. Digital platforms that offered information but not
                experience.
              </p>
              <p className="text-white/80 text-[16px]">
                Dinh saw it from the demand side: a refugee who benefited from
                access to institutions and career environments that most
                students never encounter. He knows — from lived experience, not
                theory — that standing in a Pentagon briefing room changes a
                young person in ways that reading about national security
                cannot. That meeting a political risk analyst transforms a vague
                interest in &ldquo;global stuff&rdquo; into a specific,
                actionable path. That the moment of discovery requires being
                there.
              </p>
              <p className="text-white/80 text-[16px]">
                Together, they saw that the career exposure crisis facing
                American students isn&rsquo;t a student problem. It&rsquo;s a
                systems problem. Students don&rsquo;t lack ambition or drive.
                They lack access to the careers, professionals, and environments
                that would transform how they see their futures. The solution
                doesn&rsquo;t require replacing what exists. It requires
                building something new alongside it — a private-sector
                complement that provides the immersive, practitioner-led,
                place-based career exposure that schools cannot replicate with
                existing resources. Teacher-led, because teachers are the only
                adults who know students deeply enough to guide career
                exploration with real impact — and because so many teachers
                entered the profession precisely to change lives, only to find
                that the classroom walls limit how far that influence can reach.
                This is the vehicle that extends their impact beyond those
                walls, giving them the tools and the platform to do what they
                became teachers to do in the first place. Immersive, because
                physical presence in authentic professional environments creates
                understanding that virtual alternatives cannot match. And
                curriculum-integrated, because isolated experiences fade while
                connected ones compound.
              </p>
            </div>

            <div className="w-16 h-[2px] bg-[#1A9E96] mx-auto mt-12 mb-10" />
            <p
              className="text-white text-[17px] italic text-center"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              The limiting factor was never the students. It was always what the
              system offered them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Mission */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[760px] px-6 lg:px-8 text-center">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE MISSION
            </p>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-10"
              style={{ fontWeight: 300 }}
            >
              Wendy Kopp built Teach For America from a Princeton thesis. Sal
              Khan built Khan Academy from a closet.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6 text-left" style={{ lineHeight: 1.8 }}>
              <p className="text-[#4A4A4A] text-[16px]">
                Both started from the conviction that a real problem had a real
                solution — if someone would build the infrastructure to make it
                possible. Aperion starts from a similar conviction: that the
                career exposure crisis in American high schools isn&rsquo;t a
                student problem. It&rsquo;s a systems problem. Students
                don&rsquo;t lack ambition, intelligence, or drive. They lack
                access to the careers, professionals, and environments that
                would transform how they see their futures.
              </p>
              <p className="text-[#4A4A4A] text-[16px]">
                Kerri knows this because she spent her career inside the systems
                that are supposed to provide that map, and watched them fall
                short despite the best efforts of the educators within them.
                Dinh knows this because he was one of those students — a refugee
                kid with no map to the careers he&rsquo;d eventually build.
                Together, they&rsquo;re building the bridge between what the
                system offers and what students need. Between the career
                exploration students are told to do and the career exposure that
                actually changes trajectories. Between the five careers a
                student can name at graduation and the hundreds that exist but
                remain invisible without access.
              </p>
              <p className="text-[#4A4A4A] text-[16px]">
                And as emerging technologies — artificial intelligence, climate
                tech, quantum computing, biotechnology — create entirely new
                careers that don&rsquo;t yet have names, the gap will only
                widen. Students need a vehicle that can open doors not just to
                the careers of today, but to the ones being invented tomorrow.
                That vehicle doesn&rsquo;t exist yet. We&rsquo;re building it.
              </p>
            </div>

            <div
              className="bg-[#1B2A4A] rounded-sm border-l-[6px] border-l-[#1A9E96] text-left mx-auto max-w-[760px]"
              style={{ padding: "40px", marginTop: "48px" }}
            >
              <p
                className="text-white text-[17px] italic mb-5"
                style={{ fontFamily: "var(--font-lora), serif", lineHeight: 1.8 }}
              >
                &ldquo;We open doors students didn&rsquo;t know existed —
                immersive experiences with real professionals in authentic
                environments that turn curiosity into clarity and clarity into
                genuine inspiration.&rdquo;
              </p>
              <p
                className="text-[#1A9E96] text-[12px]"
                style={{ fontWeight: 300, letterSpacing: "0.1em" }}
              >
                APERION MISSION
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/programs"
                className="inline-block rounded-full bg-[#1A9E96] px-10 py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
                style={{ fontWeight: 500 }}
              >
                See the Program &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Name */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[600px] px-6 lg:px-8 text-center">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-10"
              style={{ fontWeight: 500 }}
            >
              THE NAME
            </p>
            <p
              className="text-[#1B2A4A] italic mb-8"
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "5rem",
                lineHeight: 1.1,
              }}
            >
              aperio
            </p>
            <p
              className="text-[#4A4A4A] text-[16px]"
              style={{ fontWeight: 300, lineHeight: 1.8 }}
            >
              From the Latin <em>aperio</em>: to open, to reveal, to uncover.
              That&rsquo;s what this company does. We open doors students
              didn&rsquo;t know existed — delivering career inspiration through
              immersive, real-world experiences with professionals who show them
              what&rsquo;s possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What We're Building */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeIn>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-4"
              style={{ fontWeight: 500 }}
            >
              THE VISION
            </p>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-16"
              style={{ fontWeight: 300 }}
            >
              A generation that chooses careers through discovery — not default.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div className="space-y-5" style={{ lineHeight: 1.8 }}>
                <p className="text-white/80 text-[16px]">
                  Today, the average high school student can name about five
                  careers at graduation. Two of them are usually their
                  parents&rsquo; jobs. The rest come from TV. That&rsquo;s the
                  window most students choose from — not because they lack
                  curiosity, but because no mechanism exists to open a bigger
                  one.
                </p>
                <p className="text-white/80 text-[16px]">
                  And as artificial intelligence, climate technology, quantum
                  computing, and biotechnology create entirely new careers that
                  don&rsquo;t yet have names, that gap will only widen. Students
                  need a vehicle that opens doors not just to the careers of
                  today, but to the ones being invented tomorrow.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5" style={{ lineHeight: 1.8 }}>
                <p className="text-white/80 text-[16px]">
                  Aperion starts with Washington D.C. and the Global Affairs
                  program — the full ecosystem of international affairs, in the
                  city where that work is concentrated. From there: technology in
                  San Francisco. Finance in New York. Healthcare in Boston.
                  Climate across multiple cities.
                </p>
                <p className="text-white/80 text-[16px]">
                  The long-term ambition isn&rsquo;t a travel program. It&rsquo;s
                  a generation that arrives at the crossroads of education and
                  career with genuine exposure, informed curiosity, and the
                  confidence that comes from having been in the rooms — not just
                  read about them.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-[#1A1A1A] text-[36px] md:text-[48px] leading-tight mb-10"
              style={{ fontWeight: 300 }}
            >
              Ready to open some doors?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
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
                Get in Touch &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
