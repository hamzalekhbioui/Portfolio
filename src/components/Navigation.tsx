import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, Code2, Briefcase, Award, Mail, Layers } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation links with icons for the expandable menu
  const navLinks = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Skills", id: "skills", icon: Layers },
    { label: "Projects", id: "projects", icon: Code2 },
    { label: "Experience", id: "experience", icon: Briefcase },
    { label: "Certifications", id: "certifications", icon: Award },
    { label: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation - Expandable Menu */}
      <nav
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block animate-fade-in`}
      >
        <div 
          className="flex items-center gap-1 p-2 bg-card/95 backdrop-blur-md rounded-2xl shadow-lg border border-border/50"
          style={{
            boxShadow: '0 10px 25px 0 rgba(0, 0, 0, 0.075)',
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative inline-flex justify-center items-center w-[70px] h-[50px] rounded-lg overflow-hidden transition-all duration-200 ease-in hover:w-[140px] focus:w-[140px] focus:outline-none"
              >
                {/* Background hover effect */}
                <span className="absolute inset-0 bg-accent/10 rounded-lg transform translate-x-full transition-transform duration-200 ease-in group-hover:translate-x-0 group-focus:translate-x-0"></span>
                
                {/* Icon */}
                <span className="absolute left-[21px] flex-shrink-0 z-10">
                  <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </span>
                
                {/* Title - appears on hover */}
                <span className="block text-center w-full text-sm font-medium text-foreground transform translate-x-full opacity-0 transition-all duration-200 ease-in group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100" style={{ textIndent: '28px' }}>
                  {link.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Sheet Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 bg-card/95 backdrop-blur-md shadow-md animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
            >
              HL
            </button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="mt-6 space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.id}
                        variant="ghost"
                        className="w-full justify-start text-base hover:text-accent hover:bg-accent/10"
                        onClick={() => {
                          setMenuOpen(false);
                          scrollToSection(link.id);
                        }}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {link.label}
                      </Button>
                    );
                  })}
                  <Button
                    variant="default"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4"
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToSection("contact");
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Let's Talk
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
