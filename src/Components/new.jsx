import React, { useState, useEffect } from 'react';
               



// <------------------Scrambler----------------------------------------->
import BikeBoldBlack from '../Components/assets/View360/Scrambler/Scrambler.png';
import BikeMidnightBlue from '../Components/assets/View360/Scrambler/Scrambler-2.png';
import BikeFireOrange from '../Components/assets/View360/Scrambler/Scrambler-3.png';
import BikeMeanGreen from '../Components/assets/View360/Scrambler/Scrambler-4.png';
import BikeOutlawOlive from '../Components/assets/View360/Scrambler/Scrambler-5.png';
import BikeRebelRed from '../Components/assets/View360/Scrambler/Scrambler-6.png';
import BikeYellingYellow from '../Components/assets/View360/Scrambler/Scrambler-7.png';

// <------------------Roadster----------------------------------------->

import BikeShodowGrey from '../Components/assets/View360/Roadster/Roadster.png'
import BikeInfernoRed from '../Components/assets/View360/Roadster/Roadster-2.png'
import BikeGlacialWhite from '../Components/assets/View360/Roadster/Roadster-3.png'
import BikeSmokeGrey from '../Components/assets/View360/Roadster/Roadster-4.png'
import BikeHunterGrey from '../Components/assets/View360/Roadster/Roadster-5.png'
import BikeSteelBlue from '../Components/assets/View360/Roadster/Roadster-6.png'

// <------------- Adventure------------------------------------->

import BikeWithoutWhite from '../Components/assets/View360/Adventure/Adventure.png'
import BikeSlickSilver from '../Components/assets/View360/Adventure/Adventure-2.png'
import BikeMambaBlack from '../Components/assets/View360/Adventure/Adventure-3.png'

export default function New() {
    

    
  const [selectedEvent, setSelectedEvent] = useState('event1');
  const [selectedColor, setSelectedColor] = useState('BoldBlack');

  const [selectedEvent2, setSelectedEvent2] = useState('event2');
  const [selectedColor2, setSelectedColor2] = useState('MidnightBlue');

  const [selectedEvent3, setSelectedEvent3] = useState('event3');
  const [selectedColor3, setSelectedColor3] = useState('FireOrange');

  const [eventDetails, setEventDetails] = useState({
    event1: { title: 'Scrambler', price: 'On Road Price ₹ 2,08,829' },
    event2: { title: 'Roadster', price: 'On Road Price ₹ 2,08,829' },
    event3: { title: 'Adventure',price: 'On Road Price ₹ 2,08,829'  },
  });
  const renderDetails = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent === event ? 'active' : ''}`} onClick={() => handleEventClick(event, 'BoldBlack')}>
        <h3>{title}</h3>
        {selectedEvent === event ? <p>{price}</p> : ""}
      </div>
    );
  };
  
  const renderDetails2 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent2 === event ? 'active' : ''}`} onClick={() => handleEventClick2(event, 'MidnightBlue')}>
        <h3>{title}</h3>
        {selectedEvent2 === event ? <p>{price}</p> : ""}
      </div>
    );
  };
  
  const renderDetails3 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent3 === event ? 'active' : ''}`} onClick={() => handleEventClick3(event, 'FireOrange')}>
        <h3>{title}</h3>
        {selectedEvent3 === event ? <p>{price}</p> : ""}
      </div>
    );
  };
  

  useEffect(() => {
    
    setSelectedEvent('event1');
    setSelectedEvent2('');
    setSelectedEvent3('');
  }, []);

  const handleEventClick = (event, color) => {
    setSelectedEvent(event);
    setSelectedColor(color);
    setSelectedEvent2('');
    setSelectedEvent3('');
  };

  const handleEventClick2 = (event, color) => {
    setSelectedEvent2(event);
    setSelectedColor2(color);
    setSelectedEvent('');
    setSelectedEvent3('');
  };

  const handleEventClick3 = (event, color) => {
    setSelectedEvent3(event);
    setSelectedColor3(color);
    setSelectedEvent('');
    setSelectedEvent2('');
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleColorClick2 = (color2) => {
    setSelectedColor2(color2);
  };

  const handleColorClick3 = (color3) => {
    setSelectedColor3(color3);
  };

  const getColorImageSource = (color) => {
    switch (color) {
      case 'BoldBlack':
        return BikeBoldBlack;
      case 'MidnightBlue':
        return BikeMidnightBlue;
      case 'FireOrange':
        return BikeFireOrange;
      case 'MeanGreen':
        return BikeMeanGreen;
      case 'OutlawOlive':
        return BikeOutlawOlive;
      case 'RebelRed':
        return BikeRebelRed;
      case 'YellingYellow':
        return BikeYellingYellow;
      default:
        return BikeBoldBlack;
    }
  };

  const getColorImageSource2 = (color2) => {
    switch (color2) {
      case 'ShodowGrey':
        return BikeShodowGrey;
      case 'InfernoRed':
        return BikeInfernoRed;
      case 'GlacialWhite':
        return BikeGlacialWhite;
      case 'SmokeGrey':
        return BikeSmokeGrey;
      case 'HunterGrey':
        return BikeHunterGrey;
      case 'SteelBlue':
        return BikeSteelBlue;
      default:
        return BikeShodowGrey;
    }
  };

  const getColorImageSource3 = (color3) => {
    switch (color3) {
      case 'WithoutWhite':
        return BikeWithoutWhite;
      case 'SlickSilver':
        return BikeSlickSilver;
      case 'MambaBlack':
        return BikeMambaBlack;
      default:
        return BikeWithoutWhite;
    }
  };

  return (
    <div>
      <section className='view-360'>
        <div className='container-fluid view-360-container'>
          <div className='row view-360-main'>
            <div className='col-lg-1 timeline-main'>
              <div className="timeline">
                <div className={`event-1 ${selectedEvent === 'event1' ? 'active' : ''}`} onClick={() => handleEventClick('event1', 'BoldBlack')}>
                  <div className="event-content1">
                  {renderDetails('event1', 'Scrambler', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-2 ${selectedEvent2 === 'event2' ? 'active' : ''}`} onClick={() => handleEventClick2('event2', 'MidnightBlue')}>
                  <div className="event-content2">
                  {renderDetails2('event2', 'Roadster', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-3 ${selectedEvent3 === 'event3' ? 'active' : ''}`} onClick={() => handleEventClick3('event3', 'FireOrange')}>
                  <div className="event-content2">
                  {renderDetails3('event3', 'Adventure', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent === 'event1' ? '' : 'd-none'}`}>
              <img src={getColorImageSource(selectedColor)} className='img-fluid' alt={`Bike ${selectedColor}`} />
            </div>
            <div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>
              <img src={getColorImageSource2(selectedColor2)} className='img-fluid' alt={`Bike ${selectedColor2}`} />
            </div>
            <div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent3 === 'event3' ? '' : 'd-none'}`}>
              <img src={getColorImageSource3(selectedColor3)} className='img-fluid' alt={`Bike ${selectedColor3}`} />
            </div>

            <div className={`col-lg-2 color-palette ${selectedEvent === 'event1' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'BoldBlack' ? 'active' : ''}`}
                onClick={() => handleColorClick('BoldBlack')}
              >
                <div className="color-box palette-1-scrambler active"></div>
                <p>Single Tone <span>Bold Black</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'MidnightBlue' ? 'active' : ''}`}
                onClick={() => handleColorClick('MidnightBlue')}
              >
                <div className="color-box palette-2-scrambler"></div>
                <p>Dual Tone <span>Midnight Blue</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'FireOrange' ? 'active' : ''}`}
                onClick={() => handleColorClick('FireOrange')}
              >
                <div className="color-box palette-3-scrambler"></div>
                <p>Single Tone <span>Fire Orange</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'MeanGreen' ? 'active' : ''}`}
                onClick={() => handleColorClick('MeanGreen')}
              >
                <div className="color-box palette-4-scrambler"></div>
                <p>Dual Tone <span>Mean Green</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'OutlawOlive' ? 'active' : ''}`}
                onClick={() => handleColorClick('OutlawOlive')}
              >
                <div className="color-box palette-5-scrambler"></div>
                <p>Single Tone <span>Outlaw Olive</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'RebelRed' ? 'active' : ''}`}
                onClick={() => handleColorClick('RebelRed')}
              >
                <div className="color-box palette-6-scrambler"></div>
                <p>Dual Tone <span>Rebel Red</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'YellingYellow' ? 'active' : ''}`}
                onClick={() => handleColorClick('YellingYellow')}
              >
                <div className="color-box palette-7-scrambler"></div>
                <p>Single Tone <span>Yelling Yellow</span></p>
              </div>
         
            </div>

            {/* <--------------------- Roadster -------------------------------> */}
<div className={`col-lg-2 color-palette ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'ShodowGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('ShodowGrey')}
              >
                <div className="color-box palette-1-Roadster active"></div>
                <p>Dark <span>Shodow Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'InfernoRed' ? 'active' : ''}`}
                onClick={() => handleColorClick2('InfernoRed')}
              >
                <div className="color-box palette-2-Roadster"></div>
                <p>Dark <span>Inferno Red</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'GlacialWhite' ? 'active' : ''}`}
                onClick={() => handleColorClick2('GlacialWhite')}
              >
                <div className="color-box palette-3-Roadster"></div>
                <p>Dark <span>Glacial White</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SmokeGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SmokeGrey')}
              >
                <div className="color-box palette-4-Roadster"></div>
                <p>Dark <span>Smoke Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'HunterGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('HunterGrey')}
              >
                <div className="color-box palette-5-Roadster"></div>
                <p>Dark <span>Hunter Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SteelBlue' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SteelBlue')}
              >
                <div className="color-box palette-6-Roadster"></div>
                <p>Dark <span>Steel Blue</span></p> 
              </div>
            </div>

            {/* <div className={`col-lg-4 color-palette ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'ShodowGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('ShodowGrey')}
              >
                <div className="color-box palette-1-Roadster active"></div>
                <p>Dark <span>Shodow Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'InfernoRed' ? 'active' : ''}`}
                onClick={() => handleColorClick2('InfernoRed')}
              >
                <div className="color-box palette-2-Roadster"></div>
                <p>Dark <span>Inferno Red</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'GlacialWhite' ? 'active' : ''}`}
                onClick={() => handleColorClick2('GlacialWhite')}
              >
                <div className="color-box palette-3-Roadster"></div>
                <p>Dark <span>Glacial White</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SmokeGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SmokeGrey')}
              >
                <div className="color-box palette-4-Roadster"></div>
                <p>Dark <span>Smoke Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'HunterGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('HunterGrey')}
              >
                <div className="color-box palette-5-Roadster"></div>
                <p>Dark <span>Hunter Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SteelBlue' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SteelBlue')}
              >
                <div className="color-box palette-6-Roadster"></div>
                <p>Dark <span>Steel Blue</span></p> 
              </div>
            </div> */}
           
            {/* <--------------------- Adventure -------------------------------> */}


            <div className={`col-lg-2 color-palette ${selectedEvent3 === 'event3' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-3 ${selectedColor3 === 'WithoutWhite' ? 'active' : ''}`}
                onClick={() => handleColorClick3('WithoutWhite')}
              >
                <div className="color-box palette-1-Adventure active"></div>
                <p>Gloss Tone <span>Without White</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor3 === 'SlickSilver' ? 'active' : ''}`}
                onClick={() => handleColorClick3('SlickSilver')}
              >
                <div className="color-box palette-2-Adventure"></div>
                <p>Matte <span>Slick Silver</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor3 === 'MambaBlack' ? 'active' : ''}`}
                onClick={() => handleColorClick3('MambaBlack')}
              >
                <div className="color-box palette-3-Adventure"></div>
                <p>Matte <span>Mamba Black</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
