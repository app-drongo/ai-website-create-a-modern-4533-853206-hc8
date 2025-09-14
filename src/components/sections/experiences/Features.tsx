import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Waves, MapPin, Wifi, Car, Coffee, Utensils, Dumbbell, Shield, Phone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Oceanfront Paradise',
      description:
        'Wake up to breathtaking Atlantic Ocean views from your private balcony with direct beach access.',
      badge: 'Location',
    },
    {
      icon: MapPin,
      title: 'Prime Miami Beach',
      description:
        "Steps from South Beach's vibrant nightlife, world-class dining, and Art Deco architecture.",
      badge: 'Neighborhood',
    },
    {
      icon: Wifi,
      title: 'High-Speed Connectivity',
      description:
        'Complimentary fiber-optic WiFi perfect for remote work or sharing vacation memories.',
      badge: 'Amenities',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description:
        'Secure covered parking with complimentary valet service for ultimate convenience.',
      badge: 'Convenience',
    },
    {
      icon: Coffee,
      title: 'Gourmet Kitchen',
      description:
        "Fully equipped chef's kitchen with premium appliances and ocean-view dining areas.",
      badge: 'Dining',
    },
    {
      icon: Utensils,
      title: 'Private Chef Service',
      description:
        'Optional in-apartment dining experiences with our curated network of local chefs.',
      badge: 'Luxury',
    },
    {
      icon: Dumbbell,
      title: 'Resort-Style Fitness',
      description:
        'State-of-the-art fitness center and rooftop infinity pool overlooking the coastline.',
      badge: 'Wellness',
    },
    {
      icon: Shield,
      title: 'Concierge Support',
      description:
        'Dedicated local concierge for restaurant reservations, activities, and personalized recommendations.',
      badge: 'Service',
    },
    {
      icon: Phone,
      title: '24/7 Guest Care',
      description:
        'Round-the-clock support team ensuring your Miami Beach experience exceeds expectations.',
      badge: 'Support',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Premium Experiences
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Redefined on
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami's Golden Coast
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every detail curated for discerning travelers seeking the perfect blend of beachfront
            luxury and authentic Miami Beach culture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to experience Miami Beach luxury?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
