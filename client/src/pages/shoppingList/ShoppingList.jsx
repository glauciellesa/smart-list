import { styled } from "styled-components";
import shoppingList from "../../../data/shoppingList.json";
import CreateNewList from "../../components/CreateNewList";

const ShoppingList = () => {
  console.log(shoppingList);
  return (
    <StyledShoppingList>
      {shoppingList.map((user) => {
        console.log("use", user);
        return (
          <div key={Math.random() * 100}>
            {user.lists.map((list) => {
              console.log("my", list);
              return (
                <div key={Math.random() * 10}>
                  <div>
                    <CreateNewList list={list} />
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        );
      })}
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
