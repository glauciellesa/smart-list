import recipes from '../../../../data/recipes.json';
import { styled } from 'styled-components';
import { Heart } from 'lucide-react';

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
              <div className="topImage">
                <img
                  src={`https://source.unsplash.com/${recipe.photo}/400x300`}
                  alt={`Pictures of ${recipe.name}`}
                />
              </div>
              <div className="topRight">
                <div className="userContainer">
                  <div className="userImage">
                    <img
                      src={`https://github.com/leilaZ1111.png`}
                      alt={`photo`}
                    />
                    <p className="username">Isabella Swan</p>
                  </div>
                </div>

                <h2>{recipe.name}</h2>
                <p className="time">{recipe.timeToPrepare}</p>
              </div>
              <div className="favorite">
                <Heart />
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
  align-items: center;
  gap: 1rem;
  padding-top: 3rem;
  width: 90%;

  .card {
    box-shadow: 5px 2px 10px #d6cdc2;
   
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
  padding-bottom: 1rem;
}

.topImage img {
  border-radius: 5px;
  width: fit-content;
  padding-bottom: 1rem;
}

.topRight {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
}

  h2 {
    color: #704869;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .bottom h3 {
    color: #ed6d5a;
    font-size: 1.4rem;
    margin: 1rem 0;
    font-weight: 700;
  }

  .userName,
  .time {
    font-size: 1rem;
    font-weight: 400;
  }

  .favorite {
    position: absolute;
    top: 20rem;
    right: 1rem;
  }

  .favorite svg {
    color: #4d4d4d;
  }

  svg:hover {
   color: red;
  }


  .userImage {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

  @media (min-width: 600px) {
    width: 850px;
    gap: 3rem;

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
      width: 300px;
      padding-bottom: 1rem;
    }

    .favorite {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
`;
