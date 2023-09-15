import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import useShoppingList from "src/hooks/useShoppingList";
import Modal from "./Modal";
import NewList from "./NewList";
import shoppingListService from "../service/shoppingListService";
import { useNavigate } from "react-router-dom";

const MenuShoppingList = () => {
  const [showModal, setshowModal] = useState(false);
  const { data, isLoading, error } = useShoppingList("shoppingLists");
  const navigate = useNavigate();

  const handleEdit = async () => {};
  const handleDelete = async (id) => {
    await shoppingListService.deleteShoppingLists(`shoppingLists/${id}`);
    navigate(".");
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
                {/* <Pencil onClick={() => handleEdit(list._id)} /> */}

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
  padding-bottom: 2rem;

  .menu_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
  }

  .actions_menu div {
    display: flex;
    gap: 1rem;
  }

  .actions_menu svg {
    width: 1.2rem;
    color: #515050d7;
  }

  .product_qnt {
    color: #515050d7;
  }

  .actions_menu .active,
  .actions_menu a:hover {
    color: #ed6d5a;
    font-weight: bold;
  }

  .newList {
    width: 100%;
    text-align: right;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 2rem;
    color: #ed6d5a;
  }

  @media (min-width: 600px) {
    padding: 0;
    position: static;
    z-index: 0;
    background-color: #fefaeb;
    height: 0;
    width: 15rem;

    .newList {
      padding: 1rem 1rem 1rem 0;
      flex-wrap: wrap;
    }

    .menu_list {
      padding: 0 1rem 0 0;
    }
  }
`;
