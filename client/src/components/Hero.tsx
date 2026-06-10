import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "./TypewriterText";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-56 h-56 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <img
            src="https://avatars.githubusercontent.com/u/144414754?s=400&u=488a431bd8263eda9396f35d3330b76972f43665&v=4"
            alt="Abhishek Mohan"
            className="w-full h-full object-cover rounded-full border-4 border-primary relative z-10 shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block border border-primary/30 rounded-full px-4 py-1.5 mb-6 bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-primary font-medium tracking-wide text-sm uppercase">Open to Collaborations</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-none"
        >
          Abhishek <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mohan</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          <TypewriterText 
            texts={[
              "From Varanasi, Uttar Pradesh, India",
              "Tech Entrepreneur",
              "Multi Domain Tech Engineer",
              "Business Process Analyst",
              "AI ML Solution Engineer"
            ]}
            className="text-primary font-medium"
          />
          <p className="mt-4">Turning caffeine into beautiful, scalable solutions with purpose & clarity.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="rounded-full px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300"
          >
            Get in Touch
          </Button>
          <div className="flex gap-4 sm:ml-4">
            <a 
              href="https://linkedin.com/in/abhishek---mohan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-background/50 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/abhi-mohan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-background/50 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:business.abhishekmohan@gmail.com" 
              className="p-3 rounded-full border border-border bg-background/50 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
