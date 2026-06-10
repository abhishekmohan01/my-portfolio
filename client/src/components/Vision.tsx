import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Vision" subtitle="Purpose & Impact" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none mb-16"
          >
            <div className="text-xl leading-relaxed text-muted-foreground space-y-6">
              <p>
                My core life vision is to become a builder of meaningful impact, someone who transforms ideas into systems that elevate people’s lives. I aim to grow not just in skill and success, but in character, clarity, and leadership, consistently pushing beyond limitations. Through disciplined learning, bold execution, and purposeful action, I aspire to create lasting value, inspire others to think bigger, and leave behind work that truly matters.
              </p>
              <p>
                I believe true success is not measured by position or power, but by the number of lives positively transformed and the values upheld while doing so. Growth for me is holistic intellectual, financial, and spiritual rooted in discipline and guided by conscience. I choose sustainable impact over temporary applause, quiet consistency over loud validation, and firm resilience over passive compromise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <div className="text-2xl md:text-3xl font-display font-bold text-center leading-tight italic text-foreground">
              “I don’t chase success, I am here to build what it dares to become, and leave an impact that moves millions and echoes for generations.”
            </div>
            <div className="mt-8 h-1 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}