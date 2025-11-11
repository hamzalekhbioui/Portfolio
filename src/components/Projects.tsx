import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  // State to track if container is being hovered (for blur effect)
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Cloud Drive Application",
      description:
        "A full-featured file storage platform similar to Google Drive with upload functionality, file management, and real-time statistics dashboard.",
      subtitle: "File Storage & Management",
      technologies: ["Python", "Django", "SQLite"],
      github: "https://github.com/hamzalekhbioui",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI Voice Assistant",
      description:
        "Voice-activated intelligent assistant using natural language processing to perform tasks, answer queries, and control connected equipment.",
      subtitle: "Natural Language Processing",
      technologies: ["Python", "Speech Recognition", "AI"],
      github: "https://github.com/hamzalekhbioui",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "School ChatBot",
      description:
        "Interactive chatbot designed to answer questions from parents and students about school programs, schedules, and policies. Team collaboration project.",
      subtitle: "Educational Technology",
      technologies: ["Python", "REST API"],
      github: "https://github.com/hamzalekhbioui",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dockerized Web Application",
      description:
        "Complete web application deployment pipeline using Docker containers for seamless development, testing, and production environments.",
      subtitle: "DevOps & Containerization",
      technologies: ["Docker", "Docker Compose", "NGINX"],
      github: "https://github.com/hamzalekhbioui",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Finite State Machine (FSM) Code Generator",
      description:
        "Python-based tool that analyzes XML files generated from YED to automatically produce equivalent C code and simulate finite state machine behavior with real-time visualization of transitions and variable states.",
      subtitle: "Code Generation & Simulation",
      technologies: ["Python", "YED", "C", "XML Parsing", "GUI"],
      github: "https://github.com/hamzalekhbioui",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Web API Interaction Tool for Scientific Articles",
      description:
        "Python script that utilizes the Crossref REST API to retrieve detailed metadata about scientific articles based on user input (title, author name, or DOI). The tool handles multiple search results and extracts key bibliographic information such as title, volume, URL, DOI, article number, pages, journal, publisher, author list, publication year, and BibTeX key.",
      subtitle: "Research & Data Extraction",
      technologies: ["Python", "Crossref", "REST API", "JSON Parsing", "CLI"],
      github: "https://github.com/hamzalekhbioui",
      image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, AI, and systems programming
          </p>
        </div>

        {/* Interactive Focus Cards Container */}
        <div 
          className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto transition-all duration-300"
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => {
            setIsContainerHovered(false);
            setHoveredIndex(null);
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative w-full sm:w-[340px] md:w-[360px] lg:w-[380px] h-[280px] rounded-xl overflow-hidden cursor-pointer transition-all duration-400 ease-out"
              style={{
                /* Apply blur and dim effect when another card is hovered */
                filter: isContainerHovered && hoveredIndex !== index 
                  ? 'blur(3px) brightness(0.5)' 
                  : 'blur(0) brightness(1)',
                transform: isContainerHovered && hoveredIndex !== index 
                  ? 'scale(0.95)' 
                  : hoveredIndex === index 
                  ? 'scale(1.08) translateY(-8px)' 
                  : 'scale(1)',
                zIndex: hoveredIndex === index ? 10 : 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transition-all duration-400"
                  style={{
                    filter: hoveredIndex === index ? 'brightness(0.85)' : 'brightness(0.65)',
                  }}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
                {/* Project Title */}
                <h3 
                  className="font-heading font-bold text-2xl md:text-3xl mb-2 text-white transition-all duration-300 tracking-wide"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    letterSpacing: hoveredIndex === index ? '2px' : '0.5px',
                  }}
                >
                  {project.title}
                </h3>

                {/* Project Subtitle - Appears on Hover */}
                <p 
                  className="text-gray-300 text-sm md:text-base mb-3 transition-all duration-400"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Technology Badges - Appear on Hover */}
                <div 
                  className="flex flex-wrap gap-2 justify-center mb-4 transition-all duration-400"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button - Appears on Hover */}
                <div 
                  className="transition-all duration-400"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(15px)',
                  }}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white text-base font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Shadow Effect */}
              <div 
                className="absolute inset-0 rounded-xl transition-all duration-400 pointer-events-none"
                style={{
                  boxShadow: hoveredIndex === index 
                    ? '0 20px 60px rgba(0, 0, 0, 0.6)' 
                    : '0 0 0 rgba(0, 0, 0, 0)',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Optional: View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/hamzalekhbioui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
