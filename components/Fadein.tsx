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
      initial={{ opacity: 0, y: 60 }} // 시작 위치를 조금 더 아래로(50 -> 60) 내려서 이동감을 줍니다.
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ 
        duration: 1.5,
        delay: delay, 
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}