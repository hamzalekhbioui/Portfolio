import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "text-blue-500",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      color: "text-green-500",
      skills: ["Django", "React","Spring Boot","Node.js"],
    },
    {
      icon: Database,
      title: "Databases & Tools",
      color: "text-purple-500",
      skills: ["MySQL", "SQLite", "Git", "Docker", "VS Code", "Linux", "PostgreSQL"],
    },
    {
      icon: Brain,
      title: "Soft Skills",
      color: "text-orange-500",
      skills: ["Communication", "Teamwork", "Creativity", "Problem Solving", "Adaptability"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit combining technical proficiency with essential soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-accent/10 text-accent-foreground hover:bg-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
