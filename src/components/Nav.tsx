"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
export function Nav() {
  const [active, setActive] = useState(navItems[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-25% 0px -65%" },
    );
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header>
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          Cognition <span>·</span> Devin
        </a>
        <nav>
          {navItems.map((item) => (
            <a className={active === item.id ? "active" : ""} href={`#${item.id}`} key={item.id}>
              {item.number} {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
