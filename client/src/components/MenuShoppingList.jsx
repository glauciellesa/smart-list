import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import useShoppingList from "src/hooks/useShoppingList";
import Modal from "./Modal";
import NewList from "./NewList";
import shoppingListService from "../service/shoppingListService";

const MenuShoppingList = () => {
  const [showModal, setshowModal] = useState(false);
  const { data, isLoading, error } = useShoppingList("shoppingLists");

  const handleEdit = async () => {};
  const handleDelete = async (id) => {
    await shoppingListService.deleteShoppingLists(`shoppingLists/${id}`);
    shoppingListService.getShoppingLists("shoppingLists");
  };

  return (
    <StyledMenu>
      {error ? <div className="error">{error}</div> : null}
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
        <NewList handleModal={setshowModal} />
      </Modal>
      {isLoading ? (
        <p className="loading"> Loading... </p>
      ) : (
        data.map((list) => (
          <nav className="menu_list" key={list._id}>
            <div className="actions_menu">
              <NavLink to={`${list._id}`}>{list.listName}</NavLink>
              <div>
                <Pencil onClick={() => handleEdit(list._id)} />

                <Trash
                  onClick={() => {
                    handleDelete(list._id);
                  }}
                />
              </div>
            </div>
            <p className="product_qnt">{`${list.productLists.length} items`}</p>
          </nav>
        ))
      )}
    </StyledMenu>
  );
};

export default MenuShoppingList;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

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
  .actions_menu {
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
  }

  .actions_menu div {
    display: flex;
    gap: 1rem;
  }

  .actions_menu svg {
    width: 0.8rem;
    color: #515050d7;
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
    text-align: right;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 2rem;
    color: #ed6d5a;
  }

  @media (min-width: 600px) {
    .newList {
      padding: 1rem 1rem 1rem 0;
    }
  }
`;
