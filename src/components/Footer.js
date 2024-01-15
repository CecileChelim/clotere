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
            <img src={ClotereLogo} width="150px" alt="Clotere" />
          </Link>
          <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          </p>
                    </Col>
                    <Col md='6' className="d-flex flex-row justify-content-end">
                    <Link to="/">Mentions légales</Link>
                    <Link to="/">CGV / CGU</Link>
                    </Col>
                </Row>
            </Container>
        </FooterS>
    );
}

export default Footer;