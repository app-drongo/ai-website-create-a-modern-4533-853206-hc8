import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Home,
  Coffee,
  ShoppingBag,
  Train,
  Utensils,
  Trees,
} from 'lucide-react';

export default function Map() {
  const properties = [
    {
      id: 1,
      name: 'Azure Penthouse',
      price: '$1,850/night',
      type: 'Penthouse',
      lat: 25.7617,
      lng: -80.1918,
    },
    {
      id: 2,
      name: 'Oceanfront Sanctuary',
      price: '$1,450/night',
      type: 'Beachfront',
      lat: 25.7717,
      lng: -80.1818,
    },
    {
      id: 3,
      name: 'Coral Gables Suite',
      price: '$1,200/night',
      type: 'Luxury Suite',
      lat: 25.7517,
      lng: -80.2018,
    },
  ];

  const amenities = [
    { icon: Coffee, name: 'Beach Cafés', count: 8 },
    { icon: Utensils, name: 'Fine Dining', count: 15 },
    { icon: ShoppingBag, name: 'Boutiques', count: 12 },
    { icon: Train, name: 'Metro Access', count: 2 },
    { icon: Trees, name: 'Beach Parks', count: 4 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prime Miami Beach Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive beachfront properties and world-class amenities in South Beach's
            most coveted neighborhoods
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=750&fit=crop"
                    alt="Miami Beach aerial view"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Property Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-3 whitespace-nowrap shadow-xl">
                          <p className="text-sm font-semibold text-foreground">Azure Penthouse</p>
                          <p className="text-sm text-primary font-medium">$1,850/night</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            Ocean View
                          </Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-3 whitespace-nowrap shadow-xl">
                          <p className="text-sm font-semibold text-foreground">
                            Oceanfront Sanctuary
                          </p>
                          <p className="text-sm text-primary font-medium">$1,450/night</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            Beachfront
                          </Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-3 whitespace-nowrap shadow-xl">
                          <p className="text-sm font-semibold text-foreground">
                            Coral Gables Suite
                          </p>
                          <p className="text-sm text-primary font-medium">$1,200/night</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            Luxury
                          </Badge>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="shadow-lg backdrop-blur-sm bg-background/80"
                  >
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-primary rounded-full" />
                      <span className="text-foreground">Available Now</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-muted-foreground rounded-full" />
                      <span className="text-muted-foreground">Reserved</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property List */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                  <MapPin className="size-6 text-primary" />
                  Featured Properties
                </h3>
                <div className="space-y-4">
                  {properties.map(property => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/10 cursor-pointer transition-all duration-200 hover:shadow-md"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{property.name}</p>
                        <p className="text-sm text-muted-foreground">{property.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{property.price}</p>
                        <Badge variant="secondary" className="text-xs">
                          Available
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Amenities */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-6">Miami Beach Lifestyle</h3>
                <div className="space-y-4">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-12 rounded-lg bg-accent/20 flex items-center justify-center">
                          <amenity.icon className="size-6 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{amenity.name}</span>
                      </div>
                      <Badge variant="outline" className="font-semibold">
                        {amenity.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button className="w-full" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
