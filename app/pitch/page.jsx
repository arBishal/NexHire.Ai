import Business from "@/components/pitch/business";
import Edge from "@/components/pitch/edge";
import Features from "@/components/pitch/features";
import Intro from "@/components/pitch/intro";
import Next from "@/components/pitch/next";
import Problem from "@/components/pitch/problem";
import Solution from "@/components/pitch/solution";
import Tech from "@/components/pitch/tech";

export default function Pitch() {
  return (
    <>
    <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
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
    <div className="lg:hidden flex items-center justify-center h-dvh p-6 text-center text-lg font-semibold">
      Please go to Desktop mode to view the Pitch. <br/>
      Thank you.
    </div>
    </>
  );
}
