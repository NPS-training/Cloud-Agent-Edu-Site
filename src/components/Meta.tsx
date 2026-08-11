import { BUILD_COST, SESSION_URL, metaCopy } from "@/content/site";
export function Meta() {
  return (
    <section id="meta" className="section meta">
      <div className="wrap">
        <div className="rule section-head">
          <span className="eyebrow">13 · The meta moment</span>
        </div>
        <h2 className="title">{metaCopy[0]}</h2>
        <p className="lede">{metaCopy[1]}</p>
        <p className="meta-kicker">{metaCopy[2]}</p>
        <a href={SESSION_URL} className="btn primary" target="_blank" rel="noopener">
          Open the session ↗
        </a>
        <p className="muted">Build cost: {BUILD_COST}</p>
      </div>
    </section>
  );
}
