import React, { useState } from "react";
import {
    Container, Row, Col,
    Offcanvas, Nav, NavItem, NavLink, TabContent, TabPane, OffcanvasHeader, OffcanvasBody,FormGroup,Form,Label,Input
} from "reactstrap";
import { TitlePageBig, TitlePageApp } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";
import CardDoc from "../components/CardDocument";


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
                            <ButtonPrimary onClick={toggle2}>+ Ajouter un document</ButtonPrimary>
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
                </Row>
            </Container>
            <Offcanvas
                isOpen={canvas}
                toggle={toggle2}
                {...args}
                direction="end"
                scrollable>
                <OffcanvasHeader toggle={function noRefCheck() { }}>
                    Ajouter un document
                </OffcanvasHeader>
                <OffcanvasBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                        Nom du document
                        </Label>
                        <Input
                        id="nomDoc"
                        name="nomDoc"
                        type="text"
                        />
                    </FormGroup>
                    </Form>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

export default Documents;