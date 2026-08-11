export const SESSION_URL = "https://app.devin.ai/sessions/32f215a9b63c498c8d9ea07e423faeff";
export const BUILD_COST = "a few cents of compute";
export type NavItem = { number: string; label: string; id: string };
export const navItems: NavItem[] = [
  { number: "01", label: "What", id: "cold-open" },
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
  { number: "13", label: "Meta", id: "meta" },
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
    era: "-",
    narration: "Not here yet. Best guess: ~2028, depending on how you define it.",
  },
];
export const bottleneck = {
  stat: "<20%",
  source: "Microsoft Research, 2024; Software, 2023",
  steps: ["Understanding & Planning", "Writing Code", "Review", "Testing & QA", "Maintenance"],
  paragraphs: [
    "For thirty years the process was designed around one assumption: engineering time is the scarcest resource in the building. That's why so much work happened upstream. Teams groomed, estimated, and specified tickets in detail so the engineer could type without stopping to make a decision.",
    'Take something small and real: "add CSV export to the reports page." In the old model, that meant a design review, a decision about columns and timestamp time zones, a sprint slot, and a week of round-trips. The goal was to protect a few hours of typing. Today the person who wants the export can put a working version in front of a user the same afternoon. The engineer can focus on the decisions that need expertise: whether the download is synchronous or a background job, what happens at ten million rows, and who is allowed to export what.',
    "Typing is no longer the constraint. Planning, review, testing, and maintenance now take the time.",
  ],
  kicker:
    "The skill that compounds now is system-level judgment, not keystrokes. You can only type so much faster.",
};
export const capabilities = [
  {
    title: "A dedicated execution environment per task",
    body: "It has its own VM and filesystem, with no contention with your laptop or other agents.",
  },
  {
    title: "State that persists across steps and time",
    body: "A long-running task can install, build, fail, fix, and come back to it hours later.",
  },
  {
    title: "Real commands in a real Linux environment",
    body: "It can install packages, run migrations, hit a database, and drive a browser. Linux by default because it's cheaper and faster; Windows, macOS/iOS, and Android when the target needs it.",
  },
  {
    title: "Observes results and adapts",
    body: "It runs the thing, reads the failure, and tries again.",
  },
];
export const executionClose =
  "A PR can be tested before a human reviews it. An agent with a machine can open the browser, click through the flow, watch the end-to-end test fail against a real environment, fix it, and run it again as many times as needed.";
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
      "Context you build is stuck on your machine. A few checked-in markdown files do not create knowledge sharing.",
      "Accelerates one individual, capped by that individual's attention",
    ],
  },
  cloud: {
    label: "SCALABLE · Cloud Agents",
    events: ["PR opened", "Slack message", "Cron job"],
    bullets: [
      "Each agent gets its own dedicated VM",
      "Scale to effectively unlimited parallel agents on demand",
      "Event-driven, triggered automatically 24/7",
      "Secure, isolated environments for compliance-sensitive work",
      "Knowledge is shared across the team by default",
      "Full Linux and Windows environments, so agents can close the verification loop",
    ],
  },
  orchestration:
    "A parent agent plans the work, splits it into tranches, prevents file conflicts, assigns each piece to a sub-agent, and reviews the results. Architectural decisions stay with the parent. Narrow, well-defined pieces go to cheaper, faster models. This is how the fleet gains speed and lowers cost.",
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
      "Agents that fire automatically from PRs, alerts, tickets, or schedules. They keep working outside office hours.",
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
  'Static and dynamic scanners add dozens of low-priority findings a day. Each one is too small to justify an engineer\'s afternoon, so teams mark it "later" and the backlog grows.',
  "That backlog used to be tolerable because chaining low-severity findings into a real exploit took dedicated, nation-state-grade effort, and most systems were never worth that effort. That assumption no longer holds. The cost of chaining exploits has collapsed. The human economics have not changed. An engineer opening a laptop after hours costs far more than the dollar or so of compute an agent needs to remediate a finding and open the PR.",
  "The pattern: an agent runs on a schedule, ingests scanner output over MCP, triages it, opens one PR per finding, tags the code owner, and fixes its own red CI. Humans review; humans are not the first responders.",
];
export const context = {
  opening:
    'The model is smart, but it cannot read your mind. A new senior hire cannot do that either. If I ask you to "add CSV export," you\'ll build a CSV export, but it may not match what I had in mind because the requirements were never written down. They are in a Confluence page, a Slack thread, a Teams channel, a meeting last Tuesday, and the scanner config nobody owns. Multiply that ambiguity by four orders of magnitude and you have most failed AI-engineering pilots.',
  pillars: [
    {
      title: "Devin gets better with every PR",
      body: "It captures feedback, learns your codebase over time, and bridges the pilot-to-production gap.",
      source: "MIT, 2025",
    },
    {
      title: "Knowledge that builds, not resets",
      body: "Decisions are codified as knowledge items and applied to future tasks.",
    },
    {
      title: "Context-aware application",
      body: "Context is retained across repos and workflows, so the right knowledge item is auto-applied to the right task.",
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
    "A local agent's context dies on the laptop that built it. In a shared cloud environment, playbooks, skills, knowledge items, and automations belong to the organization. Every engineer's correction improves the next engineer's session.\n\nIt compounds faster than a human can. A new hire is useful at month one and good at year one. An agent working across your whole team handles ten times the volume of work in that same window. Every run is a chance to learn the codebase.",
  ask: "Point it at a repo with millions of lines across thousands of files. It produces the architecture diagram and walkthrough that would take a human months to reconstruct, then answers questions about them. That changes the cost of onboarding, code review, and due diligence.",
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
    "Some tasks need the smartest model that exists. Most don't. Writing test coverage for a well-specified module is saturated. The best model of 2030 will produce the same result as a cheap one today, two orders of magnitude cheaper and much faster. Architecture and orchestration are where frontier intelligence earns its price.",
  lockIn:
    "Your agent platform shouldn't have a commercial incentive to route you to one lab's models. Cognition trains its own models and ingests the best of everyone else's.",
  kicker:
    "Making a human pick the right model per task will look quaint very soon. Nobody should be running a background process in their head about which checkpoint to use.",
};
export const regulated = {
  badges: ["FedRAMP High", "IL4 / IL5", "CUI", "ITAR"],
  governmentOrganizations: [
    { name: "NAVAIR", logo: "/logos/navair.png", variant: "seal" },
    { name: "NRL", logo: "/logos/nrl.svg", variant: "dark-mark nrl-mark" },
    { name: "NASA", logo: "/logos/nasa.svg", variant: "seal" },
    {
      name: "Treasury",
      logo: "/logos/treasury.svg",
      variant: "seal",
    },
    {
      name: "Social Security Administration",
      logo: "/logos/ssa.svg",
      variant: "seal",
    },
  ],
  commercialOrganizations: [
    { name: "Palantir", logo: "/logos/palantir.svg", variant: "dark-mark" },
    { name: "Anduril", logo: "/logos/anduril.svg", variant: "dark-mark" },
  ],
  caveat:
    "ATOs are always environment-specific. This covers the platform's authorizations, not a blanket approval for your enclave.",
  primes: "Also deployed with five of the top seven U.S. defense primes.",
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
    "Much of that volume is non-trivial quality-of-life work opened by people who aren't product engineers. A screenshot and a vague description in Slack becomes a ticket, a PR, and a tagged code owner, with the agent asking clarifying questions along the way.",
  hardware:
    "A single engineer at a defense contractor used Devin to build a GLONASS emulator on FPGAs for weapons-system testing. Devin wrote SpinalHDL, generated Tcl scripts, synthesized the design, flashed the hardware, ran validation hooks, and debugged against a physical dev kit. The work included unattended overnight debug loops, which is exactly where the slow iteration normally lives. A working simulator came together in about 12 hours against an estimated 12–18 months of manual work.",
};
export const caseStudies = [
  {
    category: "Code migration",
    name: "Mercedes-Benz",
    metric: "8 days",
    body: "to complete 8 months of COBOL work; 200,000+ lines of legacy code analyzed and migrated in a 4-week pilot.",
  },
  {
    category: "Data engineering",
    name: "Nubank",
    metric: "20x",
    body: "cost savings on ETL migration; 6M+ lines refactored. Planned for 1,000+ engineers over 18 months, completed in weeks.",
  },
  {
    category: "Vulnerability & bug triage",
    name: "Itaú",
    metric: "70%",
    body: "of security vulnerabilities automatically remediated, across thousands of repos.",
  },
  {
    category: "QA & test generation",
    name: "Rivian–Volkswagen Technologies",
    metric: "10x",
    body: "increase in test-generation velocity; from 1–2 tests per engineer-day to 10–15.",
  },
  {
    category: "Documentation",
    name: "Evinova",
    metric: "8x",
    body: "faster regulatory documentation; specs that took 35–40 hours of coordination now generate in 5–10 minutes.",
  },
  {
    category: "Product development",
    name: "Gumroad",
    metric: "#1",
    body: "code contributor in 5 of 7 most active repos; 1,500+ PRs merged at an 85% merge rate, ~10 per day.",
  },
  {
    category: "Technical-debt burndown",
    name: "Ramp",
    metric: "10k+",
    body: "hours saved each month on rote tasks.",
  },
  {
    category: "Application modernization",
    name: "AngelList",
    metric: "5.2x",
    body: "faster Redshift-to-Snowflake migration; 1 data engineer and 20 Devin agents migrated 14,000 analytics cards in 3 weeks.",
  },
];
export const gettingStarted = [
  {
    tier: "Easy",
    heading: "Start with a question",
    examples: [
      '"@Devin, what would it take to build X?"',
      '"Update all the relevant documentation."',
    ],
  },
  {
    tier: "Intermediate",
    heading: "Plan and parallelize",
    examples: [
      '"Plan a phased migration from Angular to React 18."',
      "Parallel sessions, one per UI component.",
    ],
  },
  {
    tier: "Advanced",
    heading: "Automate the loop",
    examples: [
      "Dependency upgrades and feature-flag removal",
      "Intelligent code review wired into CI/CD",
      "Incident and alert triage via the API",
    ],
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
    body: "It provides dedicated environments, persistent state, and thousands of concurrent agents at a fraction of VM cost. It was purpose-built for cloud from day one.",
  },
  {
    title: "Model-agnostic, no vendor lock-in",
    body: "It auto-routes across Anthropic, OpenAI, Google, and more, optimizing for accuracy, latency, and cost.",
  },
  {
    title: "Dedicated FDE partnership to drive adoption",
    body: "Forward-deployed engineers own technical success end-to-end, and the AI DevEx team embeds onsite. Every completed program delivers 2–4x adoption.",
  },
];
export const metaCopy = [
  "This page wasn't designed. It was delegated.",
  "The inputs were a 14-slide deck that doesn't convert cleanly to anything and a raw, unedited transcript of a 30-minute conversation about that deck. The transcript included the parts where we identified bad examples and content to omit. One prompt, one session, one machine: it read the slides and speaker notes, pulled the numbers and artwork, followed the redaction rules, restructured the argument, wrote the copy, built the site, tested it in a browser, and deployed it.",
  "That's the whole pitch, and you're looking at it.",
];
