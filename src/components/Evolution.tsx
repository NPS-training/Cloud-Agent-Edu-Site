"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
        <div className="evolution-chart" aria-label="Evolution curve from L0 to L5">
          <div className="evolution-chart-labels" aria-hidden="true">
            {evolutionLevels.map((level) => (
              <span key={level.level}>{level.level}</span>
            ))}
          </div>
          <svg viewBox="0 0 1000 180" preserveAspectRatio="none" role="img">
            <title>Exponential growth from L0 to L5</title>
            <path
              className="evolution-grid-line"
              d="M 70 0 V 180 M 242 0 V 180 M 414 0 V 180 M 586 0 V 180 M 758 0 V 180 M 930 0 V 180"
            />
            <motion.path
              className="evolution-curve"
              d="M 70 148 C 250 146 360 138 500 118 S 760 55 930 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>
          <div className="evolution-chart-divider" aria-hidden="true">
            <span>Augmenting individuals</span>
            <span>Multiplying teams</span>
          </div>
        </div>
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
        <div className="callout">
          Where most teams are stuck: L2. The jump that matters is L2 → L3. The change is in the
          infrastructure, not the model.
        </div>
      </div>
    </Section>
  );
}
