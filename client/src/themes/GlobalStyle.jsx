import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Comfortaa', cursive;
    color: #161616;
    background-color: #fefaeb;
    width: 100%;
    justify-content: center;
  }

  div.error {
    padding: 10px;
    background: #ffefef;
    border: 1px solid red;
    color: red;
    border-radius: 4px;
    margin: 20px 0;
  }
  input.error {
    border: 1px solid red;
  }
  
`;
export default GlobalStyle;
