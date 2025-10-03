import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Clock, TrendingUp, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDRWMTBoLTR6TTMyIDE0aDRWMTBoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Predictions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Amazon Delivery Time{" "}
              <span className="text-gradient">Prediction</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Predict accurate delivery times using machine learning. 
              Optimize logistics with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prediction">
                <Button size="lg" variant="hero" className="group">
                  Try Prediction
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/insights">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powered by Advanced Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Package,
                title: "Agent Details",
                description: "Age, rating, and performance metrics"
              },
              {
                icon: MapPin,
                title: "Location Data",
                description: "Store & drop coordinates with distance"
              },
              {
                icon: Clock,
                title: "Time Factors",
                description: "Order time, pickup delays, and scheduling"
              },
              {
                icon: TrendingUp,
                title: "Environmental",
                description: "Weather, traffic, vehicle, and area type"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to predict delivery times?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our XGBoost-powered model analyzes multiple factors to provide accurate delivery time predictions.
          </p>
          <Link to="/prediction">
            <Button size="lg" variant="hero">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
