import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const plans = [
    {
      name: 'Ocean View',
      description: 'Stunning views with modern amenities for couples',
      price: '$285',
      period: '/night',
      badge: null,
      features: [
        '1 bedroom, 1 bathroom',
        'Private balcony with ocean views',
        'Full kitchen & dining area',
        'High-speed WiFi',
        'Beach towels & chairs included',
        '24/7 concierge support',
        'Complimentary parking',
      ],
      cta: 'Book Now',
      popular: false,
    },
    {
      name: 'Beachfront Suite',
      description: 'Premium beachfront location with luxury finishes',
      price: '$425',
      period: '/night',
      badge: 'Most Booked',
      features: [
        '2 bedrooms, 2 bathrooms',
        'Direct beach access',
        'Gourmet kitchen with premium appliances',
        'Private terrace with outdoor dining',
        'Premium linens & toiletries',
        'Daily housekeeping available',
        'Beach equipment & umbrellas',
        'Priority restaurant reservations',
      ],
      cta: 'Reserve Suite',
      popular: true,
    },
    {
      name: 'Penthouse Retreat',
      description: 'Ultimate luxury with panoramic Miami Beach views',
      price: '$750',
      period: '/night',
      badge: 'Luxury Experience',
      features: [
        '3 bedrooms, 3 bathrooms',
        'Panoramic ocean & city views',
        'Private rooftop terrace',
        'Wine cellar & premium bar setup',
        'Personal concierge service',
        'Private chef available',
        'Luxury car service included',
        'Exclusive beach cabana access',
      ],
      cta: 'Book Penthouse',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Miami Beach Rentals
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Beachfront
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Accommodations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Experience Miami Beach in style with our curated collection of premium vacation rentals.
            Each property offers unparalleled comfort and breathtaking ocean views.
          </p>

          {/* Stay Duration Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Nightly Rate
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Weekly Stay
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Beachfront Suite' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free cancellation up to 48 hours • Instant confirmation
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Planning an extended stay?</h3>
          <p className="text-muted-foreground mb-6">
            Enjoy significant savings on monthly rentals and seasonal packages. Our team will
            customize the perfect Miami Beach experience for your extended vacation.
          </p>
          <Button variant="outline" size="lg">
            Explore Monthly Rates
          </Button>
        </div>
      </div>
    </section>
  );
}
