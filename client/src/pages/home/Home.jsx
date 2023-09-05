import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Recipes from "../../components/Recipes";
import recipes from "../../../data/recipes.json";
import CarouselComponent from '../../../src/components/CarouselComponent';

const Home = () => {
  return (
    <StyledHome>
      <div className="recipes">
        <StyledNavLink to="recipes">Explore All Recipes</StyledNavLink>
        <CarouselComponent recipes={recipes.recipes} /> {/* Use the carousel component */}
        <Recipes />
      </div>
      <div className="shoppingList">
        <StyledNavLink to="list">Shopping List</StyledNavLink>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  border-radius: 20px; /* Adjust the value as needed */
  overflow: hidden;

  @media (min-width: 600px) {
    padding: 1%;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: rgb(113, 72, 105);
  font-size: 2rem;
  margin-bottom: 4%;
`;

export default Home;



