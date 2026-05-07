import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import memoji from "@/assets/memoji.png";

const navLinks = ["About", "Skills", "Projects", "Contact"];

function InfiniteMarquee() {
  const text = "Hi, I'm Abhishek Singh";
  const separator = "   ";
  const repeated = Array(6).fill(text + separator).join("");

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee-scroll 40s linear infinite",
        }}
      >
        <span
          className="hero-heading font-black uppercase tracking-tight"
          style={{
            fontSize: "clamp(4rem, 14vw, 15vw)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            paddingRight: "0.5em",
          }}
        >
          {repeated}
        </span>
        <span
          className="hero-heading font-black uppercase tracking-tight"
          style={{
            fontSize: "clamp(4rem, 14vw, 15vw)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            paddingRight: "0.5em",
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{ color: "#D7E2EA" }}
          >
            {l}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-0 relative z-20 pointer-events-none">
        <FadeIn delay={0.15} y={40}>
          <InfiniteMarquee />
        </FadeIn>
      </div>

      <Magnet
        padding={150}
        strength={3}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={memoji}
            alt="Abhishek memoji"
            className="w-full h-auto"
          />
        </FadeIn>
      </Magnet>

      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: "#D7E2EA", fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a developer driven by building intelligent and impactful software
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
