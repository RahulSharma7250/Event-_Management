import React from 'react'
import Header from './Header';
import Hero from './Hero'
import About from './About'
import Services from './Services'
import FeaturedEvents from './FeaturedEvents'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import BlogNews from './BlogNews'
import CallToAction from './CallToAction'
import Footer from './Footer'

const home = () => {
  return <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <FeaturedEvents/>
      <Gallery/>
      <Testimonials/>
      <BlogNews/>
      <CallToAction/>
      <Footer/>
      
    </div>
  
}

export default home;