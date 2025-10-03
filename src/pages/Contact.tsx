import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "yourname@example.com",
      href: "mailto:yourname@example.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Repository",
      href: "https://github.com",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Feel free to reach out for collaboration or inquiries
          </p>
        </div>

        <Card className="shadow-card border-border/50 overflow-hidden">
          <CardContent className="p-8">
            <div className="space-y-6">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-elegant group bg-card"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-semibold text-lg">{link.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-center text-muted-foreground">
                Built with React, TypeScript, and XGBoost ML model
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="shadow-card border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                This Amazon Delivery Time Prediction app uses machine learning to predict accurate delivery times 
                based on multiple factors including agent details, location data, weather conditions, traffic levels, 
                and time-related variables. The prediction model is powered by XGBoost, a gradient boosting framework 
                known for its speed and performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
