import React from 'react';
import { Carousel, Image } from 'antd';
import './Carousel.css';

const contentStyle = {
  display: 'block',
  margin: 'auto',
  height: '700px',
  marginTop: 0,
  objectFit: 'cover',
  maxWidth: '100%',
  maxHeight: '100%',
};

const Slider = () => {
  const onChange = (currentSlide) => {
    console.log('Current slide index:', currentSlide);
  };

  const images = [
    { src: '/img/main1.jpg', alt: 'Girl 1' },
    { src: '/img/main2.jpg', alt: 'Girl 2' },
    { src: '/img/main3.jpg', alt: 'Girl 3' },
    { src: '/img/main4.jpg', alt: 'Girl 4' },
    { src: '/img/main5.jpg', alt: 'Girl 4' },
    { src: '/img/main6.jpg', alt: 'Girl 4' }
  ];

  return (
    <Carousel afterChange={onChange} autoplay infinite autoplaySpeed={2000}>
      {images.map((image, index) => (
        <div key={index}>
          <Image 
            src={image.src} 
            alt={image.alt} 
            style={contentStyle} 
            width="100%" 
            height="auto" 
            preview={false}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
