import { patterns, securityBacklog } from "@/content/site";
import { Section } from "./Section";
export function Patterns() {
  return (
    <Section
      id="patterns"
      number="06"
      kicker="The leverage"
      title="Three patterns that pay for themselves."
    >
      <div className="grid three">
        {patterns.map((pattern) => (
          <article className="card pattern" key={pattern.label}>
            <span className="eyebrow">{pattern.label}</span>
            <h3>{pattern.title}</h3>
            <p>{pattern.description}</p>
            <ul className="chip-list">
              {pattern.examples.split(" · ").map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <details className="worked-example">
        <summary>Worked example · the security backlog</summary>
        {securityBacklog.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </details>
      <div className="callout">
        <b>Humans cannot be in the loop on everything. Pick the loops that need judgment.</b>
        <br />
        Devin Review is a second agent that reviews the first one&apos;s work. It provides a
        non-adversarial review. If CI is red, the human shouldn&apos;t be the one fixing it.
      </div>
    </Section>
  );
}
