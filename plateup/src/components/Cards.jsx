import React, { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';
import './Cards.css';

const cardData = [
  {
    heading: 'Nutrition',
    content: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    image: 'path-to-nutrition-img',
  },
  {
    heading: 'Physical Activity',
    content: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    image: 'path-to-physical-activity-image.jpg',
  },
  {
    heading: 'Restorative Sleep',
    content: 'Consistent, quality sleep is essential for cognitive function and physical health.',
    image: 'path-to-restrorative-path-img',
  },
  {
    heading: 'Stress Management',
    content: 'Effective stress management techniques are crucial for mental well-being and overall health.',
    image: 'path-to-stress-management-image.jpg',
  },
  {
    heading: 'Social Connection',
    content: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
    image: 'path-to-social-connection-image.jpg',
  },
  {
    heading: 'Substance Abuse',
    content: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
    image: 'plateup/public/Abuse.png',
  },
];

const ButtonGroupWithCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const moveLeft = () => {
    setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const moveRight = () => {
    setActiveIndex(prevIndex => Math.min(prevIndex + 1, cardData.length - 1));
  };

  
  const handlers = useSwipeable({
    onSwipedLeft: () => moveRight(),
    onSwipedRight: () => moveLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="button-group-with-cards">
      {!isMobile && (
        <div className="button-group">
          {cardData.map((card, index) => (
            <button
              key={index}
              className={`button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {card.heading}
            </button>
          ))}
        </div>
      )}
      <div className="cards-wrapper">
        <div className="cards-container" {...handlers} style={{ transform: `translateX(-${activeIndex * (493 + 10)}px)` }}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card ${activeIndex === index ? 'highlighted' : ''} ${isMobile ? 'mobile-card' : ''}`}
            >
              <img src={card.image} alt={card.heading} className="card-image" />
              <div className="card-content">
                <h3>{card.heading}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isMobile && (
        <div className="nav-buttons-container">
          <button className="nav-button nav-button-left" onClick={moveLeft} aria-label="Move Left"></button>
          <button className="nav-button nav-button-right" onClick={moveRight} aria-label="Move Right"></button>
        </div>
      )}
    </div>
  );
};

export default ButtonGroupWithCards;