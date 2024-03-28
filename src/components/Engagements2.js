import React from "react";
import { Container,Row,Col,Card } from "reactstrap";
import styled from "styled-components";
import IlluCle from "../img/illu-cle.png";
import Fade from 'react-reveal/Fade';

const EngagementS = styled.section`
 margin-top:90px;
 background-color:#fff;
 padding:80px;
 h3{margin-bottom:2rem;   font-family: "BodoniMedium", serif;}
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
 padding:30px;
 margin-right:1.5rem;
 transition:all ease .5s;
 margin-bottom:2rem;
 h4{
    font-size:20px;
    font-weight:600;
    line-height:34px; 
 }
 p{font-size:16px;margin-top:8px;}
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


const ColEngagement = styled(Col)`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items: stretch;
@media screen and (max-width: 600px) {
      flex-direction: column;
      .card{width:100%;}
  }

`;





function Engagement2() {
    return (
        <EngagementS>
        <Container>
            <Row>
                <Fade left>
                    <Row>
                    <Col md="5">
                        <img width="100%" src={IlluCle} alt="Bienvenue chez vous"/>
                    </Col>
                <ColEngagement md="7">
                <h3>Simplifiez votre passage chez le notaire</h3>
                    <CardS>
                        <h4>Trouvez un notaire qualifié et disponible.</h4>
                        <p>Bénéficiez de la puissance de nos outils digitaux pour gérer votre passage chez le notaire à distance. Suivez l’avancement facilement et signez depuis votre canapé.</p>
                    </CardS>
                    <CardS>
                        <h4>Un accompagnement pédagogue et réactif</h4>
                        <p>De la naissance de votre projet jusqu’à la signature et même après nous serons la ! Disponible et pédagogue nous répondrons à toutes vos questions.</p>
                    </CardS>
                    <CardS>
                        <h4>Signez depuis votre canapé !</h4>
                        <p>Bénéficiez de la puissance de nos outils digitaux pour gérer votre passage chez le notaire à distance. Suivez l’avancement facilement et signez depuis votre canapé.</p>
                    </CardS>
                </ColEngagement>
                </Row>
                </Fade>
            </Row>
            
        </Container>
        </EngagementS>
    );
}

export default Engagement2;