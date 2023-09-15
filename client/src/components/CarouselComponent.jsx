import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import useRecipes from "src/hooks/useRecipes";

const CarouselComponent = () => {
  const { data, loading, error } = useRecipes("getRecipes", "recipes");

  return (
    <StyledCarousel
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={50}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
      emulateTouch={true}
    >
      {data.map((recipe) =>
        recipe.userRecipes.map((userRecipe) => (
          <div className="recipe-slider" key={userRecipe._id}>
            <CarouselImage
              src={`https://source.unsplash.com/${userRecipe.photo}/450x350`}
              alt={`Pictures of ${userRecipe.name}`}
            />
            <Caption>{userRecipe.name}</Caption>
          </div>
        ))
      )}
    </StyledCarousel>
  );
};

export default CarouselComponent;

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
  height: auto;
  width: 110% !important;

  @media (min-width: 600px) {
    width: 90% !important;
  }
`;

const Caption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0rem;
  width: 110%;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgb(113 72 105);
  font-weight: bold;
  padding: 8px;
  margin: 0;

  @media (min-width: 600px) {
    width: 90%;
    left: 5%;
  }
`;
