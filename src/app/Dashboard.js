import React, { useState } from "react";
import {
    Container, Row, Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Offcanvas
} from "reactstrap";
import { TitlePage,TitlePageBig } from "../style/Layout";
import { DropdownPrimary } from "../style/Button";
import TimelineListItem from "../components/TimelineListItem";
import CardHelp from "../components/CardHelp";



function Dashboard(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [canvas, setCanvas] = useState(false);

    const toggle2 = () => setCanvas(!canvas);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">
                <Col md="12"><TitlePageBig className="mb-4">Bonjour Cécile <span role="img" aria-label="hello">👋</span></TitlePageBig></Col>
                    <Col md="7">
                        <TitlePage>Voici l'avancement de votre dossier </TitlePage>
                        
                    </Col>
                    <Col md="5" className="text-end">
                        <DropdownPrimary isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>Actions rapides</DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem onClick={toggle2}>+ Ajouter un document</DropdownItem>
                                <DropdownItem>Posez une question</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </DropdownPrimary>
                    </Col>
                    <Col md="7" className="mt-3">
                    <TimelineListItem etat="pas fait" type={"Offre d'achat"} message={"L’offre d’achat est acceptée ! 🥳"} contenu={"Signée le 16 janvier 2023"} />
                    </Col>
                    <Col md="5" className="mt-3">
                    <CardHelp/>
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