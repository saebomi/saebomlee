"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../components/modeToggle";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true); // 헤더 표시 여부
    const [lastScrollY, setLastScrollY] = useState(0); // 이전 스크롤 위치 기록

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. 최상단(50px 미만)일 때는 항상 보이게 설정
            if (currentScrollY < 50) {
                setIsVisible(true);
            } 
            // 2. 아래로 스크롤 중일 때 헤더 숨김
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } 
            // 3. 위로 스크롤 중일 때 헤더 나타남
            else {
                setIsVisible(true);
            }

            // 현재 스크롤 위치를 기록하여 다음 비교 때 사용
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]); // lastScrollY가 바뀔 때마다 실행

    return (
        <header 
            className={`fixed w-full flex justify-between items-center z-50 transition-transform duration-500 px-6 pt-5 pb-5 
                ${isVisible ? "translate-y-0" : "-translate-y-full"}`} // CSS로 헤더 밀어올리기
        >
            <div className="font-bold text-2xl logo">
                <Link href="/">:LEE</Link>
            </div>
            
            <nav className="flex gap-5 font-medium">
                <Link href="/work" className="hover:text-gray-400 transition-colors uppercase text-base">Work</Link>
                <Link href="/about" className="hover:text-gray-400 transition-colors uppercase text-base">About</Link>
                <Link href="/stuff" className="hover:text-gray-400 transition-colors uppercase text-base">Stuff</Link>
            </nav>

            <ThemeToggle />
        </header>
    );
}