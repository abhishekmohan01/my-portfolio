import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers, Clock, Cloud, HeartPulse, Languages, Cpu } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "AI Deadlock Detection",
    description: "An advanced system designed to predict, detect, and resolve deadlocks in real-time using AI and automation to prevent system stalls.",
    tags: ["AI", "Operating Systems", "Automation"],
    icon: Cpu,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ApmS1hA699txkbOiPyTNvVdlNhjP-N3UdQ&s",
    github: "https://github.com/abhishekmohan01/AI-POWERED-DEADLOCK-DETECTION",
    live: "#"
  },
  {
    title: "HealSphere AI",
    description: "An integrated healthcare intelligence platform providing end-to-end solutions from pharmaceutical supply chain management to personal mental wellness tracking.",
    tags: ["Healthcare", "AI", "Intelligence"],
    icon: HeartPulse,
    image: "https://cdn.asoworld.com/img/bc0c93237c1b4ed7984289bd4bc745dd.jpg",
    github: "https://github.com/abhishekmohan01/HealSphere_AI-Intelligent-End-to-End-Healthcare_Prediction_Suite",
    live: "#"
  },
  {
    title: "Legal Translator Chatbot",
    description: "A comprehensive neural machine translation system for legal documents, converting English to multiple Indian languages (Hindi, Telugu, Malayalam).",
    tags: ["NLP", "MarianMT", "Gradio"],
    icon: Languages,
    image: "https://cdn.prod.website-files.com/645a5c190d742621796eedd1/66a7737a45940da39568048a_667ec33398826f97fe5db7fb_representation-ai-legal-chatbot.jpeg",
    github: "https://github.com/abhishekmohan01/Translator_Legal_-Chatbot_Lnaguage-Convertor_Hindi-Telugu-Malyalam-",
    live: "#"
  },
  {
    title: "Stopwatch App",
    description: "A precision time-tracking application with advanced lap recording capabilities. Features a clean, minimalist interface designed for accuracy.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    icon: Clock,
    image: "https://cdn.dribbble.com/userupload/41855300/file/original-6250c1b570c44094d75c05d6399a242c.png?resize=400x0",
    github: "https://github.com/abhishekmohan01/PRODIGY_WD_02--Stopwatch--",
    live: "#"
  },
  {
    title: "Weather Web App",
    description: "Real-time weather dashboard providing accurate forecasts, humidity levels, and wind speeds. Integrates with public APIs.",
    tags: ["API Integration", "JavaScript", "CSS3"],
    icon: Cloud,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxKA7HvO10GTQBbTTroY57QxgaI-W6kfyUw&s",
    github: "https://github.com/abhishekmohan01/PRODIGY_WD_05--Weather-Web--",
    live: "#"
  },
  {
    title: "Tic Tac Toe",
    description: "A modern take on the classic game with customizable themes, score tracking, and player modes.",
    tags: ["Game Logic", "JavaScript", "UI/UX"],
    icon: Layers,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BUUzLov-IfJnkEcWOWHUHmfWnMqH0E4Wig&s",
    github: "https://github.com/abhishekmohan01/PRODIGY_WD_02--Stopwatch--",
    live: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="group overflow-hidden border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-500 h-full flex flex-col">
                      {/* Image Area */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply" />
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-primary border border-white/10">
                          <project.icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-auto">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50 group-hover:text-primary">
                              <Github className="w-4 h-4 mr-2" /> Explore
                            </Button>
                          </a>
                          {project.live !== "#" && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button size="sm" className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-none">
                                <ExternalLink className="w-4 h-4 mr-2" /> Live
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-white/10 hover:bg-primary/20" />
              <CarouselNext className="-right-12 border-white/10 hover:bg-primary/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
