// VerticalCarousel.jsx

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import img1 from '../Components/assets/j-bike/bike-5.png';
import img2 from '../Components/assets/Navbar/Adventure-banner.png';
import img3 from '../Components/assets/Navbar/Roadster-banner.png';


const slides = [
  {
    id: 1,
    img: img1,
    text: 'SCRAMBLER',
  },
  {
    id: 2,
    img: img2,
    text: 'ADVENTURE',
  },
  {
    id: 3,
    img: img3,
    text: 'ROADSTER',
  },
];

const VerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      updateProgress();
      animateText();
      animateText2();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      updateProgress();
      animateText();
      animateText2();
    }
  };

  const updateProgress = () => {
    const calc = ((currentSlide + 1) / slides.length) * 100;
    setProgress(calc);
  };

  const getColorBasedOnProgress = () => {
    const progressPercentage = (currentSlide + 1) / slides.length;

    if (progressPercentage <= 1 / 3) {
      return 'grey';
    } else if (progressPercentage <= 2 / 3) {
      return 'grey';
    } else {
      return 'grey';
    }
  };

  const progressBarStyle = {
    width: '33.33%', // Set a fixed width (you can adjust as needed)
    backgroundColor: getColorBasedOnProgress(),
    border: '1px solid grey',
    paddingRight: '5px',
    transition: 'background-color 0.2s ease-in-out', // Added transition for color change
  };

  const generateProgressBarDivs = () => {
    const progressBarDivs = [];
    for (let i = 0; i < slides.length; i++) {
      progressBarDivs.push(<div key={i} style={progressBarStyle}></div>);
    }
    return progressBarDivs;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      updateProgress();
      animateText();
    },
  };

  const animateText = () => {
    const scramblerLeft = document.getElementById("scramblerLeft");
    scramblerLeft.classList.remove("slide-in-left");
    void scramblerLeft.offsetWidth; // Trigger reflow to restart the animation
    scramblerLeft.classList.add("slide-in-left");
  };
  const animateText2 = () => {
    const scramblerLeft = document.getElementById("scramblerRight");
    scramblerLeft.classList.remove("slide-in-right");
    void scramblerLeft.offsetWidth; // Trigger reflow to restart the animation
    scramblerLeft.classList.add("slide-in-right");
  };

  return (
    <div>
    <section className='container' style={{ position: "absolute", left: "15%", bottom: "80%", zIndex: 4 }} >
      <div className='row'>
        <div className="vertical-carousel-container d-flex align-items-center justify-content-center">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                <img className='' src={slide.img} alt={`Slide ${slide.id}`} style={{ width: "1250px" }} />
              </div>
            ))}
          </Slider>
          <h2 id="scramblerLeft" className='text mb-2 scrambler-1 scramble-animation slide-in-left' style={{ color: 'black', position: 'absolute', top: '30%', left: "1%", zIndex: '-1' }}>
            {slides[currentSlide].text}
          </h2>
        </div>
        <div className="carousel-controls d-flex justify-content-center align-items-center mb-5" style={{position:"relative" ,top:"-60px"}}>
          <FiArrowLeft className='icon-left mr-3' onClick={goToPrevSlide} />
          <div className="progress mr-3" style={{ width: '33.33%', overflow: 'hidden' }}>
            {generateProgressBarDivs()}
          </div>
          <FiArrowRight className='icon-right' onClick={goToNextSlide} />
        </div>
      </div>
      <div className="row" style={{ position: "absolute", left: "1%", top: "30%" }}>
        <div className="col text-center">
          <h2 id="scramblerRight" className='text mb-2 scrambler-1 scramble-animation slide-in-right text mb-5 scrambler-2'>
            {slides[currentSlide].text}
          </h2>
        </div>
      </div>
    </section>
  </div>
  );
};

export default VerticalCarousel;
