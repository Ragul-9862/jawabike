import React from 'react'
import Navbar from '../Components/Navbar'
import Band from  '../Components/Band'
import SpeedOmeter from '../Components/SpeedOmeter'
import View360 from '../Components/View360'
import Highlights from '../Components/Highlights'
import OurBlogs from '../Components/OurBlogs'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Band/>
        <SpeedOmeter/>
        <View360/>
        <Highlights/>
        <OurBlogs/>
        <Footer/>
    </div>
  )
}

