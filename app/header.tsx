"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setIsVisible(true);
            } 
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } 
            else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header 
            className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 px-6 md:px-6 py-6 bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`} 
        >
            <div className="flex items-center gap-4">
                <Link href="/" className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-black hover:opacity-70 transition-opacity">
                    Saebom Lee
                </Link>
                {/* <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-zinc-400 border-l border-zinc-300 pl-4 py-0.5">
                    Studio / Kr
                </span> */}
            </div>
            
            {/* 시원하게 잘 보이는 굵은 네비게이션 */}
            <nav className="flex items-center gap-8 md:gap-12 font-black text-base md:text-xl tracking-tight">
                <Link href="/work" className="group text-black uppercase transition-colors flex items-center gap-2">
                    <span>WORK</span>
                </Link>
                <Link href="/about" className="group text-black uppercase transition-colors flex items-center gap-2">
                    <span>ABOUT</span>
                </Link>
                <a href="mailto:lsbbom@gmail.com" className="group text-black uppercase transition-colors hidden sm:flex items-center gap-2">
                    <span>CONTACT</span>
                </a>
            </nav>
        </header>
    );
}