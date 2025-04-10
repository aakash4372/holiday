import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img1.jpeg'; // Adjust path as needed
import '../style/About.css';

const CustomComponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const paragraph = textRef.current?.querySelector('.animate-paragraph');
      if (paragraph) {
        const windowHeight = window.innerHeight;
        const rect = paragraph.getBoundingClientRect();
        const isVisible = rect.top <= windowHeight - 50 && rect.bottom >= 0;

        if (isVisible) {
          paragraph.classList.add('animate-on-scroll');
        } else {
          paragraph.classList.remove('animate-on-scroll');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-70">
      <div className="row align-items-center p-4">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={img1}
            alt="Summer Dreams"
            className="img-fluid rounded custom-img slide-in-left"
          />
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6" ref={textRef}>
          <h1 className="mb-4 text-center text-md-start">
            <span className="text-dark">Welcome to </span>
            <span className="text-danger">Summer </span>
            <span className="text-primary">Dreams</span>
          </h1>
          <div className="text-content">
            <p className="animate-paragraph text-white">
              Escape to a world of endless summer bliss where golden sands meet crystal waters, inviting you to bask in the warm sun. 
              Surrounded by nature’s finest landscapes, this serene beauty offers thrilling adventures or luxurious comfort—your choice awaits. 
              As you scroll, let this paradise unfold, revealing a dream vacation perfect for all who seek relaxation or excitement. 
              Welcome to Summer Dreams, where memories are crafted effortlessly and worries fade into the horizon with every passing moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;