import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Recipes from "../../components/Recipes";

const Home = () => {
  return (
    <StyledHome>
      <div className="recipes">
        <h1>
          <NavLink to="recipes">Explore All Recipes</NavLink>
        </h1>
        three recipe carousel limiter
        <Recipes />
      </div>
      <div className="shoppingList">
        <h1>
          <NavLink to="list">Shopping List</NavLink>
        </h1>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`;
