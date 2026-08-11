"use client";

type Theme = "light" | "dark";
const listeners = new Set<() => void>();
let theme: Theme = "light";

export function getTheme() {
  return theme;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setTheme(next: Theme) {
  theme = next;
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  listeners.forEach((listener) => listener());
}

export function initializeTheme() {
  theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  listeners.forEach((listener) => listener());
}
