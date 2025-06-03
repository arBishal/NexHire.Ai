"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/typewriter-text";
import {
  SunIcon,
  MoonIcon,
  CurrencyBangladeshiIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

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
        <div className="flex gap-4 sm:gap-8 text-sm sm:text-lg items-center justify-center">
          <Link
            href="#pricing"
            className="group transition-all duration-150 flex gap-2 items-center justify-center"
          >
            <CurrencyBangladeshiIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-360 group-active:-rotate-90" />
            <span className="hidden sm:inline-block">Pricing</span>
          </Link>

          <Link
            href="#about"
            className="group transition-all duration-150 flex gap-2 items-center justify-center"
          >
            <InformationCircleIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-360 group-active:-rotate-90" />
            <span className="hidden sm:inline-block">About Us</span>
          </Link>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="transition-transform duration-500 hover:-rotate-360 active:-rotate-90"
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
