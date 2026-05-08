import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "./LiveProjectButton";
import { GithubProjectButton } from "./GithubProjectButton";

interface Project {
  n: string;
  category: string;
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "AI / ML",
    name: "Helmet Object Detection",
    description:
      "An end-to-end traffic safety system powered by the YOLO object-detection architecture. The pipeline ingests live CCTV or dashcam feeds, runs frame-by-frame inference to classify motorcyclists as helmeted or unhelmeted, and flags violations in real time. Trained on a custom-annotated dataset of 5,000+ images with data augmentation, achieving 94%+ mAP. Built with Python, TensorFlow, and OpenCV; designed to plug directly into municipal traffic-enforcement workflows.",
    githubUrl: "https://github.com/Lola381/Project",
  },
  {
    n: "02",
    category: "AI / ML",
    name: "Handwritten Digit Recognition",
    description:
      "A convolutional neural network trained on the MNIST benchmark to classify handwritten digits (0–9) with 99.2% test accuracy. The model architecture uses two convolutional blocks with batch normalization and dropout, followed by dense layers. Ships with an interactive web canvas — users draw a digit on-screen, the stroke data is preprocessed (centering, anti-aliasing, 28×28 downsampling) and fed through the model for instant prediction. Built with Keras, NumPy, and a lightweight Flask API.",
  },
  {
    n: "03",
    category: "Mobile",
    name: "TaskBug — Community Platform",
    description:
      "TaskBug is a hyper-local community platform connecting people through a marketplace for gig-based favors and a discovery hub for social events. Emphasizing real-time interaction and proximity, the app features an interactive live map powered by Firebase Realtime Database to display active users and facilitate quick local assistance. Users can post, discover, and intelligently filter tasks or events using dynamic distance radiuses (via the Haversine formula), while coordinating instantly through integrated chat rooms. Securely managed via Firebase Auth and Firestore, TaskBug turns any local neighborhood into a collaborative network.",
    githubUrl: "https://github.com/jinishar/TaskBug",
  },
  {
    n: "04",
    category: "Full-Stack Web",
    name: "RideSync — Carpool Platform",
    description:
      "A real-time ride-sharing web application connecting drivers and passengers through intelligent route matching. The stack includes React with TanStack Router on the frontend and Firebase (Auth, Firestore, Cloud Functions) on the backend. Key features: geolocation-based ride discovery with interactive map pickers, an AI scoring engine that ranks matches by route proximity and schedule overlap, in-app group chat with automated welcome messages, seat management, and a driver/passenger analytics dashboard.",
    githubUrl: "https://github.com/Lola381/ridesync",
    liveUrl: "https://ridesyncq381.web.app/Dashboard",
  },
  {
    n: "05",
    category: "AI / Humanitarian",
    name: "CrisisFlow — Aid Coordinator",
    description:
      "Built for the Google Solution Challenge 2026, CrisisFlow is a crisis management platform that streamlines humanitarian response. It uses Google Gemini for multi-modal data ingestion — scanning handwritten aid requests via OCR, scoring urgency with NLP, and matching volunteers to tasks by skill and proximity. The frontend is a React dashboard with real-time Firestore streams showing live crisis maps, resource allocation status, and volunteer deployment. Designed to cut coordination overhead during natural disasters by 60%+.",
    githubUrl: "https://github.com/nileshg5/CrisisFlow",
    liveUrl: "https://crisisflow-7mihh9hh0-nileshs-projects-0d37a223.vercel.app/#/coordinator/dashboard",
  },
  {
    n: "06",
    category: "Web Development",
    name: "Museum Experience Website",
    description:
      "A premium digital experience for a fictional fine-art museum, built with React, Framer Motion, and Tailwind CSS. Features a cinematic hero section with layered parallax typography, a curated gallery with hover-reveal artwork cards and two-column editorial layout, dedicated artwork detail pages with rich metadata, and a fully animated ticketing flow. The design language draws from print editorial aesthetics — OGG serif typography, restrained color palette, and scroll-reveal micro-interactions throughout.",
    githubUrl: "https://github.com/Lola381/museumapp",
    liveUrl: "https://museumapp-pearl.vercel.app/",
  },
];

function Card({
  project,
  index,
  total,
  containerRef,
}: {
  project: Project;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh]" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale, background: "#0C0C0C" }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <div
              className="hero-heading font-black"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)", lineHeight: 1 }}
            >
              {project.n}
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest" style={{ color: "#D7E2EA", opacity: 0.6 }}>
                {project.category}
              </span>
              <span
                className="font-medium uppercase"
                style={{ color: "#D7E2EA", fontSize: "clamp(1.1rem, 2.2vw, 2rem)", lineHeight: 1.1 }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap mt-4 sm:mt-0">
            <GithubProjectButton link={project.githubUrl} />
            <LiveProjectButton link={project.liveUrl} />
          </div>
        </div>

        <div className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-8 md:px-16">
          <p
            className="font-light max-w-4xl text-center"
            style={{
              color: "#D7E2EA",
              opacity: 0.85,
              fontSize: "clamp(0.95rem, 1.6vw, 1.45rem)",
              lineHeight: 1.65,
            }}
          >
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
      id="projects"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>
      <div ref={containerRef}>
        {PROJECTS.map((p, i) => (
          <Card key={p.n} project={p} index={i} total={PROJECTS.length} containerRef={containerRef} />
        ))}
      </div>
    </section>
  );
}
