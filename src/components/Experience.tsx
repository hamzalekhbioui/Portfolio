import { Card } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Engineering Intern",
      organization: "SynTeck company",
      period: "Summer 2025",
      description:
        "Designed and developed a Python-based code generation system converting YED/XML state machine diagrams into executable C code, with a visual simulator for real-time debugging and analysis.",
      achievements: [
        "Analyzed client requirements to architect a scalable FSM-to-C code generation workflow",
        "Implemented graphical simulation to visualize and debug state transitions and variable values",
        "Enhanced development efficiency by 60% through automation of code generation and testing processes",
      ],
    },
    {
      icon: Users,
      title: "Freelance Software Developer",
      organization: "Self-Employed",
      period: "2025",
      description:
        "Designed and developed a desktop application using JavaFX and SQLite to provide efficient data management and an intuitive user experience.",
      achievements: [
        "Built a user-friendly interface with optimized database structure for enhanced performance",
        "Implemented full CRUD functionality with advanced data filtering and export features",
        "Conducted unit testing to ensure reliability, maintainability, and scalability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-l-4 border-l-accent hover:shadow-lg transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <exp.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-heading font-bold text-xl text-primary">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
