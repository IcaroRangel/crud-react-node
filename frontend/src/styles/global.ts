import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0px 100px 0px 100px;
    overflow-x: hidden;
  }
  @media (max-width: 768px){
    body {
      margin: 0;
    }
  }
  
  
`;

export default GlobalStyle;
