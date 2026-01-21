import CategoryShowcase from '@/components/categoryfeature'
import Hero from '@/components/hero'
import MostSelling from '@/components/mostselling'
import WhyChooseUs from '@/components/whychose'
import React from 'react'

function page() {
  return (
    <div>
        <Hero></Hero>
        <CategoryShowcase></CategoryShowcase>
        <MostSelling></MostSelling>
        <WhyChooseUs></WhyChooseUs>
    </div>
  )
}

export default page