import { Card } from "@/components/ui/card";
import { Code2, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative and adaptable approach",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about AI and technology",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Creative solutions to complex challenges",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing a Master's degree in Software Engineering at{" "}
              <span className="text-primary font-semibold">JUNIA ISEN</span> in France. 
              My journey in technology has been driven by a deep passion for innovation, 
              artificial intelligence, and creating impactful solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments where creativity meets technical excellence. 
              My approach combines strong analytical thinking with a curiosity for emerging technologies, 
              allowing me to adapt quickly and deliver high-quality results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I find balance through football, reading, and drawing, activities 
              that fuel my creativity and problem-solving mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 border-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
