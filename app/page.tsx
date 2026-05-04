"use client"; // 클라이언트 컴포넌트 선언

import { useState } from 'react'; // useState 임포트 추가
import Link from 'next/link';
import Image from 'next/image'; 
import FadeIn from "../components/Fadein";

// Work Data
const projects = [
  { id: "01", title: "Slim9 자사몰 서비스 고도화 및 인프라 관리", tags: ["Develop", "UI/UX", "Website", "Mobile"], img: "/images/thum_01.png" },
  { id: "02", title: "Slim9 자사몰 프로모션 페이지 UI개발", tags: ["Develop", "UI/UX", "Website"], img: "/images/thum_02.png" },
  { id: "03", title: "LOUIS QUATORZE 캠페인 페이지 제작", tags: ["Develop", "UI/UX", "Website"], img: "/images/thum_03.png" },
  { id: "04", title: "LOUIS QUATORZE 직영몰 라이브 커머스 방송 구축", tags: ["Develop", "UI/UX", "Website"], img: "/images/thum_04.png" },
  { id: "05", title: "LOUIS QUATORZE 직영몰 리뉴얼 작업", tags: ["Develop", "UI/UX", "Website"], img: "/images/thum_05.png" },
];

// 메인 페이지 컴포넌트
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen px-6">
      <section className="flex flex-col justify-end h-[100vh]">
        <FadeIn delay={0.3}>
        <p className="text-3xl font-bold leading-tight mb-4 tracking-tighter">
          6+ Years in Web UI/UX Engineering,<br />
          I build anything and everything digital. (And yes, I design them too.)<br /> 
        </p>
        </FadeIn>
        <FadeIn delay={0.5}>
        <h1 className="text-[16vw] font-black leading-none tracking-tighter uppercase">
          SAEBOM:LEE
        </h1>        
        </FadeIn>
      </section>      
      {/* 컴포넌트 이름을 WorkList로 통일하여 호출 */}
      <WorkList />
    </main>
  );
}

// 작업 목록 컴포넌트 (이름을 WorkList로 변경)
function WorkList() {
  const [viewType, setViewType] = useState("gallery");

  return (
    <section className="py-20">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-5xl font-black uppercase tracking-tighter">Work</h2>
        
        {/* 토글 버튼 영역 */}
        <div className="flex gap-4 pb-2">
          <button 
            onClick={() => setViewType("gallery")}
            className={`text-sm font-bold ${viewType === "gallery" ? "text-black" : "text-gray-300"}`}
          >
            Gallery
          </button>
          <button 
            onClick={() => setViewType("list")}
            className={`text-sm font-bold ${viewType === "list" ? "text-black" : "text-gray-300"}`}
          >
            List
          </button>
        </div>
      </div>

      {/* 갤러리형 보기 */}
      {viewType === "gallery" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/work/${project.id}`} key={project.id} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
                <Image 
                  src={project.img || "/images/placeholder.png"} // 이미지가 없을 때를 대비한 처리
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-gray-500">{tag} {index !== project.tags.length - 1 && "*"}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 리스트형 보기 */}
      {viewType === "list" && (
        <div className="border-t border-black">
          {projects.map((project) => (
            <Link href={`/work/${project.id}`} key={project.id} className="group flex items-center justify-between py-10 border-b border-gray-200 hover:bg-gray-50 transition-all px-4">
              <div className="flex items-center gap-10">
                <span className="font-mono text-lg text-gray-400">{project.id}</span>
                <h3 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">{project.title}</h3>
              </div>
              <div className="flex gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-1 border border-black rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}