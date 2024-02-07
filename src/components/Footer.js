import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ClotereLogo from "../img/logo-clotere.svg";


const FooterS = styled.footer`
margin-top:90px;
 a{
    color:${props => props.theme.colors.black};
    text-decoration:underline;
    margin-right:2rem;
 }
`;


function Footer() {
    return (
        <FooterS>
            <Container>
                <Row>
                    <Col md='6'>
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none brand">
                            <img src={ClotereLogo} width="120px" alt="Clotere" />
                        </Link>
                        <p>Clotere digitalise et facilite votre relation avec votre notaire, pour votre transaction immobilière.</p>
                    </Col>
                    <Col md='6' className="d-flex flex-row justify-content-end">
                        <Link to="/mentions-legales">Mentions légales</Link>
                        <Link to="/cgv">CGV / CGU</Link>
                    </Col>
                </Row>
            </Container>
        </FooterS>
    );
}

export default Footer;