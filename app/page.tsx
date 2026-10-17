"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FadeIn from "../components/Fadein";

// main project data
const projects = [
  // { id: "01", title: "Slim9 자사몰 서비스 고도화", tags: ["Develop", "UI/UX", "Website", "Mobile"], img: "/images/thumbnail/thum_01.png" },
  // { id: "02", title: "Slim9 자사몰 프로모션 페이지 UI개발", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_02.png" },
  { id: "01", title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱 업무", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_04.png" },
  { id: "02", title: "Find your light 3 관련 웹페이지 제작", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_03.png" },
  { id: "06", title: "LOUIS QUATORZE 직영몰 라이브커머스 방송 구축", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_05.png" },
  { id: "07", title: "LOUIS QUATORZE 직영몰 프론트엔드 리뉴얼", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_lq.png" },
];

export default function Page() {
  const [isHovered, setIsHovered] = useState(false);

  // 마우스 좌표 기반 3D Tilt & Fluid Inertia
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 물리 엔진 반응성을 위한 스프링 설정
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // 3D 회전 및 찌그러짐 변환
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const skewX = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);
  const skewY = useTransform(mouseY, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // 중앙 정규화 (-0.5 ~ 0.5)
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <main className="flex flex-col min-h-screen px-6 md:px-12 bg-white dark:bg-[#111] text-black dark:text-white transition-colors duration-500">
      
      {/* 고강도 SVG Water Waves Filter */}
      <svg className="hidden">
        <defs>
          <filter id="super-water-wave">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.04"
              numOctaves="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur={isHovered ? "2s" : "4s"}
                values="0.015 0.03; 0.04 0.08; 0.015 0.03"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovered ? 55 : 35}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Hero Section */}
      <section 
        className="relative flex flex-col justify-between min-h-[90vh] md:min-h-[100vh] pt-24 pb-12 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }} // 3D 시원한 공간감 부여
      >
        
        {/* 1. 상시 둥둥 뜨며 마우스에 따라 3D 틸트되는 메인 비주얼 */}
        <FadeIn delay={0.2}>
  <div className="flex-1 flex items-center justify-center my-auto">
    <motion.div 
      className="relative w-[60vw] h-[40vh] md:w-[45vw] md:h-[50vh] flex items-center justify-center mx-auto"
      style={{
        rotateX,
        rotateY,
        skewX,
        skewY,
        filter: "url(#super-water-wave)",
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: isHovered ? [0, -8, 0, 8, 0] : [0, -14, 0, 14, 0],
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        y: {
          duration: isHovered ? 2.5 : 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.4,
          ease: "easeOut"
        }
      }}
    >
      <Image 
        src="/images/main.png" 
        alt="Main Visual"
        fill
        className="object-contain"
        priority 
      />
    </motion.div>
  </div>
</FadeIn>

        {/* 2. 하단 메인 메시지 */}
        <FadeIn delay={0.4}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.15] tracking-tighter text-current break-keep max-w-6xl">
            Saebom Lee,<span className="text-orange-500 inline-block mx-2 md:mx-3 align-middle text-2xl md:text-4xl">•</span>
            Seoul-based,<br />
            6+ Years in Web UI/UX<span className="text-orange-500 inline-block mx-2 md:mx-3 align-middle text-2xl md:text-4xl">•</span>
            Engineering,<br />
            I build anything and everything digital.
          </h1>
        </FadeIn>

        {/* 3. 우측 하단 스크롤 인디케이터 */}
        <div className="absolute bottom-10 right-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -5, 5, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-black dark:text-white"
            >
              <path d="M12 3v17" />
              <path d="m5 14 7 7 7-7" />
            </svg>
          </motion.div>
        </div>

      </section>      

      <WorkList />
    </main>
  );
}

function WorkList() {
  const [viewType, setViewType] = useState("gallery");

  return (
    <section className="py-20 md:py-32">
      <FadeIn>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Work</h2>
          <div className="flex gap-4 pb-2">
            <button 
              onClick={() => setViewType("gallery")}
              className={`text-sm font-bold uppercase transition-colors ${viewType === "gallery" ? "text-current border-b-2 border-current" : "text-gray-300 hover:text-gray-500 dark:text-zinc-600"}`}
            >
              Gallery
            </button>
            <button 
              onClick={() => setViewType("list")}
              className={`text-sm font-bold uppercase transition-colors ${viewType === "list" ? "text-current border-b-2 border-current" : "text-gray-300 hover:text-gray-500 dark:text-zinc-600"}`}
            >
              List
            </button>
          </div>
        </div>
      </FadeIn>

      {viewType === "gallery" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={(idx % 2) * 0.15}> 
              <Link href={`/work/${project.id}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                  <Image 
                    src={project.img || "/images/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="px-1">
                  <h3 className="text-2xl font-bold mb-2 tracking-tighter leading-tight text-current">{project.title}</h3>
                  <div className="flex gap-1.5 items-center">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {tag} {index !== project.tags.length - 1 && "/"}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}

      {viewType === "list" && (
        <div className="flex flex-col border-t border-gray-100 dark:border-zinc-800">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.08}>
              <Link href={`/work/${project.id}`} className="group flex items-center justify-between py-8 border-b border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-all px-4">
                <div className="flex items-center gap-12">
                  <h3 className="text-2xl md:text-4xl font-black group-hover:translate-x-3 transition-transform uppercase tracking-tighter text-current">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-1 border border-current rounded-full text-[10px] font-black uppercase opacity-70">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center mt-20">
        <Link href="/work" className="group flex items-center gap-2 pt-10">
          <p className="text-lg font-bold uppercase tracking-widest group-hover:italic transition-all">More Works</p>
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>

    </section>
  );
}