import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
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

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-primary hover:bg-card/90 font-semibold"
                asChild
              >
                <a href="#projects">View My Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
                asChild
              >
                <a href={cv} download>
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/hamzalekhbioui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/10 hover:bg-card/20 transition-all hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-lekhbioui/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/10 hover:bg-card/20 transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:hamza.lekhbioui@gmail.com"
                className="p-2 rounded-full bg-card/10 hover:bg-card/20 transition-all hover:scale-110"
              >
                <Mail className="w-6 h-6" />
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
    </section>
  );
};

export default Hero;
