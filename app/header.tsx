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
    }, [lastScrollY]); // lastScrollY가 바뀔 때마다 실행

    return (
        <header 
            className={`fixed w-full flex justify-between items-center z-50 px-6 pt-5 pb-5 
                ${isVisible ? "translate-y-0" : "-translate-y-full"}`} 
        >
            <div className="font-bold text-xl">
                <Link href="/" className="text-gray-800">Saebom Lee</Link>
            </div>
            
            <nav className="flex gap-5 font-medium">
                <Link href="/work" className="text-gray-800 uppercase text-base">Work</Link>
                <Link href="/about" className="text-gray-800 transition-colors uppercase text-base">About</Link>
                {/* <a href="mailto:lsbbom@gmail.com" className="text-gray-800 transition-colors uppercase text-base">Contact</a> */}
                {/* <Link href="/stuff" className="text-gray-800 transition-colors uppercase text-base">Stuff</Link> */}
            </nav>

            {/* <ThemeToggle /> */}
        </header>
    );
}