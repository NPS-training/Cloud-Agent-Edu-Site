"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { evolutionLevels } from "@/content/site";
import { Section } from "./Section";
export function Evolution() {
  const [selected, setSelected] = useState(2);
  const active = evolutionLevels[selected];
  const chartPositions = [70, 242, 414, 586, 758, 930];
  return (
    <Section
      id="evolution"
      number="02"
      kicker="The ladder"
      title="The evolution of AI software engineering."
    >
      <div className="evolution-wrap">
        <div className="evolution-chart" aria-label="Evolution curve from L0 to L5">
          <svg viewBox="0 0 1000 180" preserveAspectRatio="none" role="img">
            <title>Exponential growth from L0 to L5</title>
            {chartPositions.map((position, index) => (
              <g key={position}>
                <line className="evolution-grid-line" x1={position} x2={position} y1="0" y2="180" />
                <text className="evolution-chart-label" x={position} y="12">
                  {evolutionLevels[index].level}
                </text>
              </g>
            ))}
            <line
              className="evolution-chart-divider-line"
              x1={chartPositions[3]}
              x2={chartPositions[3]}
              y1="38"
              y2="180"
            />
            <text className="evolution-chart-divider-label left" x={chartPositions[3] - 12} y="42">
              <tspan x={chartPositions[3] - 12} dy="0">
                Augmenting
              </tspan>
              <tspan x={chartPositions[3] - 12} dy="12">
                individuals
              </tspan>
            </text>
            <text className="evolution-chart-divider-label right" x={chartPositions[3] + 12} y="42">
              <tspan x={chartPositions[3] + 12} dy="0">
                Multiplying
              </tspan>
              <tspan x={chartPositions[3] + 12} dy="12">
                teams
              </tspan>
            </text>
            <motion.path
              className="evolution-curve"
              d="M 70 148 C 250 146 360 138 500 118 S 760 55 930 12"
              pathLength={1}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>
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
