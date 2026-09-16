import Reveal from "./Reveal";

const categories = [
  { label: "Design", items: ["Figma"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "Supabase", "PostgreSQL", "MySQL / MariaDB"],
  },
  { label: "Tooling", items: ["Git & GitHub", "Vercel", "VS Code"] },
];

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="py-14 md:py-16 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10">
          <div className="font-hand text-2xl text-accent md:pt-1">
            what i do
            <span className="block font-sans text-[0.7rem] text-rule font-medium mt-1 tracking-wide">
              tools &amp; stack
            </span>
          </div>
          <div className="max-w-prose md:border-l md:border-rule md:pl-10 space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4"
              >
                <span className="text-sm font-medium text-ink w-[140px] shrink-0">
                  {cat.label}
                </span>
                <span className="text-[#333230]">{cat.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
