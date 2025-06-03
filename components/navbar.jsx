"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/typewriter-text";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="px-6 py-4 fixed top-0 z-10 h-18 w-full flex items-center justify-center backdrop-blur-sm border-b border-border-transparent font-mono">
      <div className="max-w-5xl w-full flex justify-between">
        
        {/* logo */}
        <Link href="/#intro">
          {pathname === "/" ? (
            <div className="font-bold group text-xl sm:text-2xl">
              nexhire
              <span className="font-light group-hover:font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-500 duration-150">.ai</span>
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
        </div>
      </div>
    </nav>
  );
}
