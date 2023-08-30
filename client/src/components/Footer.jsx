import { styled } from 'styled-components';
import { useState } from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  const [test, setTest] = useState();
  return (
    <StyledFooter>
      <p>Copyight © 2023 </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -2px -2px 2px hsl(33deg 100% 91% /0.333);
`;
