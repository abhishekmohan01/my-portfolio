import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold font-display tracking-tighter">
          AM<span className="text-primary">.</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>by Abhishek Mohan</span>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
