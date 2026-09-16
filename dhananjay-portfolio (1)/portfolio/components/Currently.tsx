import Reveal from "./Reveal";

export default function Currently() {
  return (
    <Reveal>
      <section className="py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-10">
          <div className="font-hand text-2xl text-accent md:pt-1">currently</div>
          <div className="max-w-prose md:border-l md:border-rule md:pl-10">
            <p className="text-[#333230]">
              Trying to get stronger at the fundamentals — especially
              JavaScript, system design, and TypeScript — so the things I
              build feel more solid underneath.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
