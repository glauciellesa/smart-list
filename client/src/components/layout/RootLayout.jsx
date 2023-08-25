import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../footer";
import Navbar from "../navbar";

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
    padding-top: 2rem;
    flex: 1 0 auto;
  }

  footer {
    width: 100vw;
    flex-shrink: 0;
  }

  @media (min-width: 600px) {
    header {
      width: 80vw;
    }
    main {
      width: 80vw;
    }
    footer {
      width: 80vw;
    }
  }
`;
