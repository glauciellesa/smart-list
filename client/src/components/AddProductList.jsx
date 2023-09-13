import React, { useState } from "react";
import styled from "styled-components";
import itemsData from "../../data/items.json"; // Import your items data
import InputOptions from "./InputOptions";

const AddProductList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  /*  const addItem = (itemName) => {
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
      updatedItems.splice(index, 1);
    }
    setItems(updatedItems);
  };

 */

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    /*  // Filter options based on user input
    const filtered = itemsData.filter((item) =>
      item.text.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true); */
  };

  const showProductOptions = () => {
    setShowOptions(true);
  };

  const hideProductOptions = () => {
    setShowOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    if (inputValue) {
      console.log(inputValue);
    }
  };

  return (
    <StyledAddProductList>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add an item..."
          value={inputValue}
          onFocus={showProductOptions}
          onBlur={hideProductOptions}
          onChange={handleInputChange}
        />
        <button
          className="add-button"
          onClick={() => {
            if (inputValue) {
              addItem(inputValue);
            }
          }}
        >
          +
        </button>
      </form>
      {showOptions ? (
        <div className="productsOption">
          <InputOptions />
        </div>
      ) : null}

      {/*  {
        <ul>
          {items.map((item, index) => (
            <li className="itemsAdded" key={index}>
              <span className="item-name">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </span>
              <span className="quantity">{item.quantity}</span>
              <button
                className="plus-button"
                onClick={() => increaseQuantity(index)}
              >
                +
              </button>
              <button
                className="minus-button"
                onClick={() => decreaseQuantity(index)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      } */}
    </StyledAddProductList>
  );
};

const StyledAddProductList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .input-container {
    display: flex; /* Apply flexbox */
    align-items: center; /* Center vertically */
    margin-bottom: 4%;
    width: 100%;
  }

  .input-container input {
    z-index: 9999;
    padding: 10px;
    font-size: 1rem;
    border-radius: 25px;
    width: 80%;
    border: solid 2px #704869;
    margin-right: 3%;
    margin-left: 3%;
  }

  .add-button {
    z-index: 9999;
    background-color: #704869;
    color: white;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 22px;
    border: none;
  }

  .productsOption {
    display: block;
    position: absolute;
    top: -1rem;
    width: 100%;
  }

  .itemsAdded {
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 1.5%;
    margin-left: 2%;
    border-radius: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }

  .item-name {
    flex-grow: 1; /* Allow the item name to take up available space */
    text-transform: capitalize; /* Capitalize the first letter of the name */
    margin-right: 10px; /* Add right margin to separate from quantity */
  }

  .plus-button,
  .minus-button {
    background: none;
    border: none;
    color: #ed6d5a;
    font-size: 24px;
    margin-left: 5px; /* Add left margin to separate buttons */
  }

  /* Add space between buttons */
  .plus-button {
    margin-right: 5px; /* Add right margin to separate from "-" button */
    margin-left: 8%;
  }

  @media (min-width: 600px) {
    .productsOption {
      left: 0.2rem;
    }
  }
`;

export default AddProductList;
