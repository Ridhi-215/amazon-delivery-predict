import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, User, MapPin, Package, Calendar, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Prediction = () => {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    agentAge: 30,
    agentRating: 4.5,
    storeLat: 28.70,
    storeLong: 77.10,
    dropLat: 28.54,
    dropLong: 77.39,
    distance: 5.0,
    weather: "Sunny",
    traffic: "Medium",
    vehicle: "Bike",
    area: "Urban",
    category: "Food",
    orderYear: 2023,
    orderMonth: 5,
    orderDay: 15,
    orderDayOfWeek: 2,
    orderHour: 14,
    orderMinute: 30,
    pickupHour: 15,
    pickupMinute: 0,
    pickupDelay: 10,
  });

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock prediction (in real app, this would be an API call to your model)
    const mockPrediction = 25 + Math.random() * 30;
    setPrediction(mockPrediction);
    setLoading(false);
    
    toast.success("Prediction completed!", {
      description: `Estimated delivery time: ${mockPrediction.toFixed(1)} minutes`
    });
  };

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delivery Time <span className="text-gradient">Prediction</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill in the details below to get an accurate delivery time estimate
          </p>
        </div>

        <form onSubmit={handlePredict} className="space-y-6">
          {/* Agent Details */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Agent Details
              </CardTitle>
              <CardDescription>Information about the delivery agent</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="agentAge">Agent Age</Label>
                <Input
                  id="agentAge"
                  type="number"
                  value={formData.agentAge}
                  onChange={(e) => setFormData({...formData, agentAge: Number(e.target.value)})}
                  min={18}
                  max={70}
                />
              </div>
              <div>
                <Label htmlFor="agentRating">Agent Rating</Label>
                <Input
                  id="agentRating"
                  type="number"
                  step="0.1"
                  value={formData.agentRating}
                  onChange={(e) => setFormData({...formData, agentRating: Number(e.target.value)})}
                  min={0}
                  max={5}
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location Details
              </CardTitle>
              <CardDescription>Store and delivery location coordinates</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="storeLat">Store Latitude</Label>
                <Input
                  id="storeLat"
                  type="number"
                  step="0.01"
                  value={formData.storeLat}
                  onChange={(e) => setFormData({...formData, storeLat: Number(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="storeLong">Store Longitude</Label>
                <Input
                  id="storeLong"
                  type="number"
                  step="0.01"
                  value={formData.storeLong}
                  onChange={(e) => setFormData({...formData, storeLong: Number(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="dropLat">Drop Latitude</Label>
                <Input
                  id="dropLat"
                  type="number"
                  step="0.01"
                  value={formData.dropLat}
                  onChange={(e) => setFormData({...formData, dropLat: Number(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="dropLong">Drop Longitude</Label>
                <Input
                  id="dropLong"
                  type="number"
                  step="0.01"
                  value={formData.dropLong}
                  onChange={(e) => setFormData({...formData, dropLong: Number(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="distance">Distance (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  step="0.1"
                  value={formData.distance}
                  onChange={(e) => setFormData({...formData, distance: Number(e.target.value)})}
                  min={0}
                />
              </div>
            </CardContent>
          </Card>

          {/* Order Details */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Order Details
              </CardTitle>
              <CardDescription>Environmental and order-specific information</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="weather">Weather</Label>
                <Select value={formData.weather} onValueChange={(value) => setFormData({...formData, weather: value})}>
                  <SelectTrigger id="weather">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sunny">Sunny</SelectItem>
                    <SelectItem value="Rainy">Rainy</SelectItem>
                    <SelectItem value="Cloudy">Cloudy</SelectItem>
                    <SelectItem value="Foggy">Foggy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="traffic">Traffic</Label>
                <Select value={formData.traffic} onValueChange={(value) => setFormData({...formData, traffic: value})}>
                  <SelectTrigger id="traffic">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicle">Vehicle</Label>
                <Select value={formData.vehicle} onValueChange={(value) => setFormData({...formData, vehicle: value})}>
                  <SelectTrigger id="vehicle">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bike">Bike</SelectItem>
                    <SelectItem value="Car">Car</SelectItem>
                    <SelectItem value="Scooter">Scooter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="area">Area</Label>
                <Select value={formData.area} onValueChange={(value) => setFormData({...formData, area: value})}>
                  <SelectTrigger id="area">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Urban">Urban</SelectItem>
                    <SelectItem value="Semi-Urban">Semi-Urban</SelectItem>
                    <SelectItem value="Rural">Rural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger id="category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Grocery">Grocery</SelectItem>
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Time Details */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Time Details
              </CardTitle>
              <CardDescription>Order and pickup timing information</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="orderHour">Order Hour</Label>
                <Input
                  id="orderHour"
                  type="number"
                  value={formData.orderHour}
                  onChange={(e) => setFormData({...formData, orderHour: Number(e.target.value)})}
                  min={0}
                  max={23}
                />
              </div>
              <div>
                <Label htmlFor="orderMinute">Order Minute</Label>
                <Input
                  id="orderMinute"
                  type="number"
                  value={formData.orderMinute}
                  onChange={(e) => setFormData({...formData, orderMinute: Number(e.target.value)})}
                  min={0}
                  max={59}
                />
              </div>
              <div>
                <Label htmlFor="pickupHour">Pickup Hour</Label>
                <Input
                  id="pickupHour"
                  type="number"
                  value={formData.pickupHour}
                  onChange={(e) => setFormData({...formData, pickupHour: Number(e.target.value)})}
                  min={0}
                  max={23}
                />
              </div>
              <div>
                <Label htmlFor="pickupMinute">Pickup Minute</Label>
                <Input
                  id="pickupMinute"
                  type="number"
                  value={formData.pickupMinute}
                  onChange={(e) => setFormData({...formData, pickupMinute: Number(e.target.value)})}
                  min={0}
                  max={59}
                />
              </div>
              <div>
                <Label htmlFor="pickupDelay">Pickup Delay (min)</Label>
                <Input
                  id="pickupDelay"
                  type="number"
                  value={formData.pickupDelay}
                  onChange={(e) => setFormData({...formData, pickupDelay: Number(e.target.value)})}
                  min={0}
                />
              </div>
            </CardContent>
          </Card>

          {/* Predict Button */}
          <div className="flex justify-center pt-4">
            <Button type="submit" size="lg" variant="hero" disabled={loading} className="w-full md:w-auto px-12">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Predicting...
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4" />
                  Predict Delivery Time
                </>
              )}
            </Button>
          </div>

          {/* Result */}
          {prediction !== null && (
            <Card className="shadow-glow border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Predicted Delivery Time</h3>
                  <p className="text-5xl font-bold text-gradient mb-2">
                    {prediction.toFixed(1)} <span className="text-2xl">minutes</span>
                  </p>
                  <p className="text-muted-foreground">Based on current conditions and route analysis</p>
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  );
};

export default Prediction;
