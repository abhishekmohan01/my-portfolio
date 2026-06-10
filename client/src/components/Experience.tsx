import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Co-Founder & Co-CEO",
    company: "Appoointo",
    period: "Jan 2023 - Present",
    description: "Leading technical strategy and product development for scalable AI/ML solutions. Overseeing business operations and growth.",
    color: "border-primary"
  },
  {
    role: "Marketing/Promotion Adviser & Campus Ambassador",
    company: "Cyberyaan",
    period: "April 2024 - Present",
    description: "Advising on marketing strategies and promoting cybersecurity awareness as a campus representative.",
    color: "border-cyan-500"
  },
  {
    role: "Marketing Coordinator",
    company: "Blinkit",
    period: "July 2025 - Sep 2025",
    description: "Coordinated marketing campaigns and analyzed user engagement metrics to drive growth.",
    color: "border-purple-500"
  },
  {
    role: "VP & Co-Founder",
    company: "Skills Savvy",
    period: "Feb 2024 - Nov 2024",
    description: "Managed educational content delivery and platform development. Scaled user base through strategic partnerships.",
    color: "border-blue-500"
  },
  {
    role: "Web Developer",
    company: "Prodigy InfoTech",
    period: "Aug 2024 - Sep 2024",
    description: "Developed responsive web applications and improved UI/UX performance.",
    color: "border-green-500"
  },
  {
    role: "Project Intern",
    company: "Anjali School",
    period: "July 2024",
    description: "Assisted in digital transformation initiatives and educational software implementation.",
    color: "border-orange-500"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1.5 md:-translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className={`p-6 rounded-2xl bg-card/40 border border-border hover:border-primary/50 transition-colors duration-300 relative group`}>
                    <div className={`absolute top-0 bottom-0 w-1 ${index % 2 === 0 ? "right-0 rounded-r-2xl" : "left-0 rounded-l-2xl"} bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-2 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
