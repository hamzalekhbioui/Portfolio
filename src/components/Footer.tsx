import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/hamzalekhbioui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-lekhbioui/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hamza.lekhbioui@gmail.com"
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm flex items-center gap-2">
              © {currentYear} Hamza Lekhbioui. Built with
              MOLSH777yyyy.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-2">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
