import React, { useState } from "react";
import styled from "styled-components";
import emptyCartImage from "../img/additemsimg.png"; // Import your empty cart image
import itemsData from "../../data/items.json"; // Import your items data

const AddProductList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

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
      updatedItems.splice(index, 1);
    }
    setItems(updatedItems);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    // Filter options based on user input
    const filtered = itemsData.filter((item) =>
      item.text.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true);
  };

  const handleOptionClick = (optionText) => {
    setInputValue(optionText);
    setShowOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    if (inputValue) {
      addItem(inputValue);
    }
  };


  return (
    <StyledAddProductList>
      {/* Input field with a plus sign */}
      <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add an item..."
          value={inputValue}
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
      </div>
      </form>

      {/* Options dropdown */}
      {showOptions && filteredOptions.length > 0 && (
        <div className="options">
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option.text)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Conditional rendering for the image */}
      {items.length === 0 ? (
        <img
          src={emptyCartImage}
          alt="Empty Cart"
          className="empty-cart-image"
        />
      ) : (
        // Render the list of items
        <ul>
          {items.map((item, index) => (
            <li key={index}>
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
      )}
    </StyledAddProductList>
  );
};

const StyledAddProductList = styled.div`
.input-container {
    display: flex; /* Apply flexbox */
    align-items: center; /* Center vertically */
  }

  img {
    max-width: 90%;
  }

  input {
    padding: 8px;
    border-radius: 25px;
    width: 70%;
    border: solid 2px #704869;
    margin-right: 3%;
    margin-left: 3%;
  }

    .add-button {
        background-color: #704869;
    color: white;
    }


  button {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 22px;
    border: none;
  }

  li {
    display: flex;
    flex-direction: row;
    padding: 2%;
    margin-right: 2%;
    align-items: center;
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

`;

export default AddProductList;


// import React, { useState } from "react";
// import styled from "styled-components";
// import emptyCartImage from "../img/additemsimg.png"; // Import your empty cart image

// const AddProductList = () => {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const addItem = (itemName) => {
//     setItems([...items, { name: itemName, quantity: 1 }]);
//     setInputValue("");
//   };

//   const increaseQuantity = (index) => {
//     const updatedItems = [...items];
//     updatedItems[index].quantity++;
//     setItems(updatedItems);
//   };

//   const decreaseQuantity = (index) => {
//     const updatedItems = [...items];
//     if (updatedItems[index].quantity > 1) {
//       updatedItems[index].quantity--;
//     } else {
//       // If quantity is 1, remove the item
//       updatedItems.splice(index, 1);
//     }
//     setItems(updatedItems);
//   };

//   return (
//     <StyledAddProductList>
//       {/* Input field with a plus sign */}
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add an item..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="add-button"
//           onClick={() => {
//             if (inputValue) {
//               addItem(inputValue);
//             }
//           }}
//         >
//           +
//         </button>
//       </div>

//       {/* Conditional rendering for the image */}
//       {items.length === 0 ? (
//         <img src={emptyCartImage} alt="Empty Cart" className="empty-cart-image" />
//       ) : (
//         // Render the list of items
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>
//               <span className="item-name">
//         {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
//       </span>
//       <span className="quantity">{item.quantity}</span>
//       <button className="plus-button" onClick={() => increaseQuantity(index)}>
//         +
//       </button>
//       <button className="minus-button" onClick={() => decreaseQuantity(index)}>
//         -
//       </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </StyledAddProductList>
//   );
// };

// const StyledAddProductList = styled.div`
// .input-container {
//     display: flex; /* Apply flexbox */
//     align-items: center; /* Center vertically */
//   }

//   img {
//     max-width: 90%;
//   }

//   input {
//     padding: 8px;
//     border-radius: 25px;
//     width: 70%;
//     border: solid 2px #704869;
//     margin-right: 3%;
//     margin-left: 3%;
//   }

//     .add-button {
//         background-color: #704869;
//     color: white;
//     }


//   button {
//     border-radius: 50%;
//     width: 35px;
//     height: 35px;
//     font-size: 22px;
//     border: none;
//   }

//   li {
//     display: flex;
//     flex-direction: row;
//     padding: 2%;
//     margin-right: 2%;
//     align-items: center;
//   }

//   .item-name {
//     flex-grow: 1; /* Allow the item name to take up available space */
//     text-transform: capitalize; /* Capitalize the first letter of the name */
//     margin-right: 10px; /* Add right margin to separate from quantity */
//   }
  
//   .plus-button,
// .minus-button {
//   background: none;
//   border: none;
//   color: #ed6d5a;
//   font-size: 24px;
//   margin-left: 5px; /* Add left margin to separate buttons */
// }

// /* Add space between buttons */
// .plus-button {
//   margin-right: 5px; /* Add right margin to separate from "-" button */
//   margin-left: 8%;
// }

// `;

// export default AddProductList;
