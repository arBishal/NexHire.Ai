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
