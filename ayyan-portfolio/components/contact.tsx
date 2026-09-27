"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setLoading(true);
  setError(false);

  const form = event.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/maewvald", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(true);
    }
  } catch (error) {
    console.error("Form submission failed:", error);
    setError(true);
  } finally {
    setLoading(false);
  }
}

  return (
    <section id="contact" className="relative px-6 py-28 border-t border-white/[0.06] bg-[#02050c]">
      <div className="mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400">
          Get In Touch
        </div>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Let&apos;s build something exceptional.
        </h2>

        <p className="mt-4 max-w-2xl text-base text-slate-400">
          Have an open role, freelance project, or collaboration in mind?
          I am currently open to exciting opportunities.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="glow-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">Contact Details</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Feel free to email directly or reach out through my networks.
              </p>

              <div className="mt-6 space-y-3.5">
                <a
                  href="mailto:ayyan786920@gmail.com"
                  className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-slate-300 transition hover:border-blue-500/40 hover:bg-white/[0.05] hover:text-white"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400">Email</span>
                    <span className="font-medium text-slate-200">ayyan786920@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-slate-300">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400">Location</span>
                    <span className="font-medium text-slate-200">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Profiles
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Ayyan2560"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayyan-rizwan78692/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glow-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md">
              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Message sent successfully!</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Thanks for reaching out. I will get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending message...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        Send Message
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}