import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Waves, MapPin, Wifi, Car, Coffee, Wind, Utensils, Shield, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Direct Beach Access',
      description:
        'Step from your private balcony onto pristine white sand beaches with crystal-clear waters.',
      badge: 'Beachfront',
    },
    {
      icon: MapPin,
      title: 'Prime Miami Beach Location',
      description:
        'Walking distance to South Beach nightlife, Art Deco District, and world-class dining.',
      badge: 'Location',
    },
    {
      icon: Wifi,
      title: 'High-Speed Fiber Internet',
      description:
        'Blazing-fast 1GB fiber connection perfect for remote work and streaming entertainment.',
      badge: 'Connectivity',
    },
    {
      icon: Car,
      title: 'Complimentary Valet Parking',
      description: 'Secure underground parking with 24/7 valet service included with every stay.',
      badge: 'Parking',
    },
    {
      icon: Coffee,
      title: 'Gourmet Kitchen Essentials',
      description:
        'Fully equipped with premium appliances, espresso machine, and welcome provisions.',
      badge: 'Kitchen',
    },
    {
      icon: Wind,
      title: 'Ocean View Terraces',
      description:
        'Private furnished balconies with panoramic Atlantic Ocean and Miami skyline views.',
      badge: 'Views',
    },
    {
      icon: Utensils,
      title: 'Personal Concierge Service',
      description:
        'Dedicated concierge for restaurant reservations, activities, and local recommendations.',
      badge: 'Service',
    },
    {
      icon: Shield,
      title: '24/7 Property Management',
      description:
        'Round-the-clock support and maintenance team ensuring your comfort and security.',
      badge: 'Support',
    },
    {
      icon: Sparkles,
      title: 'Luxury Amenities Package',
      description:
        'Premium linens, spa-quality toiletries, and curated welcome gifts for every guest.',
      badge: 'Luxury',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Premium Amenities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Meets Comfort in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Paradise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every Coastal Retreats apartment features carefully curated amenities and services
            designed to exceed the expectations of discerning travelers.
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
          <p className="text-muted-foreground mb-4">
            Experience the ultimate Miami Beach getaway with personalized luxury
          </p>
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
