"use client";
import { useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../../components/Fadein";

const stuffItems = [
  { id: 1, src: "/images/stuff/1.png", size: "small" },
  { id: 2, src: "/images/stuff/2.png", size: "large" },
  { id: 3, src: "/images/stuff/3.png", size: "medium" },
  { id: 4, src: "/images/stuff/4.png", size: "small" },
  { id: 5, src: "/images/stuff/5.png", size: "medium" },
//   { id: 6, src: "/images/stuff/6.png", size: "small" },
  { id: 7, src: "/images/stuff/7.png", size: "large" },
  { id: 8, src: "/images/stuff/8.png", size: "small" },
  { id: 9, src: "/images/stuff/9.jpg", size: "medium" },
  { id: 10, src: "/images/stuff/10.png", size: "small" },
//   { id: 11, src: "/images/stuff/11.png", size: "large" },
  { id: 12, src: "/images/stuff/12.jpg", size: "medium" },
  { id: 13, src: "/images/stuff/13.jpg", size: "small" },
  { id: 14, src: "/images/stuff/14.png", size: "large" },
];

export default function StuffPage() {
const [selectedId, setSelectedId] = useState<any>(null);

  const selectedItem = stuffItems.find(item => item.id === selectedId);

  return (
    <main className="min-h-screen px-6 py-24 md:py-36 transition-colors duration-500">
      
      <section className="mb-20 md:mb-32">
        <FadeIn>
          <h1 className="text-[18vw] font-black leading-[0.75] tracking-tighter uppercase mb-10">Stuff</h1>
          <p className="text-lg font-bold max-w-xl leading-tight tracking-tighter opacity-80 break-keep">
            A curated collection of visual experiments.<br />From traditional graphics to AI-driven creativity.
          </p>
        </FadeIn>
      </section>

      {/* 그리드 월 */}
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-end">
        {stuffItems.map((item, idx) => (
          <FadeIn key={item.id} delay={idx * 0.05}>
            <div 
              onClick={() => setSelectedId(item.id)}
              className={`relative overflow-hidden group bg-gray-50 dark:bg-zinc-900 cursor-pointer 
                ${item.size === 'large' ? 'aspect-[3/4]' : item.size === 'medium' ? 'aspect-square' : 'aspect-[4/5]'}
              `}
            >
              <Image
                src={item.src}
                alt={`Stuff ${item.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
          </FadeIn>
        ))}
      </section>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[90vw] h-[80vh] md:w-[70vw] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={selectedItem.src}
                alt="Selected Stuff"
                fill
                className="object-contain" 
              />
              
              {/* 닫기 버튼 기호 (선택하신 미니멀 무드) */}
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute -top-12 right-0 md:-right-12 text-3xl font-light hover:rotate-90 transition-transform duration-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-40 text-center opacity-30 font-mono text-[10px] uppercase tracking-widest">
        Everything served as inspiration.
      </footer>
    </main>
  );
}