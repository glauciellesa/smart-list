import { styled } from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2023 </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 2px hsl(33deg 100% 91% /0.333);
`;
