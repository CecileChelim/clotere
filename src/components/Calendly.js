import React from "react";
import {
    Container,Row,Col
} from "reactstrap";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";



const SectionS = styled.section`
background-color:#fff;
margin-top:3rem;
padding-top:80px;
`;

const ContainerS = styled(Container)`

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
        <SectionS>
        <ContainerS>
            <Row>
                <Col md='12' align="center">
                <h1>Un démo ça vous dit ?</h1>
                <h4>
                Nous vous faisons <span className="textHighlight">découvrir</span> Clotere en live<br/> et répondons à toutes vos questions.
                </h4>
                </Col>
                <Col md='12'  align="center">
                    <InlineWidget url="https://calendly.com/clotere/clotere-presentation-de-30-min" />
                    <br/><br/><p>Vous préférez nous contacter par email ? 
                        <br/>C'est par ici : <a href="mailto:contact@clotere.fr">contact@clotere.fr</a>
                        </p>
                </Col>
            </Row>
        </ContainerS>
        </SectionS>
    );
}

export default Calendly;