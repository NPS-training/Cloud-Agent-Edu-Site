export const SESSION_URL = "https://app.devin.ai/sessions/32f215a9b63c498c8d9ea07e423faeff";
export const BUILD_COST = "a few cents of compute";
export type NavItem = { number: string; label: string; id: string };
export const navItems: NavItem[] = [
  { number: "01", label: "What", id: "cold-open" },
  { number: "02", label: "Machine", id: "execution" },
  { number: "03", label: "Fleet", id: "fleet" },
  { number: "04", label: "Patterns", id: "patterns" },
  { number: "05", label: "Context", id: "context" },
  { number: "06", label: "Models", id: "models" },
  { number: "07", label: "Regulated", id: "regulated" },
  { number: "08", label: "Proof", id: "proof" },
  { number: "09", label: "Programs", id: "programs" },
  { number: "10", label: "Demo", id: "demo" },
  { number: "11", label: "Start", id: "start" },
  { number: "12", label: "Cognition", id: "why" },
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
    title: "Real commands in Linux or macOS environments",
    body: "It can install packages, run migrations, hit a database, and drive a browser. Linux is the default, with macOS when the target needs it. iOS and Android emulators support mobile verification.",
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
export const handoff = {
  title: "Hand off the machine work",
  body: "The Devin CLI can send a task to a cloud session with its built-in /handoff command. Claude Code, Codex, Cursor, and other agents can use the open-source Devin Handoff plugin. It packages the repo, branch, uncommitted diff, and current context so Devin can continue on its own VM after you close your laptop.",
  triggers: [
    "Dev servers and Docker builds",
    "Browser, OAuth, and end-to-end tests",
    "CI debugging and long migrations",
    "Parallel work while you keep coding locally",
  ],
};
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
    { name: "Claude", label: "Anthropic" },
    { name: "GPT", label: "OpenAI" },
    { name: "Gemini", label: "Google" },
    { name: "SWE", label: "Cognition" },
    { name: "Others", label: "Open source, specialized" },
  ],
  destinations: [
    { name: "Instructions", label: "CLAUDE" },
    { name: "Retrieval", label: "SWE" },
    { name: "Debugging", label: "OPENAI" },
    { name: "Visual design", label: "GEMINI" },
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
    logo: "/logos/mercedes-benz.png",
    metric: "8 days",
    descriptor: "COBOL migration",
    body: "Devin completed 8 months of COBOL work in a 4-week pilot, analyzing and migrating 200,000+ lines of legacy code.",
  },
  {
    category: "Data engineering",
    name: "Nubank",
    logo: "/logos/nubank.png",
    metric: "20x",
    descriptor: "ETL migration",
    body: "Devin refactored 6M+ lines for a program planned for 1,000+ engineers over 18 months and completed in weeks.",
  },
  {
    category: "Vulnerability & bug triage",
    name: "Itaú",
    logo: "/logos/itau.png",
    metric: "70%",
    descriptor: "vulnerabilities remediated",
    body: "Devin triaged and patched vulnerabilities across thousands of repos.",
  },
  {
    category: "QA & test generation",
    name: "Rivian–Volkswagen Technologies",
    logo: "/logos/rivian-volkswagen.png",
    metric: "10x",
    descriptor: "test generation",
    body: "Test-generation velocity rose from 1–2 tests per engineer-day to 10–15.",
  },
  {
    category: "Documentation",
    name: "Evinova",
    logo: "/logos/evinova.png",
    metric: "8x",
    descriptor: "regulatory documentation",
    body: "Specs that required 35–40 hours of coordination now generate in 5–10 minutes.",
  },
  {
    category: "Product development",
    name: "Gumroad",
    logo: "/logos/gumroad.png",
    metric: "#1",
    descriptor: "active-repo contributor",
    body: "Devin merged 1,500+ PRs at an 85% merge rate, ~10 per day, across 5 of 7 most active repos.",
  },
  {
    category: "Technical-debt burndown",
    name: "Ramp",
    logo: "/logos/ramp.png",
    metric: "10k+",
    descriptor: "hours saved monthly",
    body: "Rote tasks account for the hours saved each month.",
  },
  {
    category: "Application modernization",
    name: "AngelList",
    logo: "/logos/angellist.png",
    metric: "5.2x",
    descriptor: "warehouse migration",
    body: "One data engineer and 20 Devin agents migrated 14,000 analytics cards in 3 weeks.",
  },
];
export type ProgramGroup = {
  caption: string;
  items: { program: string; curriculum: string; body: string }[];
};
export const programs = {
  lede: "Cloud agents are not only for people whose job title is software engineer. The work below is drawn from the NPS program menu, grouped by how directly a cloud agent applies. Every example is a use of Devin as it exists today, not a claim about current NPS practice.",
  groups: [
    {
      caption: "Software is the deliverable",
      items: [
        {
          program: "Computer Science",
          curriculum: "Curriculum 368",
          body: "Thesis code, ML experiments, and secure-systems prototypes. Agents run experiment sweeps in parallel across separate machines, so a thesis is bounded by how fast results can be interpreted rather than how fast code can be typed.",
        },
        {
          program: "MS in Applied Cyber Ops",
          curriculum: "Curriculum 326",
          body: "Tooling for lab ranges, parsers, and test harnesses. Triage at repository scale is the Itaú pattern in the case studies above: an agent reads the finding, writes the patch, and opens the PR for review.",
        },
        {
          program: "Information Systems & Technology",
          curriculum: "Curriculum 370",
          body: "Modernization of the systems the program studies. Legacy migration and ETL rework are the two case studies with the largest numbers attached, and both are the kind of high-volume, well-specified work that an agent fleet absorbs.",
        },
        {
          program: "Information Warfare",
          curriculum: "Curriculum 595",
          body: "Signal and data-processing code, plus the glue between simulation and analysis. Work in the information environment usually means moving data between tools that were never designed to talk to each other.",
        },
        {
          program: "Electronic Systems Engineering",
          curriculum: "Curriculum 590",
          body: "Radar and communications projects that reach real hardware. The de-identified case study above is exactly this shape: HDL, synthesis scripts, and overnight debug loops against a physical dev kit.",
        },
        {
          program: "Modeling Virtual Environments and Simulation",
          curriculum: "Curriculum 399",
          body: "Scenario code, instrumentation, and the interfaces between simulations and C2 systems. Agents can also generate the test coverage that keeps a simulation trustworthy as it grows.",
        },
      ],
    },
    {
      caption: "Code is the instrument, not the product",
      items: [
        {
          program: "Operations Research",
          curriculum: "Curriculum 360",
          body: "Optimization models, statistical pipelines, and course-of-action comparisons. An agent writes the model and cleans the data; parallel runs mean many formulations get tested instead of the one there was time for.",
        },
        {
          program: "Defense Systems Analysis",
          curriculum: "Curriculum 817",
          body: "Cost estimation and decision analysis, including the unglamorous data preparation that consumes most of the schedule.",
        },
        {
          program: "Manpower Systems Analysis",
          curriculum: "Curriculum 847",
          body: "Forecasting and force-structure models, rebuilt and re-run as assumptions change.",
        },
        {
          program: "Financial Management",
          curriculum: "Curriculum 837",
          body: "Budget models and audit-quality reconciliation across large data sets.",
        },
        {
          program: "Materiel Logistics Support",
          curriculum: "Curriculum 827",
          body: "Inventory and transportation models, and the reporting built on top of them.",
        },
        {
          program: "Applied Physics of Combat Systems",
          curriculum: "Curriculum 533",
          body: "Numerical modeling of weapons and sensor behavior, and the simulation code that supports it.",
        },
        {
          program: "Space Systems Operations",
          curriculum: "Curriculum 566",
          body: "Orbital and spacecraft analysis code. Work in this program is often classified, which is why the deployment posture in the previous section matters more than any single feature.",
        },
      ],
    },
    {
      caption: "The consumer of what agents produce",
      items: [
        {
          program: "Defense Program Management",
          curriculum: "Curriculum 816",
          body: "Program offices are already receiving software written with agents. Knowing what a review-ready agent PR looks like, and what velocity is now reasonable to expect, changes how a schedule is judged.",
        },
        {
          program: "Defense Contract Management",
          curriculum: "Curriculum 815",
          body: "Contract language and evaluation criteria have not caught up to agent-assisted delivery. Cost and schedule assumptions built on human-only throughput are the first thing to revisit.",
        },
        {
          program: "Applied Design for Innovation",
          curriculum: "Curriculum 697",
          body: "Design work depends on prototypes being cheap enough to throw away. A prototype an agent builds overnight is cheap enough to abandon in the morning.",
        },
        {
          program: "Special Operations and Irregular Warfare",
          curriculum: "Curriculum 699",
          body: "Small teams that need a tool now, built by whoever has the problem rather than whoever has the language.",
        },
        {
          program: "Regional Security Studies and Regional Security Studies Certificates",
          curriculum: "Curricula 681 to 684, 246 to 249",
          body: "The least direct fit, and still real: document processing at volume, repeatable data collection, and small internal tools that would otherwise be a spreadsheet maintained by hand.",
        },
      ],
    },
  ] satisfies ProgramGroup[],
};
export type DemoStep = {
  number: string;
  title: string;
  target: string;
  minutes: number;
  prompt: string;
  watchFor: string;
  whyItMatters: string;
};
export const demo = {
  lede: "The live portion runs against one repository: NPS-training/Labtainers-Devin, a Docker-based framework of 89 cybersecurity lab exercises written in Python, Bash, Java, and C++. Nobody in the room wrote it, which is the point. Pick a step, read the prompt, and watch what comes back.",
  repository: "NPS-training/Labtainers-Devin",
  budget: "About 25 minutes, after 15 on this site.",
  steps: [
    {
      number: "01",
      title: "Ask a codebase you have never seen",
      target: "Devin Wiki",
      minutes: 4,
      prompt:
        "I have never seen this repository before. Give me a high-level summary of what it does, how a single lab is defined, and how student work gets graded.",
      watchFor:
        "The wiki already exists. It was generated by adding the repository, with no setup and no one writing documentation. The answer arrives with an architecture diagram and citations that link into real files.",
      whyItMatters:
        "This is the first hour of every new assignment, every new billet, and every code base inherited from a contractor.",
    },
    {
      number: "02",
      title: "Trace one mechanism end to end",
      target: "Devin Wiki",
      minutes: 4,
      prompt:
        "How does this framework stop two students from submitting identical work? Walk me through the files involved and the order they run in.",
      watchFor:
        "It follows the chain rather than guessing: LAB_MASTER_SEED in a lab's config/start.config, the RAND_REPLACE and HASH_REPLACE operators in config/parameter.config, and the per-student seed derived from an email address. Ask a follow-up question and it stays on the thread.",
      whyItMatters:
        "Reading a mechanism out of an unfamiliar code base is the part of the work that does not compress by adding people.",
    },
    {
      number: "03",
      title: "Scan for vulnerabilities, then fix them",
      target: "Devin security review",
      minutes: 5,
      prompt: "Run a security review of this repository and rank what you find by severity.",
      watchFor:
        "Findings grouped by severity, with the critical ones first. Turning on auto-fix sends Devin back into the code to open pull requests against the findings. A person still reviews and merges every one.",
      whyItMatters:
        "A backlog of known-but-unfixed findings is normal, and it exists because triage and remediation cost engineer hours, not because the findings are unknown.",
    },
    {
      number: "04",
      title: "Put a pull request through review",
      target: "Devin code review",
      minutes: 3,
      prompt: "Review this pull request and flag anything that would break an existing lab.",
      watchFor:
        "This is a separate system from the security scan. It reads the diff in the context of the whole repository and comments inline, in the same place a human reviewer would.",
      whyItMatters:
        "Review is the bottleneck that appears the moment code generation stops being the bottleneck.",
    },
    {
      number: "05",
      title: "Delegate real work and watch the machine",
      target: "A Devin session",
      minutes: 5,
      prompt:
        "tool-src/capinout captures a student's terminal input and output through a PTY. Add a regression test proving output is still captured when the lab command exits with a non-zero status.",
      watchFor:
        "The session view shows the VM: a shell, an editor, a browser, a plan that updates as the work proceeds. It compiles the C++ utility, runs it, and reads the failure itself. The output is a pull request, not a suggestion in a chat window.",
      whyItMatters:
        "Everything in that window is work that a local assistant hands back to you: building, running, reading the error, trying again.",
    },
    {
      number: "06",
      title: "Fan the same task across the whole repository",
      target: "Parallel sessions",
      minutes: 4,
      prompt:
        "For every lab under labs/, check that config/start.config declares a network for each container it defines. Open one pull request per lab that is missing one.",
      watchFor:
        "Many sessions running at once in the sessions list, each on its own machine, filtered and pinned as they finish. The shape is map then reduce: parallel workers on identical narrow tasks, with the results collected for one review pass.",
      whyItMatters:
        "Eighty-nine labs is small enough to be tedious and large enough that nobody volunteers. This is the class of work that never gets scheduled.",
    },
  ] satisfies DemoStep[],
  closing: "The passphrase for this site is shared with the room.",
};
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
