import { NavLink } from "react-router-dom";
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
            <h2 className="title">My shopping List</h2>
          </NavLink>
          {isLoading ? (
            <p>Loading shopping list...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="listContainer">
              <ul>
                {data.map((listItem) => (
                  <li key={listItem._id} className="listItem">
                    <NavLink to={`/shoppingList/${listItem._id}`}>
                      {listItem.listName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : null}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  padding: 1rem 1rem 4rem 1rem;

  .userName {
    font-weight: 100;
    font-size: 1.5rem;
    padding-top: 2rem;
    color: #704869;
  }

  .userName span {
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 400;
    color: #ed6d5a;
  }

  .title {
    color: #704869;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1.5rem 0;
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
    padding-top: 1.5rem;
  }

  .shoppingList {
    padding: 2rem 0;
  }
  .userList_home p {
    font-size: 1rem;
    font-weight: 600;
    color: #704869;
    padding: 0.3rem 2rem 0.3rem 0.5rem;
    text-align: left;
  }

  .newList_btn {
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
    background: #704869;
    border-radius: 50px;
    color: #d6cdc2;
  }

  .listItem {
    list-style: none;
    padding-left: 1rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .listItem a {
    color: #4d4d4d;
  }

  .listItem a:hover {
    cursor: pointer;
    color: #ed6d5a;
  }

  @media (min-width: 600px) {
    .userName {
      font-size: 2rem;
    }

    .userName span {
      font-size: 1.5rem;
    }

    .listItem {
      padding-left: 2rem;
    }

    .title {
      font-size: 2rem;
    }

    .userList_home p {
      font-size: 1.4rem;
    }

    .newList_btn {
      font-size: 1.5rem;
      height: 2rem;
      width: 2rem;
    }
  }
`;
