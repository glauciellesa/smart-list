import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  
  body {
    font-family: 'Comfortaa', cursive;
    color: #161616;
    background-color: #fefaeb;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height:100%; 
    position:relative; 
    padding-bottom:[footer-height] 
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

  .loading {
    text-align: left;
    color: #704869;
  }

  .btn_cancel,
  .btn_create {
    border: none;
    border-radius: 5px;
    padding: 0.6rem;
  }

  .btn_cancel {
    background-color: #fefaeb;
    border: 1px solid #704869;
    color: #704869;
  }

  .btn_create {
    background-color: #ed6d5a;
    color: #fefaeb;
  }
`;

export default GlobalStyle;
