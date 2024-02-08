// Banner.js
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';

import Bannerslider1 from './assets/Navbar/scrambler-banner.png';
import Bannerslider2 from './assets/Navbar/scrambler-banner.png';
import Bannerslider3 from './assets/Navbar/scrambler-banner.png';

const Banner = () => {
  const items = [
    { id: 1, image: Bannerslider1, text: 'Scrambler' },
    { id: 2, image: Bannerslider2, text: 'Scrambler' },
    { id: 3, image: Bannerslider3, text: 'Scrambler' },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    items.forEach((item, index) => {
      timeline.fromTo(
        `.scrambler-mask-${index}`,
        { x: '-100%', opacity: 0, scale: 0.5 },
        {
          x: '0%',
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'power2.inOut',
          transformOrigin: 'top left',
        },
        `image-${index}`
      );
      timeline.to(
        `.scrambler-mask-${index}`,
        {
          x: '100%',
          opacity: 0,
          scale: 0.5,
          rotation:0,
          duration: 1,
          delay: 1,
          ease: 'power2.inOut',
          transformOrigin: 'bottom right',
        },
        `image-${index}+=2`
      );
    });

    return () => timeline.clear();
  }, [items]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,  // Update to false for horizontal scrolling
    verticalSwiping: false,  // Update to false for horizontal scrolling
    autoplay: true,
    autoplaySpeed: 3000,
    ref: carouselRef,
  };

  return (
    <section className='container-fluid' style={{ width: '50%', margin: 'auto', zIndex: 2, position: 'absolute', top: '20%', left: '25%', height: '100%' }}>
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className={`carousel-slide slide-${index}`} style={{ position: 'relative' }}>
          <img src={item.image} className='img-fluid' alt={`Banner ${item.id}`} style={{ width: '100%' }} />
          <div className={`scrambler-mask scrambler-mask-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', position: 'absolute' }}>
            {item.text}
          </div>
        </div>
      ))}
    </Slider>
  </section>
  );
};

export default Banner;
