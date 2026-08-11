"use client";
import { useEffect, useSyncExternalStore } from "react";
import { getTheme, initializeTheme, setTheme, subscribe } from "./themeStore";
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  useEffect(() => initializeTheme(), []);
  const dark = theme === "dark";
  return (
    <button
      className="btn theme-toggle"
      aria-label="Toggle dark mode"
      onClick={() => {
        setTheme(dark ? "light" : "dark");
      }}
    >
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
