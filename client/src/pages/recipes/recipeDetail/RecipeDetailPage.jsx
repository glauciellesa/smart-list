import useRecipes from "../../../hooks/useRecipes";
import { styled } from "styled-components";
import { Heart, UserCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import GoBack from "../../../components/GoBack";
import { useAddNewList } from "src/hooks/useAddNewList";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const { addNewList } = useAddNewList();
  const navigate = useNavigate();
  const { data, loading, error } = useRecipes(
    "getRecipeById",
    `recipes/${recipeId}`
  );

  const extractIngredientsFromRecipes = (recipeList) => {
    const ingredientKeywords = [
      "cup",
      "cups",
      "teaspoon",
      "teaspoons",
      "tablespoon",
      "tablespoons",
      "ounce",
      "ounces",
      "pound",
      "pounds",
      "grams",
      "kilograms",
      "g",
      "kg",
      "large",
      "small",
      "sticks",
    ];

    const ingredientLines = [];

    for (const recipeText of recipeList) {
      const lines = recipeText.split("\n");

      for (const line of lines) {
        const containsIngredientKeyword = ingredientKeywords.some((keyword) =>
          new RegExp(`\\b${keyword}\\b`, "i").test(line)
        );

        if (containsIngredientKeyword) {
          const productName = line
            .replace(/[\d.]+(?:\/[\d.]+)?\s?\w+\s/g, "")
            .trim();
          ingredientLines.push(productName.trim());
        }
      }
    }

    return ingredientLines;
  };

  const createShoppingList = async () => {
    await addNewList("shoppingLists", data.name);
    navigate("/shoppingList");
  };

  const checkTime = () => {
    const time = data.timeToPrepare;

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
      return <p className="recipePreparation">{data.timeToPrepare} minutes</p>;
    }
  };

  return (
    <StyledRecipeDetailPage>
      <div className="goBack">
        <GoBack recipes="recipes" />
      </div>
      {error ? <div className="error">{error}</div> : null}
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <div className="card">
          <div className="top">
            <div className="topImage">
              <img
                src={`https://source.unsplash.com/${data.photo}/400x300`}
                alt={`Pictures of ${data.name}`}
              />
            </div>
            <div className="topRight">
              <div className="userContainer">
                <div className="userImage">
                  {data.githubAccount ? (
                    <>
                      <img
                        src={`https://github.com/${data.githubAccount}.png`}
                        alt={`${data.userName}'s photo`}
                      />
                      <p className="username">{data.userName}</p>
                    </>
                  ) : (
                    <UserCircle />
                  )}
                </div>
              </div>

              <h2>{data.name}</h2>
              <p className="time">{checkTime()}</p>
            </div>
            <div className="favorite">
              <Heart />
            </div>
          </div>
          <div className="bottom">
            <div className="ingredientsAndBtnList">
              <h3>Ingredients</h3>
              <button className="createList" onClick={createShoppingList}>
                Add ingredienst to shoppingList
              </button>
            </div>

            {data.ingredients ? (
              <ul>
                {data.ingredients?.map((ingredient) => (
                  <li key={Math.random()}>{ingredient}</li>
                ))}
              </ul>
            ) : (
              <div>No ingredients found</div>
            )}

            <h3>Instructions</h3>
            <p>{data.instructions}</p>
          </div>
        </div>
      )}
    </StyledRecipeDetailPage>
  );
};

export default RecipeDetailPage;

const StyledRecipeDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0;
  margin-bottom: 2rem;

  .goBack {
    padding-left: 1rem;
    width: 100%;
    align-items: flex-end;
    color: #4d4d4d;
  }

  .card {
    box-shadow: 5px 2px 10px #d6cdc2;
    width: 95%;
    border-radius: 5px;
  }

  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .topImage {
    width: 100%;
  }

  .topImage img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }

  .topRight {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  .bottom {
    padding: 1rem;
  }

  h2 {
    color: #704869;
    font-size: 2rem;
    font-weight: 700;
  }

  .bottom h3 {
    color: #ed6d5a;
    font-size: 1.4rem;
    margin: 1rem 0;
    font-weight: 700;
  }

  p {
    line-height: 1.5;
    color: #4d4d4d;
    text-align: justify;
  }

  li {
    line-height: 1.5;
    margin-left: 20px;
    color: #4d4d4d;
  }

  ul {
    list-style-type: square;
    color: #4d4d4d;
  }

  .userName,
  .time {
    font-size: 1rem;
    font-weight: 400;
  }

  .favorite {
    position: absolute;
    top: 18.5rem;
    right: 1rem;
  }

  .favorite svg {
    color: #4d4d4d;
  }

  svg:hover {
    color: #ed6d5a;
  }

  .userContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .userContainer img {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }

  .userImage {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .ingredientsAndBtnList {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .createList {
    height: 2.3rem;
    padding: 0.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #704869;
    border: 2px solid #704869;
    border-radius: 5px;
    background-color: #fefaeb;
  }

  @media (min-width: 600px) {
    padding: 2rem 0;

    .card {
      padding: 2.5rem;
    }

    .top {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      padding-bottom: 1rem;
    }

    .topImage img {
      border-radius: 5px;
      max-width: 25rem;
    }

    .favorite {
      position: absolute;
      top: 0;
      right: 0;
    }

    .ingredientsAndBtnList {
      flex-direction: row;
    }
  }
`;
