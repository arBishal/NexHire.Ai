import Link from "next/link";
import Card from "@/components/base/card";

export default function Problem() {
  return (
    <section
      id="problem"
      className="max-w-5xl min-h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-30 pb-12"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-4xl font-bold font-mono"> The Problem</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full">
        <Card
          title="Candidates"
          subtitle="Lack tools for intelligent resume targeting."
        >
          <ul className="list-disc list-inside text-sm text-left text-text-description">
            <li>Don’t know how to tailor resumes.</li>
            <li>Miss good opportunities due to minor mismatches.</li>
          </ul>
        </Card>

        <Card
          title="Recruiters"
          subtitle="High noise-to-signal ratio in applicant pools."
        >
          <ul className="list-disc list-inside text-sm text-left text-text-description">
            <li>Spend hours sifting through mismatched resumes.</li>
            <li>Struggle with cultural fit evaluation.</li>
          </ul>
        </Card>

        <Card
          title="Hiring Systems Today"
          subtitle="Mostly keyword-matching or expensive ATS integrations."
        >
        </Card>

        <Card
          title="Manual Screening"
          subtitle="Time-consuming, inconsistent, and biased."
        >
        </Card>
      </div>

      <h4 className="text-2xl font-semibold italic">
        “The hiring process is broken—both sides are frustrated.”
      </h4>

      <Link
        href="/#solution"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono">The Solution?</span>
      </Link>
    </section>
  );
}
