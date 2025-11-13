import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Download } from "lucide-react";
import { useState } from "react";



const Certifications = () => {
  // State for hover tracking (for blur effect similar to Projects)
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const certifications = [
    {
      title: "Google Crash Course on Python",
      provider: "Coursera - Google",
      date: "2023",
      skills: ["Python", "Data Structures", "Web Scraping",],
      verified: true,
      certificateFile: "/assets/python.pdf", 
    },
    {
      title: "Effective Leadership",
      provider: "HP - HP Life",
      date: "2024",
      skills: ["Leadership", "Teamwork", "Communication", "Adaptability"],
      verified: true,
      certificateFile: "/assets/effective_leadership.pdf", 
    },
    {
      title: "Project Management Foundations: Teams",
      provider: "LinkedIn Learning",
      date: "2024",
      skills: ["Project Management", "Teamwork", "Communication", "Adaptability"],
      verified: true,
      certificateFile: "/assets/project_mang.pdf", 
    },
    {
      title: "Gemini Certified Educator",
      provider: "Google",
      date: "2025",
      skills: ["Artificial Intelligence", "Google AI Tools", "EdTech & Assessment"],
      verified: true,
      certificateFile: "/assets/eminicertifiededucator.pdf", 
    },
    {
      title: "Agile Explorer Certification",
      provider: "IBM",
      date: "2025",
      skills: ["Agile management", "Agile leadership", "Kanban principles", "Iterative design", "User stories", "Collaboration"],
      verified: true,
      certificateFile: "/assets/agile.pdf", 
    },
    {
      title: "Math Foundation for ML",
      provider: "365 Data Science",
      date: "2025",
      skills: ["Math Foundation", "Machine Learning", "Specialized Knowledge"],
      verified: true,
      certificateFile: "/assets/math.pdf", 
    },
    {
      title: "Web Scraping and API Fundamentals in Python",
      provider: "365 Data Science",
      date: "2025",
      skills: ["Web Scraping", "API Fundamentals", "Python", "Information Technology"],
      verified: true,
      certificateFile: "/assets/web.pdf", 
    },
    {
      title: "Git and GitHub",
      provider: "365 Data Science",
      date: "2025",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "Information Technology"],
      verified: true,
      certificateFile: "/assets/git.pdf", 
    },
    {
      title: "Advanced SQL for Data Engineering",
      provider: "365 Data Science",
      date: "2025",
      skills: ["Advanced SQL", "Data Engineering", "Troubleshooting", "Information Technology"],
      verified: true,
      certificateFile: "/assets/sql.pdf", 
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {/* Animated Certificate Cards Container */}
        <div 
          className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto mb-12 transition-all duration-300"
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => {
            setIsContainerHovered(false);
            setHoveredIndex(null);
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative w-full sm:w-[320px] md:w-[340px] transition-all duration-400 ease-out"
              
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Animated Gradient Border Card */}
              <div className="relative w-full h-[380px] flex items-center justify-center overflow-hidden rounded-2xl">
                {/* Rotating Gradient Border */}
                <div 
                  className="absolute w-[100px] h-[130%] bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 animate-spin-slow"
                  style={{
                    animationDuration: '3s',
                  }}
                ></div>
                
                {/* Inner Card Content */}
                <div className="absolute inset-[5px] bg-[#07182E] dark:bg-[#07182E] rounded-[15px] p-6 flex flex-col z-10">
                  {/* Header with Icon and Verified Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    {cert.verified && (
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-400 border-green-500/30"
                      >
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-heading font-bold text-xl mb-2 text-white leading-tight">
                    {cert.title}
                  </h3>

                  {/* Provider and Date */}
                  <p className="text-sm text-gray-300 mb-1 font-medium">
                    {cert.provider}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">{cert.date}</p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mb-auto">
                    {cert.skills.slice(0, 4).map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs bg-white/5 text-gray-300 border-white/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 4 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-white/5 text-gray-300 border-white/20"
                      >
                        +{cert.skills.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* View Certificate Button */}
                  {cert.certificateFile && (
                    <a
                      href={cert.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notable Achievements Section - Enhanced */}
        <div className="relative max-w-3xl mx-auto">
          {/* Subtle animated border for achievements card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 animate-pulse"></div>
            <div className="absolute inset-[2px] bg-background rounded-2xl"></div>
            
            <div className="relative p-8 z-10">
              <div className="text-center">
                <h3 className="font-heading font-bold text-2xl mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Notable Achievements
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1 text-lg">•</span>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Team Leader</strong> for
                        multi-disciplinary engineering projects
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1 text-lg">•</span>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Student Mentor</strong>{" "}
                        guiding first-year engineering students
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1 text-lg">•</span>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">MVP Award Nominee</strong>{" "}
                        for Best School Project of the Year competition
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1 text-lg">•</span>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Active Contributor</strong>{" "}
                        to open-source projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for rotating gradient */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
