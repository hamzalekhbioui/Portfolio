import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import cv from "@/assets/cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Hamza Lekhbioui
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-primary-foreground/90">
                Software Engineer | AI Enthusiast | Web Developer
              </h2>
            </div>

            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Building smart, scalable software with clean code and creative design.
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* View Projects Button - Gradient with shine effect */}
              <a 
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:bg-[length:100%_100%] hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
                style={{
                  animation: 'gradient-shift 3s ease infinite',
                }}
              >
                {/* Shine effect overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                
                <span className="relative z-10 text-base">View My Projects</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Download CV Button - Glass morphism style */}
              <a 
                href={cv} 
                download
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-xl"
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
                
                <Download className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="relative z-10 text-base">Download CV</span>
              </a>
            </div>

            {/* Modern Social Media Buttons */}
            <div className="flex gap-4 pt-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/hamzalekhbioui"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {/* Animated background circle on hover */}
                <span className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></span>
                <Github className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/hamza-lekhbioui/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {/* Animated background circle on hover */}
                <span className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></span>
                <Linkedin className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>

              {/* Email Button */}
              <a
                href="mailto:hamza.lekhbioui@gmail.com"
                className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {/* Animated background circle on hover */}
                <span className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></span>
                <Mail className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Hamza Lekhbioui"
                className="relative w-80 h-80 rounded-full object-cover border-8 border-card/20 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations for buttons */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
