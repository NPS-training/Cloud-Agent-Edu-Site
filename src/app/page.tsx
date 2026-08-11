"use client";
import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ColdOpen } from "@/components/ColdOpen";
import { Evolution } from "@/components/Evolution";
import { Bottleneck } from "@/components/Bottleneck";
import { ExecutionEnv } from "@/components/ExecutionEnv";
import { LocalVsCloud } from "@/components/LocalVsCloud";
import { Patterns } from "@/components/Patterns";
import { Context } from "@/components/Context";
import { ModelRouting } from "@/components/ModelRouting";
import { Regulated } from "@/components/Regulated";
import { Proof } from "@/components/Proof";
import { GettingStarted } from "@/components/GettingStarted";
import { WhyCognition } from "@/components/WhyCognition";
import { Meta } from "@/components/Meta";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () =>
      setProgress((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <Nav />
      <main id="top">
        <Hero />
        <ColdOpen />
        <Evolution />
        <Bottleneck />
        <ExecutionEnv />
        <LocalVsCloud />
        <Patterns />
        <Context />
        <ModelRouting />
        <Regulated />
        <Proof />
        <GettingStarted />
        <WhyCognition />
        <Meta />
      </main>
      <footer>
        <div className="wrap footer-inner">
          <span className="brand">
            Cognition <span>·</span> Devin
          </span>
          <a className="footer-learn" href="https://learndevin.com/" target="_blank" rel="noopener">
            Learn Devin ↗
          </a>
          <ThemeToggle />
          <span className="muted">Built for the NPS session, August 2026.</span>
        </div>
      </footer>
    </>
  );
}
