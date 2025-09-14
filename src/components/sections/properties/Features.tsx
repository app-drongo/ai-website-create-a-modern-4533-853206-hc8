import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Waves, MapPin, Wifi, Car, Coffee, Shield, Sparkles, Phone, Key } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Oceanfront Access',
      description:
        'Direct beach access with private walkways to pristine Miami Beach sands and crystal-clear waters.',
      badge: 'Location',
    },
    {
      icon: MapPin,
      title: 'Prime South Beach',
      description:
        'Walking distance to Art Deco District, world-class dining, and vibrant nightlife scene.',
      badge: 'Neighborhood',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description:
        'Complimentary fiber-optic WiFi perfect for remote work and streaming entertainment.',
      badge: 'Connectivity',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description:
        'Secure covered parking with complimentary valet service for ultimate convenience.',
      badge: 'Parking',
    },
    {
      icon: Coffee,
      title: 'Gourmet Kitchens',
      description:
        'Fully equipped with premium appliances, marble countertops, and ocean view dining areas.',
      badge: 'Amenities',
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock concierge and security services ensuring your peace of mind.',
      badge: 'Safety',
    },
    {
      icon: Sparkles,
      title: 'Daily Housekeeping',
      description:
        'Professional cleaning service with luxury linens and premium toiletries replenished daily.',
      badge: 'Service',
    },
    {
      icon: Phone,
      title: 'Personal Concierge',
      description:
        'Dedicated local expert for restaurant reservations, activities, and personalized recommendations.',
      badge: 'Support',
    },
    {
      icon: Key,
      title: 'Seamless Check-in',
      description:
        'Contactless arrival with smart locks and welcome packages waiting in your apartment.',
      badge: 'Experience',
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
            Luxury Redefined on
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience unparalleled comfort and sophistication in our carefully curated beachfront
            apartments, where every detail is designed for your perfect getaway.
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
