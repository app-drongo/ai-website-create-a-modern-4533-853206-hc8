import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      author: 'Isabella Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 days ago',
      property: 'Ocean Breeze Penthouse',
      verified: true,
      helpful: 47,
      title: 'Breathtaking ocean views and impeccable service',
      content:
        "Our week at the Ocean Breeze Penthouse exceeded every expectation. The panoramic Atlantic views from the private terrace were absolutely stunning, especially during sunrise. The apartment's modern amenities and beachfront location made this the perfect Miami Beach getaway. The Coastal Retreats team was incredibly attentive throughout our stay.",
      pros: ['Direct beach access', 'Luxury amenities', 'Responsive concierge'],
      stayDate: 'November 2024',
    },
    {
      id: 2,
      author: 'James Wellington',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 week ago',
      property: 'Art Deco Beachfront Suite',
      verified: true,
      helpful: 32,
      title: 'Perfect blend of vintage charm and modern luxury',
      content:
        'The Art Deco Suite captures the essence of Miami Beach perfectly. The restored 1930s architecture combined with contemporary furnishings created an unforgettable atmosphere. Walking to South Beach restaurants and nightlife was effortless. The in-unit spa services arranged by Coastal Retreats were exceptional.',
      pros: ['Historic character', 'Prime South Beach location', 'Concierge services'],
      stayDate: 'November 2024',
    },
    {
      id: 3,
      author: 'Sophia Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Sunset Terrace Apartment',
      verified: true,
      helpful: 58,
      title: 'Magical sunsets and five-star hospitality',
      content:
        "Every evening on the private terrace watching the sunset over Biscayne Bay was pure magic. The apartment's floor-to-ceiling windows and open layout created such an airy, luxurious feel. The personalized welcome amenities and local restaurant recommendations from the Coastal Retreats team made us feel like VIP guests.",
      pros: ['Spectacular sunset views', 'Spacious layout', 'Personalized touches'],
      stayDate: 'October 2024',
    },
  ];

  const stats = {
    average: 4.9,
    total: 287,
    distribution: [
      { stars: 5, count: 251 },
      { stars: 4, count: 28 },
      { stars: 3, count: 6 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Guest Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning travelers choose Coastal Retreats for their Miami Beach luxury
            stays
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-primary/20">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map(item => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3 text-foreground">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t border-muted pt-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="size-4 text-primary" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Award className="size-4 text-primary" />
                    <span>Luxury hospitality certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2 border-primary/20">
                  <Filter className="size-4" />
                  All Reviews
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                  Property
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                  Rating
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map(review => (
              <Card
                key={review.id}
                className="border-muted hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="border-2 border-primary/10">
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {review.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge
                              variant="secondary"
                              className="text-xs gap-1 bg-primary/10 text-primary border-primary/20"
                            >
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property Badge */}
                  <Badge variant="outline" className="mb-3 border-primary/20 text-primary">
                    {review.property}
                  </Badge>

                  {/* Review Content */}
                  <h5 className="font-semibold mb-2 text-foreground">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="gap-1 bg-accent/50 text-foreground"
                        >
                          <Check className="size-3 text-primary" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-primary"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-primary"
                    >
                      <MessageSquare className="size-4" />
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Guest Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
