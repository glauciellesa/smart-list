import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";

import useShoppingList from "src/hooks/useShoppingList";
import Modal from "./Modal";
import NewList from "./NewList";

const MenuShoppingList = () => {
  const [showModal, setshowModal] = useState(false);
  const { data, isLoading, error } = useShoppingList("shoppingLists");
  const createdNewListName = (newListName) => {
    console.log({ newListName });
  };
  return (
    <StyledMenu>
      {error ? <div className="error">{error}</div> : null}
      {isLoading ? (
        <p className="loading"> Loading... </p>
      ) : (
        data.map((list) => (
          <nav className="menu_list">
            <NavLink to={`${list._id}`}>{list.listName}</NavLink>
            <p className="product_qnt">{`${list.productLists.length} items`}</p>
          </nav>
        ))
      )}
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
    </StyledMenu>
  );
};

export default MenuShoppingList;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
`;
