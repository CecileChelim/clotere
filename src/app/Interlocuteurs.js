import React, { useState } from "react";
import axios from "axios";
import {
    Container, Row, Col,
    Offcanvas
} from "reactstrap";
import { TitlePageBig } from "../style/Layout";
import { ButtonPrimary, LinkS } from "../style/Button";
import CardInterlocuteurs from "../components/CardInterlocuteurs";


function Interlocuteurs(args) {
    console.log("arg interloc", args.user.transaction[0]);
    const userInfoAirtable = args.user;
    const transacInfo = args.transaction;
    const [canvas, setCanvas] = useState(false);

    const toggle = () => setCanvas(!canvas);



    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">
                    <Col md="7"><TitlePageBig className="mb-4">Vos interlocuteurs</TitlePageBig></Col>
                    <Col md="5" className="text-end">
                        <ButtonPrimary>+ Ajouter un utilisateur</ButtonPrimary>
                    </Col>
                    <Row>
                        <Col md="4"><CardInterlocuteurs className="acheteur" role="acheteur" prenom={transacInfo.prenom_from_acheteur} nom={transacInfo.nom_from_acheteur} email={transacInfo.email_from_acheteur} tel={transacInfo.telephone_from_acheteur} /></Col>
                        <Col md="4"><CardInterlocuteurs className="vendeur" role="vendeur" prenom={transacInfo.prenom_from_vendeur} nom={transacInfo.nom_from_vendeur} email={transacInfo.email_from_vendeur} tel={transacInfo.telephone_from_vendeur} /></Col>
                        <Col md="4"><CardInterlocuteurs className="agent" role="agent immobilier" prenom={transacInfo.prenom_from_agent} nom={transacInfo.nom_from_agent} email={transacInfo.email_from_agent} tel={transacInfo.telephone_from_agent} /></Col>
                    </Row>
                </Row>
            </Container>
            <Offcanvas
                isOpen={canvas}
                toggle={toggle}
                {...args}
                direction="end"
                scrollable></Offcanvas>
        </>
    );
}

export default Interlocuteurs;