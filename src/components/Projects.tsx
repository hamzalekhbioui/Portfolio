import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Drive Application",
      description:
        "A full-featured file storage platform similar to Google Drive with upload functionality, file management, and real-time statistics dashboard.",
      technologies: ["Python", "Django", "SQLite"],
      github: "https://github.com/hamzalekhbioui",
    },
    {
      title: "AI Voice Assistant",
      description:
        "Voice-activated intelligent assistant using natural language processing to perform tasks, answer queries, and control connected equipment.",
      technologies: ["Python", "Speech Recognition", "AI"],
      github: "https://github.com/hamzalekhbioui",
    },
    {
      title: "School ChatBot",
      description:
        "Interactive chatbot designed to answer questions from parents and students about school programs, schedules, and policies. Team collaboration project.",
      technologies: ["Python", "REST API"],
    },
    {
      title: "Dockerized Web Application",
      description:
        "Complete web application deployment pipeline using Docker containers for seamless development, testing, and production environments.",
      technologies: ["Docker", "Docker Compose", "NGINX"],
    },
    {
      title: "Finite State Machine (FSM) Code Generator",
      description:
        "Python-based tool that analyzes XML files generated from YED to automatically produce equivalent C code and simulate finite state machine behavior with real-time visualization of transitions and variable states.",
      technologies: ["Python", "YED", "C", "XML Parsing", "GUI"],
      github: "https://github.com/hamzalekhbioui",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, AI, and systems programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2 flex flex-col"
            >
              <h3 className="font-heading font-bold text-xl mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-accent text-accent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-accent hover:bg-accent/90"
                  asChild
                >
                  
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
