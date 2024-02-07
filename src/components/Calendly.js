import React from "react";
import {
    Container,Row,Col
} from "reactstrap";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";




const ContainerS = styled(Container)`
margin-top:3rem;
p.text-lead{
    font-size: 22px;
    font-weight: 600;
    color:${props => props.theme.colors.greenDark};
}
p{
    font-size:16px;
    line-height: 2;
}
h4{
    font-size:32px;
    line-height: 1.3;
    margin-bottom:2rem!important;
}
@media all and (max-width: 768px) {
    .lg{flex-wrap: wrap;justify-content: center;width:100%;}
    .revert{flex-wrap: wrap-reverse;}
    .content{padding: 1rem;}
  }
`;




function Calendly(args) {


    return (
        <ContainerS className="grey-bg">
            
            <Row className="d-flex align-items-center">
                <Col md='7'>
                <p className="text-lead">Voyons-nous !</p>
                        <h3>Une<span className="textHighlight"> démo</span> ca vous dit ?</h3>
                        <p>
                        Résevez un créneau et rencontrons-nous ! <br/>Nous vous faisons découvrir Clotere en live et répondons à toutes vos questions.
                        <br/><br/>Vous préférez nous contacter par email ? 
                        <br/>C'est par ici : <a href="mailto:contact@clotere.fr">contact@clotere.fr</a>
                        </p>
                </Col>
                <Col md='5'>
                    <InlineWidget url="https://calendly.com/clotere/clotere-presentation-de-30-min" />
                    
                </Col>
            </Row>
        
        </ContainerS>
    );
}

export default Calendly;