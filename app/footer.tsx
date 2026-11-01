"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lsbbom@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer 
      className="w-full h-screen bg-[#ffb6c1] text-[#111111] px-6 sm:px-12 py-12 flex flex-col justify-between"
      style={{ fontFamily: "'Monument Grotesk', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <div className="max-w-[1700px] w-full mx-auto flex flex-col justify-between flex-1 py-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-8 text-xs sm:text-sm text-zinc-700 font-medium">
          <div className="space-y-2">
            <p 
              onClick={copyEmail}
              className="cursor-pointer hover:text-black transition-colors underline underline-offset-4 decoration-dotted"
            >
              {copied ? "Copied!" : "lsbbom@gmail.com"}
            </p>
            <p className="text-zinc-500">+82 10 99723551</p>
          </div>

          <div className="space-y-2 text-left sm:text-right">
            <p>
              <Link 
                href="https://www.linkedin.com/in/sbleee" 
                target="_blank" 
                className="hover:text-black transition-colors"
              >
                Linkedin ↗
              </Link>
            </p>
          </div>
        </div>

        <div className="py-12">
          <h1 className="text-[7vw] font-black leading-[0.95] tracking-tighter text-[#111111]">
            Let’s build something<br />digital together!
          </h1>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-zinc-500 font-medium gap-4">
          <span>© 2026 SAEBOM LEE. ALL RIGHTS RESERVED.</span>
          {/* <span>SEOUL, SOUTH KOREA</span> */}
        </div>

      </div>
    </footer>
  );
}