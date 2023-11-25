import React, { useState } from "react";
import {
    Container, Row, Col,
    Offcanvas
} from "reactstrap";
import { TitlePageBig } from "../style/Layout";
import CardBien from "../components/CardBien";
import CardHelp from "../components/CardHelp";
import CardInfoManquante from "../components/CardInfoManquante";


function Bien(args) {
    //console.log("arg  bien",args.bien)
    const [canvas, setCanvas] = useState(false);

    const toggle2 = () => setCanvas(!canvas);

    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">
                    <Col md="12"><TitlePageBig className="mb-4">Votre bien</TitlePageBig></Col>
                    <Col md="7">
                        <CardBien bien={args.bien} />
                    </Col>
                    <Col md="5">
                        <CardInfoManquante />
                        <CardHelp />
                    </Col>
                </Row>
            </Container>
            <Offcanvas
                isOpen={canvas}
                toggle={toggle2}
                {...args}
                direction="end"
                scrollable></Offcanvas>
        </>
    );
}

export default Bien;