import { styled } from "styled-components";
import { ShoppingBasket, Trash } from "lucide-react";
import { useState } from "react";
import productShoppingList from "src/service/productShoppingList";
import { useNavigate } from "react-router-dom";

const CardProductInList = (props) => {
  const [quantity, setQuantity] = useState(props.productQnt);
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(1);
    }
    setItems(updatedItems);
  };

  const handleDelete = async (id) => {
    await productShoppingList.deleteProductFromLists(
      `shoppingLists/${props.shoppingListId}/products/${id}`
    );
  };

  return (
    <StyledCardProduct>
      {props.productCategory}
      <div className="container">
        <div className="product">
          <div className="productImg">
            {props.productImg ? (
              <img
                src={`https://source.unsplash.com/${props.productImg}`}
                alt={`Pictures of ${props.productName}`}
              />
            ) : (
              <ShoppingBasket />
            )}
          </div>
          <div className="productName">
            {props.productName}
            {quantity ? (
              <>
                <span className="productQnt">{`Qnt: ${quantity}`}</span>
                <button className="plus-button" onClick={increaseQuantity}>
                  +
                </button>
                <button className="minus-button" onClick={decreaseQuantity}>
                  -
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="productDelete">
          <Trash
            onClick={() => {
              handleDelete(props.idProductFromList);
            }}
          />
        </div>
      </div>
    </StyledCardProduct>
  );
};

export default CardProductInList;

const StyledCardProduct = styled.li`
  padding: 1rem;
  list-style: none;

  .container {
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    width: 100%;
  }
  .product {
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }

  .productImg img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }

  .productName {
    padding-left: 1rem;
    text-transform: capitalize;
  }

  .productQnt {
    color: #515050d7;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }

  .plus-button {
    padding-right: 0.5rem;
  }

  .plus-button,
  .minus-button {
    background: none;
    border: none;
    color: #ed6d5a;
    font-size: 1.2rem;
    margin-left: 5px; /* Add left margin to separate buttons */
  }

  .productDelete svg {
    width: 0.8rem;
    color: #515050d7;
  }
`;
