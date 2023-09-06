import { styled } from "styled-components";

import CreateNewList from "src/components/CreateNewList";
import useShoppingList from "src/hooks/useShoppingList";
import { Link } from "react-router-dom";

const ShoppingList = () => {
  const { data, isLoading, error } = useShoppingList("shoppingLists");

  return (
    <StyledShoppingList>
      {error ? (
        <div className="error">{error}</div>
      ) : isLoading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <h1> MY Listtt</h1>
        /*  <>
          {data.map((shoppingList) => {
            return (
              <Link to={shoppingList._id}>
                <div key={shoppingList._id}>{shoppingList.listName}</div>
              </Link>
            );
          })}
        </> */
      )}
    </StyledShoppingList>
  );
};

export default ShoppingList;

const StyledShoppingList = styled.div`
  padding: 2rem;
  font-size: large;
`;
