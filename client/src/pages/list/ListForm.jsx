import React, { useState } from 'react';

const CreateListForm = ({ addItem }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="CreateListForm">
      <h2>Create your list</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Add your items'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
          <option value="cereals">Cereals and Bread</option>
          <option value="meat">Meat, Chicken and Fish</option>
          <option value="cleaning">Cleaning Products</option>
          <option value="beauty">Beauty Products</option>
          <option value="drinks">Drinks</option>
        </select>
        <button type="submit">Create your list</button>
      </form>
    </div>
  );
};

export default CreateListForm;

