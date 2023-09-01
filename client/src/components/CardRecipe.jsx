/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const CardRecipe = ({ recipe }) => {
  // console.log(recipe);
  return (
    <CadrStyleReceipe>
      <div className="imageDiv">
        <img
          src={`https://source.unsplash.com/${recipe.photo}`}
          alt={`Pictures of ${recipe.name}`}
        />
      </div>
      <div className="recipesTitles">
        <h2>{recipe.name}</h2>
        <p>{recipe.timeToPrepare}</p>
      </div>
    </CadrStyleReceipe>
  );
};

export default CardRecipe;

const CadrStyleReceipe = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .imageDiv img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 5px;
  }

  .recipesTitles {
    height: 6rem;
  }

  h2 {
    color: #704869;
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 600;
  }

  p {
    color: #ed6d5a;
    font-size: 0.8rem;
    margin: 1rem 0;
    font-weight: 300;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: column;

    .imageDiv img {
      width: 18rem;
      height: 18rem;
    }

    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;
