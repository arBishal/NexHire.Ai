import Link from "next/link";

export default function Edge() {
  return (
    <section
      id="edge"
      className="max-w-5xl min-h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-24 pb-12"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-bold font-mono"> Strategic Edge</h2>
      </div>

      <Link
        href="/#tech"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono"> Tech Stack? </span>
      </Link>
    </section>
  );
}
