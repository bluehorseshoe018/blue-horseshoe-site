"use client";

import { useState } from "react";

export default function AssistantBox() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the Blue Horseshoe Assistant. I can help you explore programs, digital skills resources, and community opportunities.",
    },
  ]);

  const [input, setInput] = useState("");

  async function handleSend() {
  if (!input.trim()) return;

  const userMessage = {
    role: "user",
    content: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const currentInput = input;
  setInput("");

  try {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: currentInput,
        history: messages,
      }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.reply,
      },
    ]);
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Sorry, there was an error connecting to the AI service.",
      },
    ]);
  }
}

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe AI
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Ask the Assistant
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Explore programs, digital skills resources, community opportunities,
          and future workshops through the Blue Horseshoe Assistant.
        </p>
      </div>

      <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-2xl p-4 ${
              message.role === "assistant"
                ? "bg-white/5 text-slate-200"
                : "bg-yellow-300 text-slate-950"
            }`}
          >
            {message.content}
          </div>
        ))}

        <div className="flex gap-3 pt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none"
          />

          <button
            onClick={handleSend}
            className="rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-200"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
