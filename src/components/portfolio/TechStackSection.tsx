import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FadeIn } from "./FadeIn";

interface TechItem {
  name: string;
  icon: string;
  invert?: boolean;
}

interface TechGroup {
  category: string;
  items: TechItem[];
}

const STACK: TechGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    ],
  },
  {
    category: "Frontend & Web",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Neo4j", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
    ],
  },
];

/* ─── Card deck for one category ─────────────────────────────────────── */
function CardDeck({ group, groupIndex }: { group: TechGroup; groupIndex: number }) {
  const deckRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(deckRef, { margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const total = group.items.length;
  const CARD_W = 130;
  const CARD_H = 170;

  /* Spread positions: evenly distributed in a horizontal row */
  const spreadGap = 14;
  const totalSpreadWidth = total * CARD_W + (total - 1) * spreadGap;
  const stackPileWidth = CARD_W + (total - 1) * 3;
  const offsetX = (totalSpreadWidth - stackPileWidth) / 2;

  return (
    <div className="mb-14 sm:mb-18 md:mb-20">
      <FadeIn delay={groupIndex * 0.08} y={15}>
        <h3
          className="hero-heading font-black uppercase tracking-tight text-center mb-8 sm:mb-10"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          {group.category}
        </h3>
      </FadeIn>

      <div
        ref={deckRef}
        className="flex items-center justify-center"
        style={{ minHeight: CARD_H + 60 }}
      >
        <div
          className="relative"
          style={{
            width: totalSpreadWidth,
            height: CARD_H + 40,
          }}
        >
          {group.items.map((item, i) => {
            /* stacked position: cards pile up with small offsets */
            const stackX = offsetX + (i * 3);
            const stackRotate = -8 + i * (16 / Math.max(total - 1, 1));

            /* spread position: horizontal row, centered */
            const spreadX = i * (CARD_W + spreadGap);

            const isHovered = hoveredIdx === i;

            return (
              <motion.div
                key={item.name}
                className="absolute top-0 left-0"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  zIndex: isHovered ? 50 : total - i,
                  cursor: "pointer",
                }}
                initial={{
                  x: stackX,
                  rotate: stackRotate,
                  scale: 0.92,
                }}
                animate={{
                  x: isInView ? spreadX : stackX,
                  rotate: isInView ? 0 : stackRotate,
                  scale: isInView ? 1 : 0.92,
                  y: isHovered ? -18 : 0,
                }}
                transition={{
                  x: { duration: 0.7, delay: isInView ? i * 0.06 : 0, ease: [0.25, 0.46, 0.45, 0.94] },
                  rotate: { duration: 0.7, delay: isInView ? i * 0.06 : 0, ease: [0.25, 0.46, 0.45, 0.94] },
                  scale: { duration: 0.5, delay: isInView ? i * 0.06 : 0 },
                  y: { duration: 0.3, ease: "easeOut" },
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-2xl overflow-hidden"
                  style={{
                    background: isHovered
                      ? "rgba(215, 226, 234, 0.12)"
                      : "rgba(215, 226, 234, 0.05)",
                    border: isHovered
                      ? "1.5px solid rgba(182, 0, 168, 0.5)"
                      : "1px solid rgba(215, 226, 234, 0.1)",
                    boxShadow: isHovered
                      ? "0 12px 40px rgba(0,0,0,0.5), 0 0 25px rgba(182,0,168,0.15)"
                      : "0 4px 16px rgba(0,0,0,0.35)",
                    transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
                    loading="lazy"
                    style={{
                      filter: item.invert ? "invert(1)" : undefined,
                      transform: isHovered ? "scale(1.15)" : "scale(1)",
                      transition: "transform 0.3s",
                    }}
                  />
                  <span
                    className="font-medium uppercase tracking-wider text-center px-2"
                    style={{
                      color: "#D7E2EA",
                      fontSize: "0.65rem",
                      opacity: isHovered ? 1 : 0.65,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile fallback: simple wrapping grid ──────────────────────────── */
function MobileGroup({ group, groupIndex }: { group: TechGroup; groupIndex: number }) {
  return (
    <div className="mb-10">
      <FadeIn delay={groupIndex * 0.08} y={15}>
        <h3
          className="hero-heading font-black uppercase tracking-tight text-center mb-5"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)" }}
        >
          {group.category}
        </h3>
      </FadeIn>
      <div className="flex flex-wrap justify-center gap-3">
        {group.items.map((item, i) => (
          <FadeIn key={item.name} delay={Math.min(i * 0.04, 0.4)} y={16}>
            <div
              className="flex flex-col items-center gap-2 p-3 rounded-xl"
              style={{
                background: "rgba(215, 226, 234, 0.05)",
                border: "1px solid rgba(215, 226, 234, 0.08)",
                width: 80,
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8"
                loading="lazy"
                style={{ filter: item.invert ? "invert(1)" : undefined }}
              />
              <span
                className="font-medium uppercase tracking-wider text-center"
                style={{ color: "#D7E2EA", fontSize: "0.5rem", opacity: 0.7 }}
              >
                {item.name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────────────── */
export function TechStackSection() {
  return (
    <section
      className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-5 sm:px-8 md:px-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn
        as="h2"
        y={30}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: "clamp(2.5rem, 10vw, 130px)" }}
      >
        Tech Stack
      </FadeIn>

      {/* Desktop: card deck spread per category */}
      <div className="hidden md:block max-w-5xl mx-auto">
        {STACK.map((group, i) => (
          <CardDeck key={group.category} group={group} groupIndex={i} />
        ))}
      </div>

      {/* Mobile: simple grid */}
      <div className="md:hidden">
        {STACK.map((group, i) => (
          <MobileGroup key={group.category} group={group} groupIndex={i} />
        ))}
      </div>
    </section>
  );
}
