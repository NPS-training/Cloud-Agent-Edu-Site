import { models } from "@/content/site";
import { Section } from "./Section";
export function ModelRouting() {
  return (
    <Section id="models" number="08" kicker="The models" title="Model-agnostic by design.">
      <p className="lede">
        Devin is a compound AI system with access to all frontier models in one platform. Tasks are
        routed to the best-fit model.
      </p>
      <div className="routing">
        <div className="sources">
          {models.sources.map((source) => (
            <span key={source}>{source}</span>
          ))}
        </div>
        <div className="router">
          Devin orchestration<small>route by best-fit per task</small>
        </div>
        <div className="dest">
          {models.destinations.map((destination) => (
            <span key={destination}>{destination}</span>
          ))}
        </div>
      </div>
      <p>{models.fusion}</p>
      <div className="callout">
        <b>Intelligence saturation.</b> {models.saturation}
      </div>
      <p>{models.lockIn}</p>
      <p className="kicker-line">{models.kicker}</p>
    </Section>
  );
}
