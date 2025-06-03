"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/typewriter-text";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="px-6 py-4 fixed top-0 z-10 h-18 w-full flex items-center justify-center backdrop-blur-sm border-b border-border-transparent font-mono">
      <div className="max-w-5xl w-full flex justify-between gap-4">
        {/* logo */}
        <Link href="/#intro">
          {pathname === "/" ? (
            <div className="font-bold group text-xl sm:text-2xl">
              nexhire
              <span className="font-light group-hover:font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-500 duration-150">
                .ai
              </span>
            </div>
          ) : (
            <TypewriterText logo />
          )}
        </Link>

        {/* links */}
        <div className="flex gap-8 text-sm sm:text-lg">
          <Link
            href="#pricing"
            className="hover:font-bold transition-all duration-150"
          >
            <span className="align-middle">Pricing</span>
          </Link>
          <Link
            href="#about"
            className="hover:font-bold transition-all duration-150"
          >
            <span className="align-middle">About Us</span>
          </Link>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="transition-transform duration-300 hover:-rotate-90 active:-rotate-90"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
