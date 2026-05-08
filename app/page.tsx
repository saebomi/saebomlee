"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/Fadein";

// main object data 
const heroObjects = [
  { id: 1, src: "/images/1.png", alt: "1" },
  { id: 2, src: "/images/2.png", alt: "2" },
  { id: 3, src: "/images/3.png", alt: "3" },
  { id: 4, src: "/images/4.png", alt: "4" },
  { id: 5, src: "/images/5.png", alt: "5" },
];

//main project data
const projects = [
  { id: "01", title: "Slim9 자사몰 서비스 고도화", tags: ["Develop", "UI/UX", "Website", "Mobile"], img: "/images/thumbnail/thum_01.png" },
  { id: "02", title: "Slim9 자사몰 프로모션 페이지 UI개발", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_02.png" },
  { id: "03", title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱 업무", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_04.png" },
  { id: "04", title: "Find your light 3 관련 웹페이지 제작", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_03.png" },
  { id: "05", title: "LOUIS QUATORZE 직영몰 라이브커머스 방송 구축", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_05.png" },
  { id: "06", title: "LOUIS QUATORZE 직영몰 프론트엔드 리뉴얼", tags: ["Develop", "UI/UX", "Website"], img: "/images/thumbnail/thum_lq.png" },
];

export default function Page() {
  const [objIndex, setObjIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setObjIndex((prev) => (prev + 1) % heroObjects.length);
    }, 1100); // 1.1
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen px-6">
      <section className="flex flex-col justify-end h-[100vh] pb-10">
        
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-2 md:gap-6 mb-4 justify-center w-full px-2">
            <p className="text-[15vw] md:text-[10vw] font-bold leading-none tracking-tighter text-current">( </p>
            <div className="relative w-[45vw] h-[45vw] md:w-[20vw] md:h-[20vw] flex items-center justify-center overflow-hidden">
              <motion.div
                key={heroObjects[objIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.1, 
                  ease: "linear"
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image 
                  src={heroObjects[objIndex].src} 
                  alt={heroObjects[objIndex].alt}
                  fill
                  className="object-contain"
                  priority 
                />
              </motion.div>
            </div>
            <p className="text-[15vw] md:text-[10vw] font-bold leading-none tracking-tighter text-current">)</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-3xl font-bold leading-tight mb-4 tracking-tighter text-current">
            6+ Years in Web UI/UX Engineering,<br />
            I build anything and everything digital. (And yes, I design them too.)<br /> 
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <h1 className="text-[16vw] font-black leading-[0.8] tracking-tighter uppercase text-current">
            SAEBOM:LEE
          </h1>        
        </FadeIn>
      </section>      

      <WorkList />
    </main>
  );
}

function WorkList() {
  const [viewType, setViewType] = useState("gallery");

  return (
    <section className="py-20">
      <FadeIn>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-black uppercase">Work</h2>
          <div className="flex gap-4 pb-2">
            <button 
              onClick={() => setViewType("gallery")}
              className={`text-sm font-bold uppercase ${viewType === "gallery" ? "text-black" : "text-gray-300 hover:text-gray-500"}`}
            >
              Gallery
            </button>
            <button 
              onClick={() => setViewType("list")}
              className={`text-sm font-bold uppercase ${viewType === "list" ? "text-black" : "text-gray-300 hover:text-gray-500"}`}
            >
              List
            </button>
          </div>
        </div>
      </FadeIn>

      {viewType === "gallery" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={(idx % 2) * 0.15}> 
              <Link href={`/work/${project.id}`} className="group">
                <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-sm">
                  <Image 
                    src={project.img || "/images/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="px-1">
                  <h3 className="text-2xl font-bold mb-3 tracking-tighter">{project.title}</h3>
                  <div className="flex gap-1.5 items-center">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-[11px] uppercase">
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
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.08}>
              <Link href={`/work/${project.id}`} className="group flex items-center justify-between py-8 border-b border-gray-100 hover:bg-gray-50 transition-all px-4">
                <div className="flex items-center gap-12">
                  <h3 className="text-4xl font-black group-hover:translate-x-3 transition-transform  uppercase">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-5 py-1.5 border border-black rounded-full text-[10px] font-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}

    <div className="flex items-center justify-center">
      <Link href="/work" className="pt-20"><p>More</p></Link>
    </div>

    </section>
  );
}