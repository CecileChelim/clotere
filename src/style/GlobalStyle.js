import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 10vh;
    width: 100vw;
    top: 50%;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  
  .loading {
    display: flex;
    min-height: 500px;
    align-items: center;
    justify-content: center;
  }

 

  `;

  