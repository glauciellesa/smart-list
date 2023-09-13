import { styled } from "styled-components";
import useProducts from "../hooks/useProducts";

const InputOptions = () => {
  const { data, isLoading, error } = useProducts("products", "getProducts");
  console.log(data.allProduct);

  const handleOptionClick = () => {};

  return (
    <StyledInputOptions>
      <ul className="listContainer">
        {isLoading ? (
          <p className="loading"> Loading... </p>
        ) : (
          <>
            {data?.allProduct
              ? data.allProduct.map((option) => {
                  console.log(option);
                  return (
                    <li
                      className="listProduct"
                      key={option.id}
                      onClick={() => handleOptionClick(option.text)}
                    >
                      <button>+</button>
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
  height: 40rem;
  overflow-y: scroll;

  .listContainer {
  }

  .listProduct {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    padding: 1.5%;
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

  .listProduct button {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 22px;
    border: none;
    color: #515050d7;
  }

  @media (min-width: 600px) {
    width: 101%;
  }
`;
