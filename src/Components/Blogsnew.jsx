import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blogsnew() {
  const bike7Ref = useRef(null);
  const bike9Ref = useRef(null);

  useEffect(() => {
    // Animation for the first image (bike-5)
    gsap.fromTo(
      '.highlights img:first-child',
      {
        scale: 0.8,
        opacity: 0,
        y: '50%', // Initial position
      },
      {
        scale: 1,
        opacity: 1,
        y: 0, // Final position
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.highlights img:first-child',
          start: 'top center',
          end: 'bottom center',
          scrub: true, // Smoothly follow the scroll
        },
      }
    );

    // Hide bike-7 and bike-9 initially
    gsap.set(bike7Ref.current, { opacity: 0 });
    gsap.set(bike9Ref.current, { opacity: 0 });

    // Scroll handler to control the appearance of bike-7 and bike-9 based on scroll position
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      // Adjust these values based on your design and preferences
      const bike7Start = 500; // Scroll position to start showing bike-7
      const bike7End = 1000; // Scroll position to fully show bike-7
      const bike9Start = 1500; // Scroll position to start showing bike-9
      const bike9End = 2000; // Scroll position to fully show bike-9

      // Control the appearance of bike-7
      if (scrollPos >= bike7Start && scrollPos <= bike7End) {
        const opacity = (scrollPos - bike7Start) / (bike7End - bike7Start);
        gsap.to(bike7Ref.current, { opacity: opacity });
      }

      // Control the appearance of bike-9
      if (scrollPos >= bike9Start && scrollPos <= bike9End) {
        const opacity = (scrollPos - bike9Start) / (bike9End - bike9Start);
        gsap.to(bike9Ref.current, { opacity: opacity });
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className='highlights container'>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <img src={require("../Components/assets/j-bike/bike-5.png")} className='img-fluid' style={{ width: "1200px" }} alt="bike-bg" />
          </div>
        </div>
      </section>

      <section className='highlights container'>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <img ref={bike7Ref} src={require("../Components/assets/j-bike/bike-7.png")} className='img-fluid' style={{ width: "800px" }} alt="bike-bg" />
          </div>
        </div>
      </section>

      <section className='highlights container'>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <img ref={bike9Ref} src={require("../Components/assets/j-bike/bike-9.png")} className='img-fluid' style={{ width: "900px" }} alt="bike-bg" />
          </div>
        </div>
      </section>
    </div>
  );
}
