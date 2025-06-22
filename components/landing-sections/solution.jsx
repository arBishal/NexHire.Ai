import Link from "next/link";

export default function Solution() {
  return (
    <section
      id="solution"
      className="max-w-5xl min-h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-24 pb-12"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-bold font-mono"> The Solution</h2>
      </div>

      <div className="flex flex-col gap-12 w-full">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 text-6xl font-extrabold font-mono">nexhire.ai</span>

        <div className="text-text-description text-xl flex flex-col gap-4 w-xl">
            <span>AI-assistant for both ends of the funnel.</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-text-description to-transparent" />
            <span>Powered by LLMs, no training needed.</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-text-description to-transparent" />
            <span>Transparent scoring & suggestions.</span>
          </div>
      </div>

      <Link
        href="/#features"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono">The Features?</span>
      </Link>
    </section>
  );
}
