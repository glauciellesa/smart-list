import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MenuShoppingList from "src/MenuShoppingList";

const ShoppingListLayout = ({ children }) => {
  return (
    <StyledLayoutList>
      <div className="menu">
        <MenuShoppingList />
      </div>
      <div className="list_products">
        <Outlet />
      </div>
    </StyledLayoutList>
  );
};

export default ShoppingListLayout;

const StyledLayoutList = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .menu {
    width: 93vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .list_products {
    width: 93vw;
  }

  @media (min-width: 600px) {
    padding: 3rem;
    flex-direction: row;

    .menu {
      width: 20vw;
      border-right: 1px solid #51505015;
    }

    .list_products {
      width: 60vw;
    }
  }
`;
