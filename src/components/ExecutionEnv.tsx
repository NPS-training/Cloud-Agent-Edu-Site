import { capabilities, executionClose } from "@/content/site";
import { Section } from "./Section";
export function ExecutionEnv() {
  return (
    <Section
      id="execution"
      number="04"
      kicker="The machine"
      title="A strong execution environment is what prevents agent failures."
    >
      <div className="machine-grid">
        <div>
          <blockquote>
            “Devin is the AI software engineer with full access to its own computer.”
          </blockquote>
          <ol className="capabilities">
            {capabilities.map((capability, index) => (
              <li key={capability.title}>
                <b>0{index + 1}</b>
                <span>
                  <strong>{capability.title}</strong>. {capability.body}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="machine-note">
          <p>{executionClose}</p>
          <div className="mini-loop">
            <span>plan</span>
            <i>→</i>
            <span>run</span>
            <i>→</i>
            <span>observe</span>
            <i>→</i>
            <span>adapt</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
