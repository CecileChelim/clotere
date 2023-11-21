import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Widget } from '@typeform/embed-react'
import styled from "styled-components";


const WidgetTypeform = styled(Widget)`
width:100%;
height:600px;

`;


function Questionnaire(args,props) {

  return (
    <>
    <Container className="grey-bg mt-5 pt-5">
        <Row>
            <Col md="12" xs="0">
            <WidgetTypeform id="JM2MTsDD"  className="" />
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default Questionnaire;