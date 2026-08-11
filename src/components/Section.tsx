import { Reveal } from "./Reveal";
export function Section({
  id,
  number,
  kicker,
  title,
  children,
}: {
  id: string;
  number: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <div className="rule section-head">
          <span className="eyebrow">
            {number} · {kicker}
          </span>
        </div>
        <Reveal>
          <h2 className="title">{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
