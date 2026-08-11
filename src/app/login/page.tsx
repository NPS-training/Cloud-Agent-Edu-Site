import { headers } from "next/headers";
import Image from "next/image";
export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const error = (await searchParams).error;
  const dark = (await headers()).get("sec-ch-prefers-color-scheme") === "dark";
  return (
    <main className="login" data-theme={dark ? "dark" : "light"}>
      <div className="login-card">
        <div className="eyebrow">Private briefing · 2026</div>
        <h1>
          Cloud-Based
          <br />
          AI Engineering
        </h1>
        <p>This briefing is access-controlled. Enter the passphrase to continue.</p>
        <form action="/api/auth" method="post">
          <label htmlFor="password">Passphrase</label>
          <Image
            src="/nps-seal.svg"
            alt="Naval Postgraduate School seal"
            className="login-seal"
            width={58}
            height={58}
          />
          <input id="password" name="password" type="password" autoFocus required />
          <button className="btn primary" type="submit">
            Enter <span>↗</span>
          </button>
          {error && <div className="error">Incorrect passphrase.</div>}
        </form>
      </div>
    </main>
  );
}
