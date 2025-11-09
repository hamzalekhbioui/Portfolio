import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Send, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    // Netlify Forms handles the submission automatically
    // Show success message to user
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hamza.lekhbioui@gmail.com",
      link: "mailto:hamza.lekhbioui@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "hamzalekhbioui",
      link: "https://github.com/hamzalekhbioui",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "hamzalekhbioui",
      link: "https://www.linkedin.com/in/hamza-lekhbioui/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "France",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <MessageSquare className="w-12 h-12 text-accent mx-auto mb-2" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <Card className="p-8 shadow-2xl border-2 hover:shadow-accent/10 transition-all duration-300">
            <div className="mb-6">
              <h3 className="font-heading font-bold text-2xl mb-2">
                Send me a message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field for spam protection */}
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 border-2 focus:border-accent transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-2 focus:border-accent transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] border-2 focus:border-accent transition-colors resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold h-12 text-base"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Right Side - Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/20">
              <h3 className="font-heading font-bold text-2xl mb-3">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </Card>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-semibold text-primary hover:text-accent transition-colors text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
