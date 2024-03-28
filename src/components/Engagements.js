import React from "react";
import { Container,Row,Col,Card } from "reactstrap";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import ArrowRight from "../img/arrow-right.png";
import { ButtonPrimary } from "../style/Button";
import { Link } from 'react-router-dom';

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
background-color:white;
height:70px;
width:70px;
border-radius:100px;
padding:1rem;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:30px;
transition:all ease .5s;
span{font-size:20px;}
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
                <h2>Simplifiez votre passage chez le notaire</h2>
                </Col>
                <Fade left>
                <ColEngagement md="12">
                    <CardS>
                        <Round className="round"><span role="img">👋</span></Round>
                        <h4>Trouvez un notaire <span className="textHighlight">qualifié</span> et <span className="textHighlight">disponible</span>.</h4>
                        <p>Les temps d’attente sont parfois long dans les études notariales, chez Clotere les notaires prennent votre affaire rapidement et sont réactifs.</p>
                    </CardS>
                    <CardS>
                    <Round className="round"><span role="img">🙂</span></Round>
                        <h4>Un accompagnement <span className="textHighlight">pédagogue</span> et <span className="textHighlight">réactif</span>.</h4>
                        <p>De la naissance de votre projet jusqu’à la signature et même après nous serons la ! Disponible et pédagogue nous répondrons à toutes vos questions.</p>
                    </CardS>
                    <CardS>
                    <Round className="round"><span role="img">🧘</span></Round>
                        <h4><span className="textHighlight">Signez</span> depuis votre canapé !</h4>
                        <p>Bénéficiez de la puissance de nos outils digitaux pour gérer votre passage chez le notaire à distance. Suivez l’avancement facilement et signez depuis votre canapé.</p>
                    </CardS>
                </ColEngagement>
                <Col md='12' xs="12">
                <div className="text-center">
			<Link to="/onboard">
                            <ButtonPrimary color="primary" >Trouvez votre notaire <img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
						<br/><p className="m-0 mt-2">En 3 minutes, et gratuitement !</p>
			</div>
                </Col>
                </Fade>
            </Row>
            
        </Container>
        </EngagementS>
    );
}

export default Engagement;