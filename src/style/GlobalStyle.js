import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: "Manrope", sans-serif;
  background-color
}

.btn-primary{
    border: 0;
    font-size: 18px;
    padding: 18px 24px;
    border-radius: 8px;
    line-height: 100%;
    font-weight: 600;
    transition: all 200ms ease-in-out;
        background-color: #1DF36C !important;
    color: #1D2B28;
  
  }

.textHighlight{
  font-weight: 500;
background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #1DF36C 50%);
}

.surligne{
position: relative;
    display: inline-block;
    img{
        left: 0;
    bottom: -10px;
    width: 100%;
        position: absolute;
    }
    }

.badge{
  font-size:18px;
  font-weight:400;
  border-radius:100px;
  padding:6px 16px;
}

/** colors **/
.bg-primary{background-color:${props => props.theme.colors.main}!important; color:${props => props.theme.colors.black};}
.bg-dark{background-color:${props => props.theme.colors.greenDark}!important; color:${props => props.theme.colors.white};}
.bg-secondary{background-color:${props => props.theme.colors.lightGreen}!important; color:${props => props.theme.colors.black};}
.white-background{background-color:white;}


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
    font-size:40px!important;
  }
  h2{
    font-size:30px!important;
  }
}
p{font-size:16px;}

.navbar-collapse{
  background-color: white;
    padding: 1rem;
    margin-top: 1rem;
    a{
      color:${props => props.theme.colors.black};
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
  width:700px!important;
  overflow-y:scroll;
  .offcanvas-header{
    align-items: start;
    margin-bottom: 2rem;
    border-bottom: 1px solid #DDD;
  }
 }

 a{cursor:pointer;}
  
   /** tabs **/
   .nav-pills .nav-link{
    color:black;
    cursor:pointer;
    &.active{
      background-color:${props => props.theme.colors.main};
      color:white;
      font-weight:bold;
    }
   }

   /** Form **/
   input{
    &.form-control{
    border: 0!important;
    background-color: #f7f7f9!important;
    border-bottom: 1px solid green!important;
    padding: 1rem!important;
    border-radius: .4rem!important;
    
    }
   }
   select{
    &.form-select{
      border: 0;
      background-color: #004f4717;
      border-bottom: 2px solid green;
      border-radius: 0;
      padding: 0.5rem;
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
    .card{border:0!important;border-radius:16px!important}

    .background-linear{
      background-color:${props => props.theme.colors.linearBackground}!important;
    }

    /** dropdown **/
   .dropdown-menu{
    background:${props => props.theme.colors.linearBackground};
    border:0;
    width:100%;
   }
 
   /** upload de doc **/
    label[for=file]{width:100%!important;}
    `
    
  ;



