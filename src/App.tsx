import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/hero'
import Header from './component/header'
import Services from './component/services'

import InvestmentOptions from './component/investmentOptions'

import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './component/testimonials'
import CallToAction from './component/callToAction'
import FaqSection from './component/faqSection'
import Footer from './component/footer'




const AppHeader = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <InvestmentOptions />
      <Testimonials />
      <CallToAction />

      <FaqSection />
      <Footer />
     
      
    </>
  )
}

export default AppHeader
