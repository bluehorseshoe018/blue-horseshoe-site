"use client";
import CourseList from "@/components/courses/CourseList";
import AssistantBox from "@/components/ai/AssistantBox";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, HeartPulse, Gamepad2, Network, Users, HandHeart, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: BookOpen,
    title: "Digital Skills & Cyber Masterclasses",
    text: "Hands-on technology education designed to help community members build confidence, career readiness, and practical digital skills.",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Life Development",
    text: "Community workshops focused on wellness, discipline, leadership, self-development, and personal growth.",
  },
  {
    icon: Gamepad2,
    title: "Youth Media & Educational Entertainment",
    text: "Positive digital content, games, and creative learning experiences built to inspire young people and families.",
  },
];

export default function BlueHorseshoeHomepageV2() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_35%)]" />

      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute top-[40%] -left-32 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200">
              <ShieldCheck className="h-4 w-4" />
              Community empowerment through modern innovation
            </div>

            <h1 className="bg-gradient-to-r from-white via-slate-100 to-yellow-200 bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
              Empowering communities through education, wellness, technology, and opportunity.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Blue Horseshoe Foundation creates community-driven programs, masterclasses, and digital initiatives designed to help individuals build skills, improve wellness, and unlock new pathways forward.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-2xl bg-yellow-400 px-6 py-6 text-base font-bold text-slate-950 hover:bg-yellow-300">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
                Join a Masterclass
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[1.7rem] bg-slate-900 p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Featured Masterclass</p>
                    <h2 className="text-3xl font-black">Technology Confidence Masterclass</h2>
                  </div>
                  <div className="rounded-2xl bg-yellow-400/10 p-4 text-yellow-300">
                    <Network className="h-8 w-8" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    "Build confidence using modern technology in everyday life and work environments.",
                    "Learn practical digital skills, online tools, and technology concepts in a beginner-friendly environment.",
                    "Explore interactive demonstrations designed to make technology approachable, useful, and empowering.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-200">
                      <div className="mt-1 h-2 w-2 rounded-full bg-yellow-300" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.03] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Our Mission</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                A modern platform for learning, wellness, and opportunity.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Blue Horseshoe Foundation supports disadvantaged members of the community through practical masterclasses, wellness-focused initiatives, youth-centered media, and entrepreneurial programs designed to create long-term impact.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Card className="h-full rounded-3xl border-white/10 bg-white/[0.06] text-white shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]">
                      <CardContent className="p-8">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300">
                          <Icon className="h-7 w-7" />
                        </div>

                        <h3 className="text-2xl font-bold leading-tight">
                          {pillar.title}
                        </h3>

                        <p className="mt-5 leading-8 text-slate-300">
                          {pillar.text}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="programs" className="relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-slate-950 to-amber-950/20" />

          <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
                Featured Program
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                 Digital Confidence Masterclass
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                 A beginner-friendly masterclass focused on building confidence with modern technology, digital tools, online communication, and practical life skills.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Beginner Friendly",
                  "Practical Digital Skills",
                  "Technology Confidence",
                  "Career Readiness",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <Button className="mt-10 rounded-2xl bg-yellow-400 px-6 py-6 text-base font-bold text-slate-950 hover:bg-yellow-300">
                Apply for the Masterclass
              </Button>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-2xl">
              <div className="grid gap-5">
                {[
                  "Build confidence using modern technology in everyday life",
                  "Learn practical digital terminology, tools, and online communication skills",
                  "Explore interactive demonstrations designed to make technology approachable and useful",
                  "Build confidence with modern technology",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/[0.05] p-5"
                  >
                    <div className="h-3 w-3 rounded-full bg-yellow-300" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
<section
  id="programs"
  className="px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
        Programs & Masterclasses
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
        Real-world education for modern communities.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Blue Horseshoe Foundation provides practical learning experiences
        designed to empower people with technology, entrepreneurship,
        wellness, and financial knowledge.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[

        {
          title: "Technology Confidence",
          desc: "Beginner-friendly workshops that help participants understand and use modern technology with less fear and more confidence.",
        },
        {
          title: "Digital Skills",
          desc: "Practical online and workplace skills, including email, documents, video meetings, job applications, and everyday digital tools.",
        },
        {
          title: "Online Safety & Awareness",
          desc: "Simple, practical guidance on passwords, scams, phishing, safe browsing, privacy, and protecting families online.",
        },
        {
          title: "Career Readiness",
          desc: "Resume support, interview preparation, workplace communication, professionalism, and digital opportunity exploration.",
        },
        {
          title: "Entrepreneurship & Opportunity",
          desc: "Workshops on side hustles, branding, online business basics, financial confidence, and turning ideas into action.",
        },
        {
          title: "Media & Content Creation",
          desc: "Creative workshops focused on storytelling, positive media, social content, youth engagement, and digital expression.",
        },
        {
          title: "Youth Technology Labs",
          desc: "Interactive educational experiences introducing children to modern technology.",
        },
      ].map((program) => (
        <Card
          key={program.title}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white">
              {program.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              {program.desc}
            </p>

            <Button className="mt-8 rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-950 hover:bg-yellow-300">
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
        <section id="media" className="bg-slate-900/70 px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
              Media & Community
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Building positive digital exposure through education, creativity, and community storytelling.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Blue Horseshoe aims to create modern educational media, youth-centered digital experiences, and community-driven initiatives that inspire growth and opportunity.
            </p>
          </div>
        </section>
        
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <AssistantBox />
            <CourseList />
          </div>
        </section>

        <section id="involved" className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2.5rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.04] to-blue-500/10 p-10 shadow-2xl backdrop-blur-2xl md:p-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                  Join the movement.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you want to learn, volunteer, partner, mentor, or support the mission, Blue Horseshoe is building a modern platform focused on community empowerment and future opportunity.
                </p>
              </div>

              <div className="grid gap-4">
                <Button className="rounded-2xl bg-white py-6 text-slate-950 hover:bg-yellow-300">
                  <Users className="mr-2 h-5 w-5" /> Volunteer
                </Button>

                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 py-6 text-white hover:bg-white/10">
                  <HandHeart className="mr-2 h-5 w-5" /> Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

