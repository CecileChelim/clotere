import React, { useState } from "react";
import {
    Container, Row, Col,
    Offcanvas,Nav,NavItem,NavLink,TabContent,TabPane
} from "reactstrap";
import { TitlePageBig, TitlePageApp } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";
import CardDoc from "../components/CardDocument";
import CardHelp from "../components/CardHelp";
import CardInfoManquante from "../components/CardInfoManquante";


function Documents(args) {
    //console.log("arg  bien",args.bien)
    const [currentActiveTab, setCurrentActiveTab] = useState('tous');
    const toggle = tab => { if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [canvas, setCanvas] = useState(false);

    const toggle2 = () => setCanvas(!canvas);

    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">

                    <TitlePageApp>
                        <Col md="7"><TitlePageBig className="mb-4">Vos documents</TitlePageBig></Col>
                        <Col md="5" className="text-end">
                            <ButtonPrimary>+ Ajouter un document</ButtonPrimary>
                        </Col>
                    </TitlePageApp>

                    <Col md="7">
                        <Nav pills>
                            <NavItem>
                            <NavLink 
                            onClick={() => { toggle('tous'); }}
                            className={`${currentActiveTab === "tous" ? "active" : ""}`}
                            >
                                    Tous les documents
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink onClick={() => { toggle('perso'); }}
                            className={`${currentActiveTab === "perso" ? "active" : ""}`}>
                                    Personnel
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink onClick={() => { toggle('copro'); }}
                            className={`${currentActiveTab === "copro" ? "active" : ""}`}>
                                    Copropriété
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink onClick={() => { toggle('vente'); }}
                            className={`${currentActiveTab === "vente" ? "active" : ""}`}>
                                    Vente
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink onClick={() => { toggle('diag'); }}
                            className={`${currentActiveTab === "diag" ? "active" : ""}`}>
                                    Technique & diagnostics
                                </NavLink>
                            </NavItem>
                            
                        </Nav>

                        <TabContent className="mt-3" activeTab={currentActiveTab}>
                            <TabPane tabId="tous">
                                <Row>
                                    <Col sm="12">
                                    <CardDoc bien={args.bien} />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="perso">
                                <Row>
                                    <Col sm="12">
                                    perso
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="copro">
                                <Row>
                                    <Col sm="12">
                                    corpo
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="vente">
                                <Row>
                                    <Col sm="12">
                                    vente
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="diag">
                                <Row>
                                    <Col sm="12">
                                    diag
                                    </Col>
                                </Row>
                            </TabPane>
                            </TabContent>

                        
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