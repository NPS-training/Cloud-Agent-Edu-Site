import { contrastCards } from "@/content/site";
import { Section } from "./Section";
export function ColdOpen() {
  return (
    <Section
      id="cold-open"
      number="01"
      kicker="The shift"
      title="A cloud agent gives you a machine to delegate work to."
    >
      <div className="grid contrast">
        {contrastCards.map((card, index) => (
          <article
            className={`card contrast-card ${index === 2 ? "featured" : ""}`}
            key={card.title}
          >
            <div className="eyebrow">0{index + 1}</div>
            <h3>{card.title}</h3>
            <p className="muted">{card.definition}</p>
            <dl>
              <dt>Where it runs</dt>
              <dd>{card.runs}</dd>
              <dt>What it sees</dt>
              <dd>{card.sees}</dd>
              <dt>Who starts it</dt>
              <dd>{card.starts}</dd>
              <dt>What it produces</dt>
              <dd>{card.produces}</dd>
              <dt>How many at once</dt>
              <dd>{card.quantity}</dd>
            </dl>
            <strong>{card.soWhat}</strong>
          </article>
        ))}
      </div>
      <p className="closing-line">
        A cloud agent gives you a teammate with a machine. It can run fifty tasks while your laptop
        is closed.
      </p>
    </Section>
  );
}
