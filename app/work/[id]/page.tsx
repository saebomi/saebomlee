import Header from "../../header";
import Footer from "../../footer";
import Image from 'next/image';

interface ProjectInfo {
  title: string;
  description: string[];
  tags: string[];
  bg: string;
  img: string[];
  video?: string;
  mobile?: string[];
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const projectData: { [key: string]: ProjectInfo } = {
    "01": {
      title: "Slim9 자사몰 서비스 고도화 및 인프라 관리",
      description: [
        "여성 언더웨어 브랜드 Slim9의 자사몰 UI/UX 개발 및 운영을 담당하며, 사용자 데이터 기반의 서비스 고도화를 이끌었습니다.",
        "Cafe24 플랫폼 환경을 바탕으로 사용자 여정을 분석하여 이탈 구간을 개선하고, 쇼핑 경험을 최적화하기 위한 레이아웃 리뉴얼을 주도했습니다.",
        "GA 등 마케팅 스크립트를 삽입하여 데이터 트래킹 환경을 구축하고, AWS 서버 관리 및 주기적인 UI/UX 모니터링을 통해 서비스의 안정성과 품질을 지속적으로 유지하는 데 기여했습니다.",
        "https://slim9.co.kr/"
      ],
      tags: ["Cafe24", "HTML/CSS/JAVASCRIPT", "Cafe24", "2023-2025"],
      bg: "/images/slim9/bg_01.jpg",
      img: ["/images/slim9/work_01.png"],
      video: "/video/video_01.mov",
      // mobile: ["/video/m_video_01.mov"] 
    },
     "02": {
      title: "Slim9 자사몰 프로모션 페이지 UI개발",
      description: [
        "여성 언더웨어 브랜드 'Slim9'의 자사몰 신규 브릿지 페이지 및 프로모션 페이지 개발, 라이브 연동, 개발 가이드를 수립하여 작업 효율을 높였습니다."
      ],
      tags: ["Website", "E-commerce", "Cafe24", "2023-2025"],
      bg: "/images/slim9/bg_01.jpg",
      img: ["/images/slim9/work_01.png"],
      video: "/video/video_02.mov",
      mobile: ["/video/m_work_01.mov", "/video/m_work_02.mov", "/video/m_work_03.mov"]
    },
    "03": {
      title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱 업무",
      description: [
        "LOUIS QUATORZE 직영몰의 퍼블리싱 파트를 맡아 다수의 기획전 및 이벤트 페이지 UI를 구축했습니다.",
        "동적인 웹 인터랙션을 통해 브랜드 메시지를 효과적으로 전달했으며, 배포 단계에서의 UI QA와 피드백 반영을 통해 서비스의 완성도를 높였습니다.",
        "타 부서와 협업을 통해 디자인 의도를 정밀하게 코드로 구현함과 동시에 유지보수 효율을 고려한 구조적인 마크업을 수행했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/lq/bg.jpg",
      img: ["/images/lq/work_01.png"],
      video: "/video/lq/video_01.mov",
      // mobile: ["/video/lq/video_02.mov"] 
    },
     "04": {
      title: "Find your light 3 관련 웹페이지 제작",
      description: [
        "LOUIS QUATORZE에서 진행된 'Find your light 3' 프로젝트의 퍼블리싱 업무를 수행했습니다.",
        "대규모 캠페인 특성에 맞춰 메인 페이지와 다수의 작가 상세 페이지를 효율적으로 관리하고 구축했습니다.",
        "또한 Shopify기반 글로벌 자사몰 캠페인의 영문 웹페이지 퍼블리싱을 전담하여 글로벌 사용자에게 최적화된 브랜드 경험을 구현했습니다.",
        "https://stylelq.github.io/pc/html/fyl3/fyl3_artist01.html"
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/lq/bg.jpg",
      img: ["/images/lq/work_01.png"],
      video: "/video/lq/video_01.mov",
    },
     "05": {
      title: "LOUIS QUATORZE 직영몰 라이브커머스 방송 구축",
      description: [
        "브랜드 직영몰의 라이브 커머스 서비스 구축을 위해 목록, 예약 상세, 플레이어 페이지의 퍼블리싱 전반을 담당했습니다.",
        "실시간 스트리밍 환경에 최적화된 UI를 구현하고, 테스트와 QC를 통해 안정적인 방송 시청 및 구매 경험을 제공했습니다.",
        "https://stylelq.github.io/pc/html/live/live.html"
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/lq/bg.jpg",
      img: ["/images/lq/live_01.png","/images/lq/live_02.png"],
    },
    "06": {
      title: "LOUIS QUATORZE 직영몰 프론트엔드 리뉴얼",
      description: [
        "브랜드 직영몰 프론트 개편을 위해 웹 표준을 준수하는 마크업과 JavaScript 모듈화 및 원본 소스 관리 체계를 구축했습니다.",
        "CSS 전처리기 도입과 공통 가이드 제작으로 코드 생산성을 높였으며, 테스트와 QC 과정을 통해 대규모 개편의 완성도와 유지보수 효율을 극대화했습니다.",
        "https://stylelq.github.io/pc/html/map/map_lq.html"
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/lq/bg.jpg",
      img: ["/images/lq/img_detail.png"],
    },
    "07": {
      title: "Closetshare UI 개선",
      description: [
        "플랫폼의 모바일 UI 개선을 전담하며, 카테고리 확장에 최적화된 사용자 경험과 지속 가능한 개발 환경을 구축했습니다.",
        "상품 카테고리 확장 및 매출 증대를 목표로 한 라이프스타일 프로젝트에 참여하여 플랫폼 전반의 UI 개선 퍼블리싱을 수행했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/closetshare/bg.jpg",
      img: ["/images/closetshare/img_01.jpg","/images/closetshare/img_02.jpg","/images/closetshare/img_03.jpg","/images/closetshare/img_04.jpg","/images/closetshare/img_05.jpg","/images/closetshare/img_06.jpg","/images/closetshare/img_07.jpg"],
    },
    "08": {
      title: "한림기술 홈페이지 리뉴얼 제작",
      description: [
        "한림기술과 세이콘으로 분리 운영되던 기존 사이트의 콘텐츠를 통합하여, 브랜드 정체성을 일원화한 리뉴얼 홈페이지를 구축했습니다.",
        "메인 및 주요 서브 페이지의 퍼블리싱을 전담하였고, 운영 효율을 고려한 게시판 및 시스템 설계로 유지관리 편의성을 개선했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/hanlim/bg.jpg",
      img: ["/images/hanlim/img_02.jpg"],
    },
    "09": {
      title: "가온평생교육원 홈페이지 유지보수",
      description: [
        "가온평생교육원 홈페이지의 정기적인 콘텐츠 업데이트를 수행하며 교육 서비스 운영의 안정성을 지원했습니다.",
        "UI를 사용자 친화적으로 개편하여 학습 편의성을 높였으며, 실질적인 서비스 이용 경험을 개선했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/gaon/bg.jpg",
      img: ["/images/gaon/img_01.jpg"],
    },
    "10": {
      title: "아기세탁소 홈페이지 제작",
      description: [
        "아기세탁소의 브랜드 홈페이지 윕 퍼블리싱 전반을 담당했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/laundry/bg.jpg",
      img: ["/images/laundry/img_01.jpg"],
    },
    "11": {
      title: "모든상사 쇼핑몰 제작",
      description: [
        "카페24 플랫폼을 기반으로 모든상사 쇼핑몰의 스킨 제작 및 웹 퍼블리싱 전반을 수행했습니다."
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/moden/bg.jpg",
      img: ["/images/moden/img_01.jpg"],
    },
    "12": {
      title: "파르베성형외과 홈페이지 리뉴얼",
      description: [
        "기존 웹사이트 분석을 바탕으로 리뉴얼 기획 초안을 수립하고, 대구 파르베 성형외과 홈페이지의 주요 진료 및 게시판 페이지 퍼블리싱을 전담했습니다.",
        "사이트 전반에 모션을 적용하여 의료 서비스의 신뢰도와 브랜드 이미지를 시각적으로 고급화하는 데 기여했습니다.",
        "https://7inch.co.kr/"
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/farbe/bg.jpg",
      img: ["/images/farbe/img_01.jpg"],
    },
    "13": {
      title: "유림이엔씨 홈페이지 유지보수",
      description: [
        "유림이엔씨의 웹사이트 운영을 담당하며, 신규 주택 사업 정보 업데이트와 팝업 관리 등 유지보수를 수행했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/yulim/bg.jpg",
      img: ["/images/yulim/img_01.jpg"],
    },
    "14": {
      title: "셀럽성형외과 홈페이지 제작",
      description: [
        "셀럽성형외과 홈페이지 리뉴얼 프로젝트에서 웹 퍼블리싱 전반을 담당했습니다.",
        "Full Page 형태의 감각적인 메인 레이아웃을 구현하며 운영 편의성을 고려한 게시판 설계로 유지관리 환경을 구축했습니다",
        "https://celuv.kr/"
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/celuv/bg.jpg",
      img: ["/images/celuv/img_01.jpg"],
    },
    "15": {
      title: "CDS 홈페이지 제작",
      description: [
        "다양한 입점 브랜드 소개 및 홍보를 위한 CDS 공식 홈페이지의 웹 퍼블리싱을 담당했습니다."
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/cds/bg.jpg",
      img: ["/images/cds/img_01.jpg"],
    },
    "16": {
      title: "대구패션문화페스티벌 홈페이지 제작",
      description: [
        "2019 대구국제패션문화페스티벌 행사 홍보를 위한 홈페이지 리뉴얼 퍼블리싱을 전담했습니다.",
        "글로벌 사용자를 위한 다국어 환경을 구축하고, 행사 기간 전후로 실시간 미디어 업데이트와 팝업 관리를 수행하며 운영을 지원했습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/difacul/bg.jpg",
      img: ["/images/difacul/img_01.jpg"],
    }, 
    "17": {
      title: "평해노인요양원 홈페이지 제작",
      description: [
        "평해노인요양원의 신규 홈페이지 제작 프로젝트에 참여하여 서비스 안내 및 시설 소개를 위한 주요 서브 페이지 퍼블리싱을 담당했습니다.",
        "https://phjs1001.kr/main/index.html"
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/sanatorium/bg.jpg",
      img: ["/images/sanatorium/img_01.jpg"],
    }, 
    "18": {
      title: "호숫가힐튼펜션 홈페이지 제작",
      description: [
        "호숫가힐튼펜션의 홍보 및 예약 활성화를 위해 워드프레스를 활용한 최적화된 웹사이트를 구축했습니다.",
        "오픈 이후 유지보수 및 관리자 매뉴얼을 제작하였습니다.",
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/hilton/bg.jpg",
      img: ["/images/hilton/img_01.jpg"],
    }
         
  };

  const project = projectData[id];

  if (!project) return <div className="flex min-h-screen items-center justify-center">Project not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-6 py-36">
        <div className="info flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* 히어로 이미지 (bg) */}
          <div className="rounded-xl md:w-[40%]">
            <Image 
              src={project.bg} 
              alt={`${project.title} Hero`}
              width={1600}  
              height={900}   
              className="w-full h-auto object-cover"
              priority 
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="mb-24 md:w-[60%]">
            
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tags.map((tag) => (
                <span key={tag} className="px-5 py-1.5 border border-current rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-4xl font-black mb-8 tracking-tighter leading-[0.9] break-keep">
              {project.title}
            </h1>
            <div className="text-lg md:text-xl leading-relaxed text-current space-y-4 break-keep">
             {project.description.map((line, index) => {
                const isLink = line.startsWith("http");

                return (
                  <p key={index} className="text-lg leading-relaxed break-keep">
                    {isLink ? (
                      <a 
                        href={line} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black border-b border-gray-300 transition-all text-sm inline-block mt-2"
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
        </div>

        {/* 비디오가 있을 때만 렌더링 */}
          {project.video && (
            <div className="w-full shadow-2xl rounded-lg overflow-hidden bg-black mb-20">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </div>
          )}

          {project.mobile && (
            <div className="mo-video w-xl flex gap-4">
              {project.mobile.map((videoSrc, index) => (
              <video
                key={index}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="max-w-xl shadow-2xl rounded-lg overflow-hidden"
              />
              ))}
            </div>
          )}
        {/* 상세 작업물 이미지 (img) */}
        <div className="w-full shadow-2xl rounded-lg overflow-hidden bg-gray-50">    
          {project.img.map((imgSrc, index) => (
          <Image 
            key={index}
            src={imgSrc}
            alt={`${project.title} Detail`}
            width={1200}  
            height={2000} 
            className="w-full h-auto"
          />
          ))}
        </div>

      </main>
    </div>
  );
}