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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-blue-500">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let's build something
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Have a project idea, collaboration opportunity, or simply want to
          connect? Feel free to reach out.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">
              Get in touch
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:ayyan786920@gmail.com"
                className="block text-gray-300 hover:text-blue-400"
              >
                ayyan786920@gmail.com
              </a>

              <a
                href="https://github.com/Ayyan2560"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ayyan-rizwan78692/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8">
                <h3 className="text-xl font-semibold text-green-400">
                  Message sent successfully!
                </h3>

                <p className="mt-2 text-gray-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg border border-white/10 px-5 py-2 text-sm hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-gray-500 focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-gray-500 focus:border-blue-500"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-gray-500 focus:border-blue-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}