"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../components/modeToggle";


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 50px 이상 스크롤되면 true, 아니면 false
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={`fixed w-full flex justify-between items-center z-50 transition-all duration-500 px-6 pt-5 pb-5 ${
                isScrolled 
                ? "bg-white/90 py-4" 
                : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="font-bold text-2xl logo">
                <Link href="/">:LEE</Link>
            </div>
            
            <nav className="flex gap-10 font-medium">
                <Link href="/work" className="hover:text-gray-400 transition-colors uppercase text-xl font-black">Work</Link>
                <Link href="/about" className="hover:text-gray-400 transition-colors uppercase text-xl font-black">About</Link>
                <Link href="/stuff" className="hover:text-gray-400 transition-colors uppercase text-xl font-black">Stuff</Link>
            </nav>

            <ThemeToggle />
        </header>
    );
}