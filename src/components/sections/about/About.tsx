import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Curated Excellence',
      description:
        'Every property in our collection is personally selected and maintained to exceed luxury hospitality standards.',
    },
    {
      icon: Lightbulb,
      title: 'Local Expertise',
      description:
        'Our Miami Beach natives provide insider knowledge and personalized recommendations for an authentic coastal experience.',
    },
    {
      icon: Heart,
      title: 'Guest-Centric Service',
      description:
        'From pre-arrival planning to departure, we ensure every moment of your stay is seamless and memorable.',
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description:
        "We partner with local businesses and implement eco-friendly practices to preserve Miami Beach's natural beauty.",
    },
  ];

  const stats = [
    { value: '2018', label: 'Established', icon: Award },
    { value: '2,500+', label: 'Happy Guests', icon: Users },
    { value: '4.9/5', label: 'Guest Rating', icon: TrendingUp },
    { value: '6', label: 'Premium Properties', icon: Globe },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Founder & CEO',
      image: 'IM',
      bio: 'Former luxury hotel manager with 12 years in Miami Beach hospitality.',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Property Director',
      image: 'CR',
      bio: 'Real estate expert specializing in beachfront luxury properties and renovations.',
    },
    {
      name: 'Sofia Chen',
      role: 'Guest Experience Manager',
      image: 'SC',
      bio: 'Hospitality professional ensuring every guest receives personalized five-star service.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Operations Manager',
      image: 'MT',
      bio: 'Miami native coordinating maintenance, housekeeping, and local partnerships.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Redefining Luxury
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Coastal Living
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a boutique vacation rental company dedicated to providing discerning travelers
            with unparalleled beachfront experiences in Miami Beach's most coveted locations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by hospitality veteran Isabella Martinez, Coastal Retreats was born
                from a vision to offer travelers something beyond typical vacation rentals.
              </p>
              <p>
                After managing luxury hotels in Miami Beach for over a decade, Isabella recognized
                the need for intimate, personalized accommodations that combine the privacy of a
                rental with the service excellence of a five-star resort.
              </p>
              <p>
                Today, our carefully curated collection of six premium beachfront apartments
                represents the pinnacle of Miami Beach luxury living, hosting over 500 guests
                annually.
              </p>
            </div>
            <Button className="group">
              Explore Our Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves to experience Miami Beach like a local VIP, not just a
                      tourist."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that elevate every stay from ordinary vacation rental to extraordinary
              retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              The passionate hospitality professionals dedicated to making your Miami Beach
              experience unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View Guest Testimonials
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Coastal Retreats transformed our Miami vacation into something magical. The
                oceanfront apartment was stunning, and Isabella's team anticipated our every need.
                We'll never book anywhere else."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Williams</div>
                  <div className="text-sm text-muted-foreground">Returning Guest from New York</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
