import React, { useState } from 'react';
import '../style/Rooms.css';

// Import local video files
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

// Import thumbnail images
import thumbnail1 from '../assets/thumbnail1.jpeg';
import thumbnail2 from '../assets/thumbnail3.jpeg';
import thumbnail3 from '../assets/thumbnail4.jpeg';

// Import 16 card images from assets
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';
import image11 from '../assets/image11.jpeg';
import image12 from '../assets/image12.jpeg';
import image13 from '../assets/image13.jpeg';
import image14 from '../assets/image14.jpeg';
import image15 from '../assets/image15.jpeg';
import image16 from '../assets/image16.jpeg';

const TourComponent = () => {
  // Video data using imported assets
  const videos = [
    {
      id: 1,
      thumbnail: thumbnail1,
      src: video1
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      src: video2
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      src: video3
    }
  ];

  // Card data using imported images
  const cards = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 },
    { id: 13, image: image13 },
    { id: 14, image: image14 },
    { id: 15, image: image15 },
    { id: 16, image: image16 }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
  };

  return (
    <div className="tour-container">
      {/* Heading */}
      <h1 className="tour-heading">
        <span className="tour-part">Take a Tour</span>{' '}
        <span className="our-part">Our</span>{' '}
        <span className="cottage-part">Cottage</span>
      </h1>

      {/* Video Section */}
      <div className="video-section">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="video-thumbnail"
            onClick={() => handleVideoClick(video)}
          >
            <img 
              src={video.thumbnail} 
              alt={`Video ${video.id} thumbnail`}
            />
            <div className="play-button">▶</div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      {selectedVideo && (
        <div className="video-fullscreen">
          <div className="video-wrapper">
            <video 
              controls 
              autoPlay 
              className="fullscreen-player"
            >
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button 
              className="close-button"
              onClick={closeFullscreen}
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="video-fullscreen">
          <div className="video-wrapper">
            <img 
              src={selectedImage} 
              alt="Fullscreen view"
              className="fullscreen-image"
            />
            <button 
              className="close-button"
              onClick={closeFullscreen}
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Cards Section */}
      <div className="cards-section">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="card"
            onClick={() => handleImageClick(card.image)}
          >
            <img 
              src={card.image} 
              alt={`Card ${card.id}`}
              className="card-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourComponent;