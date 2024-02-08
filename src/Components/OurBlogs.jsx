import React, { useState } from 'react';
import Slider from 'react-slick';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import video1 from '../Components/assets/OurBlogs/video-1.mp4';
import video2 from '../Components/assets/OurBlogs/video-2.mp4';
import video3 from '../Components/assets/OurBlogs/video-3.mp4';
import videopreview1 from '../Components/assets/OurBlogs/Preview/video1.PNG';
import videopreview2 from '../Components/assets/OurBlogs/Preview/video2.PNG';
import videopreview3 from '../Components/assets/OurBlogs/Preview/video3.PNG';

export default function OurBlogs() {
  const videos = [
    { id: 1, video: video1, preview: videopreview1 },
    { id: 2, video: video2, preview: videopreview2 },
    { id: 3, video: video3, preview: videopreview3 },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const CustomNextArrow = ({ onClick }) => (
    <FiArrowDown className='icon-down' onClick={() => handleArrowClick('next', onClick)} />
  );

  const CustomPrevArrow = ({ onClick }) => (
    <FiArrowUp className='icon-up' onClick={() => handleArrowClick('prev', onClick)} />
  );

  const handleArrowClick = (direction, onClick) => {
    const totalVideos = videos.length;
    let newCurrentVideo;

    if (direction === 'next') {
      newCurrentVideo = (currentVideo + 1) % totalVideos;
    } else {
      newCurrentVideo = (currentVideo - 1 + totalVideos) % totalVideos;
    }

    setCurrentVideo(newCurrentVideo);
    onClick();
  };

  const handleAfterChange = (index) => {
    setCurrentVideo(index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: handleAfterChange, // This callback captures the index of the current slide
  };

  return (
 
<section className='ourblogs-main'>
      <div className='container ourblogs-main-info'>
        <div className='row '>
          <div className='ourblogs-main-info-main'>
            <h1>
              Our <span>Blogs</span>{' '}
            </h1>
          </div>

          <div className='col-lg-3'></div>
          <div className='col-lg-9'>
            <Slider {...settings}>
              {videos.map((video, index) => (
                <div key={video.id} style={{ position: 'relative', width: '800px', height: '100%' }}>
                  <video autoPlay muted loop width='100%' height='100%' poster={video.preview}>
                    <source src={video.video} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                  <div className='play-btn' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <svg
                      height='50'
                      width='50'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <polygon points='5 3 19 12 5 21 5 3'></polygon>
                    </svg>
                  </div>
                </div>
              ))}
            </Slider>

            <div className='preview-img-main'>
              {videos.map((video, index) => (
                <img
                  key={video.id}
                  src={videos[index === videos.length - 1 ? 0 : index + 1].preview}
                  alt={videos[index === videos.length - 1 ? 0 : index + 1].id}
                  width='220px'
                  height='150px'
                  style={{ display: index === currentVideo ? 'block' : 'none' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
 
    
  );
}
