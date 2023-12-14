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

 .offcanvas{
  padding:2rem;
  width:600px!important;
 }

 a{cursor:pointer;}
  

   /** tabs **/
   .nav-pills .nav-link{
    color:black;
    cursor:pointer;
    &.active{
      background-color:#dee2e6;
      color:black;
      font-weight:bold;
    }
   }
    `
  
  
  
  ;

 

  