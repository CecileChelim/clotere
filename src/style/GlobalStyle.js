import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: "Manrope", sans-serif;
}


/** title **/
h1,h2{
  font-family: "BodoniMedium", serif;
  font-weight:500;
}
h1{font-size:70px;}
h2{font-size:50px;}
h3{font-size:40px;}
@media all and (max-width: 768px) {
  h1{
    font-size:50px!important;
  }
  h2{
    font-size:30px!important;
  }
}

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

   /** MEMBERSTACK ELEMENT **/
   .ms-modal{
    .ms-form__button[type="submit"]{color:white;}
    h2.ms-modal__title{
      visibility: hidden;
      margin-bottom:20px
    }
    .ms-form__group{margin-bottom:10px;}
    .ms-form__input{padding:9px;}
   }
  
    #SignupModal{
    h2.ms-modal__title:after{
      content: 'Créez votre compte';
      visibility: visible;
      display: block;
      position: absolute;
      top: 6rem;
      width: 100%;
      text-align: center;
      left: 2px;
    }
    #LoginModal{
      h2.ms-modal__title:after{
        content: 'Connectez vous';
        visibility: visible;
        display: block;
        position: absolute;
        top: 6rem;
        width: 100%;
        text-align: center;
        left: 2px;
      }

    }

    /** card **/
    .card{border:0;}
   
    `



  ;



