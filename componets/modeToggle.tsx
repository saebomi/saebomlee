'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 클라이언트 렌더링 확인 (Hydration 에러 방지)
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-2xl transition-transform hover:scale-110 active:scale-95"
    >
      {theme === "dark" ? "◐" : "○"}
    </button>
  );
}