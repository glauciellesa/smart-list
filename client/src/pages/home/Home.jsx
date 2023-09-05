import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import CarouselComponent from "src/components/CarouselComponent";
import { useAuthContext } from "src/hooks/useAuthContex";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <StyledHome>
      <div className="home">
        <p className="userName">
          Hello, <span>{user?.fullName}</span>
        </p>
        <div className="userList_home">
          <Link to="/newList">
            <p>Create a new list</p>
            <button className="newList_btn">+</button>
          </Link>
        </div>
      </div>
      <div className="home_recipes">
        <NavLink to="recipes">
          <h2 className="title">Explore All Recipes</h2>
        </NavLink>
        <CarouselComponent />
      </div>
      <div className="shoppingList">
        <NavLink to="list">
          <h2 className="title">Shopping List</h2>
        </NavLink>
      </div>
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

  .userList_home a {
    padding: 2rem 2rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .userList_home p {
    font-size: 1.4rem;
    font-weight: 600;
    color: #704869;
    padding: 0.3rem 4rem 0.3rem 0.5rem;
    border: 1px solid #704869;
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
