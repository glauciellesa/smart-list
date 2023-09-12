import { styled } from "styled-components";
import CardRecipe from "src/components/CardRecipe";
import useRecipes from "src/hooks/useRecipes";
import { Link } from "react-router-dom";
import { useState } from "react";
import NewRecipe from "./newRecipe/NewRecipe";
import Modal from "src/components/Modal";
import { useAuthContext } from "src/hooks/useAuthContex";

const Recipes = () => {
  const [showModal, setshowModal] = useState(false);
  const { data, loading, error } = useRecipes("getRecipes", "recipes");
  const { user } = useAuthContext();

  console.log(data);

  return (
    <StyleReceipe>
      <div className="topOfRecipes">
        <h2 className="recipesTitle">Recipes</h2>
        {user ? (
          <button
            onClick={() => {
              setshowModal((prev) => !prev);
            }}
          >
            +
          </button>
        ) : null}
        <Modal
          shouldShow={showModal}
          onRequestClose={() => {
            setshowModal((prev) => !prev);
          }}
        >
          <NewRecipe handleModal={setshowModal} />
        </Modal>
      </div>
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <div className="mainOfRecipes">
          {data.map((recipe) => {
            return recipe.userRecipes.map((userRecipe) => {
              return (
                <Link to={userRecipe._id} key={userRecipe._id}>
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
    padding-bottom: 4rem;
  }

  .recipesTitle {
    color: #704869;
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    color: #d6cdc2;
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
