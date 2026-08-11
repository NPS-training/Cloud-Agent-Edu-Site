import { bottleneck } from "@/content/site";
import { Section } from "./Section";
export function Bottleneck() {
  return (
    <Section
      id="bottleneck"
      number="03"
      kicker="The constraint"
      title="Writing code was never the bottleneck."
    >
      <div className="bottleneck-grid">
        <div>
          <div className="donut">
            <strong>{bottleneck.stat}</strong>
            <span>writing code</span>
          </div>
          <small className="muted">Source note: {bottleneck.source}</small>
        </div>
        <div className="sdlc-strip">
          {bottleneck.steps.map((step, index) => (
            <div className={`sdlc-step ${index === 1 ? "local-step" : ""}`} key={step}>
              <b>0{index + 1}</b>
              <span>{step}</span>
              <small>{index === 1 ? "local AI IDE" : "cloud agent"}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="long-copy">
        {bottleneck.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="callout">
        <b>{bottleneck.kicker}</b>
      </div>
    </Section>
  );
}
