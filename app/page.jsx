import Business from "@/components/landing-sections/business";
import Edge from "@/components/landing-sections/edge";
import Features from "@/components/landing-sections/features";
import Intro from "@/components/landing-sections/intro";
import Next from "@/components/landing-sections/next";
import Problem from "@/components/landing-sections/problem";
import Solution from "@/components/landing-sections/solution";
import Tech from "@/components/landing-sections/tech";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Intro />
      <hr className="w-full border-border-transparent" />
      <Problem />
      <hr className="w-full border-border-transparent" />
      <Solution />
      <hr className="w-full border-border-transparent" />
      <Features />
      <hr className="w-full border-border-transparent" />
      <Edge />
      <hr className="w-full border-border-transparent" />
      <Tech />
      <hr className="w-full border-border-transparent" />
      <Business />
      <hr className="w-full border-border-transparent" />
      <Next />
    </div>
  );
}
