import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary} from "../style/Button";
import ArrowRight from "../img/arrow-right.png";
import Illu from "../img/illustration-clotere-header.png";


const ContainerS = styled(Container)`
height: 100%;
width: 100%;
display: flex;
align-items: center;
position:relative;
margin-bottom:3rem;
`;

const Title = styled.h1`
font-size: 78px;
margin-bottom:30px;
line-height;46px;
&.mobile{display:none;}
@media all and (max-width: 768px) {
      font-size:50px!important;
      display:none;
      &.mobile{display:block;}
  }
`;
const SubTitle = styled.h2`
font-family:"Manrope",sans-serif;
line-height: 44px;
font-size:28px;
width: 90%;
color:${props => props.theme.colors.black};
font-weight: 300;
margin-bottom:60px;
@media all and (max-width: 768px) {margin-bottom:30px;}
`;

const BlocButton = styled.div`
background-color: ${props => props.theme.main};
margin-top:2rem;
margin-bottom:20px;
.btn{margin-right:20px;}
p{
    font-size:24px;
    font-weight:300;
}
@media all and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    .btn{
        width:90%;
        margin:0 auto;
        margin-bottom:1rem;
    }
}
`; 

const IlluS = styled(Col)`

img{
    width:300px;
}
@media screen and (max-width: 600px) {
    display:none;
}

`;

function Header() {
    return (
        <ContainerS className="grey-bg">
            <Row className="d-flex align-items-center" align="center">
                    <IlluS md="5">
                        <img src={Illu} alt=""/>
                    </IlluS>
                <Col md="7" xs="12" align="left">
                    <Title>L'acte notarié simplifié</Title>
                    <Title className="mobile">Sécurisez & accélerez votre vente immobilière</Title>
                    <SubTitle>Clotere votre notaire en ligne pour <span className="textHighlight">contrôler</span>, <span  className="textHighlight">suivre</span> et <span  className="textHighlight">signer</span> votre vente en toute sérénité.</SubTitle>
                    <BlocButton>
                        {/**
                        <Link to="/test">
                            <ButtonPrimary color="white">Parler à un expert</ButtonPrimary>
                        </Link>
                         */}
                        <Link to="/onboard">
                            <ButtonPrimary color="primary">Débuter ma transaction <img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
                    </BlocButton>
                    <p>100% gratuit. Sans engagement.</p>
                </Col>
               
            </Row>
        </ContainerS>
    );
}

export default Header;