import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Bed,
  Bath,
  Square,
  MapPin,
  Waves,
  Wifi,
  Car,
  Coffee,
} from 'lucide-react';

export default function Gallery() {
  const galleries = [
    {
      id: 1,
      title: 'Ocean Breeze Penthouse',
      location: 'South Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded47ee3b5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 2, sqft: 2100 },
      price: '$485/night',
      amenities: ['Ocean View', 'Private Balcony', 'Pool Access'],
    },
    {
      id: 2,
      title: 'Sunset Vista Suite',
      location: 'Mid-Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1650 },
      price: '$325/night',
      amenities: ['Beach Access', 'Gym', 'Concierge'],
    },
    {
      id: 3,
      title: 'Coastal Haven Apartment',
      location: 'Collins Avenue, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 1, sqft: 1200 },
      price: '$275/night',
      amenities: ['Kitchen', 'WiFi', 'Parking'],
    },
    {
      id: 4,
      title: 'Beachfront Paradise',
      location: 'Ocean Drive, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 850 },
      price: '$225/night',
      amenities: ['Direct Beach', 'Terrace', 'Modern'],
    },
    {
      id: 5,
      title: 'Luxury Bay View Loft',
      location: 'Biscayne Bay, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1800 },
      price: '$395/night',
      amenities: ['Bay Views', 'Spa Access', 'Valet'],
    },
    {
      id: 6,
      title: 'Art Deco Retreat',
      location: 'Lincoln Road, Miami Beach',
      mainImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 950 },
      price: '$245/night',
      amenities: ['Historic', 'Shopping', 'Dining'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Waves className="size-6 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Miami Beach Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Luxury Beachfront Apartments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive portfolio of premium vacation rentals, each offering unparalleled
            ocean access and personalized concierge service
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/20"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/95 backdrop-blur-sm hover:bg-background"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/95 backdrop-blur-sm hover:bg-background"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Bed className="size-4" />
                    <span>{property.specs.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-4" />
                    <span>{property.specs.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="size-4" />
                    <span>{property.specs.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {property.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1">
                  {property.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${property.title} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Explore All Miami Beach Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
