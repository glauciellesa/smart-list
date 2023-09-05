import { useState } from 'react';
import { styled } from 'styled-components';

const initialState = {
  photo: '',
  name: '',
  timeToPrepare: '',
  ingredients: [''],
  instructions: '',
};

const NewRecipe = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleRecipe = async (e) => {
    e.preventDefault();

    setForm(initialState);
  };

  return (
    <StyleNewRecipe>
      <form>
        <div className="addAndSave">
          <h1>New Recipe</h1>
          <button onClick={handleRecipe}>Save</button>
        </div>
        <label name="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Give your recipe a name"
          onChange={handleChange}
          value={form.name}
          required
        />
        <label name="photo">Photo</label>
        <input
          type="file"
          id="photo"
          placeholder="Add a photo"
          onChange={handleChange}
          value={form.photo}
          required
        />
        <label name="timeToPrepare">Time to prepare</label>
        <input
          type="time"
          id="timeToPrepare"
          placeholder="How long does it take to prepare?"
          onChange={handleChange}
          value={form.timeToPrepare}
          required
        />
        <label name="ingredients">Ingredients</label>
        <input
          type="text"
          id="ingredients"
          placeholder="What ingredients do you need?"
          onChange={handleChange}
          value={form.ingredients}
          required
        />
        <label name="instructions">Instructions</label>
        <input
          type="text"
          id="instructions"
          placeholder="How do you prepare it?"
          onChange={handleChange}
          value={form.instructions}
          required
        />
      </form>
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
    width: 100%;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  h1 {
    color: #704869;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 700;
  }

  button {
    background-color: #ed6d5a;
    color: white;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
    cursor: pointer;
    width: 50px;
    border-radius: 5px;
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

  input {
    text-align: left;
    padding: 0.7rem;
    background-color: white;
    width: 300px;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
  }
`;
