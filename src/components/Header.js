import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary, LinkS } from "../style/Button";

const Title = styled.h1`
font-size: 70px;
`;
const SubTitle = styled.h2`
font-size:26px;
font-weight:400;
color:#9DA2AD;
width: 90%;
line-height: 130%;
`;
const Image = styled.img`
border-radius:2rem;
`;
const BlocButton = styled.div`
margin-top:2rem;
margin-bottom:.5rem;
a{
    color:#000;
    text-decoration:none;
}
`;

function Header() {
    return (
        <Container className="grey-bg mt-5">
            <Row className="d-flex align-items-center">
                <Col md="6">
                    <Title>Réinventons la signature de l’acte de vente</Title>
                    <SubTitle>Acteo, vous accompagne pour signer votre acte de vente <span className="main-text">plus rapidement</span> avec <span className="main-text">moins de frais de notaire</span> !</SubTitle>
                    <BlocButton>
                        <Link to="/test">
                            <ButtonPrimary>Inscription par email</ButtonPrimary>
                        </Link>
                        <Link to="/test">
                            <LinkS>Comment ça marche ?</LinkS>
                        </Link>
                    </BlocButton>
                    <p>100% gratuit. Sans engagement.</p>
                </Col>
                <Col md="6" className="text-end">
                    <Image width="80%" src="https://imgdrop.imgix.net/2023-07-1689178592438-35057.jpg" alt="#" />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;