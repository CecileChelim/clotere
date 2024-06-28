import React from "react";
import {
    Container, Row, Col
} from "reactstrap";
import { TitlePageBig } from "../style/Layout";
import CardBien from "../components/CardBien";
import CardInfoManquante from "../components/CardInfoManquante";


function Bien(args) {
    //console.log("arg  bien",args.bien)
   

    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">
                    <Col md="12"><TitlePageBig className="mb-4">Votre bien</TitlePageBig></Col>
                    <Col md="12">
                        <CardBien bien={args.bien} />
                    </Col>
                    
                </Row>
            </Container>
            
        </>
    );
}

export default Bien;