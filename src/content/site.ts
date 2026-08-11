export const SESSION_URL = "https://app.devin.ai/sessions/32f215a9b63c498c8d9ea07e423faeff";
export const BUILD_COST = "a few cents of compute";
export type NavItem = { number: string; label: string; id: string };
export const navItems: NavItem[] = [
  { number: "01", label: "What it is", id: "cold-open" },
  { number: "02", label: "Evolution", id: "evolution" },
  { number: "03", label: "Bottleneck", id: "bottleneck" },
  { number: "04", label: "Machine", id: "execution" },
  { number: "05", label: "Fleet", id: "fleet" },
  { number: "06", label: "Patterns", id: "patterns" },
  { number: "07", label: "Context", id: "context" },
  { number: "08", label: "Models", id: "models" },
  { number: "09", label: "Regulated", id: "regulated" },
  { number: "10", label: "Proof", id: "proof" },
  { number: "11", label: "Start", id: "start" },
  { number: "12", label: "Why Cognition", id: "why" },
  { number: "13", label: "How this was made", id: "meta" },
];
export type ContrastCard = {
  title: string;
  definition: string;
  runs: string;
  sees: string;
  starts: string;
  produces: string;
  quantity: string;
  soWhat: string;
};
export const contrastCards: ContrastCard[] = [
  {
    title: "Autocomplete",
    definition: "A completion engine.",
    runs: "Your editor",
    sees: "The lines around your cursor",
    starts: "Your keystrokes",
    produces: "A completion",
    quantity: "1",
    soWhat: "A narrower loop.",
  },
  {
    title: "Chat in your IDE",
    definition: "A conversational coding assistant.",
    runs: "Your editor / CLI",
    sees: "Files you have open",
    starts: "You, per turn",
    produces: "A diff you apply",
    quantity: "1–2",
    soWhat: "A larger loop, still local.",
  },
  {
    title: "Cloud agent",
    definition: "An AI software engineer with its own machine.",
    runs: "Its own VM, in the cloud",
    sees: "The whole repo, your CI, your ticketing, your docs",
    starts: "You, a webhook, or a schedule",
    produces: "A tested, reviewed pull request",
    quantity: "As many as you have work for",
    soWhat: "A teammate with a machine.",
  },
];
export type EvolutionLevel = {
  level: string;
  title: string;
  context: string;
  trigger: string;
  scope: string;
  iteration: string;
  era: string;
  narration: string;
};
export const evolutionLevels: EvolutionLevel[] = [
  {
    level: "L0",
    title: "No AI",
    context: "Human memory",
    trigger: "Human writes every line",
    scope: "One keystroke at a time",
    iteration: "None",
    era: "Pre-2020",
    narration:
      "Every line is typed by a human. The entire process is built around protecting the engineer's time, because the engineer is the scarce, expensive bottleneck.",
  },
  {
    level: "L1",
    title: "Tab Completion",
    context: "Surrounding lines",
    trigger: "Keystroke",
    scope: "A few lines",
    iteration: "Single-shot",
    era: "GitHub Copilot",
    narration:
      "Roughly a 5–10% lift. Around 2022–2023, autocomplete finishes the line you were already writing. ~90% of code is still hand-written.",
  },
  {
    level: "L2",
    title: "Chat in IDE",
    context: "Open files",
    trigger: "Human prompt",
    scope: "One or many files",
    iteration: "Within a turn",
    era: "Windsurf / Cursor / CC",
    narration:
      'A real step change: maybe up to 2x if you push it. But the code is still checked out on your machine, and collaboration is still "talk to the person next to you."',
  },
  {
    level: "L3",
    title: "Background Agents",
    context: "Whole codebase, managed",
    trigger: "Human delegates a task",
    scope: "Many components in parallel",
    iteration: "Self-iterates with full VM access",
    era: "Devin ('25)",
    narration:
      "Work happens while you're doing something else. You stop typing and start delegating.",
  },
  {
    level: "L4",
    title: "Autonomous Agents",
    context: "Persists across runs",
    trigger: "Schedules and events",
    scope: "Defined goals, no human in the loop",
    iteration: "Self-iterates, not self-correcting",
    era: "Devin ('26)",
    narration:
      "Triggered by events and schedules, not by you. 10–20x territory: every day at 05:00, triage the overnight scanner findings and open the PRs so they're waiting at 08:00.",
  },
  {
    level: "L5",
    title: "AI Software Engineer",
    context: "Owns its own context loop",
    trigger: "Intent",
    scope: "Picks the work and the approach",
    iteration: "Self-correcting over time",
    era: "—",
    narration: "Not here yet. Best guess: ~2028, depending on how you define it.",
  },
];
export const bottleneck = {
  stat: "<20%",
  source: "Microsoft Research, 2024; Software, 2023",
  steps: ["Understanding & Planning", "Writing Code", "Review", "Testing & QA", "Maintenance"],
  paragraphs: [
    "For thirty years the process was designed around one assumption: engineering time is the scarcest resource in the building. That's why we spent so much of it upstream — grooming, estimating, specing a ticket down to the pixel — so that when someone finally put hands on keyboard, they never had to make a decision.",
    'Take something small and real: "add CSV export to the reports page." In the old model that\'s a design review, a spec on which columns and what timezone the timestamps use, a sprint slot, and a week of round-trips — all to protect a few hours of typing. Today the person who wants the export can put a working version in front of a user the same afternoon, and the engineer spends their time on the part that actually needs them: is this a synchronous download or a background job, what happens at ten million rows, who is allowed to export what.',
    "Typing is no longer the constraint. Planning, review, testing, and maintenance are — and those are the four stages a local assistant never touches.",
  ],
  kicker:
    "The skill that compounds now is system-level judgment, not keystrokes. You can only type so much faster.",
};
export const capabilities = [
  {
    title: "A dedicated execution environment per task",
    body: "its own VM, its own filesystem, no contention with your laptop or with other agents.",
  },
  {
    title: "State that persists across steps and time",
    body: "a long-running task can install, build, fail, fix, and come back to it hours later.",
  },
  {
    title: "Real commands in a real Linux environment",
    body: "install packages, run migrations, hit a database, drive a browser. Linux by default because it's cheaper and faster; Windows, macOS/iOS, and Android when the target needs it.",
  },
  {
    title: "Observes results and adapts",
    body: "it runs the thing, reads the failure, and tries again.",
  },
];
export const executionClose =
  "This is the difference between a PR that is a best guess and a PR that has been executed. An agent with a machine can open the browser, click through the flow, watch the end-to-end test fail against a real environment, fix it, and run it again — as many times as it takes — before a human ever looks at it.";
export const localCloud = {
  local: {
    label: "CONSTRAINED · Local Agent",
    badge: "MUST STAY POWERED ON",
    meters: [
      { label: "CPU", value: 92 },
      { label: "RAM", value: 87 },
    ],
    bullets: [
      "Bottlenecked by your machine's CPU & RAM",
      "Your computer must be on and awake",
      "Limited event-driven and parallel capacity",
      "Context you build is stuck on your machine — a few checked-in markdown files is not knowledge sharing",
      "Accelerates one individual, capped by that individual's attention",
    ],
  },
  cloud: {
    label: "SCALABLE · Cloud Agents",
    events: ["⚡ PR opened", "⚡ Slack message", "⚡ Cron job"],
    bullets: [
      "Each agent gets its own dedicated VM",
      "Scale to effectively unlimited parallel agents on demand",
      "Event-driven — triggered automatically, 24/7",
      "Secure, isolated environments for compliance-sensitive work",
      "Knowledge is shared across the team by default",
      "Full Linux and Windows environments, so agents can close the verification loop",
    ],
  },
  orchestration:
    "Parallelism isn't just \"fifty copies of the same prompt.\" A parent agent plans the work, splits it into tranches, deconflicts them so two agents don't collide in the same files, hands each piece to a sub-agent, and reviews what comes back. Architectural decisions stay with the parent; the narrow, well-defined pieces go to cheaper, faster models. That's where both the speed and the cost savings come from.",
};
export type Pattern = { label: string; title: string; description: string; examples: string };
export const patterns: Pattern[] = [
  {
    label: "PATTERN 01 · SCALE-OUT",
    title: "Parallel agents",
    description:
      "Hundreds of agents running the same job in parallel: fleet-wide work that used to need a migration team.",
    examples:
      "Bulk CVE remediation · Large-scale migrations · Version upgrades across repos · Codebase-wide refactors · Lint & warning fixes at scale",
  },
  {
    label: "PATTERN 02 · ALWAYS-ON",
    title: "Event-driven",
    description:
      "Agents that fire automatically off PRs, alerts, tickets, or schedules — first responders that don't sleep.",
    examples:
      "Incident response · Auto-triage of bugs & feature requests · Automated PR review · CI failure analysis & fixes · On-call automation",
  },
  {
    label: "PATTERN 03 · DELEGATE",
    title: "Everyday development",
    description:
      "The work an engineer hands off mid-flow: small, well-defined tasks that should never block a human.",
    examples:
      "End-to-end delegation of easy tasks · Cloud handoff for implementation & testing · Addressing PR comments · Fixing CI failures",
  },
];
export const securityBacklog = [
  "Static and dynamic scanners add dozens of low-priority findings a day. Each one is individually not worth a human's afternoon, so they're triaged as \"later\" and never done — and the backlog compounds.",
  "That backlog used to be tolerable because chaining low-severity findings into a real exploit took dedicated, nation-state-grade effort, and most systems were never worth that effort. That assumption no longer holds: the cost of chaining exploits has collapsed. Meanwhile the human economics haven't changed — an engineer opening their laptop after hours costs far more than the dollar or so of compute it takes an agent to remediate the finding and open the PR.",
  "The pattern: an agent runs on a schedule, ingests scanner output over MCP, triages it, opens one PR per finding, tags the code owner, and fixes its own red CI. Humans review; humans are not the first responders.",
];
export const context = {
  opening:
    "The model is smart. It still can't read your mind — and neither could a new senior hire. If I ask you to \"add CSV export,\" you'll build a CSV export; it just won't be the one I had in my head, because the requirements were never written down anywhere. They're in a Confluence page, a Slack thread, a Teams channel, a meeting last Tuesday, and the scanner config nobody owns. Scale that ambiguity up by four orders of magnitude and you have most failed AI-engineering pilots.",
  pillars: [
    {
      title: "Devin gets better with every PR",
      body: "captures feedback, learns your codebase over time, and bridges the pilot-to-production gap.",
      source: "MIT, 2025",
    },
    {
      title: "Knowledge that builds, not resets",
      body: "decisions are codified as knowledge items and applied to future tasks.",
    },
    {
      title: "Context-aware application",
      body: "context is retained across repos and workflows, so the right knowledge item is auto-applied to the right task.",
    },
  ],
  sources: [
    "repo + git history",
    "CI, SAST/DAST and scanner output over MCP",
    "Slack and Teams threads",
    "tickets and PRDs",
    "meeting transcripts",
    "the hundreds of tools that already run your SDLC",
  ],
  compound:
    "A local agent's context dies on the laptop that built it. In a shared cloud environment, playbooks, skills, knowledge items and automations belong to the organization. Every engineer's corrections make the next engineer's session better.\n\nAnd it compounds faster than a human's would. A new hire is useful at month one and good at year one. An agent working across your whole team is doing ten times the volume of work in that same window — and every one of those runs is a chance to learn the codebase.",
  ask: "Point it at a repo with millions of lines across thousands of files and it produces the architecture diagram and the walkthrough that would take a human months to reconstruct — then answers questions about it. That capability alone changes what onboarding, code review, and due diligence cost.",
};
export const models = {
  sources: [
    "Claude (Anthropic)",
    "GPT (OpenAI)",
    "Gemini (Google)",
    "SWE (Cognition)",
    "open-source and specialized models",
  ],
  destinations: [
    "Instructions → Claude",
    "Retrieval → SWE",
    "Debugging → OpenAI",
    "Visual design → Gemini",
  ],
  fusion:
    "Devin Fusion: a multi-model harness with ~60% better cost-efficiency while maintaining frontier performance.",
  saturation:
    "Some tasks need the smartest model that exists. Most don't. Writing test coverage for a well-specified module is saturated — the best model of 2030 will produce the same result as a cheap one today, two orders of magnitude cheaper and much faster. Architecture and orchestration are where frontier intelligence earns its price.",
  lockIn:
    "Your agent platform shouldn't have a commercial incentive to route you to one lab's models. Cognition trains its own models and ingests the best of everyone else's.",
  kicker:
    "Making a human pick the right model per task will look quaint very soon. Nobody should be running a background process in their head about which checkpoint to use.",
};
export const regulated = {
  badges: ["FedRAMP High", "IL4 / IL5", "CUI", "ITAR"],
  caveat:
    "ATOs are always environment-specific — this covers the platform's authorizations, not a blanket approval for your enclave.",
  deployed:
    "Deployed with: NAVAIR · NRL · NASA · Treasury · Social Security Administration · five of the top seven U.S. defense primes.",
  isolation:
    "Every session runs in its own isolated environment, which is what makes parallel work safe to run on sensitive code.",
};
export const proof = {
  headline: "90% of our code internally is written by Devin",
  stats: ["1.4x R&D headcount since Nov 2025", "10x merged PR volume over the same window"],
  chart: [
    { month: "Nov 2025", value: 1 },
    { month: "Dec 2025", value: 2 },
    { month: "Jan 2026", value: 3 },
    { month: "Feb 2026", value: 5.3 },
    { month: "Mar 2026", value: 7.7 },
    { month: "Apr 2026", value: 10 },
  ],
  transcriptColor:
    "Much of that volume is non-trivial quality-of-life work opened by people who aren't product engineers — a screenshot and a vague description in Slack becomes a ticket, a PR, and a tagged code owner, with the agent asking clarifying questions along the way.",
  hardware:
    "A single engineer at a defense contractor used Devin to build a GLONASS emulator on FPGAs for weapons-system testing. Devin wrote SpinalHDL, generated Tcl scripts, synthesized the design, flashed the hardware, ran validation hooks, and debugged against a physical dev kit — including unattended overnight debug loops, which is exactly where the slow iteration normally lives. A working simulator came together in about 12 hours against an estimated 12–18 months of manual work.",
};
export const caseStudies = [
  {
    category: "Code migration",
    name: "Mercedes-Benz",
    body: "8 days to complete 8 months of COBOL work; 200,000+ lines of legacy code analyzed and migrated in a 4-week pilot.",
  },
  {
    category: "Data engineering",
    name: "Nubank",
    body: "20x cost savings on ETL migration; 6M+ lines refactored. Planned for 1,000+ engineers over 18 months, completed in weeks.",
  },
  {
    category: "Vulnerability & bug triage",
    name: "Itaú",
    body: "70% of security vulnerabilities automatically remediated, across thousands of repos.",
  },
  {
    category: "QA & test generation",
    name: "Rivian–Volkswagen Technologies",
    body: "10x increase in test-generation velocity; from 1–2 tests per engineer-day to 10–15.",
  },
  {
    category: "Documentation",
    name: "Evinova",
    body: "8x faster regulatory documentation; specs that took 35–40 hours of coordination now generate in 5–10 minutes.",
  },
  {
    category: "Product development",
    name: "Gumroad",
    body: "#1 code contributor in 5 of 7 most active repos; 1,500+ PRs merged at an 85% merge rate, ~10 per day.",
  },
  {
    category: "Technical-debt burndown",
    name: "Ramp",
    body: "10k+ hours saved each month on rote tasks.",
  },
  {
    category: "Application modernization",
    name: "AngelList",
    body: "5.2x faster Redshift-to-Snowflake migration; 1 data engineer and 20 Devin agents migrated 14,000 analytics cards in 3 weeks.",
  },
];
export const gettingStarted = [
  {
    tier: "Easy",
    body: 'Take a first stab at new work: "@Devin, what would it take to build X?" · Chores, repetitive tasks and technical grunt work: "Update all the relevant documentation."',
  },
  {
    tier: "Intermediate",
    body: 'Co-develop PRDs and plans of attack: "Plan a phased migration from Angular to React 18." · Delegate to multiple agents at once: parallel sessions, one per UI component.',
  },
  {
    tier: "Advanced",
    body: "Automate end-to-end workflows (dependency upgrades, feature-flag removal) · Intelligent code review wired into CI/CD · Incident and alert triage via the API.",
  },
];
export const firstWeek =
  "pick one repo with good CI · connect the scanner and the ticket tracker · run one scheduled job (dependency upgrades or scanner triage) · let it write knowledge items from the first ten reviews · then turn on parallel work.";
export const firstWeekItems = [
  "pick one repo with good CI",
  "connect the scanner and the ticket tracker",
  "run one scheduled job (dependency upgrades or scanner triage)",
  "let it write knowledge items from the first ten reviews",
  "then turn on parallel work",
];
export const whyCognition = [
  {
    title: "Frontier capabilities across the full SDLC",
    body: "Devin in every surface: IDE, CLI, Slack, Jira, GitHub, API. Purpose-built wiki, PR review, and codebase Q&A. Unified ACU billing.",
  },
  {
    title: "Execution architecture for agent fleets",
    body: "dedicated environments, persistent state, thousands of concurrent agents at a fraction of VM cost. Purpose-built for cloud from day one.",
  },
  {
    title: "Model-agnostic, no vendor lock-in",
    body: "auto-routes across Anthropic, OpenAI, Google and more, optimizing for accuracy, latency, and cost.",
  },
  {
    title: "Dedicated FDE partnership to drive adoption",
    body: "forward-deployed engineers own technical success end-to-end; the AI DevEx team embeds onsite. Every completed program: 2–4x adoption.",
  },
];
export const metaCopy = [
  "This page wasn't designed. It was delegated.",
  "The inputs were a 14-slide deck that doesn't convert cleanly to anything, and a raw, unedited transcript of a 30-minute conversation about that deck — including the parts where we told it which examples were bad and what not to publish. One prompt, one session, one machine: it read the slides and the speaker notes, pulled the numbers and the artwork, followed the redaction rules, restructured the argument, wrote the copy, built the site, tested it in a browser, and deployed it.",
  "That's the whole pitch, and you're looking at it.",
];
