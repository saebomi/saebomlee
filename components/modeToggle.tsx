'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration 에러 방지
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="font-current text-3xl transition-transform hover:scale-110 active:scale-95"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}