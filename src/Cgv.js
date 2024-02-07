import React from "react";
import styled from "styled-components";
import Background from "./img/back-clotere.png"
/** composants **/
import { Container,Row,Col } from "reactstrap";
import BlocCta from './components/BlocCta';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

function Cgv(args) {
    return (
        <>
        <HomeS>
        <Navbar user={args.user} />        
            <Container>
                <Row>
                    <Col md="12" align="center" ><h1>Conditions générales d'utilisation</h1></Col>
                </Row>
                <Row>
                <Col md="3"></Col>
                    <Col md="6">
                        <p>
                         A REDIGER
                        </p>
                        </Col>
                </Row>
            </Container>
            <BlocCta/>
        <Footer/>
        </HomeS>
        
        </>
    );
}

export default Cgv;