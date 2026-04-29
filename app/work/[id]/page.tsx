import Header from "../../header";
import Footer from "../../footer";
import Image from 'next/image';

// 1. 데이터 타입을 명확히 정의해서 TypeScript를 안심시킵니다.
interface ProjectInfo {
  title: string;
  description: string[];
  tags: string[];
  bg: string;
  img: string;
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const projectData: { [key: string]: ProjectInfo } = {
    "01": {
      title: "Slim9 자사몰 서비스 고도화 및 인프라 관리",
      description: [
      "여성 언더웨어 브랜드 'Slim9'의 자사몰 UI/UX 개발 및 운영을 담당하며, 사용자 데이터 기반의 서비스 고도화를 이끌었습니다.",
      "Cafe24 플랫폼 환경을 바탕으로 사용자 여정을 분석하여 이탈 구간을 개선하고, 쇼핑 경험을 최적화하기 위한 레이아웃 리뉴얼을 주도했습니다.",
      "신규 브릿지 페이지 및 프로모션 페이지 개발, 라이브 연동, 개발 가이드를 수립하여 작업 효율을 높였습니다. ",
      "GA 등 마케팅 스크립트를 삽입하여 데이터 트래킹 환경을 구축하고, AWS 서버 관리 및 주기적인 UI/UX 모니터링을 통해 서비스의 안정성과 품질을 지속적으로 유지하는 데 기여했습니다."
      ],
      tags: ["E-commerce", "Responsive Web", "Cafe24", "2023-2025"],
      bg: "/images/slim9/bg_01.jpg",
      img: "/images/slim9/work_01.png",
    },
    "02": {
      title: "Slim9 자사몰 서비스 고도화 및 인프라 관리",
      description: [
      "여성 언더웨어 브랜드 'Slim9'의 자사몰 UI/UX 개발 및 운영을 담당하며, 사용자 데이터 기반의 서비스 고도화를 이끌었습니다.",
      "Cafe24 플랫폼 환경을 바탕으로 사용자 여정을 분석하여 이탈 구간을 개선하고, 쇼핑 경험을 최적화하기 위한 레이아웃 리뉴얼을 주도했습니다.",
      "신규 브릿지 페이지 및 프로모션 페이지 개발, 라이브 연동, 개발 가이드를 수립하여 작업 효율을 높였습니다. ",
      "GA 등 마케팅 스크립트를 삽입하여 데이터 트래킹 환경을 구축하고, AWS 서버 관리 및 주기적인 UI/UX 모니터링을 통해 서비스의 안정성과 품질을 지속적으로 유지하는 데 기여했습니다."
      ],
      tags: ["E-commerce", "Responsive Web", "Cafe24", "2023-2025"],
      bg: "/images/slim9/bg_01.jpg",
      img: "/images/slim9/pc-main.png"
    },
  };

  const project = projectData[id];

  if (!project) return <div className="flex min-h-screen items-center justify-center">Project not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full py-24">
        {/* 히어로 이미지 (bg) */}
        <div className="w-full overflow-hidden rounded-xl">
          <Image 
            src={project.bg} 
            alt={`${project.title} Hero`}
            width={1600}  
            height={900}   
            className="w-full h-auto object-cover"
            priority // 최상단 이미지만 priority 유지
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span key={tag} className="px-5 py-1.5 border border-black rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-xl leading-relaxed text-gray-800">
            {project.description.map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            ))}
          </div>
        </div>

        {/* 상세 이미지 (img) */}
        <div className="w-full shadow-2xl rounded-lg overflow-hidden">      
            <Image 
            src={project.img} 
            alt={`${project.title} Detail`}
            width={1200}  
            height={2000} // 실제 이미지 비율에 맞춰 조정하세요!
            className="w-full h-auto"
            // 여기서는 priority를 뺍니다.
          />
        </div>

      </main>
      <Footer />
    </div>
  );
}