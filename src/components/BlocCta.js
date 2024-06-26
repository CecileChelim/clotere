import React from "react";
import { Card, Container, Row,Col } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary } from "../style/Button";
import ImgBlockCta from '../img/back-bloc-cta.png'
import ArrowRight from "../img/arrow-right.png";


const BlocCtaS = styled.section`
margin-top:90px;
 .card{
    background-image: url(${ImgBlockCta});
    background-size:110%;
    border-radius;16px;
    background-repeat:no-repeat;
    background-position:top center;
    border:0;
    background-color:transparent;
    color:#fff;
    padding:40px 140px;
    text-align:center;
    border-radius:16px;
    h2{line-height:1.1em}
    p.subtitle{
        font-size:22px;
        font-weight: 300;
        margin-bottom:40px;
            @media all and (max-width: 768px) {
                font-size:18px;
                display:none;
              }
        }
     @media all and (max-width: 768px) {
        padding:30px 40px;
        background-size: cover;
    }
 }
`;

function BlocCta() {
    return (
        <BlocCtaS>
            <Container>
                <Row>
                    <Col md="12">
                    <Card>
                        <h2>Faites nous confiance <br/>pour accélérer votre dossier de vente</h2>
                        <p className="subtitle">Créez votre dossier de transaction en quelques clics et votre expert <br/>juridique s’occupe du reste</p>
                        <Link to="/onboard">
                            <ButtonPrimary color="primary">Débuter ma transaction <img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </BlocCtaS>
    );
}

export default BlocCta;