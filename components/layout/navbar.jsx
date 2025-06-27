"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/effects/typewriter-text";
import {
  SunIcon,
  MoonIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { NAV_LINKS_DEFAULT, NAV_LINKS_PITCH } from "@/constants/nav-links";

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

  const navLinks = pathname === "/pitch" ? NAV_LINKS_PITCH : NAV_LINKS_DEFAULT;

  return (
    <nav className="px-6 py-4 fixed top-0 z-10 h-18 w-full flex items-center justify-center backdrop-blur-sm border-b border-border-transparent font-mono">
      <div
        className={`w-full flex justify-between gap-4 ${
          pathname === "/pitch" ? "max-w-7xl" : "max-w-4xl"
        }`}
      >
        {/* logo */}
        <Link href="/#hero">
          {pathname === "/" ? (
            <div className="font-bold group text-xl sm:text-2xl">
              nexhire
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 duration-150">
                .ai
              </span>
            </div>
          ) : (
            <TypewriterText logo />
          )}
        </Link>

        {/* links */}
        <div className="flex gap-4 sm:gap-8 text-sm lg:text-base xl:text-lg items-center justify-center">
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              className={`group transition-all duration-150 flex gap-2 items-center justify-center ${ pathname === "/pitch" ? "hidden lg:flex" : "flex"}`}
            >
              {icon}
              <span className="hidden sm:inline-block">{label}</span>
            </Link>
          ))}

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

          {pathname == "/" && (
            <Link
              href="/pitch"
              className="hidden sm:flex justify-center gap-2 hover:gap-4 w-36 px-4 py-2 rounded text-base bg-foreground text-background font-semibold hover:brightness-80 transition-all duration-300"
            >
              Pitch
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
