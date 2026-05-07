import { FadeIn } from "./FadeIn";

const SERVICES = [
  { n: "01", name: "Languages", d: "JavaScript, Python, C, Java and SQL — comfortable jumping between paradigms to pick the right tool for the problem." },
  { n: "02", name: "Web Development", d: "React, Next.js, Express.js, Tailwind CSS, HTML5 and CSS — building responsive, accessible interfaces and full-stack apps." },
  { n: "03", name: "AI / ML", d: "TensorFlow, Keras and OpenCV — training deep learning models, computer vision pipelines, and real-time detection systems." },
  { n: "04", name: "Mobile", d: "Android development with Kotlin, Firebase Authentication, Firestore and Realtime Database for scalable, real-time apps." },
  { n: "05", name: "Databases & Tools", d: "MongoDB, MySQL, Neo4J, Firebase. Daily driver tools: Git, GitHub, VS Code, IntelliJ IDEA and Android Studio." },
];

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative -mt-10 sm:-mt-12 md:-mt-16 z-10"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Skills
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{ borderTop: "1px solid rgba(12,12,12,0.15)", borderBottom: i === SERVICES.length - 1 ? "1px solid rgba(12,12,12,0.15)" : undefined }}
            >
              <div
                className="font-black flex-shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <div className="flex flex-col gap-3 md:gap-4 pt-2">
                <div
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </div>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.d}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
