import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/Button/Button";

const LoginError = () => {
  const error = useRouteError();
  return (
    <StyledVansError>
      <h2>Error</h2>
      <p>{error.message}</p>

      <div className="error_button">
        <Button>
          <Link to="/"> Return to home</Link>.
        </Button>
      </div>
    </StyledVansError>
  );
};

export default LoginError;

const StyledVansError = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .error_button {
    background-color: #161616;
    border-radius: 0.3rem;
    align-content: center;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
