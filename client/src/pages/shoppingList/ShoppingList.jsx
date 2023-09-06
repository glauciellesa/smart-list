import { styled } from "styled-components";

import CreateNewList from "src/components/CreateNewList";
import useShoppingList from "src/hooks/useShoppingList";

const ShoppingList = () => {
  const { data, loading, error } = useShoppingList("shoppingLists");
  console.log("eu", { data });
  return (
    <StyledShoppingList>
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <>
          {data.map((user) => {
            console.log(user);
            return <div>eu</div>;
          })}
        </>
      )}
    </StyledShoppingList>
  );
};

export default ShoppingList;

const StyledShoppingList = styled.div`
  padding: 2rem;
  border: 1px solid black;
  color: black;
  font-size: large;
`;
