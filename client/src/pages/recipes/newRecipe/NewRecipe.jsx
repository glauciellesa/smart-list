import React from 'react';
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
  const { addRecipe, error, isLoading } = useNewRecipe();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleRecipe = async (e) => {
    e.preventDefault();
    await register(form);

    setForm(initialState);
  };

  return (
    <StyleNewRecipe>
      <form>
        <div className="addAndSave">
          <h1>New Recipe</h1>
          <button onClick={handleRecipe} disabled={isLoading}>
            Save
          </button>
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
        <label name="timeToPrepare">Time to prepare</label>
        <input
          type="text"
          id="timeToPrepare"
          placeholder="How long does it take to prepare?"
          onChange={handleChange}
          value={form.timeToPrepare}
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
`;
