import TypewriterText from "@/components/typewriter-text";

export default function Intro() {
    return (
      <section
        id="intro"
        className="max-w-5xl h-screen text-center flex flex-col items-center justify-center gap-4 px-6 py-24"
      >
        <div className="max-w-5xl font-extrabold text-4xl sm:text-6xl font-mono">
          <h1>
            Hire, and Get Hired!
            <br />
            Try <span className="inline-block align-middle"><TypewriterText /></span>
          </h1>
        </div>
        <div className="text-base sm:text-lg font-light mt-4 text-justify sm:text-center max-w-3xl">
          <p>
            NexHire.ai revolutionizes hiring with <b>AI-powered</b> precision,
            tailoring resumes for job seekers to land interviews and ranking
            candidates for startups to find the perfect cultural fit. Experience
            micro-tailored matching that outshines generic tools, built for
            today’s dynamic job market.
          </p>
        </div>
      </section>
    );
  }
  