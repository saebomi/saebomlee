"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Header from "../../components/header";

// 프로젝트 데이터셋
const projects = [
  { 
    id: "01", 
    title: "LOUIS QUATORZE 직영몰 웹퍼블리싱", 
    category: "E-Commerce",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "Selected",
    img: "/images/lq/img_thum_01.jpg" 
  },
  { 
    id: "02", 
    title: "LOUIS QUATORZE 캠페인페이지 제작", 
    category: "Campaign",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "Selected",
    img: "/images/thumbnail/thum_03.png" 
  },
  { 
    id: "03", 
    title: "Slim9 자사몰 서비스 고도화 및 인프라 관리", 
    category: "E-Commerce",
    location: "Seoul, Korea",
    year: "2023-2025",
    status: "Selected",
    img: "/images/slim9/img_p_00.jpg" 
  },
  { 
    id: "04", 
    title: "Stripes 온라인몰 프론트엔드 전면 개편", 
    category: "E-Commerce",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "Selected",
    img: "/images/lq/img_thum_02.jpg" 
  },
  { 
    id: "05", 
    title: "LOUIS QUATORZE 직영몰 라이브커머스 방송 구축", 
    category: "Interactive",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "Selected",
    img: "/images/lq/live_01.png" 
  },
  { 
    id: "06", 
    title: "Closetshare UI 개선", 
    category: "UI/UX",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/thumbnail/thum_cs.png" 
  },
  { 
    id: "07", 
    title: "한림기술 홈페이지 리뉴얼 제작", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/thumbnail/thum_sacon.png" 
  },
  { 
    id: "08", 
    title: "가온평생교육원 홈페이지 유지보수", 
    category: "Maintenance",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/gaon/img_01.jpg" 
  },
  { 
    id: "09", 
    title: "아기세탁소 홈페이지 제작", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/laundry/img_01.jpg" 
  },
  { 
    id: "10", 
    title: "모든상사 쇼핑몰 제작", 
    category: "E-Commerce",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/moden/img_01.jpg" 
  },
  { 
    id: "11", 
    title: "파르베성형외과 홈페이지 리뉴얼", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/farbe/img_01.jpg" 
  },
  { 
    id: "12", 
    title: "유림이엔씨 홈페이지 유지보수", 
    category: "Maintenance",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/yulim/img_01.jpg" 
  },
  { 
    id: "13", 
    title: "셀럽성형외과 홈페이지 제작", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/celuv/img_01.jpg" 
  },
  { 
    id: "14", 
    title: "CDS 홈페이지 제작", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/cds/img_01.jpg" 
  },
  { 
    id: "15", 
    title: "대구패션문화페스티벌 홈페이지 제작", 
    category: "Campaign",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/difacul/img_01.jpg" 
  },
  { 
    id: "16", 
    title: "평해노인요양원 홈페이지 제작", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/sanatorium/img_01.jpg" 
  },
  { 
    id: "17", 
    title: "호숫가힐튼펜션 홈페이지 제작", 
    category: "Website",
    location: "Seoul, Korea",
    year: "2021-2023",
    status: "All",
    img: "/images/hilton/img_01.jpg" 
  },
];

function MainContent() {
  const searchParams = useSearchParams();
  const rawFilter = searchParams.get("filter");

  const initialFilter: "All" | "Selected" = 
    rawFilter === "All" || rawFilter === "Selected" ? rawFilter : "Selected";

  const [filter, setFilter] = useState<"All" | "Selected">(initialFilter);

  useEffect(() => {
    if (rawFilter === "All" || rawFilter === "Selected") {
      setFilter(rawFilter);
    }
  }, [rawFilter]);

  const filteredProjects = projects.filter((p) => {
    if (filter === "Selected") return p.status === "Selected";
    return true;
  });

  const selectedCount = projects.filter((p) => p.status === "Selected").length;

  return (
    <>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />

      <Header 
        filter={filter}
        setFilter={setFilter}
        totalProjectsCount={projects.length}
        selectedProjectsCount={selectedCount}
      />

      <main 
        className="min-h-screen w-full bg-[#FFFFFF] text-[#111111] antialiased px-6 sm:px-12 py-8 pt-28 select-none flex flex-col justify-between"
        style={{ fontFamily: "'Monument Grotesk', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <section className="w-full max-w-[1700px] mx-auto py-12 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.id}?filter=${filter}`}
                className="group flex flex-col space-y-4"
              >
                <div className="relative w-full aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-xs group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span className="text-[11px] font-semibold tracking-tight text-zinc-900">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline px-2">
                  <h2 className="text-sm sm:text-base font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h2>
                  <span className="text-xs text-zinc-400 font-medium">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// Next.js App Router 필수: useSearchParams 사용 시 Suspense로 감싸주어야 빌드 에러가 나지 않습니다.
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <MainContent />
    </Suspense>
  );
}