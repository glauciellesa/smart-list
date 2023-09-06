import { styled } from "styled-components";
import CardRecipe from "src/components/CardRecipe";
import useRecipes from "src/hooks/useRecipes";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data, loading, error } = useRecipes("recipes");

  return (
    <StyleReceipe>
      <div className="topOfRecipes">
        <h2 className="recipesTitle">Recipes</h2>
        <button>
          <Link to="/newRecipe">+</Link>
        </button>
        <button>
          <Link to="/recipeDetail">Recipe Detail</Link>
        </button>
      </div>
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <div className="mainOfRecipes">
          {data.map((recipe) => {
            return recipe.userRecipes.map((userRecipe) => {
              return (
                <Link to={userRecipe._id}>
                  <CardRecipe key={userRecipe._id} recipe={userRecipe} />
                </Link>
              );
            });
          })}
        </div>
      )}
    </StyleReceipe>
  );
};

export default Recipes;

const StyleReceipe = styled.div`
  padding: 0 1rem;

  .topOfRecipes {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    padding: 3rem 0;
  }

  .mainOfRecipes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: #d6cdc2;
  }

  .recipesTitle {
    color: #704869;
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    border: none;
    cursor: pointer;
    font-size: 1.7rem;
    height: 2rem;
    width: 2rem;
    text-align: center;
    background: #704869;
    border-radius: 50px;
  }

  @media (min-width: 600px) {
    .topOfRecipes {
      justify-content: space-between;
    }

    .mainOfRecipes {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;
