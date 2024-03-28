import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Widget } from '@typeform/embed-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from "styled-components";


const WidgetTypeform = styled(Widget)`
width:100%;
height:600px;

`;


function Questionnaire(args) {

  return (
    <>
    <Navbar user={args.user} /> 
    <Container className="grey-bg">
        <Row>
            <Col md="12" xs="0">
            <WidgetTypeform id="JM2MTsDD"  className="" />
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Questionnaire;