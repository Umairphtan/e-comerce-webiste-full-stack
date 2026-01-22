import CategoryShowcase from '@/components/categoryfeature'
import Hero from '@/components/hero'
import MostSelling from '@/components/mostselling'
import Newsletter from '@/components/newletter'
import PromoBanner from '@/components/promobaner'
import WhyChooseUs from '@/components/whychose'
import React from 'react'

function page() {
  return (
    <div>
        <Hero></Hero>
        <CategoryShowcase></CategoryShowcase>
        <MostSelling></MostSelling>
        <PromoBanner></PromoBanner>
        <WhyChooseUs></WhyChooseUs>
        <Newsletter></Newsletter>
    </div>
  )
}

export default page