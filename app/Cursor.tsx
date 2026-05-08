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
                type: "spring",
                damping: 20,    
                stiffness: 250, 
                mass: 0.5,     
            }}
        />
    );
}