import React, { useState } from 'react';
import ListForm from './ListForm';
import List from './List';

const EditList = () => {
  const initialCategories = [
    'fruits',
    'vegetables',
    'dairy',
    'cereals',
    'meat',
    'cleaning',
    'beauty',
    'drinks'
  ];

  const [items, setItems] = useState([]);

  const addItem = (text, category) => {
    const existingItem = items.find(
      (item) => item.text === text && item.category === category
    );

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItems(updatedItems);
    } else {
      const newItem = {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        quantity: 1,
      };
      setItems([...items, newItem]);
    }
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Smart List App</h1>
      <ListForm addItem={addItem} categories={initialCategories} />
      <div className="create-list">
        {items.map((item) => (
          <List key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>
    </div>
  );
};

export default EditList;
