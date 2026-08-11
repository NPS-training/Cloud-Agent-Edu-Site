import { firstWeekItems, gettingStarted } from "@/content/site";
import { Section } from "./Section";
export function GettingStarted() {
  return (
    <Section
      id="start"
      number="11"
      kicker="Where to start"
      title="Start with work that should never block a human."
    >
      <div className="grid three">
        {gettingStarted.map((item) => (
          <article className="card" key={item.tier}>
            <div className="eyebrow">{item.tier}</div>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <div className="checklist">
        <b>First week</b>
        <ul className="chip-list">
          {firstWeekItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <a className="learn-cta" href="https://learndevin.com/" target="_blank" rel="noopener">
        Learn Devin — hands-on guides and courses ↗
      </a>
    </Section>
  );
}
