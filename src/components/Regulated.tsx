import Image from "next/image";
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
        <div className="deployment-logos" aria-label="Named organizations">
          {regulated.organizations.map((organization) => (
            <div className="deployment-logo" key={organization.name}>
              <span className="deployment-relationship">{organization.relationship}</span>
              <div className={`logo-plate ${organization.variant}`}>
                <Image
                  src={organization.logo}
                  alt={`${organization.name} logo`}
                  width={120}
                  height={60}
                />
              </div>
              <span className="deployment-name">{organization.name}</span>
            </div>
          ))}
        </div>
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
