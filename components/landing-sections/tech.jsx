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
  {
    name: "OpenRouter.ai",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12 text-foreground fill-current"
        aria-label="OpenRouter"
      >
        <title>OpenRouter</title>
        <path
          fillRule="evenodd"
          d="M16.804 1.957l7.22 4.105v.087L16.73 10.21l.017-2.117-.821-.03c-1.059-.028-1.611.002-2.268.11-1.064.175-2.038.577-3.147 1.352L8.345 11.03c-.284.195-.495.336-.68.455l-.515.322-.397.234.385.23.53.338c.476.314 1.17.796 2.701 1.866 1.11.775 2.083 1.177 3.147 1.352l.3.045c.694.091 1.375.094 2.825.033l.022-2.159 7.22 4.105v.087L16.589 22l.014-1.862-.635.022c-1.386.042-2.137.002-3.138-.162-1.694-.28-3.26-.926-4.881-2.059l-2.158-1.5a21.997 21.997 0 00-.755-.498l-.467-.28a55.927 55.927 0 00-.76-.43C2.908 14.73.563 14.116 0 14.116V9.888l.14.004c.564-.007 2.91-.622 3.809-1.124l1.016-.58.438-.274c.428-.28 1.072-.726 2.686-1.853 1.621-1.133 3.186-1.78 4.881-2.059 1.152-.19 1.974-.213 3.814-.138l.02-1.907z"
        />
      </svg>
    ),
  },
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
