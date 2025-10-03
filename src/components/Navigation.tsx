import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, BarChart3, Mail, Package } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/prediction", label: "Prediction", icon: Sparkles },
    { path: "/insights", label: "Insights", icon: BarChart3 },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="hidden sm:inline">Amazon Delivery</span>
          </Link>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                    ${isActive 
                      ? "bg-primary text-primary-foreground shadow-elegant" 
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
