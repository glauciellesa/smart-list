import React, { useState } from "react";
import styled from "styled-components";
import emptyCartImage from "../img/additemsimg.png"; // Import your empty cart image

const AddProductList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = (itemName) => {
    setItems([...items, { name: itemName, quantity: 1 }]);
    setInputValue("");
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity++;
    setItems(updatedItems);
  };

  const decreaseQuantity = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity--;
    } else {
      // If quantity is 1, remove the item
      updatedItems.splice(index, 1);
    }
    setItems(updatedItems);
  };

  return (
    <div>
      {/* Input field with a plus sign */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Add an item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            if (inputValue) {
              addItem(inputValue);
            }
          }}
        >
          +
        </button>
      </div>

      {/* Conditional rendering for the image */}
      {items.length === 0 ? (
        <img src={emptyCartImage} alt="Empty Cart" className="empty-cart-image" />
      ) : (
        // Render the list of items
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} {item.quantity}
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => decreaseQuantity(index)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddProductList;

const StyledAddProductList = styled.div``;
