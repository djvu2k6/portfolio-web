"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const Lanyard = dynamic(() => import("./Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] md:h-[820px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 animate-pulse">
        <div className="w-24 h-32 rounded-md border-2 border-dashed border-rule/60" />
        <span className="font-hand text-lg text-rule">hang on…</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="pt-4 md:pt-14 pb-12 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-4 md:gap-10">
        <div className="hidden md:block pt-2 font-hand text-2xl text-accent leading-tight">
          est. &apos;24
          <span className="block font-sans text-[0.7rem] text-rule font-medium mt-1 tracking-wide">
            Nore, co-founder
          </span>
        </div>

        {/* Lanyard renders first in DOM + first visually on mobile (order-1),
            moves to the right column on desktop (md:order-2). Smaller box on
            mobile so it doesn't dominate the screen. */}
        <div className="order-1 md:order-2 -mx-4 md:mx-0">
          <Reveal>
            <Lanyard
              position={[0, -1.6, 18]}
              gravity={[0, -40, 0]}
              frontImage="/avatar-front.jpg"
              backImage="/avatar-back.jpg"
              imageFit="cover"
              className="w-full h-[300px] md:h-[820px]"
            />
          </Reveal>
          <p className="hidden md:block text-center font-hand text-lg text-rule -mt-6">
            (drag me)
          </p>
        </div>

        <div className="max-w-prose order-2 md:order-1">
          <Reveal>
            <div className="text-sm text-rule mb-3 md:mb-4">
              Frontend &amp; full-stack developer
            </div>
            <h1 className="text-[2rem] md:text-[3.4rem] font-hand text-ink leading-[1.08] mb-4 md:mb-6">
              I like building things
              <br />
              people actually end up using.
            </h1>
            <p className="text-base md:text-lg text-muted max-w-[52ch] mb-4 md:mb-6">
              I&apos;m a third-year CS student and co-founder of a small
              agency called Nore. Over the last couple of years I&apos;ve
              been trying to get better at making interfaces that feel
              considered — the small details, the animations, the parts you
              only notice when they&apos;re missing.
            </p>
            <p className="text-sm text-ink">
              Currently based in{" "}
              <span className="font-medium border-b border-rule">
                Thiruvananthapuram, Kerala
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
