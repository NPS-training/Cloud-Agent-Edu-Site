"use client";

import { useEffect, useRef, useState } from "react";
import { demo } from "@/content/site";
import { Section } from "./Section";

export function Demo() {
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const stepperRef = useRef<HTMLDivElement>(null);
  const active = demo.steps[selected];

  useEffect(() => {
    setCopied(false);
  }, [selected]);

  const selectStep = (index: number) => {
    setSelected(index);
    setCopied(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectStep((selected + 1) % demo.steps.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectStep((selected - 1 + demo.steps.length) % demo.steps.length);
    }
  };

  const copyPrompt = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(active.prompt);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = active.prompt;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id="demo" number="12" kicker="The demo" title="Six things worth showing.">
      <p className="lede demo-lede">{demo.lede}</p>
      <div className="demo-meta">
        <span>
          <b>Repository</b> {demo.repository}
        </span>
        <span>
          <b>Budget</b> {demo.budget}
        </span>
      </div>
      <div
        className="demo-stepper"
        ref={stepperRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Guided demo steps"
      >
        <div className="demo-rail" role="tablist" aria-label="Demo steps">
          {demo.steps.map((step, index) => (
            <button
              className={selected === index ? "selected" : ""}
              key={step.number}
              onClick={() => selectStep(index)}
              role="tab"
              aria-selected={selected === index}
              aria-controls={`demo-panel-${step.number}`}
              id={`demo-tab-${step.number}`}
            >
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <small>{step.minutes} min</small>
            </button>
          ))}
        </div>
        <div
          className="demo-panel"
          id={`demo-panel-${active.number}`}
          role="tabpanel"
          aria-labelledby={`demo-tab-${active.number}`}
          tabIndex={0}
        >
          <div className="demo-panel-head">
            <div>
              <span className="eyebrow">{active.target}</span>
              <h3>{active.title}</h3>
            </div>
            <span className="demo-duration">{active.minutes} min</span>
          </div>
          <div className="demo-prompt">
            <div className="demo-prompt-head">
              <span className="eyebrow">Prompt</span>
              <button type="button" onClick={copyPrompt} aria-label="Copy prompt to clipboard">
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p>{active.prompt}</p>
          </div>
          <div className="demo-notes">
            <div>
              <span className="eyebrow">Watch for</span>
              <p>{active.watchFor}</p>
            </div>
            <div>
              <span className="eyebrow">Why it matters</span>
              <p>{active.whyItMatters}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="demo-closing">{demo.closing}</p>
      <a className="learn-cta" href="https://learndevin.com/" target="_blank" rel="noopener">
        Learn Devin: hands-on guides and courses ↗
      </a>
    </Section>
  );
}
