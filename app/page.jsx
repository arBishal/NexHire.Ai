import Intro from "@/components/landing-sections/intro";
import Problem from "@/components/landing-sections/problem";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Intro />
      <hr className="w-full border-border-transparent" />
      <Problem />

    </div>
  );
}
