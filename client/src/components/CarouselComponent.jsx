import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  /* Your carousel styles */
  .carousel .slider-wrapper {
    margin: 0 -10px; 
  }
  
  .carousel .slider {
    padding: 0 10px; 
  }
  
  .carousel .slide {
    border-radius: 5px; 
    margin: 0 10px; 
  }
`;

const CarouselImage = styled.img`
max-width: 100%;
height: auto;
`;

const Caption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgb(113 72 105);
  font-weight: bold;
  padding: 8px;
  margin: 0;
`;

const CarouselComponent = ({ recipes }) => {
  return (
    <StyledCarousel
      autoPlay={true}
      interval={3000}
      showThumbs={true}
      centerMode={true}
      centerSlidePercentage={40}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
      emulateTouch={true}
    >
      {recipes.map((recipe) => (
        <div className="recipe-slider" key={recipe.id}>
          <CarouselImage
            src={`https://source.unsplash.com/${recipe.photo}/450x350`}
            alt={`Pictures of ${recipe.name}`} 
          />
          <Caption>{recipe.name}</Caption>
        </div>
      ))}
    </StyledCarousel>
  );
};

export default CarouselComponent;


