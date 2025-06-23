import Link from "next/link";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiHuggingface,
  SiSupabase,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { BsDiagram3Fill } from "react-icons/bs";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: "ShadCN UI", icon: <SiShadcnui className="w-12 h-12" /> },
  { name: "OpenRouter.ai", icon: <FaBrain className="w-12 h-12" /> },
  { name: "Hugging Face", icon: <SiHuggingface className="w-12 h-12" /> },
  { name: "Cosine Similarity", icon: <BsDiagram3Fill className="w-12 h-12" /> },
  { name: "Supabase", icon: <SiSupabase className="w-12 h-12" /> },
];

export default function Tech() {
  return (
    <section
      id="tech"
      className="max-w-5xl min-h-screen text-center flex flex-col items-center justify-between gap-8 px-6 pt-30 pb-12"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-bold font-mono"> Tech Stack</h2>
      </div>

      <div className="grid grid-cols-3 gap-6 p-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center text-center space-y-2 border border-border-transparent rounded-lg p-4 hover:bg-card-bg "
          >
            <div className="">{tech.icon}</div>
            <span className="text-base text-text-inactive">{tech.name}</span>
          </div>
        ))}
      </div>

      <Link
        href="/#business"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg font-mono"> Business Model? </span>
      </Link>
    </section>
  );
}
