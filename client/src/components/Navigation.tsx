import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, Download, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#ai-skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates & Certifications", href: "#certificates" },
  { label: "Footprints", href: "#social-footprints" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const resumeLink = "https://drive.google.com/file/d/17mHSzav5pIT4d0WVtERfqVxHOmFkod77/view?usp=drive_link";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    // For Google Drive direct download, we need to extract the ID and use the export/download endpoint
    const fileId = "17mHSzav5pIT4d0WVtERfqVxHOmFkod77";
    const downloadUrl = `https://docs.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection("#home")}
          className="text-2xl font-bold font-display tracking-tighter cursor-pointer hover:text-primary transition-colors"
        >
          AM<span className="text-primary">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest opacity-80 hover:opacity-100"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-bold uppercase tracking-wider flex items-center gap-2"
              >
                Resume <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-primary/20">
              <DropdownMenuItem onClick={() => window.open(resumeLink, '_blank')} className="cursor-pointer gap-2 focus:bg-primary/10">
                <Eye className="w-4 h-4 text-primary" /> View My Resume
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownload} className="cursor-pointer gap-2 focus:bg-primary/10">
                <Download className="w-4 h-4 text-primary" /> Download My Resume
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a 
                  href={resumeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm"
                >
                  <Eye className="w-4 h-4" /> View Resume
                </a>
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm text-left"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
