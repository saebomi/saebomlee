"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import Header from "../../../components/header"; 

interface ProjectInfo {
  title: string;
  client?: string;
  description: string[];
  tags: string[];
  bg: string;
  img?: string[]; 
  year?: string;
}

// 프로젝트 데이터셋 객체 (01 ~ 17)
const projectData: { [key: string]: ProjectInfo } = {
   "03": {
    title: "Slim9 자사몰 서비스 고도화 및 인프라 관리",
    client: "Slim9",
    year: "2023-2025",
    description: [
      "여성 언더웨어 브랜드 Slim9의 공식 온라인 스토어 UI/UX 개발 및 운영을 담당하며, 사용자 경험 개선과 서비스 고도화를 수행했습니다.",
      "Cafe24 플랫폼을 기반으로 사용자 여정과 쇼핑 동선을 분석하고, 이탈 구간 개선 및 레이아웃 리뉴얼을 통해 보다 직관적이고 효율적인 쇼핑 환경을 구축했습니다.",
      "신규 브릿지 페이지와 프로모션 페이지 개발, 라이브 커머스 연동 등 다양한 디지털 콘텐츠를 구현했으며, GA 등 마케팅 트래킹 스크립트를 적용해 데이터 기반의 서비스 분석 환경을 마련했습니다.",
      "https://slim9.co.kr/"
    ],
    tags: ["E-Commerce", "Cafe24", "UI/UX", "Frontend"],
    bg: "/images/slim9/bg_01.jpg",
    img: ["/images/slim9/img_p_00.jpg","/images/slim9/img_p_05.jpg","/images/slim9/img_p_03.jpg","/images/slim9/img_p_02.png","/images/slim9/img_p_04.png"],
  },
  "01": {
    title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱 업무",
    client: "LOUIS QUATORZE",
    year: "2021-2023",
    description: [
      "LOUIS QUATORZE 직영몰의 퍼블리싱 파트를 맡아 다수의 기획전 및 이벤트 페이지 UI를 구축했습니다.",
      "동적인 웹 인터랙션을 통해 브랜드 메시지를 효과적으로 전달했으며, 배포 단계에서의 UI QA와 피드백 반영을 통해 서비스의 완성도를 높였습니다.",
      "타 부서와 협업을 통해 디자인 의도를 정밀하게 코드로 구현함과 동시에 유지보수 효율을 고려한 구조적인 마크업을 수행했습니다.",
      "https://stylelq.github.io/"
    ],
    tags: ["E-Commerce", "Responsive Web", "Publishing"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/lq/img_p_03.png", "/images/lq/img_p_04.png","/images/lq/img_p_01.jpg", "/images/lq/img_p_02.jpg"],
  },
  "02": {
    title: "Find your light3 캠페인페이지 제작",
    client: "LOUIS QUATORZE",
    year: "2023",
    description: [
      "LOUIS QUATORZE에서 진행된 'Find your light 3' 프로젝트의 퍼블리싱 업무를 수행했습니다.",
      "대규모 캠페인 특성에 맞춰 메인 페이지와 다수의 작가 상세 페이지를 효율적으로 관리하고 구축했습니다.",
      "또한 Shopify기반 글로벌 자사몰 캠페인의 영문 웹페이지 퍼블리싱을 전담하여 글로벌 사용자에게 최적화된 브랜드 경험을 구현했습니다.",
      "https://stylelq.github.io/pc/html/fyl3/fyl3_artist01.html"
    ],
    tags: ["Campaign", "Shopify", "Global Web"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/lq/img_p_05.png", "/images/lq/img_p_06.png","/images/lq/img_p_07.png","/images/lq/img_p_08.jpg"],
  },

  "04": {
    title: "Stripes 온라인몰 프론트엔드 전면 개편",
    client: "LOUIS QUATORZE",
    year: "2021-2023",
    description: [
      "Mac OS 기반의 프론트엔드 개발 환경을 구축하고, Node.js 및 Vue.js를 활용한 개발 환경 설정을 진행했습니다.",
      "Vuetify 프레임워크를 활용해 다양한 디바이스 환경에 대응하는 반응형 UI 퍼블리싱 및 프론트엔드 개발을 수행했습니다.",
      "스테이징 서버 배포 이후 기능 및 UI 테스트를 진행하고, 검수 과정에서 확인된 이슈를 수정·보완하여 서비스의 안정성과 완성도를 높였습니다.",
    ],
    tags: ["E-Commerce", "Responsive Web", "Vue.js"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/lq/img_stripes.jpg"],
  },
  "05": {
    title: "직영몰 라이브커머스 방송 구축",
    client: "LOUIS QUATORZE",
    year: "2021-2023",
    description: [
      "브랜드 직영몰의 라이브 커머스 서비스 구축을 위해 목록, 예약 상세, 플레이어 페이지의 퍼블리싱 전반을 담당했습니다.",
      "실시간 스트리밍 환경에 최적화된 UI를 구현하고, 테스트와 QC를 통해 안정적인 방송 시청 및 구매 경험을 제공했습니다.",
      "https://stylelq.github.io/pc/html/live/live.html"
    ],
    tags: ["Interactive", "E-Commerce", "Live Commerce"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/lq/img_live.jpg","/images/lq/img_live_02.png"],
  },
  "06": {
    title: "UI 개선",
    client: "Closetshare",
    year: "2021-2023",
    description: [
      "PWA 기반 공유 플랫폼 Closetshare의 UI 개선 및 퍼블리싱을 담당하며, 사용자 중심의 인터페이스 개선을 진행했습니다.",
      "서비스 이용 흐름을 고려한 UI 요소와 레이아웃을 개선하고, 모바일 환경에 최적화된 반응형 퍼블리싱을 통해 사용 편의성과 접근성을 높였습니다."
    ],
    tags: ["UI/UX", "PWA", "Publishing"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/closetshare/img_01.jpg"],
  },
  "07": {
    title: "홈페이지 리뉴얼 제작",
    client: "한림기술",
    year: "2021-2023",
    description: [
      "기업 공식 홈페이지 리뉴얼 제작을 담당하여 브랜드 신뢰도를 높이는 깔끔하고 반응형 레이아웃을 구축했습니다."
    ],
    tags: ["Website", "Responsive Web"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/hanlim/img_02.jpg"],
  },
  "08": {
    title: "홈페이지 유지보수",
    client: "가온평생교육원",
    year: "2021-2023",
    description: [
      "교육원 홈페이지의 콘텐츠 업데이트 및 기능 유지보수를 담당하며, 지속적인 웹 서비스 관리와 운영 안정성 확보에 기여했습니다."
    ],
    tags: ["Maintenance", "Website"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/gaon/img_01.jpg"],
  },
  "09": {
    title: "홈페이지 제작",
    client: "아기세탁소",
    year: "2021-2023",
    description: [
      "브랜드의 친근하고 신뢰감 있는 무드를 반영한 반응형 웹사이트를 신규 제작했습니다."
    ],
    tags: ["Website", "Responsive Web"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/laundry/img_01.jpg"],
  },
  "10": {
    title: "cafe24기반 쇼핑몰 구축",
    client: "모든상사",
    year: "2020",
    description: [
      "Cafe24 기반의 쇼핑몰 스킨 커스터마이징을 통해 이커머스 환경에 최적화된 웹사이트를 구축했습니다."
    ],
    tags: ["E-Commerce", "Shopping Mall"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/moden/img_01.jpg"],
  },
  "11": {
    title: "홈페이지 리뉴얼 제작",
    client: "파르베성형외과",
    year: "2019-2020",
    description: [
      "파르베 성형외과의 공식 홈페이지 리뉴얼 프로젝트에 참여하여 웹사이트 UI 개발 및 인터랙션 구현을 담당했습니다.",
      "기존 홈페이지의 구조와 콘텐츠를 분석하고 리뉴얼 방향 수립을 위한 기획안 초안을 작성했습니다.",
      "https://7inch.co.kr/main"
    ],
    tags: ["Website", "Renewal"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/farbe/img_01.jpg"],
  },
  "12": {
    title: "홈페이지 유지보수",
    client: "유림이엔씨",
    year: "2019-2020",
    description: [
      "건설/엔지니어링 기업 홈페이지의 안정적인 유지보수 및 퍼블리싱 지원을 담당했습니다."
    ],
    tags: ["Maintenance", "Website"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/yulim/img_01.jpg"],
  },
  "13": {
    title: "홈페이지 리뉴얼 제작",
    client: "셀럽성형외과",
    year: "2020",
    description: [
      "사용자 편의성과 모바일 최적화를 고려한 병원 웹사이트를 신규 제작했습니다."
    ],
    tags: ["Website", "Responsive Web"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/celuv/img_01.jpg"],
  },
  "14": {
    title: "홈페이지 제작",
    client: "CDS",
    year: "2019",
    description: [
      "기업 소개 및 서비스 안내를 효과적으로 전달할 수 있는 웹사이트를 구축했습니다."
    ],
    tags: ["Website"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/cds/img_01.jpg"],
  },
  "15": {
    title: "2019 대구패션문화페스티벌 홈페이지 리뉴얼 제작",
    client: "대구패션문화페스티벌",
    year: "2019",
    description: [
      "2019년도 행사 홍보 웹사이트 리뉴얼 프로젝트에서 UI 개발 및 다국어 페이지 구축을 담당했습니다.",
      "기존 웹사이트의 디자인과 콘텐츠 구조를 개선하고, 영문 페이지를 추가 개발하여 해외 방문자를 위한 정보 접근성을 강화했습니다. 또한 행사 사진 및 동영상 업로드, 팝업 관리 등 지속적인 콘텐츠 업데이트와 유지보수를 통해 안정적인 웹사이트 운영을 지원했습니다."
    ],
    tags: ["Campaign", "Festival Web"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/difacul/img_01.jpg"],
  },
  "16": {
    title: "홈페이지 제작",
    client: "평해노인요양원",
    year: "2019",
    description: [
      "방문객과 보호자들이 쉽고 편리하게 정보를 열람할 수 있도록 웹 accessibility를 고려한 요양원 홈페이지를 제작했습니다.",
      "https://phjs1001.kr/main/index.html"
    ],
    tags: ["Website", "Accessibility"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/sanatorium/img_01.jpg"],
  },
  "17": {
    title: "홈페이지 제작",
    client: "호숫가힐튼펜션",
    year: "2019",
    description: [
      "청도 호숫가힐튼펜션의 공식 홈페이지 구축 프로젝트를 담당하여 펜션 홍보 및 예약을 위한 웹사이트 UI 개발을 수행했습니다.",
      "WordPress 기반으로 홈페이지를 제작하고, 펜션의 주요 시설과 서비스 정보를 효과적으로 전달할 수 있도록 콘텐츠 중심의 UI를 구현했습니다. 또한 운영자가 직접 콘텐츠를 관리할 수 있도록 WordPress 관리자 사용 매뉴얼을 작성하여 유지보수 및 운영 편의성을 높였습니다.",
      "http://xn--o39au81bbsad82c95ao4h4yc.com/"
    ],
    tags: ["Website", "Reservation"],
    bg: "/images/lq/bg.jpg",
    img: ["/images/hilton/img_01.jpg"],
  },
};

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectData[id];

  if (!project) return <div className="flex min-h-screen items-center justify-center">Project not found</div>;

  return <ProjectDetailClient project={project} />;
}

// 클라이언트 컴포넌트 (클릭 스크롤 인터랙션 제어)
function ProjectDetailClient({ project }: { project: ProjectInfo }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // URL 쿼리 파라미터나 기본값으로 필터 상태 설정
  const urlFilter = searchParams.get("filter") as "All" | "Selected";
  const [filter, setFilter] = useState<"All" | "Selected">(urlFilter || "Selected");

  // 토글 클릭 시 메인으로 이동하면서 선택한 필터 쿼리 전달
  const handleFilterChange = (newFilter: "All" | "Selected") => {
    setFilter(newFilter);
    router.push(`/?filter=${newFilter}`);
  };

  // 이미지를 클릭했을 때 다음 이미지 카드로 부드럽게 스크롤하는 함수
  const handleImageClick = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = container.children;

    const nextIndex = (index + 1) % children.length;
    const targetItem = children[nextIndex] as HTMLElement;

    if (targetItem) {
      container.scrollTo({
        left: targetItem.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />

      {/* 헤더 컴포넌트 연동 (클릭 시 쿼리와 함께 메인 이동) */}
      <Header 
        filter={filter}
        setFilter={handleFilterChange}
        totalProjectsCount={Object.keys(projectData).length}
        selectedProjectsCount={4} 
      />

      <div className="flex flex-col min-h-screen bg-white text-black">
        <main 
          className="flex-1 max-w-[1400px] mx-auto w-full px-6 sm:px-12 pt-36 pb-24"
          style={{ fontFamily: "'Monument Grotesk', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          {/* 상단 프로젝트 정보 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16">
            <div className="space-y-8">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 mb-2">Client</span>
                <h2 className="text-sm sm:text-base font-medium tracking-tight text-zinc-900">
                  {project.client || "SAEBOM LEE"}
                </h2>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 mb-2">Project</span>
                <h1 className="text-sm sm:text-base font-medium tracking-tight text-zinc-900">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 mb-2">Year</span>
                <p className="text-sm sm:text-base font-medium tracking-tight text-zinc-900">
                  {project.year || "2023-2026"}
                </p>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 mb-2">Services</span>
                <div className="flex flex-col gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <p key={idx} className="text-sm sm:text-base font-medium tracking-tight text-zinc-900">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 상세 설명 및 방문 링크 */}
          <div className="py-16 max-w-2xl">
            <div className="text-xs sm:text-sm leading-relaxed text-zinc-700 font-normal">
              {project.description.map((line, index) => {
                const isLink = line.startsWith("http");

                return (
                  <p key={index} className="leading-relaxed">
                    {isLink ? (
                      <a 
                        href={line} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-[11px] text-black hover:opacity-50 transition-opacity"
                      >
                        Visit Website ↗
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                );
              })}
            </div>
          </div>

          {/* 이미지 가로 슬라이더 (클릭 시 다음 장으로 스무스하게 전환) */}
          {project.img && project.img.length > 0 && (
            <div className="relative w-full max-w-4xl mx-auto">
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2 px-4 focus:outline-none cursor-pointer"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.img.map((imgSrc, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleImageClick(index)} 
                    className="flex-shrink-0 w-full snap-center overflow-hidden transition-all duration-500 ease-out hover:opacity-95"
                    title="클릭하면 다음 이미지로 넘어갑니다"
                  >
                    <Image 
                      src={imgSrc}
                      alt={`${project.title} Detail ${index + 1}`}
                      width={1400}  
                      height={1000} 
                      className="w-full h-auto object-cover pointer-events-none"
                    />
                  </div>
                ))}
              </div>
              
              {/* 안내 가이드 */}
              <div className="flex justify-center items-center text-[11px] text-zinc-400 font-medium tracking-wide">
                <span>이미지를 클릭하거나 좌우로 밀어서 다음 장으로 넘겨보세요</span>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
}