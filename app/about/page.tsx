"use client";

import FadeIn from "../../components/Fadein";


export default function About() {
  const experiences = [
    {
      company: "커뮤니케이션앤컬처",
      position: "디자인팀 / UI/UX개발자",
      period: "2023.08 — 2025.11",
      task: "Slim9 Cafe24 기반 자사몰 UI/UX개발 및 유지보수 담당",
    },
    {
      company: "엑스얼라이언스",
      position: "S/W개발팀 / UI/UX개발자",
      period: "2021.11 — 2023.07",
      task: "LOUIS QUATORZE 공식 직영몰 UI/UX 개발 및 유지보수 담당",
    },
    {
      company: "더클로젯컴퍼니",
      position: "Development팀 / UI/UX개발자",
      period: "2020.12 — 2021.07",
      task: "PWA 기반 플랫폼 closetshare 퍼블리싱",
    },
    {
      company: "11마리의낭만고양이",
      position: "웹사업부 / UI/UX개발자",
      period: "2019.02 — 2020.11",
      task: "광고에이전시 내 웹사이트 제작 및 유지보수",
    },
  ];

  return (
    <section className="flex-1 mx-auto w-full px-6 py-36">
      {/* <FadeIn>
        <h2 className="text-5xl font-black uppercase tracking-tighter text-black mb-20 md:mb-32">
          About
        </h2>
      </FadeIn> */}

      <div className="flex flex-col gap-24 md:gap-40">
        {/* 01. Intro Section */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* <div className="md:col-span-3">
              <h3 className="text-sm font-current uppercase">Intro</h3>
            </div> */}
            <div className="md:col-span-9">
              <p className="text-base md:text-xl font-current tracking-tighter break-keep text-black">
              이새봄<br></br>
              Web Design ✳︎ UI/UX ✳︎ Digital Experience<br></br><br></br>

              안녕하세요, 패션과 라이프스타일 브랜드의 시각적 언어와 디지털 경험에 관심이 많습니다.<br></br>
              일상 속에서 영감을 발견하고, 디자인의 작은 디테일을 관찰하며, 아이디어를 직접 구현하는 것을 즐깁니다.<br></br>
              지난 6년간 퍼블리싱, 프론트엔드 개발, 웹디자인까지 다양한 웹 프로젝트를 경험하며 디자인과 기술을 연결해 왔습니다.<br></br>
              시각적인 매력과 실질적인 가치가 자연스럽게 어우러지는 디지털 경험을 만들어 가고 있습니다.<br></br>
              계속 배우고, 탐색하고, 만들어 가는 중입니다.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-black">
            <div className="md:col-span-2">
              <h3 className="text-sm font-black font-current uppercase">Experience</h3>
            </div>
            <div className="md:col-span-9">
              {/* Desktop Header */}
              <div className="hidden md:grid grid-cols-4 text-sm font-current uppercase mb-8">
                <div>Company</div>
                <div>Position</div>
                <div>Period</div>
                <div>Task</div>
              </div>

              {/* List */}
              <div className="flex flex-col gap-12 md:gap-8 text-black">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-4 text-sm font-current  gap-2 md:gap-0">
                    <div>
                      <p className="md:hidden text-gray-400 text-[10px] mb-1">Company</p>
                      <p className="text-lg md:text-sm">{exp.company}</p>
                    </div>
                    <div>
                      <p className="md:hidden text-gray-400 text-[10px] mb-1">Position</p>
                      <p className="opacity-60 md:opacity-100">{exp.position}</p>
                    </div>
                    <div>
                      <p className="md:hidden text-gray-400 text-[10px] mb-1">Period</p>
                      <p className="opacity-60 md:opacity-100">{exp.period}</p>
                    </div>
                    <div>
                      <p className="md:hidden text-gray-400 text-[10px] mb-1">Task</p>
                      <p className="text-gray-500 md:text-current">{exp.task}</p>
                    </div>
                    <div className="md:hidden border-b border-gray-100 dark:border-zinc-800 w-full mt-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-black">
            <div className="md:col-span-2">
              <h3 className="text-sm font-black font-current uppercase">Education</h3>
            </div>
            <div className="md:col-span-9">
              <div className="text-sm font-current uppercase pb-6">
                <p>세종대학교 조리서비스경영학과</p>
                <p className="opacity-60">2023.03 - 2027.08(졸업예정)</p>
                <p className="opacity-60">조리서비스경영을 전공하며 서비스 운영 및 경영 전반에 대한 이해를 넓히고 있습니다.<br></br>고객 중심의 서비스 설계와 비즈니스 구조를 학습하며, 사용자 관점에서 서비스를 이해하고 개선하는 시각을 기르고 있습니다.</p>
              </div>
              <div className="text-sm font-current pb-6">
                <p>Pratt Institute - Creative Careers</p>
                <p className="opacity-60">2026.01 - 2026.05</p>
                <p className="opacity-60">국립국제교육원 주관 국비연수생 49기로 선발되어 뉴욕 Pratt Institute의 Creative Careers 프로그램에 참여했습니다.<br></br>그래픽 디자인, 디지털 디자인 및 크리에이티브 분야의 실습을 통해 디자인 역량을 확장하고, 글로벌 디자인 트렌드와 다양한 시각적 접근 방식을 경험했습니다.</p>
              </div>

              <div className="text-sm font-current uppercase pb-6">
                <p>미림마이스터고등학교 뉴미디어솔루션과(프로그래밍)</p>
                <p className="opacity-60">2016.03 - 2019.01</p>
                <p className="opacity-60">프로그래밍을 전공하며 웹 개발의 기초와 프로그래밍 역량을 쌓았습니다.<br></br>웹 기술과 코드에 대한 이해를 바탕으로 디지털 환경에서 아이디어를 실제 화면과 기능으로 구현하는 기초를 다졌습니다.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}