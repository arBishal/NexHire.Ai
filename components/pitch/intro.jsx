import Link from "next/link";

import TypewriterText from "@/components/effects/typewriter-text";

export default function Intro() {
  return (
    <section
      id="intro"
      className="max-w-5xl h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-48 pb-16"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="max-w-5xl flex flex-col gap-2 font-extrabold text-4xl sm:text-6xl font-mono">
          <span className="text-xl font-light text-text-inactive">
            Context-Aware. Culture-Smart. Clarity-Focused.
          </span>
          <h1>
            Hire, and Get Hired!
            <br />
            Try{" "}
            <span className="inline-block align-middle">
              <TypewriterText />
            </span>
          </h1>
        </div>
        <div className="text-base sm:text-xl text-text-description font-light text-justify sm:text-center max-w-3xl">
          <p>
            AI that reads between the lines—literally.{" "}
            <span className="font-bold">NexHire.Ai</span> evaluates resumes and
            job descriptions with context and cultural nuance. No manual
            screening, no guesswork. Just smart, LLM-powered matches in seconds.
          </p>
        </div>

      </div>

      <Link
        href="/#problem"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono">Hear Us Out!</span>
      </Link>
    </section>
  );
}
