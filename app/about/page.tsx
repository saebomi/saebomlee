"use client";

import { motion, AnimatePresence } from "framer-motion";
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
      <FadeIn>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-20 md:mb-32">
          About
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-24 md:gap-40">
        {/* 01. Intro Section */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* <div className="md:col-span-3">
              <h3 className="text-sm font-current uppercase">Intro</h3>
            </div> */}
            <div className="md:col-span-9">
              <p className="text-base md:text-xl font-current tracking-tighter break-keep">
                Digital. Anything. Everything. <br />
                가능성을 현실로 만드는 7년차 UI/UX 개발자 이새봄입니다.<br />
                인하우스와 스타트업을 거치며 사용자 중심의 인터페이스를 설계하고 구현해 왔습니다. <br />
                최근에는 패션 이커머스 서비스 고도화를 주도하며, 복잡한 비즈니스 요구사항을 유연한 UI와 정교한 인터랙션으로 구현하는 데 집중하고 있습니다.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
              <div className="flex flex-col gap-12 md:gap-8">
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
                    {/* 모바일 구분선 */}
                    <div className="md:hidden border-b border-gray-100 dark:border-zinc-800 w-full mt-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-sm font-black font-current uppercase">Education</h3>
            </div>
            <div className="md:col-span-9">
              <div className="text-sm font-current uppercase pb-6">
                <p>세종대학교 조리서비스경영학과</p>
                <p className="opacity-60">2023.03 - PRESENT</p>
                <p className="opacity-60">조리서비스경영을 전공하며 사용자 중심의 서비스 마인드와 비즈니스 구조를 폭넓게 학습하고 있습니다.</p>
              </div>
              <div className="text-sm font-current uppercase pb-6">
                <p>Pratt Institute - Creative Careers</p>
                <p className="opacity-60">2026.01 - 2026.05</p>
                <p className="opacity-60">국립국제교육원 주관 국비연수생(49기)으로 선발되어, 뉴욕 Pratt Institute에서 디자인 트렌드와 글로벌 크리에이티브 역량을 쌓았습니다</p>
              </div>

              <div className="text-sm font-current uppercase pb-6">
                <p>미림마이스터고등학교 뉴미디어솔루션과(프로그래밍)</p>
                <p className="opacity-60">2016.03 - 2019.01</p>
                <p className="opacity-60">미림마이스터고에서 프로그래밍을 전공했습니다.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}