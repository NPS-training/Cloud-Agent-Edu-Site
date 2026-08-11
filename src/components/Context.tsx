import { context } from "@/content/site";
import { Section } from "./Section";
export function Context() {
  return (
    <Section
      id="context"
      number="07"
      kicker="The actual product"
      title="Context is the actual product."
    >
      <p className="lede">{context.opening}</p>
      <div className="grid pillars">
        {context.pillars.map((pillar) => (
          <article className="card" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p className="muted">{pillar.body}</p>
            {pillar.source && <small className="eyebrow">{pillar.source}</small>}
          </article>
        ))}
      </div>
      <div className="context-sources">
        <b>Where the context comes from</b>
        <ul className="chip-list">
          {context.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </div>
      <div className="split-copy">
        <div>
          <h3>Why the cloud makes this compound</h3>
          {context.compound.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3>Ask the codebase anything</h3>
          <p>{context.ask}</p>
        </div>
      </div>
    </Section>
  );
}
