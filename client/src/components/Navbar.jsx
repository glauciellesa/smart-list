import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { User2 } from "lucide-react";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="menu_logo">
        <NavLink to="/">
          <img src={logo} alt="logo's image" />
        </NavLink>
      </div>
      <nav className="menu_navbar">
        {/* link need to be show only when user is loged */}
        <div className="userMenu">
          <NavLink to="recipes"> Recipes</NavLink>
          <NavLink to="shoppingList"> Shopping list</NavLink>
          <NavLink to="register"> Register</NavLink>
        </div>
        <NavLink to="login">
          <User2 />
        </NavLink>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  align-self: center;
  background-color: #fefaeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  /*  box-shadow: -1px 2px 2px hsl(33deg 100% 91% /0.333); */
  img {
    padding-top: 2.5rem;
    position: relative;
    width: 10rem;
  }

  .menu_navbar a {
    padding-left: 1rem;
    color: #4d4d4d;
  }

  .menu_navbar .active,
  .menu_navbar a:hover {
    color: #000;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
    font-weight: bold;
  }

  .userMenu {
    display: none;
  }

  @media (min-width: 600px) {
    .menu_navbar {
      display: flex;
      align-items: flex-end;
    }

    .userMenu {
      display: block;
    }
  }
`;
