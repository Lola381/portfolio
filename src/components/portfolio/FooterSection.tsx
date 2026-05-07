import { Mail, Phone, Briefcase, Code2, GraduationCap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const links = [
  { icon: Mail, label: "abhishekq381@gmail.com", href: "mailto:abhishekq381@gmail.com" },
  { icon: Phone, label: "+91 94506 07933", href: "tel:+919450607933" },
  { icon: Briefcase, label: "linkedin.com/in/abhishek-singh", href: "https://linkedin.com/in/abhishek-singh" },
  { icon: Code2, label: "github.com/Lola381", href: "https://github.com/Lola381" },
];

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-12"
      style={{ background: "#0C0C0C" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        <FadeIn as="h2" y={30} className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: "clamp(2.5rem, 10vw, 130px)" }}>
          Let&apos;s Connect
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {links.map(({ icon: Icon, label, href }, i) => (
            <FadeIn key={label} delay={i * 0.08}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border transition-all hover:border-white/40 hover:translate-x-1"
                style={{ borderColor: "rgba(215,226,234,0.2)", color: "#D7E2EA" }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: "#B600A8" }} />
                <span className="font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base truncate">
                  {label}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div
            className="flex items-center justify-center gap-3 text-center font-light uppercase tracking-widest"
            style={{ color: "#D7E2EA", opacity: 0.7, fontSize: "clamp(0.7rem, 1.2vw, 0.95rem)" }}
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>MCA @ CHRIST University · BCA @ Amity University (70%)</span>
          </div>
        </FadeIn>

        <div
          className="pt-8 border-t text-center font-light uppercase tracking-widest text-xs"
          style={{ borderColor: "rgba(215,226,234,0.15)", color: "#D7E2EA", opacity: 0.5 }}
        >
          © {new Date().getFullYear()} Abhishek Singh — All rights reserved
        </div>
      </div>
    </footer>
  );
}