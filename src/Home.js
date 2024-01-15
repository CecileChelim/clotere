import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from './components/Header';
import styled from "styled-components";
import Background from "./img/back-clotere.png"
import Navbar from './components/Navbar';

const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

function Home(args) {
    return (
        <>
        <HomeS>
        <Navbar user={args.user} />
        <Header/>
        <Container className="grey-bg mt-5">
            <Row>
                <Col md="12" xs="0"><br /><br /><br />Home</Col>
            </Row>
        </Container>
        </HomeS>
        </>
    );
}

export default Home;