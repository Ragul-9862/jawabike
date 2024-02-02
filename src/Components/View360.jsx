import React , {useState} from 'react';
import  BikeBoldBlack from '../Components/assets/View360/Scrambler.png'
import  BikeMidnightBlue from '../Components/assets/View360/Scrambler-2.png'
import   BikeFireOrange from '../Components/assets/View360/Scrambler-3.png'
import  BikeMeanGreen from '../Components/assets/View360/Scrambler-4.png'
import  BikeOutlawOlive from '../Components/assets/View360/Scrambler-5.png'
import  BikeRebelRed from '../Components/assets/View360/Scrambler-6.png'
import  BikeYellingYellow from '../Components/assets/View360/Scrambler-7.png'

export default function View360() {

  const [selectedColor, setSelectedColor] = useState('BoldBlack');

  const handleColorClick = (color) => {
    setSelectedColor(color);
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



  return (
    <div>
      <section className='view-360'>
        <div className='container view-360-container'>
          <div className='row view-360-main'>
            <div className='col-lg-4 timeline-main'>
              <div className="timeline">
                <div className="event-1">
                  <div className="event-content">
                    <h3>Scrambler</h3>
                    <p>On Road Price ₹ 2,08,829</p>
                  </div>
                </div>
                <div className="event-2">
                  <div className="event-content">
                    <h3>Roadster</h3>
                    <p>Description for Event 2.</p>
                  </div>
                </div>
                <div className="event-3">
                  <div className="event-content">
                    <h3>Adventure</h3>
                    <p>Description for Event 2.</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className='col-lg-4 d-flex justify-content-center align-items-center'>
        <img src={getColorImageSource(selectedColor)} className='img-fluid' alt={`Bike ${selectedColor}`} />
      </div>

      <div className='col-lg-4 color-palette'>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'BoldBlack' ? 'active' : ''}`}
          onClick={() => handleColorClick('BoldBlack')}
        >
          <div className="color-box palette-1 active"></div>
          <p>Single Tone <span>Bold Black</span></p>
        </div>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'MidnightBlue' ? 'active' : ''}`}
          onClick={() => handleColorClick('MidnightBlue')}
        >
          <div className="color-box palette-2"></div>
          <p>Dual Tone <span>Midnight Blue</span></p>
        </div>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'FireOrange' ? 'active' : ''}`}
          onClick={() => handleColorClick('FireOrange')}
        >
          <div className="color-box palette-3"></div>
          <p>Single Tone <span>Fire Orange</span></p>
        </div>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'MeanGreen' ? 'active' : ''}`}
          onClick={() => handleColorClick('MeanGreen')}
        >
          <div className="color-box palette-4"></div>
          <p>Dual  Tone <span>Mean Green</span></p>
        </div>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'OutlawOlive' ? 'active' : ''}`}
          onClick={() => handleColorClick('OutlawOlive')}
        >
          <div className="color-box palette-5"></div>
          <p>Single Tone <span>Outlaw Olive</span></p>
        </div>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'RebelRed' ? 'active' : ''}`}
          onClick={() => handleColorClick('RebelRed')}
        >
          <div className="color-box palette-6"></div>
          <p>Dual  Tone <span>Rebel Red</span></p>
        </div>
        <div
          className={`d-flex align-items-center color-palette-info ${selectedColor === 'YellingYellow' ? 'active' : ''}`}
          onClick={() => handleColorClick('YellingYellow')}
        >
          <div className="color-box palette-7"></div>
          <p>Single Tone <span>Yelling Yellow</span></p>
        </div>
        {/* Add similar divs for other colors */}
      </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}

{/* <div className='col-lg-4 color-palette'>
<div className='d-flex align-items-center color-palette-info active'>
  <div className="color-box palette-1 active"></div>
  <p>Single Tone <span>Bold Black</span></p>
</div>
<div className='d-flex align-items-center color-palette-info'>
  <div className="color-box palette-2"></div>
  <p>Dual Tone <span>Midnight Blue</span></p>
</div>
<div className='d-flex align-items-center color-palette-info'>
  <div className="color-box palette-3"></div>
  <p>Single Tone <span>Fire Orange</span></p>
</div>
<div className='d-flex align-items-center color-palette-info'>
  <div className="color-box palette-4"></div>
  <p>Dual  Tone <span>Mean Green</span></p>
</div>
<div className='d-flex align-items-center color-palette-info'>
  <div className="color-box palette-5"></div>
  <p>Single Tone <span>Outlaw Olive</span></p>
</div>
<div className='d-flex align-items-center color-palette-info'>
  <div className="color-box palette-6"></div>
  <p>Dual  Tone <span>Rebel Red</span></p>
</div>
<div className='d-flex align-items-center color-palette-info'>
  <div className="color-box palette-7"></div>
  <p>Single Tone <span>Yelling Yellow</span></p>
</div>
</div> */}