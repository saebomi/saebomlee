"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
            animate={{
                x: mousePos.x - 16, // 원의 중심이 마우스 끝에 오도록 (반지름만큼 뺌)
                y: mousePos.y - 16,
            }}
            transition={{
                type: "spring",
                damping: 20,    // 저항 (높을수록 덜 튕김)
                stiffness: 250, // 강도 (높을수록 더 빨리 따라옴)
                mass: 0.5,      // 질량 (낮을수록 가볍게 움직임)
            }}
        />
    );
}