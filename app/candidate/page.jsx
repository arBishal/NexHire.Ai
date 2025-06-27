import Button from "@/components/base/button";

export default function Candidate() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center w-full h-full">
      <section
        id="candidate"
        className="max-w-5xl w-full h-full text-center flex flex-col items-center justify-center gap-4 px-6 pt-32"
      >
        <h1 className="text-4xl sm:6xl font-bold">
          This Page is Under Construction
        </h1>
        <Button href="/" variant="ghost">
          Go back to Home
        </Button>
      </section>
    </div>
  );
}
