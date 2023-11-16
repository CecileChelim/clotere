import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from './components/Header';



function Home() {
    return (
        <>
        <Header/>
        <Container className="grey-bg mt-5">
            <Row>
                <Col md="12" xs="0"><br /><br /><br />Home</Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;