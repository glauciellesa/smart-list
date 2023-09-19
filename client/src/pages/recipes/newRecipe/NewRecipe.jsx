import { useState } from "react";
import { styled } from "styled-components";
import { useAddNewRecipe } from "src/hooks/useAddNewRecipe";
import { useAuthContext } from "src/hooks/useAuthContex";
import { useNavigate } from "react-router-dom";

const NewRecipe = (props) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [timeToPrepare, setTimeToPrepare] = useState(0);
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();
  const { addNewRecipe, isLoading, error } = useAddNewRecipe();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleIngredients = (e) => {
    // Split the string on \n or \r characters
    let split_string = e.target.value.split(/\r?\n|\r|\n/g);
    setIngredients(split_string);
  };

  const handleIInstructions = (e) => {
    let split_string = e.target.value.split(/\r?\n|\r|\n/g);
    setInstructions(split_string);
  };

  const handleRecipe = async (e) => {
    e.preventDefault();
    const recipeData = {
      name,
      photo,
      timeToPrepare,
      ingredients,
      instructions,
    };

    await addNewRecipe("recipes", { ...recipeData }, user._id);
    setName("");
    setPhoto("");
    setTimeToPrepare(0);
    setIngredients();
    setInstructions();
    if (!error) {
      props.handleModal(false);
    }
    navigate(0);
  };

  return (
    <StyleNewRecipe>
      <form>
        <div className="title">
          <h1>New Recipe</h1>
        </div>
        <label name="title">Title</label>
        <input
          type="text"
          id="name"
          placeholder="Give your recipe title"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
        <label name="photo">Photo</label>
        <input
          type="text"
          id="photo"
          placeholder="Add a photo"
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
          value={photo}
          required
        />
        <label name="timeToPrepare">
          How long does it take to prepare? (in minutes)
        </label>
        <input
          type="number"
          id="timeToPrepare"
          onChange={(e) => {
            setTimeToPrepare(e.target.value);
          }}
          value={timeToPrepare}
          required
        />
        <label name="ingredients">Ingredients</label>
        <textarea
          type="text"
          id="ingredients"
          placeholder="What ingredients do you need?"
          onChange={handleIngredients}
          value={ingredients}
          required
        />
        <label name="instructions">Instructions</label>
        <textarea
          type="text"
          id="instructions"
          placeholder="How do you prepare it?"
          onChange={handleIInstructions}
          value={instructions}
          required
        />
        <div className="addAndSave">
          <button disabled={isLoading} onClick={handleRecipe}>
            Save
          </button>
        </div>
      </form>
      {error ? <div className="error">{error}</div> : null}
    </StyleNewRecipe>
  );
};

export default NewRecipe;

const StyleNewRecipe = styled.div`
  form {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }

  .addAndSave {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
    padding-top: 3rem;
    align-items: center;
  }

  h1 {
    color: #704869;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 700;
  }

  .addAndSave button {
    background-color: #ed6d5a;
    color: #fefaeb;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
    cursor: pointer;
    width: 10rem;
    border-radius: 5px;
    height: 50px;
    font-size: 1.2rem;
  }

  label {
    text-align: left;
    padding: 0.7rem;
    background-color: #fefaeb;
    width: 300px;
    border-radius: 5px;
    border: none;
    color: #704869;
    font-weight: 700;
  }

  textarea,
  input {
    font-family: "Comfortaa", cursive;
    text-align: left;
    padding: 0.7rem;
    background-color: white;
    width: 300px;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
  }

  #instructions,
  #ingredients {
    height: 100px;
    overflow-wrap: break-word;
  }
`;
