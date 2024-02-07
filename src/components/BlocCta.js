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
    background-size:cover;
    background-repeat:no-repeat;
    background-position:top center;
    border:0;
    background-color:transparent;
    color:#fff;
    padding:40px 140px;
    text-align:center;
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
                        <h2>Faites nous confiance <br/>pour gérer vos documents de vente</h2>
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