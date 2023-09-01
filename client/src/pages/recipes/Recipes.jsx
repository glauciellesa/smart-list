import { styled } from 'styled-components';
import recipes from '../../../data/recipes.json';
import CardRecipe from '../../components/CardRecipe';

const Recipes = () => {
  console.log(recipes);
  return (
    <StyleReceipe>
      <div className="topOfRecipes">
        <h1>CREATE A RECIPE</h1>
        <button>+</button>
      </div>
      <div className="mainOfRecipes">
        {recipes.recipes.map((recipe) => {
          return <CardRecipe key={recipe.name} recipe={recipe} />;
        })}
      </div>
    </StyleReceipe>
  );
};

export default Recipes;

const StyleReceipe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .topOfRecipes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  .mainOfRecipes {
    padding: 1rem;
  }

  h1 {
    color: #704869;
    font-size: 1.6rem;
    font-weight: 500;
  }

  button {
    border: none;
    cursor: pointer;
    font-size: 2rem;
    height: 35px;
    width: 35px;
    color: #d6cdc2;
    text-align: center;
    background: #704869;
    border-radius: 50px;
  }

  @media only screen and (min-width: 600px) {

    .mainOfRecipes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .topOfRecipes {
      justify-content: space-between;
    }
`;
