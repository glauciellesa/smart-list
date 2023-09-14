import React, { useState } from "react";
import styled from "styled-components";
import InputOptions from "./InputOptions";
import productsService from "../service/productsService";
import { useAuthContext } from "../hooks/useAuthContex";
import { useAddProductIntoList } from "src/hooks/useAddProductIntoList";
import { useNavigate } from "react-router-dom";

const AddProductList = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const { addNewProductIntoList } = useAddProductIntoList();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const showProductOptions = () => {
    setShowOptions(true);
  };

  const hideProductOptions = () => {
    setShowOptions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue("");

      const addedProduct = await productsService.createNewProduct(
        "products",
        {
          product_name: inputValue,
        },
        user._id
      );

      await addNewProductIntoList(
        `shoppingLists/${props.shoppingListId}/products`,
        { product_id: addedProduct.data.createdproduct._id },
        user._id
      );
      navigate(`/shoppingList/${props.shoppingListId}`);
    }
  };

  return (
    <StyledAddProductList>
      {showOptions ? (
        <div className="modal-input" onClick={hideProductOptions}></div>
      ) : null}
      <div className="container">
        <form className="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add an item..."
            value={inputValue}
            onFocus={showProductOptions}
            onChange={handleInputChange}
          />
          <button className="add-button" type="submit">
            +
          </button>
        </form>
        {showOptions ? (
          <div className="productsOption">
            <InputOptions
              shoppingListId={props.shoppingListId}
              inputValue={inputValue}
            />
          </div>
        ) : null}
      </div>
    </StyledAddProductList>
  );
};

const StyledAddProductList = styled.div`
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .modal-input {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 998;
  }

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
