import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ClotereLogo from "../img/logo-clotere-blanc.svg";


const FooterS = styled.footer`
//margin-top:90px;
background-color:#004f47;
color:#fff;
padding: 1rem;
 a{
    color:${props => props.theme.colors.white};
    text-decoration:none;
    margin-right:2rem;
    margin-left:2rem;
 }
 p{opacity:.5;}
 @media all and (max-width: 768px) {
.logo{text-align:center;}
.liens{
    flex-wrap: wrap;
    justify-content: start!important;
    line-height:2rem;
}
    
 }
`;


function Footer() {
    return (
        <FooterS>
            <Container>
                <Row>
                    <Col md='4' xs='12' className="logo">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none brand">
                            <img src={ClotereLogo} width="120px" alt="Clotere" />
                        </Link>

                    </Col>
                    <Col md='8' className="d-flex flex-row justify-content-end liens">

                        <p className="m-0 mr-5">Clotere n'est pas un notaire</p>
                        <Link to="/mentions-legales">Mentions légales</Link>
                        {/**
                        <Link to="/cgv">CGV / CGU</Link>
                        <Link to="/securite-rgpd">Sécurité / RGPD</Link>
                        */}
                    </Col>
                </Row>
            </Container>
        </FooterS>
    );
}

export default Footer;