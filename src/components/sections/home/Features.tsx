import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Waves, Car, Wifi, Coffee, Shield, Clock, Star, Phone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Beachfront Locations',
      description:
        "All 6 apartments within 2 blocks of Miami Beach's pristine white sand beaches and crystal-clear waters.",
      badge: 'Location',
    },
    {
      icon: Waves,
      title: 'Ocean View Balconies',
      description:
        'Wake up to breathtaking sunrise views over the Atlantic from your private furnished balcony.',
      badge: 'Views',
    },
    {
      icon: Car,
      title: 'Complimentary Valet Parking',
      description:
        'Secure covered parking included with every stay - no need to worry about street parking.',
      badge: 'Convenience',
    },
    {
      icon: Wifi,
      title: 'High-Speed Fiber Internet',
      description:
        'Gigabit WiFi throughout all properties, perfect for remote work or streaming entertainment.',
      badge: 'Connectivity',
    },
    {
      icon: Coffee,
      title: 'Gourmet Kitchen Amenities',
      description:
        'Fully equipped kitchens with premium appliances, espresso machines, and local welcome treats.',
      badge: 'Amenities',
    },
    {
      icon: Shield,
      title: 'Enhanced Safety Protocols',
      description:
        'Professional deep cleaning between stays, contactless check-in, and 24/7 security monitoring.',
      badge: 'Safety',
    },
    {
      icon: Clock,
      title: 'Flexible Check-In Times',
      description:
        'Early check-in and late check-out available based on availability - we work around your schedule.',
      badge: 'Flexibility',
    },
    {
      icon: Star,
      title: 'Concierge Services',
      description:
        'Personal recommendations for dining, activities, and exclusive beach club access arrangements.',
      badge: 'Service',
    },
    {
      icon: Phone,
      title: 'Local Host Support',
      description:
        'Direct contact with Miami Beach locals who know the area intimately and respond within minutes.',
      badge: 'Support',
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
            Experience the perfect blend of boutique hospitality and beachfront luxury in our
            carefully curated collection of Miami Beach apartments.
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
