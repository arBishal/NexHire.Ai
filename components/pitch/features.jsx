import Link from "next/link";

import Card from "@/components/base/card";

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-5xl min-h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-30 pb-12"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-bold font-mono"> The Features</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full">
        <Card
          title="For Candidates"
          subtitle="Upload resume + job description."
        >
          <p>Get:</p>
          <ul className="list-disc list-inside text-base text-left text-text-description">
            <li>Match Score (skills & culture).</li>
            <li>Improvement Suggestions.</li>
            <li>Resume Snippet Rewrites.</li>
            <li>Similar Job Recommendations.</li>
          </ul>
        </Card>

        <Card
          title="For Recruiters"
          subtitle="Upload multiple resumes + job spec + team culture."
        >
          <p>Get:</p>
          <ul className="list-disc list-inside text-base text-left text-text-description">
            <li>Ranked Candidate List.</li>
            <li>Culture Fit Breakdown.</li>
            <li>Short Justification for Suggestions.</li>
            <li>Similar Candidates Suggestions.</li>
          </ul>
        </Card>
      </div>

      <h4 className="text-2xl font-semibold italic">
        “Features that think like a Recruiter. And a Candidate.”
      </h4>

      <Link
        href="/#edge"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono">
          Why Us Over Others?
        </span>
      </Link>
    </section>
  );
}
