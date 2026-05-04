"use client"; // 상태 관리를 위해 클라이언트 컴포넌트로 설정

import { useState } from "react";
import Link from "next/link";
import Header from "../header";
import Image from "next/image";

// 데이터 (나중에 별도 파일로 분리 추천)
const projects = [
  { 
    id: "01", 
    title: "Slim9 자사몰 서비스 고도화", 
    tags: ["E-commerce", "2023-2025"],
    img: "/images/thum_01.png"
  },
  { 
    id: "02", 
    title: "Slim9 자사몰 프로모션 페이지 UI개발", 
    tags: ["Responsive", "2023-2025"],
    img: "/images/thum_02.png"
  },
  { 
    id: "03", 
    title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱 업무", 
    tags: ["Responsive", "2021-2023"],
    img: "/images/thum_03.png"
  },
  { 
    id: "04", 
    title: "Find your light 3 관련 웹페이지 제작", 
    tags: ["Responsive", "2022"],
    img: "/images/thum_04.png"
  },
  { 
    id: "05", 
    title: "LOUIS QUATORZE 직영몰 라이브커머스 방송 구축", 
    tags: ["Responsive", "2023"],
    img: "/images/thum_04.png"
  },
  { 
    id: "06", 
    title: "LOUIS QUATORZE 직영몰 프론트엔드 리뉴얼", 
    tags: ["Responsive", "2021-2023"],
    img: "/images/thum_05.png"
  },
  { 
    id: "07", 
    title: "Closetshare UI 개선", 
    tags: ["Responsive", "2020-2021"],
    img: "/images/thum_04.png"
  },
  { 
    id: "08", 
    title: "한림기술 홈페이지 리뉴얼 제작", 
    tags: ["Responsive", "2020"],
    img: "/images/thum_06.png"
  },
  { 
    id: "09", 
    title: "가온평생교육원 홈페이지 유지보수", 
    tags: ["Responsive", "2020"],
    img: "/images/thum_04.png"
  },
  { 
    id: "10", 
    title: "아기세탁소 홈페이지 제작", 
    tags: ["Responsive", "2020"],
    img: "/images/thum_04.png"
  },
  { 
    id: "11", 
    title: "모든상사 쇼핑몰 제작", 
    tags: ["Responsive", "2020"],
    img: "/images/thum_04.png"
  },
  { 
    id: "12", 
    title: "파르베성형외과 홈페이지 리뉴얼", 
    tags: ["Responsive", "2021-2020"],
    img: "/images/thum_04.png"
  },
  { 
    id: "13", 
    title: "유림이엔씨 홈페이지 유지보수", 
    tags: ["Responsive", "2019-2020"],
    img: "/images/thum_04.png"
  },
  { 
    id: "14", 
    title: "셀럽성형외과 홈페이지 제작", 
    tags: ["Responsive", "2019"],
    img: "/images/thum_04.png"
  },
  { 
    id: "15", 
    title: "CDS 홈페이지 제작", 
    tags: ["Responsive", "2019"],
    img: "/images/thum_04.png"
  },
  { 
    id: "16", 
    title: "대구패션문화페스티벌 홈페이지 제작", 
    tags: ["Responsive", "2019"],
    img: "/images/thum_04.png"
  },
  { 
    id: "17", 
    title: "브이하얀클리닉 모바일 제작", 
    tags: ["Responsive", "2019"],
    img: "/images/thum_04.png"
  },
   { 
    id: "18", 
    title: "평해노인요양원 홈페이지 제작", 
    tags: ["Responsive", "2019"],
    img: "/images/thum_04.png"
  },
  { 
    id: "19", 
    title: "호숫가힐튼펜션 홈페이지 제작", 
    tags: ["Responsive", "2019"],
    img: "/images/thum_04.png"
  }
];

export default function WorkPage() {
  const [viewType, setViewType] = useState("gallery");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto w-full px-6 py-36">
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Work</h2>
          {/* toggle */}
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

        

        {/* gallery */}
        {viewType === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link href={`/work/${project.id}`} key={project.id} className="group">
                <div className="shadow-sm relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <Image 
                    src={project.img} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-500">{tag} .</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* list */}
        {viewType === "list" && (
          <div className="border-t border-black">
            {projects.map((project) => (
              <Link href={`/work/${project.id}`} key={project.id} className="group flex items-center justify-between py-5 border-b border-gray-200 hover:bg-gray-50 transition-all px-4">
                <div className="flex items-center gap-10">
                  <span className="font-mono text-lg text-gray-400">{project.id}</span>
                  <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 border border-black rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}