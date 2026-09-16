import Reveal from "./Reveal";

const links = [
  { label: "Email", value: "dhananjaymohan67@gmail.com", href: "mailto:dhananjaymohan67@gmail.com" },
  { label: "GitHub", value: "github.com/djvu2k6", href: "https://github.com/djvu2k6" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhananjay-mohan-a3b910313",
    href: "https://linkedin.com/in/dhananjay-mohan-a3b910313",
  },
  { label: "X", value: "x.com/Dhananjaaay_", href: "https://x.com/Dhananjaaay_" },
];

export default function Contact() {
  return (
    <Reveal>
      <section id="contact" className="pt-20 pb-16 md:pt-28 md:pb-24 scroll-mt-20">
        <h2 className="font-hand text-4xl md:text-5xl text-ink mb-10 md:mb-14">
          say hi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10">
          <div className="tag-soft md:pt-1">get in touch</div>
          <div className="max-w-prose md:border-l md:border-rule md:pl-10">
            <p className="text-[#333230] mb-2">
              If anything here resonates, or you just want to say hi, feel
              free to reach out. I usually reply.
            </p>
            <p className="font-hand text-lg text-accent mb-8">
              Probably watching something, reading something, or three side
              projects deep at any given time.
            </p>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="underline-draw self-start text-ink"
                >
                  <span className="text-rule text-sm mr-3">{link.label}</span>
                  {link.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="border-t border-rule mt-20 pt-8 text-xs text-rule">
          © {new Date().getFullYear()} Dhananjay Mohan.
        </footer>
      </section>
    </Reveal>
  );
}
