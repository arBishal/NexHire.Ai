import Link from "next/link";

import Card from "@/components/base/card";

export default function Business() {
  return (
    <section
      id="business"
      className="max-w-5xl min-h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-24 pb-12"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-bold font-mono"> This is Business</h2>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <Card
          title="Market Opportunity"
        >
          <ul className="list-disc list-inside text-base text-left text-text-description">
            <li> <span className="font-bold">$30B-$45B</span> global recruitment tech market and growing. </li>
            <li> <span className="font-bold">~92%</span> of recruiters say <span className="italic">culture fit</span> is as important as skills. </li>
            <li> Job seekers spend <span className="font-bold">15-25 hours</span> per week tailoring resumes. </li>
          </ul>
        </Card>

        <Card
          title="Target Users"
        >
          <ul className="list-disc list-inside text-base text-left text-text-description">
            <li> <span className="font-bold">Job Seekers:</span> Early-career, career switchers, remote applicants.</li>
            <li> <span className="font-bold">Recruiters/SMEs:</span> Small teams with limited budget for full ATS tools.</li>
          </ul>
        </Card>

        <Card
          title="Revenue Model"
        >
          <ul className="list-disc list-inside text-base text-left text-text-description">
            <li> <span className="font-bold">Freemium</span> for job seekers </li>
            <li> <span className="font-bold">Monthly subscription</span> for Recuiters </li>
          </ul>
        </Card>
      </div>

      <Link
        href="/#relevance"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono">
          {" "}
          How Relevent Is This?{" "}
        </span>
      </Link>
    </section>
  );
}
