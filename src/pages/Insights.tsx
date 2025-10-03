import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, Clock, Package, MapPin } from "lucide-react";

const Insights = () => {
  // Mock data for charts
  const trafficData = [
    { name: "Low", avgTime: 22, count: 45 },
    { name: "Medium", avgTime: 35, count: 120 },
    { name: "High", avgTime: 52, count: 85 },
  ];

  const weatherData = [
    { name: "Sunny", avgTime: 28, count: 150 },
    { name: "Cloudy", avgTime: 32, count: 80 },
    { name: "Rainy", avgTime: 45, count: 50 },
    { name: "Foggy", avgTime: 48, count: 20 },
  ];

  const categoryData = [
    { name: "Food", value: 45, color: "hsl(var(--primary))" },
    { name: "Grocery", value: 30, color: "hsl(var(--accent))" },
    { name: "Electronics", value: 25, color: "hsl(var(--secondary))" },
  ];

  const hourlyData = [
    { hour: "8am", time: 25 },
    { hour: "10am", time: 30 },
    { hour: "12pm", time: 42 },
    { hour: "2pm", time: 38 },
    { hour: "4pm", time: 35 },
    { hour: "6pm", time: 45 },
    { hour: "8pm", time: 40 },
  ];

  const stats = [
    { label: "Avg Delivery Time", value: "32.5 min", icon: Clock, color: "text-primary" },
    { label: "Total Deliveries", value: "1,250", icon: Package, color: "text-accent" },
    { label: "Avg Distance", value: "5.8 km", icon: MapPin, color: "text-primary" },
    { label: "Success Rate", value: "96.5%", icon: TrendingUp, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delivery <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Analytics and trends from delivery predictions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl gradient-primary flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Traffic Impact */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Traffic Impact on Delivery Time</CardTitle>
              <CardDescription>Average delivery time by traffic level</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="avgTime" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Weather Impact */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Weather Impact on Delivery Time</CardTitle>
              <CardDescription>Average delivery time by weather condition</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="avgTime" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Orders by Category</CardTitle>
              <CardDescription>Distribution of delivery categories</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Hourly Trends */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Delivery Time by Hour</CardTitle>
              <CardDescription>Average delivery times throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="time" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Insights;
