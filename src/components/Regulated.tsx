import { regulated } from "@/content/site";
import { Section } from "./Section";
export function Regulated() {
  return (
    <Section id="regulated" number="09" kicker="Trust" title="Built for regulated environments.">
      <div className="compliance">
        <div className="compliance-badges">
          {regulated.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <p className="compliance-isolation">{regulated.isolation}</p>
        <p className="compliance-caveat">{regulated.caveat}</p>
        <ul className="deployment-chips">
          {regulated.deployed
            .replace("Deployed with: ", "")
            .split(" · ")
            .map((deployment) => (
              <li key={deployment}>{deployment}</li>
            ))}
        </ul>
      </div>
    </Section>
  );
}
