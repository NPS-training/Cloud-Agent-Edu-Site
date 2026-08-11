import { models } from "@/content/site";
import { Section } from "./Section";
export function ModelRouting() {
  return (
    <Section id="models" number="08" kicker="The models" title="Model-agnostic by design.">
      <p className="lede">
        Devin is a compound AI system with access to all frontier models in one platform. Tasks are
        routed to the best-fit model.
      </p>
      <div className="routing-rail" aria-hidden="true">
        <span>Access all frontier models in one place</span>
        <span>Route by best-fit per task</span>
      </div>
      <div className="routing">
        <svg
          className="routing-lines"
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="routing-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L7,3 z" />
            </marker>
          </defs>
          <path className="routing-line input-line" d="M 250 36 C 320 36 340 160 410 160" />
          <path className="routing-line input-line" d="M 250 98 C 320 98 340 160 410 160" />
          <path className="routing-line input-line" d="M 250 160 H 410" />
          <path className="routing-line input-line" d="M 250 222 C 320 222 340 160 410 160" />
          <path className="routing-line input-line" d="M 250 284 C 320 284 340 160 410 160" />
          <path className="routing-line input-line" d="M 250 320 C 320 320 340 160 410 160" />
          <path className="routing-line output-line" d="M 590 160 C 660 160 680 36 750 36" />
          <path className="routing-line output-line" d="M 590 160 C 660 160 680 98 750 98" />
          <path className="routing-line output-line" d="M 590 160 C 660 160 680 222 750 222" />
          <path className="routing-line output-line" d="M 590 160 C 660 160 680 284 750 284" />
        </svg>
        <div className="sources">
          {models.sources.map((source) => (
            <span key={source.name}>
              <b>{source.name}</b>
              <small>{source.label}</small>
            </span>
          ))}
        </div>
        <div className="router">
          Devin orchestration<small>route by best-fit per task</small>
        </div>
        <div className="dest">
          {models.destinations.map((destination) => (
            <span key={destination.name}>
              <b>{destination.name}</b>
              <small>{destination.label}</small>
            </span>
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
