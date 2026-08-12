"use client";

import { useEffect, useState } from "react";
import { demo } from "@/content/site";
import { Section } from "./Section";

export function Demo() {
  const [selected, setSelected] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);
  const steps = demo.tiers.flatMap((tier) => tier.steps);
  const active = steps[selected];

  useEffect(() => {
    setCopiedPrompt(null);
  }, [selected]);

  const selectStep = (index: number) => {
    setSelected(index);
    setCopiedPrompt(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectStep((selected + 1) % steps.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectStep((selected - 1 + steps.length) % steps.length);
    }
  };

  const copyPrompt = async (prompt: string, index: number) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(prompt);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = prompt;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      setCopiedPrompt(index);
    } catch {
      setCopiedPrompt(null);
    }
  };

  return (
    <Section id="demo" number="12" kicker="The demo" title="Start with three.">
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
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Guided demo steps"
      >
        <div className="demo-rail" role="tablist" aria-label="Demo steps">
          {demo.tiers.map((tier, tierIndex) => {
            const offset = demo.tiers
              .slice(0, tierIndex)
              .reduce((total, item) => total + item.steps.length, 0);
            return (
              <div
                className={`demo-tier demo-tier-${tierIndex + 1}`}
                key={tier.caption}
                role="presentation"
              >
                <span className="demo-tier-caption" role="presentation">
                  {tier.caption}
                </span>
                {tier.steps.map((step, index) => {
                  const stepIndex = offset + index;
                  return (
                    <button
                      className={selected === stepIndex ? "selected" : ""}
                      key={step.number}
                      onClick={() => selectStep(stepIndex)}
                      role="tab"
                      aria-selected={selected === stepIndex}
                      aria-controls={`demo-panel-${step.number}`}
                      id={`demo-tab-${step.number}`}
                    >
                      <span>{step.number}</span>
                      <strong>{"label" in step ? step.label : step.title}</strong>
                      <small>{step.minutes} min</small>
                    </button>
                  );
                })}
              </div>
            );
          })}
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
          <div className="demo-prompts">
            {active.prompts.map((prompt, index) => (
              <div className="demo-prompt" key={prompt}>
                <div className="demo-prompt-head">
                  <span className="eyebrow">
                    Prompt{active.prompts.length > 1 ? ` ${index + 1}` : ""}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyPrompt(prompt, index)}
                    aria-label={`Copy prompt${active.prompts.length > 1 ? ` ${index + 1}` : ""} to clipboard`}
                  >
                    {copiedPrompt === index ? "Copied" : "Copy"}
                  </button>
                </div>
                <p>{prompt}</p>
              </div>
            ))}
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
      <p className="demo-tier-closing">{demo.tierOneClosing}</p>
      <p className="demo-closing">{demo.closing}</p>
      <a className="learn-cta" href="https://learndevin.com/" target="_blank" rel="noopener">
        Learn Devin: hands-on guides and courses ↗
      </a>
    </Section>
  );
}
