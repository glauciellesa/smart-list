import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Recipes from "../../components/Recipes";
import recipes from "../../../data/recipes.json";
import CarouselComponent from '../../../src/components/CarouselComponent';

const Home = () => {
  return (
    <StyledHome>
      <div className="recipes">
        <h1>
          <NavLink to="recipes">Explore All Recipes</NavLink>
        </h1>
        <CarouselComponent recipes={recipes.recipes} /> {/* Use the carousel component */}
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

const StyledHome = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    padding: 1%;
  }
`;

export default Home;


// const Home = () => {
  
//   return (
//     <StyledHome>
//       <div className="recipes">
//         <h1>
//           <NavLink to="recipes">Explore All Recipes</NavLink>
//         </h1>
//         {recipes.recipes.map((recipe) => (
//   <div className="recipe-slider" key={recipe.id}>
//     <img
//       src={`https://source.unsplash.com/${recipe.photo}/400x300`}
//       alt="Pictures of recipes"
//     />
//   </div>
// ))}



//         <Recipes />
//       </div>
//       <div className="shoppingList">
//         <h1>
//           <NavLink to="list">Shopping List</NavLink>
//         </h1>
//       </div>
//     </StyledHome>
//   );
// };

// export default Home;

// const StyledHome = styled.div`
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;

//   @media (min-width: 600px) {
//     padding: 1rem;
//   }
// `;

