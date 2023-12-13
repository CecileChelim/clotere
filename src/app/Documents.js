import React, { useState } from "react";
import {
    Container, Row, Col,
    Offcanvas
} from "reactstrap";
import { TitlePageBig,TitlePageApp } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";
import CardDoc from "../components/CardDocument";
import CardHelp from "../components/CardHelp";
import CardInfoManquante from "../components/CardInfoManquante";


function Documents(args) {
    //console.log("arg  bien",args.bien)
    const [canvas, setCanvas] = useState(false);

    const toggle2 = () => setCanvas(!canvas);

    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">

                    <TitlePageApp>
                        <Col  md="7"><TitlePageBig className="mb-4">Vos documents</TitlePageBig></Col>
                        <Col md="5"  className="text-end">
                            <ButtonPrimary>+ Ajouter un document</ButtonPrimary>
                        </Col>
                    </TitlePageApp>

                    <Col md="7">
                        <CardDoc bien={args.bien} />
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

export default Documents;