import React from 'react'

export default function Banner() {
  return (
    <div >
      <a href=''>  <img src={require("../Components/assets/Navbar/robot.png")} className='robot'/>  </a>
  <div>
      <a href="#" className="side-button">
        <span className="icon"><img src={require("../Components/assets/sidebar-icon/whatsapp.png")} alt /></span>
        <span className="text">Whatsapp</span>
      </a>
    </div>
    <div>
      <a href="#" className="side-button-2">
        <span className="icon"><img src={require("../Components/assets/sidebar-icon/call.png")} alt /></span>
        <span className="text">Phone</span>
      </a>
    </div>
    </div>
  
  )
}
