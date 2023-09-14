import { styled } from "styled-components";
import { Check } from "lucide-react";
import useProducts from "src/hooks/useProducts";
import { useState } from "react";
import { useAuthContext } from "src/hooks/useAuthContex";
import { useAddProductIntoList } from "src/hooks/useAddProductIntoList";
import { useNavigate } from "react-router-dom";

const InputOptions = (props) => {
  const [selected, setSelected] = useState(null);
  const { user } = useAuthContext();
  const { addNewProductIntoList } = useAddProductIntoList();
  const navigate = useNavigate();
  const { data, isLoading, error } = useProducts(
    `products?name=${props.inputValue}`,
    "getProductByName"
  );

  console.log(`products?name=${props.inputValue}`, "getProductByName");

  /*  if (props.inputValue) {
    console.log(props.inputValue);
    const { data, isLoading, error } = useProducts(
      `/products?name=${props.inputValue}`,
      "getProductByName"
    );
  } else {
  } */

  const selectOption = async (id) => {
    setSelected(id);
    const idProductSelected = id;

    await addNewProductIntoList(
      `shoppingLists/${props.shoppingListId}/products`,
      { product_id: idProductSelected },
      user._id
    );
    navigate(`/shoppingList/${props.shoppingListId}`, {
      state: new Date().getTime(),
    });
  };

  return (
    <StyledInputOptions>
      <ul className="listContainer">
        {isLoading ? (
          <p className="loading"> Loading... </p>
        ) : (
          <>
            {data?.allProduct
              ? data.allProduct.map((option) => {
                  return (
                    <li
                      className="listProduct"
                      key={option._id}
                      onClick={() => {
                        selectOption(option._id);
                      }}
                    >
                      {selected === option._id ? (
                        <button className="selectedProduct">
                          <Check />
                        </button>
                      ) : (
                        <button className="listProductBtn">+</button>
                      )}
                      {/* <button className="listProductBtn">+</button> */}
                      <p className="productName">{option.product_name}</p>
                      <div className="productImg">
                        <img
                          src={`https://source.unsplash.com/${option.image}`}
                          alt={`Pictures of ${option.product_name}`}
                        />
                      </div>
                    </li>
                  );
                })
              : null}
          </>
        )}
      </ul>
    </StyledInputOptions>
  );
};

export default InputOptions;

const StyledInputOptions = styled.div`
  padding: 5rem 1rem 1rem;
  background-color: #fefaeb;
  box-shadow: 0px 32px 30px #d6cdc2;
  border-radius: 5px;
  width: 100%;
  height: 28rem;
  overflow-y: scroll;
  position: sticky;
  z-index: 9995;

  .listContainer {
  }

  .listProduct {
    display: flex;
    gap: 0.8rem;
    flex-direction: row;
    padding: 0.8rem 0;
    margin-right: 2%;
    align-items: center;
  }

  .productImg {
    width: 2rem;
    height: 2rem;
  }

  .productImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .productName {
    text-transform: capitalize;
  }

  .listProductBtn {
    font-size: 1.5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: none;
    color: #515050d7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selectedProduct {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: #ed6d5a;
    color: #fefaeb !important;
    font-weight: 700 !important;
  }

  .selectedProduct svg {
    width: 1.5rem;
    text-align: center;
  }

  @media (min-width: 600px) {
    width: 101%;
  }
`;
