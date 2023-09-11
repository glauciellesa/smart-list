import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <StyledRootLayout>
      <div className="content">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
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
  position: relative;
  position: sticky;
  bottom: 0;

  header {
    width: 100vw;
  }

  main {
    width: 100vw;
  }

  footer {
    display: none;
  }

  @media (min-width: 600px) {
    header {
      width: 80vw;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80vw;
    }

    .content {
      flex: 1 0 auto;
      min-height: 100vh;
    }

    footer {
      position: absolute;
      bottom: 0;
      display: inline-block;
      width: 100vw;
      flex-shrink: 0;
    }
  }
`;
