export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">NPS Briefing · 2026</div>
          <h1 className="display">
            Cloud-Based
            <br />
            <span>AI Engineering</span>
          </h1>
          <p className="lede">
            Your coding assistant lives in your editor. A cloud agent runs on its own machine with
            your repo, your tools, and your CI. No human has to wait for it. That is the difference.
          </p>
          <div className="actions">
            <a className="btn primary" href="#cold-open">
              Start the briefing ↘
            </a>
            <a className="btn" href="#proof">
              Jump to: what this changes for my team
            </a>
            <a
              className="btn learn-button"
              href="https://learndevin.com/"
              target="_blank"
              rel="noopener"
            >
              Learn Devin ↗
            </a>
          </div>
          <small className="muted">
            <a href="#meta">~12 minute read · built from a 30-minute conversation</a>
          </small>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="orb" />
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
        </div>
      </div>
    </section>
  );
}
