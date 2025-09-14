import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Heart, Star, Filter, ChevronDown, Users, Wifi, Car } from 'lucide-react';

export default function Productgrid() {
  const properties = [
    {
      id: 1,
      name: 'Ocean Breeze Penthouse',
      pricePerNight: 485,
      originalPrice: 620,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 47,
      badge: 'Early Bird',
      location: 'Collins Avenue Beachfront',
      guests: 6,
      amenities: ['Ocean View', 'Private Balcony', 'Premium Kitchen'],
    },
    {
      id: 2,
      name: 'Sunset Villa Suite',
      pricePerNight: 325,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 62,
      badge: 'Most Booked',
      location: 'South Beach District',
      guests: 4,
      amenities: ['Beach Access', 'Pool View', 'Modern Furnishing'],
    },
    {
      id: 3,
      name: 'Azure Beachfront Loft',
      pricePerNight: 395,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 38,
      location: 'Mid-Beach Oceanfront',
      guests: 5,
      amenities: ['Direct Beach', 'Floor-to-Ceiling Windows', 'Chef Kitchen'],
    },
    {
      id: 4,
      name: 'Coral Reef Apartment',
      pricePerNight: 275,
      originalPrice: 340,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 29,
      badge: 'Weekend Special',
      location: 'Lincoln Road Area',
      guests: 3,
      amenities: ['City Views', 'Rooftop Access', 'Designer Interior'],
    },
    {
      id: 5,
      name: 'Tropical Paradise Studio',
      pricePerNight: 225,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 51,
      location: 'Art Deco District',
      guests: 2,
      amenities: ['Historic Building', 'Boutique Style', 'Walk to Beach'],
    },
    {
      id: 6,
      name: 'Emerald Coast Residence',
      pricePerNight: 445,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 73,
      badge: 'Luxury Choice',
      location: "Millionaire's Row",
      guests: 8,
      amenities: ['Private Beach', 'Concierge Service', 'Spa Bathroom'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Miami Beach Luxury Rentals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Handpicked beachfront apartments offering unparalleled ocean views and premium amenities
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Availability
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Location
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Guests
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>All 6 properties available</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Rating
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-muted">
                {property.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={
                      property.badge.includes('Special') || property.badge.includes('Early')
                        ? 'secondary'
                        : 'default'
                    }
                  >
                    {property.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart className="size-4" />
                </Button>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                  <MapPin className="size-3" />
                  {property.location}
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{property.name}</h3>

                {/* Rating & Guests */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < Math.floor(property.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({property.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="size-3" />
                    {property.guests}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {property.amenities.slice(0, 2).map((amenity, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 2 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{property.amenities.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    ${property.pricePerNight}
                  </span>
                  <span className="text-sm text-muted-foreground">/night</span>
                  {property.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${property.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  <span className="mr-2 transition-transform group-hover/btn:scale-110">🏖️</span>
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View Availability Calendar
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Need help choosing? Our concierge team is available 24/7 to assist with your perfect
            Miami Beach getaway
          </p>
        </div>
      </div>
    </section>
  );
}
