import { programs } from "@/content/site";
import { Section } from "./Section";

export function Programs() {
  return (
    <Section id="programs" number="11" kicker="Where this fits" title="Find your curriculum.">
      <p className="lede programs-lede">{programs.lede}</p>
      <div className="program-groups">
        {programs.groups.map((group, index) => (
          <section className={`program-group program-group-${index + 1}`} key={group.caption}>
            <div className="program-group-head">
              <span className="eyebrow">0{index + 1}</span>
              <h3>{group.caption}</h3>
            </div>
            <div className="program-list">
              {group.items.map((item) => (
                <article className="program-item" key={item.program}>
                  <div className="program-item-title">
                    <h4>{item.program}</h4>
                    <span>{item.curriculum}</span>
                  </div>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <a className="learn-cta" href="https://learndevin.com/" target="_blank" rel="noopener">
        Learn Devin: hands-on guides and courses ↗
      </a>
    </Section>
  );
}
