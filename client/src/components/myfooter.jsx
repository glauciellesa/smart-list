import { styled } from "styled-components";

const myFooter = () => {
  return (
    <StyledFooter>
      <p>Copyight © 2023 </p>
    </StyledFooter>
  );
};

export default myFooter;

// eslint-disable-next-line react-refresh/only-export-components
const StyledFooter = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -2px -2px 2px hsl(33deg 100% 91% /0.333);
`;
