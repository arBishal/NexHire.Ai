"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/typewriter-text";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="px-6 py-4 sticky top-0 z-10 h-18 w-full flex items-center justify-center backdrop-blur-sm border-b border-border-transparent font-mono">
      <div className="max-w-5xl w-full flex justify-between">
        <Link href="/#intro">
          {pathname === "/" ? (
            <div className="text-xl font-bold group">
              nexhire
              <span className="font-light group-hover:font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-500 duration-150">.ai</span>
            </div>
          ) : (
            <TypewriterText logo />
          )}
        </Link>
        <div className="flex gap-8">
          <Link
            href="#pricing"
            className="hover:font-bold transition-all duration-150"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="hover:font-bold transition-all duration-150"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
