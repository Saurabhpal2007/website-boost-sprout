
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="home"
      className="relative h-[75vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundPosition: `50% ${offset * 0.5}px`
      }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950"></div>
      
      {/* Parallax dots pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px] opacity-30"
        style={{
          transform: `translateY(${offset * 0.2}px)`
        }}
      ></div>
      
      <div className={cn(
        "relative z-10 text-center transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        {/* Logo with glow effect - 2x bigger */}
        <div className="relative mb-12 mx-auto w-72 h-72">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/60 to-orange-500/60 rounded-full blur-xl animate-pulse-glow"></div>
          <div className="relative flex items-center justify-center h-full">
            <div className="bg-white dark:bg-black/30 rounded-full p-8 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-xl">
              <div className="w-48 h-48 flex items-center justify-center">
                <span className="text-9xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  HP
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hindi slogan with English subtitle - with added line spacing */}
        <h1 className="space-y-6">
          <span className="block text-5xl font-bold mb-4">भारत की धड़कन</span>
          <span className="block text-xl text-muted-foreground mt-4 leading-relaxed">
            The Pulse of Bharat - Truth in Every Story
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
