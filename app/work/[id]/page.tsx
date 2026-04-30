import Header from "../../header";
import Footer from "../../footer";
import Image from 'next/image';

interface ProjectInfo {
  title: string;
  description: string[];
  tags: string[];
  bg: string;
  img: string;
  video?: string;
  mobile?: string[];
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const projectData: { [key: string]: ProjectInfo } = {
    "01": {
      title: "Slim9 자사몰 서비스 고도화 및 인프라 관리",
      description: [
        "여성 언더웨어 브랜드 'Slim9'의 자사몰 UI/UX 개발 및 운영을 담당하며, 사용자 데이터 기반의 서비스 고도화를 이끌었습니다.",
        "Cafe24 플랫폼 환경을 바탕으로 사용자 여정을 분석하여 이탈 구간을 개선하고, 쇼핑 경험을 최적화하기 위한 레이아웃 리뉴얼을 주도했습니다.",
        "GA 등 마케팅 스크립트를 삽입하여 데이터 트래킹 환경을 구축하고, AWS 서버 관리 및 주기적인 UI/UX 모니터링을 통해 서비스의 안정성과 품질을 지속적으로 유지하는 데 기여했습니다."
      ],
      tags: ["Website", "E-commerce", "Cafe24", "2023-2025"],
      bg: "/images/slim9/bg_01.jpg",
      img: "/images/slim9/work_01.png",
      video: "/video/video_01.mov",
      mobile: ["/video/m_video_01.mov"] 
    },
     "02": {
      title: "Slim9 자사몰 프로모션 페이지 UI개발",
      description: [
        "여성 언더웨어 브랜드 'Slim9'의 자사몰 신규 브릿지 페이지 및 프로모션 페이지 개발, 라이브 연동, 개발 가이드를 수립하여 작업 효율을 높였습니다."
      ],
      tags: ["Website", "E-commerce", "Cafe24", "2023-2025"],
      bg: "/images/slim9/bg_01.jpg",
      img: "/images/slim9/work_01.png",
      video: "/video/video_02.mov",
      mobile: ["/video/m_work_01.mov", "/video/m_work_02.mov", "/video/m_work_03.mov"]
    },
    "03": {
      title: "LOUIS QUATORZE 직영몰 상시 퍼블리싱 업무",
      description: [
        "브랜드 아이덴티티를 강화하기 위한 직영몰 리뉴얼 및 유지보수 퍼블리싱을 담당했습니다.",
        "이벤트 기획전 및 캠페인 페이지의 UI 구현을 통해 사용자 참여도를 높이는 데 기여했습니다.",
        "자체 라이브 커머스 모듈 구축 및 실시간 방송 최적화를 위한 프론트엔드 작업을 수행했습니다."
      ],
      tags: ["E-commerce", "Responsive Web", "2021-2023"],
      bg: "/images/lq/bg.jpg",
      img: "/images/lq/work_01.png"
    }  
  };

  const project = projectData[id];

  if (!project) return <div className="flex min-h-screen items-center justify-center">Project not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-6 py-36">
        <div className="info flex">
          {/* 히어로 이미지 (bg) */}
          <div className="w-full overflow-hidden rounded-xl mb-20 shadow-sm">
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
          <div className="mb-24">
            
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tags.map((tag) => (
                <span key={tag} className="px-5 py-1.5 border border-black rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-4xl font-black mb-8 tracking-tighter leading-[0.9] break-keep">
              {project.title}
            </h1>
            <div className="text-lg md:text-xl leading-relaxed text-gray-700 space-y-4 break-keep">
              {project.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
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
          <Image 
            src={project.img} 
            alt={`${project.title} Detail`}
            width={1200}  
            height={2000} 
            className="w-full h-auto"
          />
        </div>

      </main>
    </div>
  );
}