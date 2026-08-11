import { whyCognition } from "@/content/site";
import { Section } from "./Section";
export function WhyCognition() {
  return (
    <Section
      id="why"
      number="12"
      kicker="Why Cognition"
      title="An execution architecture for the age of agent fleets."
    >
      <div className="grid four">
        {whyCognition.map((item, index) => (
          <article className="card" key={item.title}>
            <span className="eyebrow">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
