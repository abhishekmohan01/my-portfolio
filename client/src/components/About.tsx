import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Code2, Database, Layout, Lightbulb, Terminal, Cpu, BarChart3, BrainCircuit } from "lucide-react";

const skills = [
  { name: "Full Stack Web Development (React.js, Node.js, REST APIs)", icon: Code2, level: 85 },
  { name: "AI Integration & Automation (LLMs, Intelligent Systems)", icon: BrainCircuit, level: 80 },
  { name: "Data Analytics & Business Intelligence (Power BI, Excel, Tableau)", icon: BarChart3, level: 78 },
  { name: "System Design & Scalable Architecture", icon: Layout, level: 75 },
  { name: "Cloud, DevOps & Deployment (Git, CI/CD, Server Basics)", icon: Terminal, level: 72 },
  { name: "Product Strategy & Solution Development", icon: Lightbulb, level: 82 },
];

export function About() {
  return (
    <section id="about" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              Building Real, Scalable Solutions with <span className="text-primary">Purpose & Clarity</span>.
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-foreground font-semibold">Abhishek Mohan</span>, a Computer Science and Engineering student at Lovely Professional University (2023–2027) and a multi-domain technology professional driven by purpose and precision. My journey blends hands-on development with systems thinking and business insight. I work across web and Android development, APIs, databases, and modern frameworks while specializing in Artificial Intelligence, Machine Learning, and technology-driven management practices focusing on transforming complex challenges into clean, scalable, and user-centric solutions.
              </p>
              <p>
                Beyond building applications, I strengthen my foundation in computer networking, operating systems, and hardware architecture, while leveraging data analytics, business process management, and digital strategy to ensure every solution delivers measurable real-world impact.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-3xl font-display font-bold">3+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Exp.</span>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <span className="block text-3xl font-display font-bold">10+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold">{skill.name}</h4>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
