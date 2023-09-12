import { styled } from "styled-components";
import { ShoppingBasket } from "lucide-react";

const CardProduct = (props) => {
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
            {props.productQnt ? (
              <span className="productQnt"> {props.productQnt}</span>
            ) : null}
          </div>
        </div>
        <div className="productCheck">
          <input name="productCheck" type="checkbox" />
        </div>
      </div>
    </StyledCardProduct>
  );
};

export default CardProduct;

const StyledCardProduct = styled.div`
  padding: 1rem;

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
    padding-left: 0.5rem;
    font-size: 0.6rem;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
`;
