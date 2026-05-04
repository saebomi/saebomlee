// components/FadeIn.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // 요소마다 등장 시간을 다르게 주기 위함
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // 시작 상태: 투명하고 50px 아래에 위치
      whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때 상태: 불투명해지고 제자리로 이동
      viewport={{ once: true, margin: "-10%" }} // 한 번만 실행, 화면 10% 지점에 들어왔을 때 시작
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Neundex처럼 부드러운 커스텀 베지어 곡선
      }}
    >
      {children}
    </motion.div>
  );
}