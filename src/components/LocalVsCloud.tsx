"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { localCloud } from "@/content/site";
import { Section } from "./Section";
function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="meter">
      <span>{label}</span>
      <div className="meter-bar">
        <div className="meter-fill" style={{ width: `${value}%` }} />
      </div>
      <b>{value}%</b>
    </div>
  );
}
function CloudGrid() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const timer = setInterval(() => setCount((current) => (current >= 12 ? 4 : current + 1)), 900);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="cloud-visual">
      <div className="chips">
        {localCloud.cloud.events.map((event, index) => (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            key={event}
          >
            {event}
          </motion.span>
        ))}
      </div>
      <div className="vm-grid">
        {Array.from({ length: 12 }, (_, index) => (
          <div className="vm" style={{ opacity: index < count ? 1 : 0.2 }} key={index}>
            VM {String(index + 1).padStart(2, "0")}
          </div>
        ))}
        <div className="vm vm-more">N+</div>
      </div>
      <strong>{count <= 4 ? "4 agents" : `${count} → N agents`}</strong>
    </div>
  );
}
export function LocalVsCloud() {
  return (
    <Section
      id="fleet"
      number="05"
      kicker="The fleet"
      title="A local agent has one machine. A cloud fleet can add capacity."
    >
      <div className="local-cloud">
        <article className="card local">
          <div className="eyebrow orange">{localCloud.local.label}</div>
          <div className="laptop">
            <div className="screen">
              $ agent run --local
              <br />
              <i>Working…</i>
              <br />
              <span className="orange">!</span> CPU 92%
            </div>
          </div>
          <span className="badge orange">{localCloud.local.badge}</span>
          {localCloud.local.meters.map((meter) => (
            <Meter {...meter} key={meter.label} />
          ))}
          {localCloud.local.bullets.map((bullet) => (
            <p className="bullet" key={bullet}>
              {bullet}
            </p>
          ))}
        </article>
        <article className="card cloud-card">
          <div className="eyebrow">SCALABLE · Cloud Agents</div>
          <CloudGrid />
          {localCloud.cloud.bullets.map((bullet) => (
            <p className="bullet" key={bullet}>
              {bullet}
            </p>
          ))}
        </article>
      </div>
      <div className="orchestration">
        <div className="eyebrow">One agent that runs the others</div>
        <h3>One parent agent can coordinate a fleet.</h3>
        <p>{localCloud.orchestration}</p>
      </div>
    </Section>
  );
}
