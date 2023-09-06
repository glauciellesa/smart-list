import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import useShoppingList from "src/hooks/useShoppingList";

const ShoppingListLayout = ({ children }) => {
  const { data, isLoading, error } = useShoppingList("shoppingLists");

  return (
    <StyledLayoutList>
      <div className="menu">
        {data.map((list) => (
          <nav className="menu_list">
            <NavLink to={`${list._id}`}>{list.listName}</NavLink>
            <p className="product_qnt">{`${list.productLists.length} items`}</p>
          </nav>
        ))}
        <div className="newList"> + Create new List</div>
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
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  .menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-right: 1px solid #51505015;
  }

  .menu_list {
    display: flex;
    flex-direction: column;
  }

  .menu_list a {
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0 1rem 0 0;
    color: #4d4d4d;
  }

  .product_qnt {
    color: #515050d7;
  }

  .active,
  a:hover {
    color: #ed6d5a;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
    font-weight: bold;
  }

  .newList {
    font-weight: 600;
    font-size: 1.1rem;
    padding: 1rem 0 0 2rem;
    color: #ed6d5a;
  }
`;
