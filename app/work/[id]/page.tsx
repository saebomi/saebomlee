import Header from "../../header";
import Footer from "../../footer";
import Image from 'next/image';

// 1. 데이터 타입을 명확히 정의해서 TypeScript를 안심시킵니다.
interface ProjectInfo {
  title: string;
  description: string;
  tags: string[];
  img: string;
}

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 2. await로 id를 안전하게 가져옵니다.
  const { id } = await params;

  // 3. 프로젝트 데이터를 정의합니다.
  const projectData: { [key: string]: ProjectInfo } = {
    "01": {
      title: "Slim9 웹사이트 UI/UX 개발",
      description: "슬림9의 브랜드 아이덴티티를 반영한 반응형 웹사이트 구축 프로젝트입니다.",
      tags: ["Develop", "UI/UX", "Next.js"],
      img: "/images/slim9/pc-main.png"
    },
    "02": {
      title: "LOUIS QUATORZE 라이브 커머스",
      description: "루이까또즈 직영몰 내 실시간 소통이 가능한 라이브 커머스 모듈을 구축했습니다.",
      tags: ["Live Stream", "Web Architecture"],
      img: "/images/slim9.png"
    },
  };

  const project = projectData[id];

  // 4. 데이터가 없을 때의 예외 처리
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-6 py-24 max-w-screen-xl mx-auto w-full">
        <span className="font-mono text-xl mb-4 block text-gray-400">{id}</span>
        <h1 className="text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
          {project.title}
        </h1>
        <div className="flex gap-2 mb-12">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-1 border border-black rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xl leading-relaxed max-w-2xl text-gray-800">
          {project.description}
        </p>
        <div>
          <image 
            src={project.img} // interface에서 정의한 이름이 'img'라면 project.img로!
            alt={project.title}
            width={1200}    // 적절한 가로 크기
            height={675}    // 적절한 세로 크기 (16:9 비율 등)
            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-700"
            priority        // 첫 화면에 나오는 이미지라면 빠르게 로딩하도록 설정
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}