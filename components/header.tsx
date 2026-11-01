"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
  filter: "All" | "Selected";
  setFilter: (filter: "All" | "Selected") => void;
  totalProjectsCount: number;
  selectedProjectsCount: number;
}

export default function Header({
  filter,
  setFilter,
  totalProjectsCount,
  selectedProjectsCount,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  const [currentTime, setCurrentTime] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false); // Info 모달 열림/닫힘 상태

  const handleFilterClick = (newFilter: "All" | "Selected") => {
    setFilter(newFilter);
    router.push(`/?filter=${newFilter}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const updateSeoulTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateSeoulTime();
    const timer = setInterval(updateSeoulTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 px-6 sm:px-12 py-6 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`} 
      >
        <div className="flex items-center gap-12">
          <Link href="/?filter=Selected" className="text-sm sm:text-base font-extrabold tracking-tight text-black hover:opacity-70 transition-opacity">
            Saebom Lee
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-zinc-700 tracking-wider bg-zinc-100 px-3.5 py-1 rounded-full shadow-xs">
          <span className="text-zinc-400 font-mono">SEOUL</span>
          <span className="font-mono">{currentTime || "Loading..."}</span>
        </div>

        <div className="flex items-center gap-8 text-xs font-semibold">
          <div className="flex items-center bg-zinc-100 rounded-full p-1 text-[11px]">
            <button
              onClick={() => handleFilterClick("Selected")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                filter === "Selected" ? "bg-white text-black shadow-xs font-bold" : "text-black hover:opacity-70"
              }`}
            >
              Selected <span className="opacity-60 font-normal">{selectedProjectsCount}</span>
            </button>
            <button
              onClick={() => handleFilterClick("All")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                filter === "All" ? "bg-white text-black shadow-xs font-bold" : "text-black hover:opacity-70"
              }`}
            >
              All <span className="opacity-60 font-normal">{totalProjectsCount}</span>
            </button>
          </div>

          <button
            onClick={() => setShowInfoModal(true)}
            className="text-black hover:opacity-50 transition-opacity hidden sm:block font-medium cursor-pointer"
          >
            Info
          </button>
          <a
            href="mailto:lsbbom@gmail.com"
            className="text-black hover:opacity-50 transition-opacity hidden sm:block font-medium"
          >
            Contact
          </a>
        </div>
      </header>

      {showInfoModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-[#FBFBFCD9] dark:bg-[#1D1D1FF2] backdrop-blur-2xl rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            <div>
              {/* close */}
              <div className="flex justify-between items-center pb-6 border-b border-black/5 dark:border-white/10">
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Info</h2>
                <button
                  onClick={() => setShowInfoModal(false)}
                  className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:bg-black/10 dark:hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              
              <div className="mt-8 space-y-10 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white tracking-tight mb-1">이새봄</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">Web Design ✳︎ UI/UX ✳︎ Digital Experience</p>
                  </div>

                  <div className="space-y-3 text-zinc-600 dark:text-zinc-300">
                    <p>안녕하세요, 패션과 라이프스타일 브랜드의 시각적 언어와 디지털 경험에 관심이 많습니다.<br />일상 속에서 영감을 발견하고, 디자인의 작은 디테일을 관찰하며, 아이디어를 직접 구현하는 것을 즐깁니다.<br />지난 6년간 퍼블리싱, 프론트엔드 개발, 웹디자인까지 다양한 웹 프로젝트를 경험하며 디자인과 기술을 연결해 왔습니다.</p>
                    <p>시각적인 매력과 실질적인 가치가 자연스럽게 어우러지는 디지털 경험을 만들어 가고 있습니다. 계속 배우고, 탐색하고, 만들어 가는 중입니다.</p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="pt-6 border-t border-black/5 dark:border-white/10 space-y-1.5">
                  <p className="font-bold text-black dark:text-white tracking-wider uppercase text-[10px] text-zinc-400">Capabilities</p>
                  <p className="text-zinc-600 dark:text-zinc-300">Web Publishing · Web Design · UI/UX · Frontend · Interactive · Communication</p>
                </div>

                {/* Experience */}
                <div className="pt-6 border-t border-black/5 dark:border-white/10 space-y-6">
                  <p className="font-bold text-black dark:text-white tracking-wider uppercase text-[10px] text-zinc-400">Experience</p>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      <span className="font-bold text-black dark:text-white sm:col-span-1">커뮤니케이션앤컬처</span>
                      <div className="sm:col-span-3 space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-zinc-800 dark:text-zinc-200">디자인팀 · UX Engineer</span>
                          <span className="text-zinc-400">2023.08 – 2025.11</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Slim9 Cafe24 기반 자사몰 UI/UX 개발 및 유지보수 담당</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      <span className="font-bold text-black dark:text-white sm:col-span-1">엑스얼라이언스</span>
                      <div className="sm:col-span-3 space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-zinc-800 dark:text-zinc-200">S/W개발팀 · UX Engineer</span>
                          <span className="text-zinc-400">2021.11 – 2023.07</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">LOUIS QUATORZE 공식 직영몰 UI/UX 개발 및 유지보수 담당</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      <span className="font-bold text-black dark:text-white sm:col-span-1">더클로젯컴퍼니</span>
                      <div className="sm:col-span-3 space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-zinc-800 dark:text-zinc-200">Development팀 · UI Developer</span>
                          <span className="text-zinc-400">2020.12 – 2021.07</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">PWA 기반 플랫폼 closetshare 퍼블리싱</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      <span className="font-bold text-black dark:text-white sm:col-span-1">11마리의낭만고양이</span>
                      <div className="sm:col-span-3 space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-zinc-800 dark:text-zinc-200">웹사업부 · UI Developer</span>
                          <span className="text-zinc-400">2019.02 – 2020.11</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">광고에이전시 내 웹사이트 제작 및 유지보수</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="pt-6 border-t border-black/5 dark:border-white/10 space-y-6">
                  <p className="font-bold text-black dark:text-white tracking-wider uppercase text-[10px] text-zinc-400">Education</p>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-bold text-black dark:text-white">세종대학교</span>
                        <span className="text-zinc-400">2023.03 – 2027.08</span>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">
                        호텔관광대 · 조리서비스경영학과
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-bold text-black dark:text-white">Pratt Institute</span>
                        <span className="text-zinc-400">2026.01 – 2026.05</span>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">
                        Creative Careers 프로그램 수료 · 국립국제교육원 국비연수생 49기
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-bold text-black dark:text-white">미림마이스터고등학교</span>
                        <span className="text-zinc-400">2016.03 – 2019.01</span>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">
                        뉴미디어솔루션과(프로그래밍)
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-black/5 dark:border-white/10 text-[11px] text-zinc-400 font-medium tracking-tight">
              ARCHIVE 2019—2026 SAEBOM LEE.
            </div>
          </div>
        </div>
      )}
    </>
  );
}