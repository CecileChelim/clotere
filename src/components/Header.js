import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary} from "../style/Button";
import ArrowRight from "../img/arrow-right.png";


const ContainerS = styled(Container)`
height: 100%;
width: 100%;
display: flex;
align-items: center;
`;

const Title = styled.h1`
font-size: 80px;
margin-bottom:30px;
line-height;46px;
@media all and (max-width: 768px) {
    //pour les écrans de max 768px
      font-size:50px!important;
  }
`;
const SubTitle = styled.h2`
font-family:"Manrope",sans-serif;
line-height: 44px;
font-size:34px;
width: 90%;
color:${props => props.theme.colors.black};
font-weight: 300;
span{
    font-weight: 500;
    background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #1DF36C 50%);
}
margin-bottom:60px;
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

function Header() {
    return (
        <ContainerS className="grey-bg">
            <Row className="d-flex align-items-center">
                <Col md="12" align="center">
                    <Title>Sécurisez & gagnez du temps sur votre vente immobilière</Title>
                    <SubTitle>Clotere votre notaire en ligne<br/> pour <span>contrôler</span>, <span>suivre</span> et <span>signer</span> votre vente en toute sérénité.</SubTitle>
                    <BlocButton>
                        <Link to="/test">
                            <ButtonPrimary color="white">Parler à un expert</ButtonPrimary>
                        </Link>
                        <Link to="/onboard">
                            <ButtonPrimary color="primary">Débutez ma transaction <img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
                    </BlocButton>
                    <p>100% gratuit. Sans engagement.</p>
                </Col>
            </Row>
        </ContainerS>
    );
}

export default Header;