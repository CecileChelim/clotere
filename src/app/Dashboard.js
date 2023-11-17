import React, { useState } from "react";
import {
    Container, Row, Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Offcanvas
} from "reactstrap";
import { TitlePage } from "../style/Layout";
import { DropdownPrimary } from "../style/Button";



function Dashboard(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [canvas, setCanvas] = useState(false);

    const toggle2 = () => setCanvas(!canvas);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md="6">
                        <TitlePage>Dernières activités de votre dossier</TitlePage>
                    </Col>
                    <Col md="6" className="text-end">
                        <DropdownPrimary isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>Actions rapides</DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem onClick={toggle2}>+ Ajouter un document</DropdownItem>
                                <DropdownItem>Posez une question</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </DropdownPrimary>
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

export default Dashboard;