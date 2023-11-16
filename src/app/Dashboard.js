import React, { useState } from "react";
import {
    Container, Row, Col, 
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { TitlePage } from "../style/Layout";
import { DropdownPrimary} from "../style/Button";



function Dashboard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col md="6">
                    <TitlePage>Dernières activités de votre dossier</TitlePage>
                </Col>
                <Col md="6" className="text-end">
                    <DropdownPrimary isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>Actions rapides</DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                    </DropdownPrimary>
                </Col>

            </Row>
        </Container>
    );
}

export default Dashboard;