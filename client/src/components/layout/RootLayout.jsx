import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <StyledRootLayout>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </StyledRootLayout>
  );
};

export default RootLayout;

const StyledRootLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;

  header {
    width: 100vw;
    flex-shrink: 0;
  }

  main {
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 81vh;
  }

  footer {
    display: none;
  }

  @media (min-width: 600px) {
    header {
      width: 80vw;
    }
    main {
      width: 80vw;
    }
    footer {
      display: block;
      width: 80vw;
    }
  }
`;
