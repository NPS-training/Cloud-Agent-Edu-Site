"use client";
import { useState } from "react";
import { evolutionLevels } from "@/content/site";
import { Section } from "./Section";
export function Evolution() {
  const [selected, setSelected] = useState(2);
  const active = evolutionLevels[selected];
  return (
    <Section
      id="evolution"
      number="02"
      kicker="The ladder"
      title="The evolution of AI software engineering."
    >
      <div className="evolution-wrap">
        <div className="curve" aria-hidden="true" />
        <div className="evolution-matrix">
          <div className="matrix-label">Dimension</div>
          {evolutionLevels.map((level) => (
            <button
              className={`matrix-level ${selected === evolutionLevels.indexOf(level) ? "selected" : ""}`}
              key={level.level}
              onClick={() => setSelected(evolutionLevels.indexOf(level))}
            >
              <b>{level.level}</b>
              <span>{level.title}</span>
            </button>
          ))}
          {["Context", "Trigger", "Scope", "Iteration", "Era"].map((dimension) => (
            <div className="matrix-row" key={dimension}>
              <b>{dimension}</b>
              {evolutionLevels.map((level) => (
                <span key={level.level}>
                  {
                    level[
                      dimension.toLowerCase() as
                        "context" | "trigger" | "scope" | "iteration" | "era"
                    ]
                  }
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="evolution-mobile-tabs">
          {evolutionLevels.map((level, index) => (
            <button
              className={selected === index ? "selected" : ""}
              onClick={() => setSelected(index)}
              key={level.level}
            >
              {level.level}
            </button>
          ))}
        </div>
        <div className="evolution-narration">
          <div className="eyebrow">
            {active.level} · {active.title}
          </div>
          <p>{active.narration}</p>
        </div>
        <div className="evolution-divider">
          <span>AUGMENTING INDIVIDUALS</span>
          <i>→</i>
          <span>MULTIPLYING TEAMS</span>
        </div>
        <div className="callout">
          Where most teams are stuck: L2. The jump that matters is L2 → L3, and it is not a model
          upgrade — it&apos;s an infrastructure change.
        </div>
      </div>
    </Section>
  );
}
