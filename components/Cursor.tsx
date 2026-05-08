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
                x: mousePos.x - 16, 
                y: mousePos.y - 16,
            }}
            transition={{
                type: "tween",
                damping: 100,    // 저항 (높을수록 덜 튕김)
                stiffness: 500, // 강도 (높을수록 더 빨리 따라옴)
                mass: 0.4,      // 질량 (낮을수록 가볍게 움직임)
            }}
        />
    );
}