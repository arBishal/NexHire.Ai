"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterText({ logo }) {
  const logoText = "<strong>nexhire</strong><span class='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500'>.ai</span>";
  const defaultText = "<span class='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500'>NexHire.Ai</span>";

  return (
    <div className={logo ? "text-xl sm:text-2xl" : "text-4xl sm:text-6xl font-extrabold"}>
      {logo ? (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(logoText).start();
          }}
          options={{
            loop: false,
            html: true,
          }}
        />
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(defaultText)
              .pauseFor(1500)
              .deleteAll() 
              .start();
          }}
          options={{
            loop: true,
            html: true,
          }}
        />
      )}
    </div>
  );
}
