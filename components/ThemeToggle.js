"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        padding: "6px 12px",
        borderRadius: "6px",
        background: theme === "light" ? "#222" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
