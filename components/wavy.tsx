"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LiquidText({ children }: { children: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block cursor-pointer">
      {/* 1. 실제 일렁이는 효과를 만드는 SVG 필터 */}
      <svg className="absolute w-0 h-0">
        <filter id="liquid-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={isHovered ? "10" : "0"} // 마우스 올렸을 때만 왜곡 강도 조절
          />
        </filter>
      </svg>

      {/* 2. 필터가 적용될 텍스트 */}
      <motion.span
        className="inline-block text-4xl font-black uppercase tracking-tighter"
        style={{ filter: "url(#liquid-filter)" }} // SVG 필터 연결
        animate={{
          skewX: isHovered ? [0, -2, 2, 0] : 0, // 미세한 기울기 변화 추가
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0, // 호버 중일 때 계속 일렁임
          repeatType: "reverse",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </motion.span>
    </div>
  );
}