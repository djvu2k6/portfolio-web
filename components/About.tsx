import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="py-14 md:py-16 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10">
          <div className="font-hand text-2xl text-accent md:pt-1 mb-2 md:mb-0">
            about me
            <span className="block font-sans text-[0.7rem] text-rule font-medium mt-1 tracking-wide">
              the short version
            </span>
          </div>
          <div className="max-w-prose md:border-l md:border-rule md:pl-10 space-y-6 text-[1.05rem] text-[#333230]">
            <p>
              I&apos;m Dhananjay — twenty, currently in my third year of a CS
              degree, and generally happier building something than talking
              about building it. Most of what I make starts from noticing
              something that&apos;s mildly annoying to use, and wanting to
              fix just that one thing.
            </p>
            <p>
              That instinct is basically why Nore exists. I started it in my
              second year with two friends because we were tired of building
              college projects that no one would ever open again. We wanted
              to make things that real people might actually pay for and
              use, so we started taking on clients even while we were still
              figuring things out.
            </p>
            <p>
              On the agency side I mostly handle the frontend — the
              structure, the interactions, and the little details that make
              something feel nice to use. Along the way I also tried
              contributing to a couple of bigger open-source projects
              (Apache Superset and OpenTelemetry). A few of my pull requests
              got merged, which still feels a bit surprising and motivating.
            </p>
            <p className="font-hand text-xl text-accent">
              Outside of code I spend time drawing, reading, watching too
              many movies and shows, and messing around with video. I think
              that&apos;s quietly shaped how I look at interfaces — I care
              about how something feels, not just whether it works.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <svg
                width="52"
                height="20"
                viewBox="0 0 52 20"
                fill="none"
                className="text-rule"
              >
                <rect x="1" y="1" width="50" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="6" cy="4.5" r="1.1" fill="currentColor" />
                <circle cx="6" cy="15.5" r="1.1" fill="currentColor" />
                <circle cx="14" cy="4.5" r="1.1" fill="currentColor" />
                <circle cx="14" cy="15.5" r="1.1" fill="currentColor" />
                <circle cx="46" cy="4.5" r="1.1" fill="currentColor" />
                <circle cx="46" cy="15.5" r="1.1" fill="currentColor" />
                <circle cx="38" cy="4.5" r="1.1" fill="currentColor" />
                <circle cx="38" cy="15.5" r="1.1" fill="currentColor" />
              </svg>
              <span className="font-hand text-lg text-rule">movies, mostly</span>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}