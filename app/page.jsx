"use client";

import Intro from "@/components/landing-sections/intro";
import Pricing from "@/components/landing-sections/pricing";
import About from "@/components/landing-sections/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center w-full h-full">
      <Intro />
      <hr className="w-full border-border-transparent" />
      <Pricing />
      <hr className="w-full border-border-transparent" />
      <About />
    </div>
  );
}
