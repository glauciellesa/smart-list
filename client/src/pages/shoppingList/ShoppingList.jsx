import { styled } from "styled-components";

import CreateNewList from "src/components/CreateNewList";
import useShoppingList from "src/hooks/useShoppingList";
import { Link } from "react-router-dom";

const ShoppingList = () => {
  const { data, isLoading, error } = useShoppingList("shoppingLists");
  console.log("eu", { data });

  return (
    <StyledShoppingList>
      {error ? (
        <div className="error">{error}</div>
      ) : isLoading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <>
          {data.map((shoppingList) => {
            console.log({ shoppingList });
            return (
              <Link to={shoppingList._id}>
                <div>{shoppingList.listName}</div>
              </Link>
            );
          })}
        </>
      )}
    </StyledShoppingList>
  );
};

export default ShoppingList;

const StyledShoppingList = styled.div`
  padding: 2rem;
  font-size: large;
`;
