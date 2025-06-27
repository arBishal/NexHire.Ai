import Link from "next/link";

export default function Next() {
  return (
    <section
      id="next"
      className="w-full h-screen text-center flex flex-col items-center justify-start"
    >
      <div className="max-w-5xl flex flex-col justify-between items-center gap-8 px-6 py-30 h-full">
        <h2 className="text-4xl font-bold font-mono"> Here's What's Next</h2>

        <div className="text-text-description text-xl flex flex-col gap-4 min-w-xl w-full items-center justify-center">
          <span>Voice/chat assistant for job seekers.</span>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-text-description to-transparent" />
          <span>Culture-fit explorer to cluster teams/people.</span>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-text-description to-transparent" />
          <span>
            Chrome extension to rewrite resumes while browsing job boards.
          </span>
        </div>

        <h4 className="text-2xl font-semibold italic w-4xl">
          “The best hire isn’t the loudest resume—it’s the best contextual fit.”
        </h4>
      </div>
    </section>
  );
}
