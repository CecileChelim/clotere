import React from "react";
import {
    Container,Row,Col,ListGroup,ListGroupItem
} from "reactstrap";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styled from "styled-components";
import { InlineWidget } from "react-calendly";
import Background from "./img/back-clotere.png"



const BackgroundS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

const ContainerS = styled(Container)`
background-image: url(${Background});
background-position:top center;
background-size:cover;
margin-top:3rem;
h3{
    font-size:42px;
    line-height: 1.6;
    margin-bottom:2rem!important;
}
li.list-group-item{
    font-size:20px;
    background-color:white;
}
@media all and (max-width: 768px) {
    .lg{flex-wrap: wrap;justify-content: center;width:100%;}
    .revert{flex-wrap: wrap-reverse;}
    .content{padding: 1rem;}
  }
`;




function DemoNotaire(args) {


    return (
        <>
        <BackgroundS>
        <Navbar user={args.user} />
        <ContainerS>
            
            <Row className="d-flex align-items-center">
            <Col md='1'></Col>
                <Col md='5'>
                <p className="text-lead">Voyons-nous !</p>
                        <h3>Découvrez <span className="textHighlight">la plateforme notaire</span> en live avec un conseillé</h3>
                        <ListGroup>
                            <ListGroupItem>
                               ✔️ Présentation des fonctionnalitées
                            </ListGroupItem>
                            <ListGroupItem>
                            ✔️ Explication du concept
                            </ListGroupItem>
                            <ListGroupItem>
                            ✔️ Session de question / réponse
                            </ListGroupItem>
                        </ListGroup>
                        <p>
                        <br/><br/>Vous préférez nous contacter par email ? 
                        <br/>C'est par ici : <a href="mailto:contact@clotere.fr">contact@clotere.fr</a>
                        </p>
                </Col>
                <Col md='5'>
                    <InlineWidget url="https://calendly.com/clotere/clotere-presentation-de-30-min" />
                    
                </Col>
            </Row>
        
        </ContainerS>
        <Footer/>
        </BackgroundS>
        </>
    );
}

export default DemoNotaire;