import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Editterr = () => {
  const options = {
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    navSpeed: 1000,
    autoplayHoverPause: true,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    vertical: true,
  };

  return (
    <section className="slider">
      <div className="text-slider-content">
        <OwlCarousel className="text-carousel owl-theme" {...options}>
          <div className="item"><span className="slide-elem">SPIDERMAN</span></div>
          <div className="item"><span className="slide-elem">BATMAN</span></div>
          <div className="item"><span className="slide-elem">SUPERMAN</span></div>
        </OwlCarousel>
      </div>
      <div className="character-carousel owl-theme">
        <OwlCarousel className="owl-carousel" {...options}>
          <div className="item">
            <div className="slide-elem">
              <div className="slide-img">
                <img src="https://orig00.deviantart.net/97eb/f/2015/276/5/e/spiderman_by_mayantimegod-d9brltx.png" alt="Spiderman" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slide-elem">
              <div className="slide-img">
                <img src="https://orig00.deviantart.net/625c/f/2016/008/7/e/new_52_batman_by_mayantimegod-d9n64wa.png" alt="Batman" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slide-elem">
              <div className="slide-img">
                <img src="https://img00.deviantart.net/aa59/i/2015/362/7/b/superman_png_by_mayantimegod-d9lsvj4.png" alt="Superman" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Editterr;
