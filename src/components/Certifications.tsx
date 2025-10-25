import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Crash Course on Python",
      provider: "Coursera - Google",
      date: "2023",
      skills: ["Python", "Data Structures", "Web Scraping",],
      verified: true,
    },
    {
      title: "Effective Leadership",
      provider: "HP - HP Life",
      date: "2024",
      skills: ["Leadership", "Teamwork", "Communication", "Adaptability"],
      verified: true,
    },
    {
      title: "Project Management Foundations: Teams",
      provider: "LinkedIn Learning",
      date: "2024",
      skills: ["Project Management", "Teamwork", "Communication", "Adaptability"],
      verified: true,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-2"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                {cert.verified && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    Verified
                  </Badge>
                )}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {cert.provider}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
          <div className="text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">
              Notable Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Team Leader</strong> for
                    multi-disciplinary engineering projects
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Student Mentor</strong>{" "}
                    guiding first-year engineering students
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">MVP Award Nominee</strong>{" "}
                    for Best School Project of the Year competition
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Active Contributor</strong>{" "}
                    to open-source projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;
