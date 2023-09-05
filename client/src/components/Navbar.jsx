import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserCircle } from "lucide-react";

import logo from "../img/logo.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContex";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  console.log({ user });

  const handleClick = () => {
    logout();
  };

  return (
    <StyledNavbar>
      <div className="menu_logo">
        <NavLink to="/">
          <img src={logo} alt="logo's image" />
        </NavLink>
      </div>
      <nav className="menu_navbar">
        {user ? (
          <div className="logged">
            <div className="menu_logged">
              <NavLink to="shoppingList" className="menuBotton">
                Shopping list
              </NavLink>
              <NavLink to="recipes" className="menuBotton">
                Recipes
              </NavLink>
            </div>
            <div className="logDiv">
              <button className="logout" onClick={handleClick}>
                Logout
              </button>
              <NavLink className="login" to="login">
                <img
                  src={`https://github.com/${user.githubAccount}.png`}
                  alt={`${user.fullName}'s photo`}
                />
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="notLogged">
            <NavLink to="recipes" className="menuBotton">
              Recipes
            </NavLink>
            <div className="logDiv">
              <NavLink to="register">Register</NavLink>
              <NavLink className="login" to="login">
                <UserCircle />
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #fefaeb;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu_logo img {
    padding-top: 2.5rem;
    position: relative;
    width: 10rem;
  }

  .menu_navbar {
    width: 100%;
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

  .notLogged {
    display: flex;
    justify-content: right;
  }

  .login svg {
    width: 2.3rem;
    height: 2.3rem;
    color: #4d4d4da7;
    padding-bottom: -1rem;
  }

  .login img {
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 50%;
  }

  .logged {
    padding-left: 2rem;
    width: 100%;
    gap: 1rem;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  .menu_logged {
    width: 100%;
    display: flex;
  }

  .logout {
    padding: 0.2rem;
    font-weight: 600;
    color: #ed6d5a;
    border: 2px solid #ed6d5a;
    border-radius: 5px;
    background-color: #fefaeb;
  }

  .logDiv {
    display: flex;
    align-items: center;
  }

  .menuBotton {
    display: none;
  }

  @media (min-width: 600px) {
    .menu_navbar {
      display: flex;
      align-items: center;
    }

    .userMenu {
      display: block;
    }

    .menuBotton {
      display: block;
    }

    .notLogged {
      padding-left: 2rem;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
