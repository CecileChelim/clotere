import React, { useState } from "react";
import {
    Container, Row, Col, Card,
    Offcanvas, Nav, NavItem, NavLink, TabContent, TabPane, OffcanvasHeader, OffcanvasBody, FormGroup, Form, Label, Input, CardBody
} from "reactstrap";
import { TitlePageBig, TitlePageApp } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";
import CardDoc from "../components/CardDocument";
import { FileUploader } from "react-drag-drop-files";
import { FileUploaderS } from "../style/FileUploaderStyle";


const fileTypes = ["PDF", "DOC", "JPEG"];
  

function Documents(args) {
    //console.log("arg  bien",args.bien)
    const [currentActiveTab, setCurrentActiveTab] = useState('situation');
    const toggle = tab => { if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [canvas, setCanvas] = useState(false);
    const toggle2 = () => setCanvas(!canvas);

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        console.log(file);
    };

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
                                    onClick={() => { toggle('situation'); }}
                                    className={`${currentActiveTab === "situation" ? "active" : ""}`}
                                >
                                    Situation
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { toggle('vente'); }}
                                    className={`${currentActiveTab === "vente" ? "active" : ""}`}>
                                    Vente
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { toggle('copro'); }}
                                    className={`${currentActiveTab === "copro" ? "active" : ""}`}>
                                    Copropriété
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
                            <TabPane tabId="situation">
                                <Row>
                                    <Col sm="12">
                                        <CardDoc bien={args.bien} />
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
                        <Card>
                            <CardBody>
                                <Form>
                                    <h3>Ajoutez vos documents</h3>
                                    <FormGroup>
                                        <Label>De quel document s’agit-il ?</Label>
                                        <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        >
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                        <option>
                                            3
                                        </option>
                                        <option>
                                            4
                                        </option>
                                        <option>
                                            5
                                        </option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                    <FileUploaderS>
                                        <FileUploader
                                        multiple={true}
                                        handleChange={handleChange}
                                        name="file"
                                        types={fileTypes}
                                    />
                                    <p>{file ? `Nom de votre fichier: ${file[0].name}` : "Aucun fichier chargé"}</p>
                                    </FileUploaderS>
                                    </FormGroup>
                                    <FormGroup>
                                        <ButtonPrimary>Ajouter le document</ButtonPrimary>
                                    </FormGroup>
                                </Form>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Offcanvas
                isOpen={canvas}
                toggle={toggle2}
                {...args}
                direction="end"
                scrollable>
                <OffcanvasHeader toggle={toggle2}>
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