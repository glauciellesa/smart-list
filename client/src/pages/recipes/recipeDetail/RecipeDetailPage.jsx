import recipes from '../../../../data/recipes.json';
import { styled } from 'styled-components';

/* eslint-disable react/prop-types */
const RecipeDetailPage = () => {
  console.log(recipes);
  // console.log(recipe);
  return (
    <StyledRecipeDetailPage>
      {recipes.recipes.map((recipe) => {
        return (
          <div className="card">
            <div className="top">
              <div className="topLeft">
                <p className="username">Isabella Swan</p>
                <h2>{recipe.name}</h2>
                <h3 className="time">{recipe.timeToPrepare}</h3>
                <div className="topImage">
                  <img
                    src={`https://source.unsplash.com/${recipe.photo}/400x300`}
                    alt={`Pictures of ${recipe.name}`}
                  />
                </div>
              </div>
            </div>
            <div className="bottom">
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.map((element, index) => (
                  <li key={element + index}>{element}</li>
                ))}
              </ul>
              <h3>Instructions</h3>
              <p>{recipe.instructions}</p>
            </div>
            <button>SAVE</button>
          </div>
        );
      })}
    </StyledRecipeDetailPage>
  );
};

export default RecipeDetailPage;

const StyledRecipeDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 300px;

  .card {
    box-shadow: 5px 2px 10px #d6cdc2;
    padding: 1.5rem;
  }

  h2 {
    color: #704869;
    font-size: 1.5rem;
    font-weight: 700;
  }

  h3 {
    color: #ed6d5a;
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 700;
  }

  p,
  .userName {
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 400;
  }

  img {
    border-radius: 5px;
    width: 250px;
  }

  button {
    background-color: #ed6d5a;
    color: white;
    padding: 0.7rem;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
    margin: 1.5rem 0;
    cursor: pointer;
    width: 150px;
    border-radius: 5px;
  }

  @media only screen and (min-width: 600px) {
    width: 600px;

    . top {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }
`;
