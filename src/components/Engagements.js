import React from "react";
import { Container,Row,Col,Card } from "reactstrap";
import styled from "styled-components";
import IcnAccompagnement from "../img/icn-accompagnement.svg";
import IcnPro from "../img/icn-pro.svg";
import IcnTransparence from "../img/icn-transparence.svg";
import { Subtitle } from "../style/Layout";
import Fade from 'react-reveal/Fade';

const EngagementS = styled.section`
 margin-top:90px;
 background-color:#fff;
 padding:80px;
 h2{font-size:72px}
 @media screen and (max-width: 600px) {
    padding-right:20px;
    padding-left:20px;
}
`;
const CardS = styled(Card)`
 text-align:left;
 border-radius:16px;
 border:0;
 background: linear-gradient(180deg, rgba(239,234,224,1) 24%, rgba(255,255,255,1) 100%);
 padding:60px 30px;
 margin-right:1.5rem;
 transition:all ease .5s;
 h4{
    font-size:24px;
    font-weight:bold;
    line-height:34px; 
 }
 p{font-size:18px;margin-top:20px;}
 @media all and (max-width: 768px) {
    padding:20px;
    h3{font-size:74px;}
    span{font-size:20px;}
    p{font-size:18px;margin-top:0px;}
  }
  &:hover{
    transform:scale(1.01);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .round{
        background-color:#016069;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
    }
  }
`;

const Round = styled.div`
background-color:#173B3C;
height:60px;
width:60px;
border-radius:100px;
padding:1rem;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:30px;
transition:all ease .5s;
`;

const ColEngagement = styled(Col)`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items: stretch;
.card{width:33%;margin-bottom:4rem;}
@media screen and (max-width: 600px) {
      flex-direction: column;
      .card{width:100%;}
  }

`;





function Engagement() {
    return (
        <EngagementS>
        <Container>
            <Row>
                <Col md="12" align="center" className="mb-4">
                <h2>Clotere s’engage</h2>
                <Subtitle>Une solution digitale <span className="textHighlight">simple</span>, <span className="textHighlight">rapide</span> et <span className="textHighlight">conforme</span> aux normes</Subtitle>
                </Col>
                <Fade left>
                <ColEngagement md="12">
                    <CardS>
                        <Round className="round"><img src={IcnAccompagnement} alt="clotere"/></Round>
                        <h4>Réactif</h4>
                        <p>Votre conseiller dédié vous accompagne à distance, avec pédagogie, de la naissance de votre projet jusqu’à la signature chez le notaire et même après !</p>
                    </CardS>
                    <CardS>
                    <Round className="round"><img src={IcnPro} alt="clotere"/></Round>
                        <h4>100% conforme</h4>
                        <p>Nous respectons les normes de signature et de légalité de la chambre des notaires de France.</p>
                    </CardS>
                    <CardS>
                    <Round className="round"><img src={IcnTransparence} alt="clotere"/></Round>
                        <h4>En totale transparence</h4>
                        <p>On vous dit tout par sms, téléphone ou visio. Vous pouvez suivre en live l’avancée de votre dossier.</p>
                    </CardS>
                </ColEngagement>
                </Fade>
            </Row>
            
        </Container>
        </EngagementS>
    );
}

export default Engagement;