

import styled from "styled-components";
import {
    Form
} from "reactstrap";

export const SearchForm = styled.div`
form {
  max-width: 600px;
  margin: 0 auto;
  height: 78px;
  position: relative;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 30px 50px rgba(7, 21, 36, 0.06);
  display:flex;
  align-items:center;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 260px 0 35px;
  font-size: 16px;
  border-radius: 5px;
  margin-right:1rem;
}
button {
  right: 7px;
  bottom: 7px;
  top: 7px;
  background: #111111;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
  @media all and (max-width: 768px) {
  form {
    max-width: 100%;
    height: auto;
    flex-direction:column;
    input{margin-bottom:.5rem;text-align:center;}
    .btn-primary{width:100%}
  }
  
  }
`;

export const FormSearch = styled(Form)`
background-color: #cee5d6;
padding: .5rem;
border-radius: 1rem;
display:flex;
flex-direction:row;
.selectville{
width:100%;
    background-color: white !important;
    border-bottom: 0 !important;
    min-width: 400px;
    position:relative;
    .css-13cymwt-control{
    height: 52px;
    margin-right: 1rem;
    border: 0;
    }

  }
`;