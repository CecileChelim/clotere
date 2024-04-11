import React, { useState } from "react";
import {
    Container, Row, Col,
    Offcanvas,
    ListGroup
} from "reactstrap";
import styled from "styled-components";
import { TitlePageBig,TitlePageApp } from "../style/Layout";
import ListGroupItemInterlocuteur from "../components/CardInterlocuteurs";

const ListGroupS = styled(ListGroup)`
display: flex!important;
flex-direction: row!important;
gap: 2%!important;
flex-wrap: wrap!important;
align-items: flex-start!important;
`;

function Interlocuteurs(args) {
    //console.log("arg interloc", args.user.transaction[0]);
    const transacInfo = args.transaction;
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">
                    <TitlePageApp>
                        <Col  md="7"><TitlePageBig className="mb-4">Vos interlocuteurs</TitlePageBig></Col>
                        {/**
                        <Col md="5"  className="text-end">
                            <LinkS>+ Ajouter un utilisateur</LinkS>
                        </Col>
                         */}
                    </TitlePageApp>
                    <Row>
                        <Col md="12">
                        <ListGroupS>
                            <ListGroupItemInterlocuteur className="acheteur" roles="Acheteur" color={"primary"} prenom={transacInfo.prenom_from_acheteur} nom={transacInfo.nom_from_acheteur} email={transacInfo.email_from_acheteur} tel={transacInfo.telephone_from_acheteur} />
                            <ListGroupItemInterlocuteur className="vendeur" roles="Vendeur"  color={"dark"} prenom={transacInfo.prenom_from_vendeur} nom={transacInfo.nom_from_vendeur} email={transacInfo.email_from_vendeur} tel={transacInfo.telephone_from_vendeur}/>
                            <ListGroupItemInterlocuteur  className="agent" roles="Agent immobilier"  color={"secondary"} prenom={transacInfo.prenom_from_agent} nom={transacInfo.nom_from_agent} email={transacInfo.email_from_agent} tel={transacInfo.telephone_from_agent}  />
                        </ListGroupS>
                        </Col>
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