import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"} animate-fade-in`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
          >
            HL
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium hover:text-accent transition-colors rounded-full px-3 py-2"
              >
                {link.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="mt-6 space-y-2">
                    {navLinks.map((link) => (
                      <Button
                        key={link.id}
                        variant="ghost"
                        className="w-full justify-start text-base hover:text-accent"
                        onClick={() => {
                          setMenuOpen(false);
                          scrollToSection(link.id);
                        }}
                      >
                        {link.label}
                      </Button>
                    ))}
                    <Button
                      variant="default"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                      onClick={() => {
                        setMenuOpen(false);
                        scrollToSection("contact");
                      }}
                    >
                      Let's Talk
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
