import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import CarouselComponent from "src/components/CarouselComponent";
import { useAuthContext } from "src/hooks/useAuthContex";
import NewList from "src/components/NewList";
import Modal from "src/components/Modal";
import { useState } from "react";
import useShoppingList from "../../hooks/useShoppingList"; 

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  const { user } = useAuthContext();
  const { data, isLoading, error } = useShoppingList("shoppingLists");

  return (
    <StyledHome>
      <div className="home">
        <p className="userName">
          Hello, <span>{user ? user.fullName : ""}</span>
        </p>
        {user ? (
          <div className="userList_home">
            <div
              onClick={() => {
                setshowModal((prev) => !prev);
              }}
            >
              <p>Create a new list</p>
              <button className="newList_btn">+</button>
              <Modal
                shouldShow={showModal}
                onRequestClose={() => {
                  setshowModal((prev) => !prev);
                }}
              >
                <NewList handleModal={setshowModal} />
              </Modal>
            </div>
          </div>
        ) : null}
      </div>
      <div className="home_recipes">
        <NavLink to="recipes">
          <h2 className="title">Explore All Recipes</h2>
        </NavLink>
        <CarouselComponent />
      </div>
      {user ? (
        <div className="shoppingList">
          <NavLink to="/shoppingList">
            <h2 className="title">Shopping List</h2>
          </NavLink>
          {isLoading ? (
            <p>Loading shopping list...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ul>
              {data.map((listName) => (
                <li key={listName.id}>{listName.name}</li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  padding: 0 1rem;

  .userName {
    font-weight: 100;
    font-size: 2rem;
    padding-top: 10%;
    color: #704869;
  }

  .userName span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #ed6d5a;
  }

  .title {
    color: #704869;
    font-size: 2rem;
    font-weight: 400;
    padding: 3rem 0;
  }

  .title:hover {
    cursor: pointer;
    color: #ed6d5a;
  }

  .loading {
    text-align: left;
    color: #704869;
  }

  .userList_home div {
    padding: 0rem 2rem 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 2%;
  }

  .userList_home p {
    font-size: 1.4rem;
    font-weight: 600;
    color: #704869;
    padding: 0.3rem 2rem 0.3rem 0.5rem;
    text-align: left;
  }

  .newList_btn {
    border: none;
    cursor: pointer;
    font-size: 1.7rem;
    height: 2rem;
    width: 2rem;
    text-align: center;
    background: #704869;
    border-radius: 50px;
    color: #d6cdc2;
  }

  @media (min-width: 600px) {
  }
`;

