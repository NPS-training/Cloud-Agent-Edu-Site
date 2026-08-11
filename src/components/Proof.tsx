"use client";
import { motion } from "framer-motion";
import { caseStudies, proof } from "@/content/site";
import { Section } from "./Section";
export function Proof() {
  return (
    <Section
      id="proof"
      number="10"
      kicker="Proof"
      title="The feedback loop is visible in the work."
    >
      <div className="proof-grid">
        <div>
          <div className="big-stat">90%</div>
          <p>{proof.headline.replace("90%", "").trim()}</p>
          <div className="stats">
            {proof.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
          <p className="muted">{proof.transcriptColor}</p>
        </div>
        <div>
          <div className="chart">
            {proof.chart.map((point, index) => (
              <motion.div
                className="bar"
                initial={{ height: 0 }}
                whileInView={{ height: `${point.value * 25}px` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={point.month}
              >
                <i>{point.value}x</i>
                <label>{point.month.slice(0, 3)}</label>
              </motion.div>
            ))}
          </div>
          <small className="muted">Merged PR volume · Nov 2025 → Apr 2026</small>
        </div>
      </div>
      <article className="hardware">
        <div className="eyebrow">Hardware in the loop · de-identified</div>
        <p>{proof.hardware}</p>
      </article>
      <div className="case-grid">
        {caseStudies.map((study) => (
          <article className="case" key={study.name}>
            <span className="eyebrow">{study.category}</span>
            <h3>{study.name}</h3>
            <p>
              <strong className="case-metric">{study.metric}</strong> {study.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
