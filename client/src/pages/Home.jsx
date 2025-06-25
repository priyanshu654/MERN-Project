import React from 'react'
import Header from '../components/Header'
import Steps from '../components/steps'
import BgSlider from '../components/BgSlider'
import { Testimonials } from '../components/Testimonials'



export default function Home() {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      
    </div>
  )
}
