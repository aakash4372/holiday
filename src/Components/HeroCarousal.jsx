import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/HeroCarousal.css';

import heroImage1 from '../assets/img1.jpeg';
import heroImage2 from '../assets/img2.jpeg';
import heroImage3 from '../assets/img3.jpeg';
import heroImage4 from '../assets/img4.jpeg';

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      type: 'image',
      src: heroImage4,
      text: ["Discover the ultimate relaxation – escape, rejuvenate, and indulge in pure opulence."],
      animation: 'slide-up'
    },
    {
      type: 'image',
      src: heroImage1,
      text: ["Genuine luxury nestled in nature's embrace."],
      animation: 'slide-left'
    },
    {
      type: 'image',
      src: heroImage2,
      text: ["Nature shines in its purest form, unadorned."],
      animation: 'slide-right'
    },
    {
      type: 'image',
      src: heroImage3,
      text: ["Rest easy—your perfect room awaits."],
      animation: 'slide-up'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const AnimatedText = ({ text, displayText, animation }) => {
    return (
      <div className={`carousel-text ${animation}`}>
        {text.map((line, index) => (
          <div key={index} className="text-line">
            {animation === 'door-open' ? (
              line.split('').map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  {displayText ? displayText[0].split('')[i] : char}
                </span>
              ))
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="hero-carousel overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
        >
          <img
            src={item.src}
            alt={`Slide ${index + 1}`}
            className="d-block w-100 object-fit-cover zoom-in"
          />
          <div className="carousel-caption">
            <AnimatedText 
              text={item.text} 
              displayText={item.displayText} 
              animation={item.animation} 
            />
          </div>
        </div>
      ))}
      <div className="carousel-nav">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;