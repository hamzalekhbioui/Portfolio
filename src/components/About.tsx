import { Code2, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
      backTitle: "My Approach",
      backContent: "I believe in writing code that's not just functional, but elegant and easy to maintain for future developers.",
      frontColor: "#6A2C70",
      backColor: "#F08A5D",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative and adaptable approach",
      backTitle: "Team Player",
      backContent: "Experienced in leading teams and mentoring students, I value open communication and shared success.",
      frontColor: "#2C3E50",
      backColor: "#3498DB",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about AI and technology",
      backTitle: "Tech Enthusiast",
      backContent: "From AI assistants to state machines, I love exploring cutting-edge technologies and their real-world applications.",
      frontColor: "#16A085",
      backColor: "#F39C12",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Creative solutions to complex challenges",
      backTitle: "Solution Oriented",
      backContent: "Every challenge is an opportunity to learn. I combine analytical thinking with creativity to deliver results.",
      frontColor: "#8E44AD",
      backColor: "#E74C3C",
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

          {/* 3D Flip Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flip-card w-full h-[240px]"
                  style={{
                    perspective: '1000px',
                  }}
                >
                  {/* Card Inner Container */}
                  <div className="flip-card-inner w-full h-full relative">
                    
                    {/* Front Side */}
                    <div 
                      className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-xl border-[10px] backface-hidden"
                      style={{
                        backgroundColor: item.frontColor,
                        borderColor: item.frontColor,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                      }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>

                    {/* Back Side */}
                    <div 
                      className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-xl border-[10px] backface-hidden"
                      style={{
                        backgroundColor: item.backColor,
                        borderColor: item.backColor,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <h3 className="font-heading font-bold text-2xl mb-3 text-white">
                        {item.backTitle}
                      </h3>
                      <p className="text-sm text-white leading-relaxed">
                        {item.backContent}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS for 3D Flip Card Animation */}
      <style>{`
        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default About;
