import React  from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary} from "../style/Button";
import ArrowRight from "../img/arrow-right.png";
import Illu from "../img/img-header-notaire.png";


const ContainerS = styled(Container)`
height: 100%;
width: 100%;
display: flex;
align-items: center;
position:relative;
@media screen and (max-width: 600px) {
    padding:0 2rem;
}
`;

const Title = styled.h1`
font-family: "BodoniMedium", serif!important;
font-weight:600;
font-size: 72px;
margin-bottom:30px;
line-height;46px;
color:#1D2B28;
@media all and (max-width: 768px) {
    //pour les écrans de max 768px
      font-size:50px!important;
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
        width:100%;
        margin:0 auto;
        margin-bottom:1rem;
    }
}
`; 

const IlluS = styled(Col)`

img{
    width:100%;
}
@media screen and (max-width: 600px) {
    display:none;
}

`;

function HeaderNotaire() {
    return (
        <ContainerS className="grey-bg">
            <Row className="d-flex align-items-center">
                <Col md="7" xs="12">
                    <Title>Des nouveaux clients pour votre étude.</Title>
                    <SubTitle>Clotere vous permet de trouver de <span className="textHighlight">nouveaux clients</span>, et vous fournis des <span className="textHighlight">outils</span> qui facilitent votre relation client.</SubTitle>
                    <BlocButton>
                        <Link to="/demo-notaire">
                            <ButtonPrimary color="white">Demander une démo</ButtonPrimary>
                        </Link>
                        <Link  target="blank" to="https://clotaire-notaire.netlify.app/">
                            <ButtonPrimary color="primary">Essayer gratuitement <img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
                    </BlocButton>
                </Col>
                <IlluS md="5">
                        <img src={Illu} alt=""/>
                    </IlluS>
               
            </Row>
        </ContainerS>
    );
}

export default HeaderNotaire;