import React from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import ProductCategories from '../components/ProductCategories'
import HowItWorks from '../components/HowItWorks'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import Testimonials from '../components/testimonials'
import CallToAction from '../components/CallToAction'

const Home = () => {
  return (
    <div>
        <Hero />
        <WhyUs />
        <ProductCategories />
        <HowItWorks />
        <BeforeAfterSlider />
        <Testimonials />
        <CallToAction />
    </div>
  )
}

export default Home