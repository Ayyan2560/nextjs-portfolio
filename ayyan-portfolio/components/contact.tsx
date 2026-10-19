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
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (submissionError) {
      console.error("Form submission failed:", submissionError);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="border-t border-[#deddd5] bg-[#ebe9e1] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-xs text-[#2855e8]">04 /</span>
          <span className="h-px w-8 bg-[#2855e8]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7169]">Get in touch</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.065em] text-[#171916] sm:text-5xl lg:text-6xl">
              Got a good idea? Let&apos;s make it work.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#62675f]">
              I&apos;m open to internships, collaborative projects, and conversations about building for the web. Send a note and tell me what you have in mind.
            </p>

            <div className="mt-9 border-t border-[#cecdc4]">
              <a href="mailto:ayyan786920@gmail.com" className="flex items-center justify-between gap-4 border-b border-[#cecdc4] py-4 text-sm font-semibold text-[#252923] transition hover:text-[#2855e8]">
                <span>Email me</span>
                <span className="text-right text-[#2855e8]">ayyan786920@gmail.com ↗</span>
              </a>
              <a href="https://www.linkedin.com/in/ayyan-rizwan78692/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 border-b border-[#cecdc4] py-4 text-sm font-semibold text-[#252923] transition hover:text-[#2855e8]">
                <span>LinkedIn</span>
                <span className="text-[#2855e8]">Let&apos;s connect ↗</span>
              </a>
              <a href="https://github.com/Ayyan2560" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 border-b border-[#cecdc4] py-4 text-sm font-semibold text-[#252923] transition hover:text-[#2855e8]">
                <span>GitHub</span>
                <span className="text-[#2855e8]">Explore the code ↗</span>
              </a>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#777b73]">Karachi, Pakistan · PKT (UTC+5)</p>
          </div>

          <div className="rounded-2xl border border-[#d9d8d0] bg-[#f8f7f2] p-5 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[330px] flex-col items-start justify-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d6f56b] text-xl text-[#171916]">✓</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#171916]">Message sent.</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#62675f]">Thanks for reaching out. I&apos;ll get back to you as soon as I can.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-[#2855e8] underline underline-offset-4">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2855e8]">Your message</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#171916]">Tell me a little about it.</h3>
                </div>

                {error && (
                  <div role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Your message could not be sent. Please try again or email me directly.
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#333830]">Your name</label>
                  <input id="contact-name" type="text" name="name" placeholder="Name" required autoComplete="name" className="w-full rounded-lg border border-[#d8d7cf] bg-white px-4 py-3.5 text-sm text-[#171916] placeholder:text-[#999b93] outline-none transition focus:border-[#2855e8]" />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#333830]">Email address</label>
                  <input id="contact-email" type="email" name="email" placeholder="you@example.com" required autoComplete="email" className="w-full rounded-lg border border-[#d8d7cf] bg-white px-4 py-3.5 text-sm text-[#171916] placeholder:text-[#999b93] outline-none transition focus:border-[#2855e8]" />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#333830]">What would you like to build?</label>
                  <textarea id="contact-message" name="message" placeholder="A few details about your idea, role, or project..." rows={5} required className="w-full resize-y rounded-lg border border-[#d8d7cf] bg-white px-4 py-3.5 text-sm text-[#171916] placeholder:text-[#999b93] outline-none transition focus:border-[#2855e8]" />
                </div>

                <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#2855e8] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1c43c6] disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? "Sending…" : "Send message"}
                  {!loading && <span aria-hidden="true">↗</span>}
                </button>
                <p className="text-xs leading-5 text-[#777b73]">Your message is sent through the existing contact form service.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
