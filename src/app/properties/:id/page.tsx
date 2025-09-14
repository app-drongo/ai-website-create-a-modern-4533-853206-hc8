import Hero from '@/components/sections/property-details/Hero'
import Features from '@/components/sections/property-details/Features'
import Gallery from '@/components/sections/property-details/Gallery'
import Pricing from '@/components/sections/property-details/Pricing'
import Reviews from '@/components/sections/property-details/Reviews'
import Cta from '@/components/sections/property-details/Cta'

export default function PropertyDetailsPage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <Reviews />
      <Cta />
    </>
  )
}