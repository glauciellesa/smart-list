import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque delectus
        rem, praesentium magnam nostrum corporis velit assumenda, recusandae
        iure, incidunt vitae facilis asperiores. Eius autem eum ipsum maxime
        facilis suscipit?
      </p>
      <div className="home_button">
        <NavLink to="list">List</NavLink>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
