import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserCircle, Home, ClipboardList, ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../img/logo.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContex";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
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
              <NavLink to="shoppingList" className="menuDesktop">
                Shopping list
              </NavLink>
              <NavLink to="recipes" className="menuDesktop">
                Recipes
              </NavLink>
            </div>
            <div className="logDiv">
              <button className="logout" onClick={handleClick}>
                Logout
              </button>
              <NavLink className="login" to="login">
                {user.githubAccount ? (
                  <img
                    src={`https://github.com/${user.githubAccount}.png`}
                    alt={`${user.fullName}'s photo`}
                  />
                ) : (
                  <UserCircle />
                )}
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="notLogged">
            <NavLink to="recipes" className="menuDesktop">
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
      <div className="menuMobile">
        <NavLink to="/">
          <Home />
        </NavLink>
        <NavLink to="recipes">
          <ChefHat />
        </NavLink>
        <NavLink to="shoppingList">
          <ClipboardList />
        </NavLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #fefaeb;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu_logo img {
    padding-left: 1rem;
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

  .notLogged {
    display: flex;
    justify-content: right;
  }

  .login svg {
    width: 2rem;
    height: 2rem;
    color: #4d4d4da7;
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
    justify-content: space-between;
  }

  .menu_logged,
  .userMenu,
  .menuDesktop {
    display: none;
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
    padding-right: 1rem;
  }

  .menuMobile {
    padding: 0 1rem;
    width: 100%;
    z-index: 9999;
    position: fixed;
    bottom: 0;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #704869;
  }

  .menuMobile svg {
    width: 7rem;
    color: #fefaeb;
  }

  .menuMobile .active,
  .menuMobile a:hover {
    padding: 0.3rem 0;
    background-color: #fefaeb42;
    border-radius: 10rem;
  }

  @media (min-width: 600px) {
    .menu_navbar {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .menu_navbar a {
      color: #4d4d4d;
    }

    .userMenu,
    .menuDesktop {
      display: block;
    }

    .menu_logged {
      display: flex;
      align-items: center;
    }

    .menuMobile {
      display: none;
    }

    .notLogged {
      padding-left: 2rem;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
