import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  /* Your carousel styles */
`;

const CarouselImage = styled.img`
  width: 400px;
  height: 300px;
  /* Additional image styles */
`;

const CarouselComponent = ({ recipes }) => {
  return (
    <StyledCarousel autoPlay={true} interval={3000} showThumbs={false}>
      {recipes.map((recipe) => (
        <div className="recipe-slider" key={recipe.id}>
          <CarouselImage
            src={`https://source.unsplash.com/${recipe.photo}/400x300`}
            alt="Pictures of recipes"
          />
        </div>
      ))}
    </StyledCarousel>
  );
};

export default CarouselComponent;
