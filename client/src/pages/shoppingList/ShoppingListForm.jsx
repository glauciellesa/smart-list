import React, { useState } from 'react';

const ListForm = ({ addItem, categories }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value, category);
    setValue('');
    setCategory('');
  };

  return (
    <div className="CreateListForm">
      <h2>Create your list</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your items"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Create your list</button>
      </form>
    </div>
  );
};

export default ListForm;

