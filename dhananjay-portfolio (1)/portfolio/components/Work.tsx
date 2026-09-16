import Reveal from "./Reveal";

interface Project {
  tag: string;
  title: string;
  description: string;
  tech: string;
  links: { label: string; href: string }[];
  mockupSrc?: string;
}

const featuredProject: Project = {
  tag: "internal tool · strongest project",
  title: "CandidateFlow — Recruitment CRM",
  description:
    "Built an internal tool for an immigration consultancy that was managing candidates through spreadsheets and email. It has a clear pipeline, document storage, and role-based access. They're still using it daily, and it's grown to around 400 candidate records.",
  tech: "Next.js · React · Supabase · PostgreSQL · Tailwind",
  links: [],
  // Drop a real screenshot at public/work/candidateflow.png (roughly 16:10
  // works best) — this path is already wired up.
  mockupSrc: "/work/candidateflow.png",
};

const otherProjects: Project[] = [
  {
    tag: "agency site",
    title: "Nore v4 — Agency Site",
    description:
      "The current site for our agency. I spent a lot of time on the interactions — custom cursor, smooth scrolling, and page transitions — trying to make it feel a bit more intentional.",
    tech: "Next.js · TypeScript · GSAP · Framer Motion · Lenis · Tailwind",
    links: [{ label: "norehq.com", href: "https://norehq.com" }],
    // Drop a screenshot at public/work/norev4.png to fill this in.
    mockupSrc: "/work/norev4.png",
  },
  {
    tag: "client work",
    title: "Client Websites",
    description:
      "Designed and developed three websites that were handed over to real clients.",
    tech: "",
    links: [
      { label: "beachills.com", href: "https://beachills.com" },
      { label: "garage22.co.in", href: "https://garage22.co.in" },
      { label: "sanjeevaniayurvedics.co.in", href: "https://sanjeevaniayurvedics.co.in" },
    ],
  },
  {
    tag: "live project",
    title: "AccuFlow",
    description:
      "A financial management system with layered permissions, real-time tracking, and PDF reports. It's live as a working project.",
    tech: "",
    links: [{ label: "accuflow.vercel.app", href: "https://accuflow.vercel.app" }],
  },
  {
    tag: "side project",
    title: "Toolbox — Chrome Extension",
    description:
      "A Chrome extension that combines several small tools (notepad, todo, Pomodoro, highlighter, color picker, etc). Built it mostly to learn how browser extensions work.",
    tech: "Vanilla JavaScript · Manifest V3 · Chrome APIs",
    links: [{ label: "GitHub", href: "https://github.com/djvu2k6" }],
  },
];

function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-lg border border-rule/70 overflow-hidden bg-white/60 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-highlight/70 border-b border-rule/50">
        <span className="w-2.5 h-2.5 rounded-full bg-rule/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-rule/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-rule/50" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="pt-20 pb-16 md:pt-28 md:pb-20 scroll-mt-20">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10 mb-10">
          <div className="font-hand text-2xl text-accent">selected work</div>
          <div />
        </div>
      </Reveal>

      {/* Featured project — breaks the label/text grid on purpose, gets a
          mockup and more room, because it's the strongest piece of work. */}
      <Reveal delay={0.1}>
        <div className="rounded-2xl bg-highlight/50 border border-rule/40 p-6 md:p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="tag-soft mb-3">{featuredProject.tag}</div>
              <h3 className="font-hand text-3xl md:text-4xl text-ink mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-[#333230] mb-4">{featuredProject.description}</p>
              <p className="font-hand text-lg text-accent">{featuredProject.tech}</p>
            </div>
            <BrowserMockup
              src={featuredProject.mockupSrc!}
              alt="CandidateFlow screenshot"
            />
          </div>
        </div>
      </Reveal>

      {otherProjects.map((project, i) => {
        const flip = i % 2 === 1;
        return (
          <Reveal key={project.title} delay={Math.min(i * 0.06, 0.24)}>
            <div
              className={`grid grid-cols-1 gap-4 md:gap-10 py-9 border-t border-rule/70 ${
                project.mockupSrc
                  ? "md:grid-cols-2 items-center"
                  : "md:grid-cols-[140px_1fr]"
              }`}
            >
              <div className={flip && project.mockupSrc ? "md:order-2" : ""}>
                {project.mockupSrc ? (
                  <BrowserMockup src={project.mockupSrc} alt={`${project.title} screenshot`} />
                ) : (
                  <div className="tag-soft pt-1">
                    {project.tag}
                    {project.tech && (
                      <span className="block font-hand text-base text-accent mt-2">
                        {project.tech}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className={`max-w-prose ${flip && project.mockupSrc ? "md:order-1" : ""}`}>
                {project.mockupSrc && <div className="tag-soft mb-2">{project.tag}</div>}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#333230] mb-3">{project.description}</p>
                {project.mockupSrc && project.tech && (
                  <p className="font-hand text-base text-accent mb-3">{project.tech}</p>
                )}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-draw text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
