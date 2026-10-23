"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/Fadein";

// data
  const projects = [
  { 
    id: "01",  
    title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱", 
    tags: ["Develop / UI/UX / Website"], 
    img: "/images/thumbnail/thum_04.png" 
  },
  { 
    id: "02", 
    title: "FIND YOUR LIGHT 3 캠페인 웹페이지 개발", 
    tags: ["Develop / UI/UX / Website"], 
    img: "/images/thumbnail/thum_03.png" 
  },
  { 
    id: "06", 
    title: "LOUIS QUATORZE 직영몰 라이브커머스 웹페이지 개발", 
    tags: ["Develop / UI/UX / Website"], 
    img: "/images/thumbnail/thum_05.png" 
  },
  { 
    id: "07", 
    title: "LOUIS QUATORZE 직영몰 프론트엔드 리뉴얼", 
    tags: ["Develop / UI/UX / Website"], 
    img: "/images/thumbnail/thum_lq.png" 
  },
];

const keywords = [
  "Web Design",
  "Development",
  "Identity",
  "UI/UX Engineering",
  "Collaboration",
  "Innovation",
  "Impact",
];

export default function Page() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const diskRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);
  const targetRotation = useRef(0);
  const velocity = useRef(0);
  const floatStep = useRef(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging.current) {
        targetRotation.current += 0.2; // 천천히 자동 회전
        velocity.current *= 0.94;
        targetRotation.current += velocity.current;

        floatStep.current += 0.02;
        const floatY = Math.sin(floatStep.current) * 8;
        const tiltX = Math.cos(floatStep.current * 0.8) * 5;

        currentRotation.current +=
          (targetRotation.current - currentRotation.current) * 0.1;

        if (diskRef.current) {
          diskRef.current.style.transform = `translateY(${floatY}px) rotateY(${currentRotation.current}deg) rotateX(${tiltX}deg)`;
        }
      } else {
        currentRotation.current +=
          (targetRotation.current - currentRotation.current) * 0.2;

        if (diskRef.current) {
          diskRef.current.style.transform = `rotateY(${currentRotation.current}deg)`;
        }
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    velocity.current = 0;
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX.current;
    startX.current = clientX;
    velocity.current = deltaX * 0.8;
    targetRotation.current += velocity.current;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white overflow-x-hidden">

      <section 
        className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 select-none overflow-hidden"
        style={{ perspective: 1200 }}
      >
        
        {/* 우측 상단 키워드 리스트 */}
        <div className="flex justify-end items-start z-10 pt-4 pointer-events-none">
          <div className="text-right text-lg sm:text-2xl md:text-4xl font-bold tracking-tight leading-snug space-y-1.5 text-zinc-900">
            {keywords.map((word, idx) => (
              <p key={idx} className="transition-colors hover:text-zinc-400">{word}</p>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            className="relative w-80 h-80 sm:w-[440px] sm:h-[440px] md:w-[580px] md:h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              ref={diskRef}
              className="w-full h-full relative transition-transform duration-75"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-8 bg-black/20 rounded-3xl blur-3xl transform translate-y-14 pointer-events-none" />

              <div className="w-full h-full bg-zinc-900 rounded-[1.2rem] p-8 md:p-10 shadow-2xl border border-zinc-800 flex flex-col justify-between relative overflow-hidden">
                
                <div className="w-full h-40 md:h-44 bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-400 rounded-2xl p-4 md:p-5 flex justify-between items-center relative border-b border-zinc-400/50 shadow-inner">
                  <div className="w-28 md:w-32 h-full bg-zinc-900 rounded-xl border border-zinc-700/80 shadow-inner flex items-center justify-center">
                    <div className="w-14 md:w-16 h-20 border-2 border-dashed border-zinc-700 rounded-md" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs md:text-sm font-mono font-bold tracking-widest text-zinc-600 block">HD</span>
                    <span className="text-lg md:text-xl font-mono font-black tracking-tighter text-zinc-800">3.24 MB</span>
                  </div>
                </div>

                {/* 쓰기 금지 노치 */}
                <div className="absolute top-8 right-8 w-6 h-8 bg-zinc-950 rounded-xs border border-zinc-800" />

                {/* 스티커 라벨 */}
                <div className="w-full h-72 md:h-80 bg-white rounded-2xl p-5 md:p-7 flex flex-col justify-between border-3 border-black shadow-md relative overflow-hidden select-none">
                  
                  <div className="space-y-1.5">
                    <div className="w-full h-4 md:h-5 bg-[#f5b800] rounded-full border-2 border-black" />
                    <div className="flex justify-between items-center px-1">
                      <div className="flex gap-0.5 items-center opacity-70">
                        <div className="w-0.5 h-3 bg-black" />
                        <div className="w-1 h-3 bg-black" />
                        <div className="w-0.5 h-3 bg-black" />
                        <div className="w-1.5 h-3 bg-black" />
                        <div className="w-0.5 h-3 bg-black" />
                        <div className="w-1 h-3 bg-black" />
                      </div>
                    </div>
                  </div>

                  <div className="my-auto py-2 space-y-3">
                    <div className="border-b-2 border-dashed border-zinc-300 pb-1 text-center">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-black uppercase leading-tight truncate">
                        Digital experience
                      </p>
                    </div>

                    <div className="border-b-2 border-dashed border-zinc-300 pb-1 text-center">
                      <p className="text-xs md:text-sm text-zinc-600 uppercase tracking-widest">
                        SINCE 2019 — ARCHIVE
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end pt-2 border-t-2 border-black text-xs md:text-sm text-black">
                    <div className="flex flex-col">
                      <span className="tracking-tight">Saebom Lee</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black text-white px-2 py-0.5 rounded text-[10px] md:text-xs font-bold tracking-wider">
                      <span>VERIFIED</span>
                      <span>✓</span>
                    </div>
                  </div>

                </div>

                <div className="absolute bottom-6 left-8 text-zinc-700 text-xl font-bold">
                  ↑
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="flex justify-between items-end z-10 pointer-events-none">
          <div className="text-sm tracking-widest text-zinc-500">
            Drag to interact!
          </div>
          <a href="#works" className="text-2xl md:text-5xl font-black tracking-tighter text-black pointer-events-auto">
            More ↓
          </a>
        </div>

      </section>      

      {/* Selected Works Feed */}
      <WorkList onHoverProject={(p) => setActiveProject(p)} />

    </main>
  );
}

function WorkList({ onHoverProject }: { onHoverProject: (project: typeof projects[0]) => void }) {
  return (
    <section id="works" className="px-4 md:px-8 py-20 border-t">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, idx) => (
          <FadeIn key={project.id} delay={(idx % 2) * 0.1}>
            <Link 
              href={`/work/${project.id}`} 
              onMouseEnter={() => onHoverProject(project)}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-gray-200 rounded-sm">
                <Image 
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-1">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-1 ">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[14px] bg-white py-0.5 text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="pt-20 flex justify-center">
        <Link 
          href="/work" 
          className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white  text-sm font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          <span>More Works</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </Link>
      </div>
    </section>
  );
}