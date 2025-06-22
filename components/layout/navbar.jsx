"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/effects/typewriter-text";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS } from "@/constants/nav-links";

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
    <nav className="px-6 sm:px-24 py-4 fixed top-0 z-10 h-18 w-full flex items-center justify-center backdrop-blur-xl border-b border-border-transparent font-mono">
      <div className="w-full flex justify-between gap-4">
        {/* logo */}
        <Link href="/#intro">
          {pathname === "/" ? (
            <div className="font-bold group text-xl sm:text-2xl">
              nexhire
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 duration-150">
                .ai
              </span>
            </div>
          ) : (
            <TypewriterText logo />
          )}
        </Link>

        {/* links */}
        <div className="flex gap-6 sm:gap-10 text-sm sm:text-lg text-text-inactive items-center justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-300 flex hover:text-foreground hover:font-bold"
            >
              <span className="hidden sm:inline-block">{link.label}</span>
            </Link>
          ))}

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="transition-transform duration-500 hover:-rotate-360 active:-rotate-90 text-foreground"
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
