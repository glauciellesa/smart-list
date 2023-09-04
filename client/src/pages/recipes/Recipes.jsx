import { styled } from "styled-components";
import CardRecipe from "../../components/CardRecipe";
import useFetch from "../../hooks/recipeFetch";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data, loading, error } = useFetch("recipes");

  return (
    <StyleReceipe>
      <div className="topOfRecipes">
        <p>Recipes</p>
        <button>
          <Link to="/newRecipe">+</Link>
        </button>
      </div>
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <div className="mainOfRecipes">
          {data.map((recipe) => {
            return recipe.userRecipes.map((userRecipe) => {
              return <CardRecipe key={userRecipe._id} recipe={userRecipe} />;
            });
          })}
        </div>
      )}
    </StyleReceipe>
  );
};

export default Recipes;

const StyleReceipe = styled.div`
  .topOfRecipes {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    padding-bottom: 3rem;
  }

  .loading {
    text-align: left;
  }

  .mainOfRecipes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: #d6cdc2;
  }

  p {
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
    color: #d6cdc2;
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
