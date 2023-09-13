import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "lucide-react";

const GoBack = (props) => {
  return (
    <StyledGoBack>
      <NavLink to={`/${props.recipes}`}>
        <ArrowLeft />
      </NavLink>
    </StyledGoBack>
  );
};

export default GoBack;

const StyledGoBack = styled.div`
  padding: 0.5rem 0;

  a {
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #201f1d;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    padding: 0;
  }
`;
