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
        <div className="deployment-groups" aria-label="Named organizations">
          <div className="deployment-group">
            <span className="deployment-group-caption">Government deployments</span>
            <div className="deployment-logos">
              {regulated.governmentOrganizations.map((organization) => (
                <div className="deployment-logo" key={organization.name}>
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
          </div>
          <div className="deployment-group">
            <div className="deployment-logos">
              {regulated.commercialOrganizations.map((organization) => (
                <div className="deployment-logo" key={organization.name}>
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
          </div>
        </div>
        <p className="deployment-primes">{regulated.primes}</p>
      </div>
    </Section>
  );
}
