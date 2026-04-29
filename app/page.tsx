import Link from 'next/link';

// Main
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen px-6">
      <section className="flex flex-col justify-end h-[100vh]">
        <p className="text-3xl font-bold leading-tight mb-4 tracking-tighter">
          6+ Years in Web UI/UX Engineering,<br />
          I build anything and everything digital. (And yes, I design them too.)<br /> 
        </p>
        <h1 className="text-[16.8vw] font-black leading-none tracking-tighter uppercase">
          SAEBOM:LEE
        </h1>
      </section>
      
      <WorkList />
    </main>
  );
}

// Work Data
const projects = [
  { id: "01", title: "Slim9 웹사이트 UI/UX 개발", tags: ["Develop", "UI/UX", "Website", "Mobile"] },
  { id: "02", title: "LOUIS QUATORZE 직영몰 라이브 커머스 방송 구축", tags: ["Develop", "UI/UX", "Website"] },
  { id: "03", title: "LOUIS QUATORZE 캠페인 페이지 제작", tags: ["Develop", "UI/UX", "Website"] },
  { id: "04", title: "LOUIS QUATORZE 직영몰 리뉴얼 작업", tags: ["Develop", "UI/UX", "Website"] },

];

// Work List
function WorkList() {
  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-4xl font-bold">Work</h2>
        <Link href="/work">
          <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer">
            View all work
          </button>
        </Link>
      </div>
      
      <div className="border-t border-black">
        {projects.map((item) => (
          /* div 대신 Link를 사용합니다. 
             href 경로에는 각 프로젝트의 고유 id를 포함시킵니다. */
          <Link 
            key={item.id} 
            href={`/work/${item.id}`} 
            className="flex items-center justify-between py-6 border-b border-gray-300 hover:bg-gray-100 transition px-2 group"
          >
            {/* 번호 영역 */}
            <span className="w-12 font-mono text-lg">{item.id}</span>
            
            {/* 제목 영역 (그룹 호버 시 강조하고 싶다면 group-hover: 사용 가능) */}
            <span className="flex-1 text-xl font-medium group-hover:pl-2 transition-all">
              {item.title}
            </span>

            {/* 태그 영역 */}
            <div className="flex gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="px-4 py-1 border border-black rounded-full text-xs font-medium bg-white">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}