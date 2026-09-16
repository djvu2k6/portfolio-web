import Reveal from "./Reveal";

interface Contribution {
  org: string;
  subtitle: string;
  dateRange: string;
  bullets: string[];
}

const contributions: Contribution[] = [
  {
    org: "OpenTelemetry",
    subtitle: "CNCF / Linux Foundation",
    dateRange: "Apr 2026 – Present",
    bullets: [
      "Improved NavigationCard mobile responsiveness and VersionSelector UI consistency in opentelemetry-ecosystem-explorer — merged PR",
      "Fixed missing instrumentation entries in opentelemetry-browser README files (issue #260) — merged docs PR",
      "Refactored TypeScript: consolidated shared URL sanitisation helpers into src/utils/ (issue #251) — merged PR",
      "Communicated with CNCF maintainers via GitHub PR reviews and the SIG Slack channel",
    ],
  },
  {
    org: "Apache Superset",
    subtitle: "Apache Software Foundation",
    dateRange: "Apr 2026",
    bullets: [
      "Fixed MDX frontmatter bug on the embedding docs page that caused raw metadata to render as visible text — merged PR",
    ],
  },
];

export default function OpenSource() {
  return (
    <Reveal>
      <section id="open-source" className="py-10 md:py-14 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10 mb-4">
          <div className="font-hand text-2xl text-accent md:pt-1">
            open source
            <span className="block tag-soft mt-1">4 PRs merged</span>
          </div>
          <div />
        </div>

        {contributions.map((c, i) => (
          <div
            key={c.org}
            className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10 py-6 ${
              i !== 0 ? "border-t border-rule/70" : ""
            }`}
          >
            <div className="tag-soft pt-1">
              <span className="block text-ink font-medium text-sm mb-0.5">
                {c.org}
              </span>
              {c.subtitle}
              <span className="block font-hand text-base text-accent mt-1">
                {c.dateRange}
              </span>
            </div>
            <ul className="max-w-prose space-y-2 text-[#333230]">
              {c.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5">
                  <span className="text-accent mt-[2px] shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
