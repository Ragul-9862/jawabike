import React from 'react'
import Navbar from '../Components/Navbar'
import SpeedOmeter from '../Components/SpeedOmeter'
import Banner from '../Components/Banner'
import View360 from '../Components/View360'
import Highlights from '../Components/Highlights'
import OurBlogs from '../Components/OurBlogs'
import Footer from '../Components/Footer'
import New from '../Components/new'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SpeedOmeter/>
        <View360/>
        {/* <New/> */}
        <Highlights/>
        <OurBlogs/>
        <Footer/>
    </div>
  )
}

