import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Network, 
  Database, 
  Link2, 
  FileText, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Rocket, 
  Search, 
  BarChart, 
  Mic2, 
  MessageSquare,
  Scale
} from "lucide-react";

const skillGroups = [
  {
    category: "Technical Expertise",
    skills: [
      { name: "Cybersecurity Fundamentals", icon: ShieldCheck, detail: "Windows Firewall, Defender, Network Security" },
      { name: "Networking & OS", icon: Network, detail: "Core protocols and system internals" },
      { name: "Database Management", icon: Database, detail: "SQL, Data Structuring, Optimization" },
      { name: "API Integration", icon: Link2, detail: "Third-party service connectivity" },
      { name: "Technical Documentation", icon: FileText, detail: "Specifications and whitepapers" },
      { name: "Research & Patents", icon: BookOpen, detail: "IEEE Format & Patent Drafting" },
    ]
  },
  {
    category: "Business & Strategy",
    skills: [
      { name: "Business Model Dev", icon: TrendingUp, detail: "Startup Structuring & Revenue" },
      { name: "Partnership Dev", icon: Users, detail: "B2B Coordination & Tie-ups" },
      { name: "Project Management", icon: Rocket, detail: "Execution Planning & Tracking" },
      { name: "System Analysis", icon: Search, detail: "Requirement Gathering" },
      { name: "Performance Marketing", icon: BarChart, detail: "Lead Funnel Understanding" },
      { name: "Public Speaking", icon: Mic2, detail: "Pitching & Representation" },
    ]
  },
  {
    category: "Leadership & Mindset",
    skills: [
      { name: "Team Leadership", icon: MessageSquare, detail: "Cross-functional Coordination" },
      { name: "Strategic Decisions", icon: Scale, detail: "Bootstrap Mindset under constraints" },
      { name: "Scalable Problem Solving", icon: Rocket, detail: "Sustainability Focus" },
    ]
  }
];

export function AISkills() {
  return (
    <section id="ai-skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="AI-Powered Skill Insights" subtitle="Expertise Matrix" />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* AI Avatar Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3 flex flex-col items-center"
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-full border-2 border-primary/50 overflow-hidden bg-black/40 backdrop-blur-sm p-4">
                <img 
                  src="https://avatars.githubusercontent.com/u/144414754?s=400&u=488a431bd8263eda9396f35d3330b76972f43665&v=4" 
                  alt="AI Avatar" 
                  className="w-full h-full object-cover rounded-full opacity-80 mix-blend-screen"
                />
                {/* Scanning line effect */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-primary/50 shadow-[0_0_15px_rgba(0,243,255,0.8)] z-20"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-primary font-display font-bold text-xl mb-2">Abhishek.ai</div>
              <p className="text-muted-foreground text-sm italic">"Analyzing core competencies... multiple domains identified."</p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="lg:w-2/3 grid gap-8">
            {skillGroups.map((group, gIdx) => (
              <div key={group.category}>
                <h4 className="text-sm uppercase tracking-[0.2em] text-primary/70 mb-4 font-bold">{group.category}</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (gIdx * 0.2) + (sIdx * 0.05) }}
                    >
                      <Card className="p-4 bg-white/5 border-white/10 hover:border-primary/50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                            <skill.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">{skill.name}</div>
                            <div className="text-xs text-muted-foreground">{skill.detail}</div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}