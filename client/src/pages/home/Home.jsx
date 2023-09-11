import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import CarouselComponent from "src/components/CarouselComponent";
import { useAuthContext } from "src/hooks/useAuthContex";
import NewList from "src/components/NewList";
import Modal from "src/components/Modal";
import { useState } from "react";

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  const { user } = useAuthContext();

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
          <NavLink to="list">
            <h2 className="title">Shopping List</h2>
          </NavLink>
        </div>
      ) : null}
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 0 1rem;

  .userName {
    font-weight: 100;
    font-size: 2rem;
    padding-top: 4rem;
    color: #704869;
  }

  .userName span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #ed6d5a;
  }

  .title {
    color: #ed6d5a;
    font-size: 2rem;
    font-weight: 400;
    padding: 4rem 0;
  }

  .title:hover {
    cursor: pointer;
  }

  .loading {
    text-align: left;
    color: #704869;
  }

  .userList_home div {
    padding: 2rem 2rem 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

export default Home;
