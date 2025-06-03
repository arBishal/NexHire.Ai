import TypewriterText from "@/components/typewriter-text";
import Button from "@/components/button";

export default function Intro() {
  return (
    <section
      id="intro"
      className="max-w-5xl h-screen text-center flex flex-col items-center justify-center gap-8 px-6 py-24"
    >
      <div className="max-w-5xl font-extrabold text-4xl sm:text-6xl font-mono">
        <h1>
          Hire, and Get Hired!
          <br />
          Try{" "}
          <span className="inline-block align-middle">
            <TypewriterText />
          </span>
        </h1>
      </div>
      <div className="text-base sm:text-xl font-light text-justify sm:text-center max-w-3xl">
        <p>
          <span className="font-bold">NexHire.ai</span> revolutionizes hiring with <b>AI-powered</b> precision,
          tailoring resumes for job seekers to land interviews and ranking
          candidates for startups to find the perfect cultural fit. Experience
          micro-tailored matching that outshines generic tools, built for
          today’s dynamic job market.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-5/6">
        <Button href="/candidate"> I'm a Candidate</Button>
        <Button href={"/recruiter"}> I'm a Recruiter</Button>
      </div>
    </section>
  );
}
