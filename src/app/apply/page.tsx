"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Shield, Clock, Sparkles } from "lucide-react";

const inputClass =
  "w-full border border-[#D0D0D0] rounded-md px-4 py-3 text-[15px] text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A9E96]/40 focus:border-[#1A9E96] transition-colors";
const labelClass = "block text-[#1A1A1A] text-[13px] mb-2";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    school: "",
    cityState: "",
    grade: "",
    cohort: "",
    referral: "",
    message: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit() {
    if (!form.fullName || !form.email || !form.role || !form.school || !form.cityState) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] flex items-center justify-center text-center" style={{ minHeight: "50vh" }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-32 lg:py-40">
          <FadeIn onLoad>
            <p
              className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-6"
              style={{ fontWeight: 500 }}
            >
              GET STARTED
            </p>
          </FadeIn>
          <FadeIn onLoad delay={0.1}>
            <h1
              className="text-white text-[42px] md:text-[64px] leading-[1.05] mb-6"
              style={{ fontWeight: 300 }}
            >
              Tell us about yourself. We&rsquo;ll take it from there.
            </h1>
          </FadeIn>
          <FadeIn onLoad delay={0.2}>
            <p className="text-white/85 text-[17px] leading-relaxed max-w-[560px] mx-auto">
              Aperion | Global Affairs &middot; Washington D.C. &middot; June
              7&ndash;13, 2026. Enrollment is limited. This form starts the
              conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.65fr] gap-12 lg:gap-16">
            {/* Left — Form */}
            <FadeIn>
              {submitted ? (
                <div className="bg-[#1B2A4A] rounded-lg p-10 lg:p-14 text-center">
                  <h2
                    className="text-white text-[28px] md:text-[36px] mb-4"
                    style={{ fontWeight: 300 }}
                  >
                    You&rsquo;re on our radar.
                  </h2>
                  <p className="text-white/80 text-[16px] leading-relaxed max-w-[480px] mx-auto mb-8">
                    Thanks for reaching out. Someone from the Aperion team will
                    be in touch within 2 business days to answer your questions
                    and walk you through next steps. In the meantime, feel free
                    to explore the program in more detail.
                  </p>
                  <Link
                    href="/programs/global-affairs"
                    className="inline-block rounded-full border-2 border-[#1A9E96] px-10 py-4 text-[15px] text-[#1A9E96] hover:bg-[#1A9E96] hover:text-white transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    Explore the Program &rarr;
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 lg:p-10 shadow-sm">
                  <h2
                    className="text-[#1B2A4A] text-[22px] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Express Your Interest
                  </h2>
                  <p className="text-[#4A4A4A] text-[14px] mb-8">
                    No commitment required. We&rsquo;ll follow up within 2
                    business days.
                  </p>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        Full Name <span className="text-[#1A9E96]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        Email Address <span className="text-[#1A9E96]">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        I am a... <span className="text-[#1A9E96]">*</span>
                      </label>
                      <select
                        value={form.role}
                        onChange={(e) => update("role", e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="teacher">
                          A teacher interested in bringing Aperion to my school
                        </option>
                        <option value="parent">
                          A parent inquiring on behalf of my student
                        </option>
                        <option value="student">
                          A student interested in applying
                        </option>
                      </select>
                    </div>

                    {/* School Name */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        School Name <span className="text-[#1A9E96]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.school}
                        onChange={(e) => update("school", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* City & State */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        City &amp; State{" "}
                        <span className="text-[#1A9E96]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.cityState}
                        onChange={(e) => update("cityState", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* Grade Level */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        Grade Level
                      </label>
                      <select
                        value={form.grade}
                        onChange={(e) => update("grade", e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled>
                          Select grade
                        </option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                        <option value="na">N/A</option>
                      </select>
                    </div>

                    {/* Cohort Interest */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        Cohort Interest
                      </label>
                      <select
                        value={form.cohort}
                        onChange={(e) => update("cohort", e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled>
                          Select a track
                        </option>
                        <option value="national-security">
                          National Security &amp; Defense Policy
                        </option>
                        <option value="international-business">
                          International Business &amp; Trade
                        </option>
                        <option value="global-impact">
                          Global Impact &amp; Development
                        </option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    {/* Referral */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        How did you hear about Aperion?
                      </label>
                      <select
                        value={form.referral}
                        onChange={(e) => update("referral", e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="teacher">From a teacher</option>
                        <option value="parent-student">
                          From another parent or student
                        </option>
                        <option value="social-media">Social media</option>
                        <option value="web-search">Web search</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass} style={{ fontWeight: 500 }}>
                        Anything you&rsquo;d like us to know?
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Tell us about your student, your school, your questions — whatever feels relevant."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full mt-8 rounded-full bg-[#1A9E96] py-4 text-[15px] text-white hover:bg-[#178a83] transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Submit My Interest &rarr;
                  </button>

                  <p
                    className="text-[#4A4A4A]/60 text-[13px] text-center mt-5 italic"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                  >
                    We do not share your information. Submitting this form does
                    not constitute enrollment or payment.
                  </p>
                </div>
              )}
            </FadeIn>

            {/* Right — Context Panel */}
            <FadeIn delay={0.15}>
              <div className="lg:sticky lg:top-32">
                <p
                  className="text-[#1A9E96] text-[12px] tracking-[0.2em] mb-8"
                  style={{ fontWeight: 500 }}
                >
                  WHAT HAPPENS NEXT
                </p>

                <div className="space-y-8 mb-10">
                  {[
                    {
                      num: "01",
                      title: "We follow up",
                      desc: "Within 2 business days, someone from the Aperion team reaches out directly \u2014 by email or phone, whichever you prefer.",
                    },
                    {
                      num: "02",
                      title: "We answer your questions",
                      desc: "No pressure, no pitch. We want to make sure the program is the right fit for your student and your school before anyone commits to anything.",
                    },
                    {
                      num: "03",
                      title: "You decide",
                      desc: "If it\u2019s a match, we walk you through enrollment. If the timing isn\u2019t right, we\u2019ll keep you informed as future programs open.",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span
                        className="text-[#1A9E96] text-[24px] shrink-0"
                        style={{ fontWeight: 300 }}
                      >
                        {step.num}
                      </span>
                      <div>
                        <h3
                          className="text-[#1B2A4A] text-[15px] mb-1"
                          style={{ fontWeight: 600 }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-12 h-[2px] bg-[#1A9E96] mb-8" />

                <div>
                  <p
                    className="text-[#1A9E96] text-[11px] tracking-[0.15em] mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    APERION | GLOBAL AFFAIRS
                  </p>
                  <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                    Washington D.C. &middot; June 7&ndash;13, 2026
                  </p>
                  <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
                    Three cohort tracks &middot; Limited enrollment
                  </p>
                  <p className="text-[#4A4A4A] text-[14px] leading-relaxed mt-2">
                    Questions?{" "}
                    <span className="text-[#1A9E96]">aperion.co</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reassurance Strip */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <Shield className="text-[#1A9E96]" size={24} strokeWidth={1.5} />
                <p className="text-[#4A4A4A] text-[14px]">
                  Your information is never shared
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="text-[#1A9E96]" size={24} strokeWidth={1.5} />
                <p className="text-[#4A4A4A] text-[14px]">
                  Response within 2 business days
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Sparkles className="text-[#1A9E96]" size={24} strokeWidth={1.5} />
                <p className="text-[#4A4A4A] text-[14px]">
                  No commitment required to inquire
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-white text-[36px] md:text-[48px] leading-tight mb-4"
              style={{ fontWeight: 300 }}
            >
              Not ready to apply yet?
            </h2>
            <p className="text-white/70 text-[16px] mb-10">
              Explore the program, read about the founders, or see what teachers
              are saying.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="/programs/global-affairs"
                className="text-[#1A9E96] text-[15px] hover:underline transition-colors"
                style={{ fontWeight: 500 }}
              >
                The Program &rarr;
              </Link>
              <Link
                href="/about"
                className="text-[#1A9E96] text-[15px] hover:underline transition-colors"
                style={{ fontWeight: 500 }}
              >
                Our Story &rarr;
              </Link>
              <Link
                href="/teachers"
                className="text-[#1A9E96] text-[15px] hover:underline transition-colors"
                style={{ fontWeight: 500 }}
              >
                For Teachers &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
