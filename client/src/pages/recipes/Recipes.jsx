import { styled } from 'styled-components';
import recipes from '../../../data/recipes.json';
import CardRecipe from '../../components/CardRecipe';

const Recipes = () => {
  console.log(recipes);
  return (
    <StyleReceipe>
      <div className="receipesContainer">
        <h1>CREATE A RECEIPE</h1>

        {recipes.recipes.map((recipe) => {
          return <CardRecipe key={recipe.name} recipe={recipe} />;
        })}
      </div>
    </StyleReceipe>
  );
};

export default Recipes;

const StyleReceipe = styled.div`
  h2 {
    color: #704869;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 300;
  }

  h3 {
    color: #ed6d5a;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 300;
  }
`;
