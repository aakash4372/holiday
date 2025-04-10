import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FaHome, 
  FaCookie, 
  FaUtensils, 
  FaFire,
  FaFireAlt,
  FaWifi, 
  FaParking, 
  FaShower, 
  FaConciergeBell, 
  FaUserMd, 
  FaWater, 
  FaTaxi 
} from 'react-icons/fa';
import '../style/Amenities.css';

const cardData = [
  { title: 'Home stay cottage', icon: <FaHome /> },
  { title: 'Home made chocolate', icon: <FaCookie /> },
  { title: 'Home made food', icon: <FaUtensils /> },
  { title: 'Fire camp', icon: <FaFire /> },
  { title: 'BBQ setup', icon: <FaFireAlt /> },
  { title: 'High speed internet free wifi', icon: <FaWifi /> },
  { title: 'Free car parking facility', icon: <FaParking /> },
  { title: '24 hrs hot water available', icon: <FaShower /> },
  { title: '24 hrs room service', icon: <FaConciergeBell /> },
  { title: 'Doctor on call', icon: <FaUserMd /> },
  { title: 'From our cottage to lake 2KM only', icon: <FaWater /> },
  { title: 'Cab booking on site', icon: <FaTaxi /> },
];

const ZigzagCard = ({ title, icon, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const cardElement = ref.current;
      
      if (!cardElement) return;

      const { top, bottom } = cardElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visible = top < windowHeight && bottom >= 0;
      setIsVisible(visible);

      if (visible) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
        }
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      controls.start({ 
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0 
      });
      return;
    }

    if (scrollDirection) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
      });
    }
  }, [scrollDirection, isVisible, controls, index]);

  return (
    <motion.div
      ref={ref}
      className="card"
      initial={{ 
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0 
      }}
      animate={controls}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
    </motion.div>
  );
};

const ZigzagCards = () => {
  return (
    <div className="cards-container">
      <h2 className="cards-heading">
        <span className="our-text">Our</span>{' '}
        <span className="amenities-text">Amenities</span>
      </h2>
      <div className="card-row">
        {cardData.map((card, index) => (
          <ZigzagCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ZigzagCards;