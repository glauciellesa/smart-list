import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import useShoppingList from "src/hooks/useShoppingList";
import { useState } from "react";
import Modal from "../Modal";
import NewList from "../NewList";

const ShoppingListLayout = ({ children }) => {
  const { data, isLoading, error } = useShoppingList("shoppingLists");
  const [showModal, setshowModal] = useState(false);
  const createdNewListName = (newListName) => {
    console.log({ newListName });
  };
  return (
    <StyledLayoutList>
      <div className="menu">
        {data.map((list) => (
          <nav className="menu_list">
            <NavLink to={`${list._id}`}>{list.listName}</NavLink>
            <p className="product_qnt">{`${list.productLists.length} items`}</p>
          </nav>
        ))}
        <div
          className="newList"
          onClick={() => {
            setshowModal((prev) => !prev);
          }}
        >
          + Create new List
        </div>
        <Modal
          shouldShow={showModal}
          onRequestClose={() => {
            setshowModal((prev) => !prev);
          }}
        >
          <NewList
            handleModal={setshowModal}
            onAddNewListName={createdNewListName}
          />
        </Modal>
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
  flex-direction: column;

  .menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    font-weight: bold;
  }

  .newList {
    font-weight: 600;
    font-size: 1.1rem;
    padding: 1rem 1rem 0 2rem;
    color: #ed6d5a;
  }

  .list_products {
    padding-top: 1.5rem;
  }

  @media (min-width: 600px) {
    flex-direction: row;

    .menu {
      border-right: 1px solid #51505015;
    }

    .list_products {
      padding-left: 1.5rem;
    }
  }
`;
