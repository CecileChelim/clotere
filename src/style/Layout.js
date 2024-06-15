import styled from "styled-components";
import {Row,Card,Alert} from "reactstrap";

export const TitlePage = styled.h1`
  font-family:"Manrope", "sans-serif";
  font-size:48px;
  color:${props => props.theme.colors.black};
  font-weight:400;
`;

export const TitlePageBig = styled.h1`
  font-size:32px;
  font-family:"Manrope", "sans-serif";
  color:#000;
  font-weight:400;
`;

export const TitlePageApp = styled(Row)`
margin-bottom: .5rem;
@media all and (max-width: 768px) {
  .col-md-7,.col-md-5{
    width:100%!important;
    text-align:center!important;
  }
}
`;
export const TitleSection = styled.h3`
  font-family:"Manrope", "sans-serif";
  font-size:20px;
  color:${props => props.theme.colors.black};
  font-weight:100;
  margin-bottom:20px;
`;
export const Panel = styled(Card)`
  border-radius:16px;
  padding:25px;
  border:0;
`;

export const Subtitle = styled.p`
font-family: "Manrope", sans-serif;
line-height: 44px;
font-size: 28px;
width: 90%;
color: #1D2B28;
font-weight: 300;
margin-bottom: 60px;
`;

export const AlertNotif = styled(Alert)`
display:flex;
flex-direction:row;
align-items:center;
gap:1rem;
border-radius:100px;
padding:1rem 0rem;
background-color:transparent;
border:0;
p{margin:0;}
h6{font-size:18px;margin:0;}
span{
background-color:${props => props.theme.colors.main};
    padding: 1rem 1.5rem;
    border-radius: 100px;
}
    img{
    position: absolute;
    top: -12px;
    right: 0px;
    }

`;




