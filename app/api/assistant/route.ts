import { NextResponse } from "next/server";
import { blueHorseshoeKnowledge } from "@/lib/knowledge";

const programs = {
  digitalConfidence: {
    name: "Digital Confidence",
    description:
      "A beginner-friendly masterclass that helps people use modern technology with less fear and more independence.",
    nextStep: "Visit the Programs page to learn more about Digital Confidence.",
  },
  onlineSafety: {
    name: "Online Safety & Awareness",
    description:
      "Practical guidance on passwords, scams, phishing, privacy, safe browsing, and protecting families online.",
    nextStep: "Explore the Online Safety program or contact Blue Horseshoe for workshop details.",
  },
  entrepreneurship: {
    name: "Digital Entrepreneurship",
    description:
      "Workshops that introduce branding, side hustles, online business basics, and turning ideas into action.",
    nextStep: "Check the Programs page for entrepreneurship workshops.",
  },
  youth: {
    name: "Youth Technology Labs",
    description:
      "Creative, beginner-friendly activities that introduce young people to technology, media, digital tools, and problem-solving.",
    nextStep: "Visit the Media or Programs page for youth-focused initiatives.",
  },
};

export async function POST(req: Request) {
  const body = await req.json();
  const message = String(body.message || "").toLowerCase();
  const history = Array.isArray(body.history) ? body.history : [];
const previousText = history
  .map((item: any) => String(item.content || ""))
  .join(" ")
  .toLowerCase();

let mode = "general";

if (
  previousText.includes("job") ||
  previousText.includes("career") ||
  previousText.includes("work")
) {
  mode = "career";
}

if (
  previousText.includes("son") ||
  previousText.includes("daughter") ||
  previousText.includes("kids") ||
  previousText.includes("children")
) {
  mode = "youth";
}
  let reply = blueHorseshoeKnowledge.mission;
  if (
  previousText.includes("son") &&
  (message.includes("age") ||
    message.includes("games") ||
    message.includes("likes") ||
    message.includes("he"))
) {
  reply =
    "Since you mentioned your son, Youth Technology Labs may be the best fit. If he enjoys games, we can introduce him to technology through creative activities like digital storytelling, beginner-friendly problem solving, and positive media projects.";
}
  if (message.includes("son") || message.includes("daughter") || message.includes("kids") || message.includes("children") || message.includes("youth")) {
    reply = `${programs.youth.name}: ${programs.youth.description} ${programs.youth.nextStep}`;
  } else if (message.includes("scam") || message.includes("password") || message.includes("safe") || message.includes("privacy") || message.includes("phishing")) {
    reply = `${programs.onlineSafety.name}: ${programs.onlineSafety.description} ${programs.onlineSafety.nextStep}`;
  } else if (message.includes("business") || message.includes("side hustle") || message.includes("entrepreneur") || message.includes("brand")) {
    reply = `${programs.entrepreneurship.name}: ${programs.entrepreneurship.description} ${programs.entrepreneurship.nextStep}`;
  } else if (message.includes("computer") || message.includes("technology") || message.includes("digital") || message.includes("tech")) {
    reply = `${programs.digitalConfidence.name}: ${programs.digitalConfidence.description} ${programs.digitalConfidence.nextStep}`;
  } else if (message.includes("volunteer") || message.includes("mentor") || message.includes("help")) {
    reply = blueHorseshoeKnowledge.getInvolved;
  } else if (message.includes("program") || message.includes("class") || message.includes("masterclass")) {
    reply =
  "Blue Horseshoe currently offers: " +
  blueHorseshoeKnowledge.programs
    .map((program) => program.name)
    .join(", ") +
  ".";
  }
if (mode === "career" && message.includes("remote")) {
  reply =
    "Since you're interested in remote opportunities, Blue Horseshoe may recommend Digital Entrepreneurship, Media & Content Creation, and Digital Confidence pathways to help build online income and remote-work skills.";
}

if (mode === "career" && message.includes("computer")) {
  reply =
    "If you're still building confidence with computers, the Digital Confidence program is designed to help participants become more comfortable with modern technology and online tools.";
}

if (mode === "youth" && message.includes("games")) {
  reply =
    "Since your child enjoys games, Youth Technology Labs can introduce technology through creative digital activities, beginner-friendly media creation, storytelling, and interactive learning.";
}
  return NextResponse.json({ reply });
}
