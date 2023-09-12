/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const CardRecipe = ({ recipe }) => {
  const checkTime = () => {
    const time = recipe.timeToPrepare;

    if (time > 60) {
      let hours = time / 60;
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60;
      let rminutes = Math.round(minutes);

      return (
        <p className="recipePreparation">{`${rhours} ${
          rhours === 1 ? "hour" : "hours"
        } and ${rminutes} ${rminutes === 1 ? "minute" : "minutes"}`}</p>
      );
    } else {
      return (
        <p className="recipePreparation">{recipe.timeToPrepare} minutes</p>
      );
    }
  };

  return (
    <StyleCardReceipe>
      <div className="imageDiv">
        <img
          src={`https://source.unsplash.com/${recipe.photo}`}
          alt={`Pictures of ${recipe.name}`}
        />
      </div>
      <div className="recipesTitles">
        <p className="recipeName">{recipe.name}</p>
        {checkTime()}
      </div>
    </StyleCardReceipe>
  );
};

export default CardRecipe;

const StyleCardReceipe = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .imageDiv img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 5px;
  }

  .recipeName {
    height: 0.7rem;
    color: #704869;
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 600;
  }

  .recipePreparation {
    color: #ed6d5a;
    font-size: 0.7rem;
    margin: 1rem 0;
    font-weight: 200;
  }

  @media (min-width: 600px) {
    flex-direction: column;
    gap: 0rem;

    .imageDiv img {
      width: 18rem;
      height: 18rem;
    }

    .recipesTitles {
      width: 18rem;
    }

    .recipeName {
      height: 0.7rem;
      color: #704869;
      font-size: 1rem;
      margin: 1rem 0;
      font-weight: 600;
    }

    .recipesTitles {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;
