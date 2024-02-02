import React from 'react'

export default function Highlights() {
  return (
    <div>
      <section className='highlights container'>
        <h2>Key <span>Highlights</span></h2>
        <div className='highlights-main'>
          <img src={require("../Components/assets/Key-highlights/Key-highlights.png")} className='img-fluid'/>
        </div>
      </section>
    </div>
  )
}
