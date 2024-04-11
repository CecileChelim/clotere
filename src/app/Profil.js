import React, {useEffect,useState} from "react";
import {
    Container, Row, Col, TabContent, TabPane, NavItem, Nav, NavLink, Form, FormGroup, Label, Input, Alert 
} from "reactstrap";
import { TitlePageBig,Panel } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";

function Profil(args) {
    //console.log("arg  bien",args.bien)
    const [currentActiveTab, setCurrentActiveTab] = useState('informations');
    const [errorPassword, setErrorPassword] = useState(null);
    const [successPassword, setSuccessPassword] = useState(null);
    
    const toggle = tab => { if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [popupName, setPopupName] = useState(null);
   
    var dataToSend = {};

    useEffect(() => {
        if(args.user != null){
               // eslint-disable-next-line
            dataToSend = {
                "nom": args.user.nom,
                "prenom": args.user.prenom,
                "telephone": args.user.telephone,
            }
        }

    }, [args.user])

    const modifUserInfo = async () =>{
        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${args.user.id}`;

        var response = await fetch(
            URL,
            {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                    "Accept": "application/json",
                    'content-type':"application/json"
                },
                body:  JSON.stringify({dataToSend})
                
            });

            if(response.status === 200){
                setPopupName("succes")
            }else{
                setPopupName("danger") 
            }

            setTimeout(() => {
                setPopupName(null);
              }, 5000);
    }

    return (
        <>
            <Container>
            <Row className="d-flex align-self-start">
            <Col md="12"><TitlePageBig className="mb-4">Votre bien</TitlePageBig></Col>
                <Col md="12" className="mt-3">
                    <Nav tabs>
                        <NavItem>
                            <NavLink 
                            onClick={() => { toggle('informations'); }}
                            className={`${currentActiveTab === "informations" ? "active" : ""}`}>
                                Informations
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            onClick={() => { toggle('mdp'); }}
                            className={`${currentActiveTab === "mdp" ? "active" : ""}`}  >
                                Mot de passe
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={currentActiveTab}>
                        <TabPane tabId="informations">
                            <Row>
                                <Col sm="12">
                                    <Panel>
                                     {popupName === null ? <></>:<Alert color={popupName === "succes" ? "success" : "danger"}>
                                            {popupName === "succes" ? "Modifications effectuées avec succès !" : "Erreur lors de la modification."}
                                        </Alert> }
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="">
                                                            Nom 
                                                        </Label>
                                                        <Input
                                                            id=""
                                                            defaultValue={args.user.nom != null ? args.user.nom : ""}
                                                            name=""
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                <FormGroup>
                                                    <Label for="">
                                                        Prénom
                                                    </Label>
                                                    <Input
                                                        id=""
                                                        defaultValue={args.user.prenom != null ? args.user.prenom : ""}
                                                        name=""
                                                        onChange={(val) => {
                                                            dataToSend = { ...dataToSend, "prenom":  val.target.value };
                                                        }}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                                </Col>
                                               
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="">
                                                            Email
                                                        </Label>
                                                        <Input
                                                            disabled
                                                            id=""
                                                            name=""
                                                            defaultValue={args.user.email != null ? args.user.email : ""}
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="">
                                                            Téléphone
                                                        </Label>
                                                        <Input
                                                            id=""
                                                            name=""
                                                            defaultValue={args.user.telephone != null ? args.user.telephone : ""}
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="">
                                                            Rôle
                                                        </Label>
                                                        <Input
                                                            disabled
                                                            id=""
                                                            name=""
                                                            defaultValue={args.user.role != null ? args.user.role : ""}
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                
                                            </Row>
                                            <FormGroup>
                                                        <ButtonPrimary onClick={modifUserInfo} color="primary">Modifier</ButtonPrimary>
                                                    </FormGroup>
                                        </Form>
                                    </Panel>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="mdp">
                            <Row>
                                <Col sm="12">
                                <Panel>
                                {errorPassword == null ? <></>:<Alert color="danger">
                                            {errorPassword}
                                        </Alert> }
                                        {successPassword == null ? <></>:<Alert color="success">
                                            {successPassword}
                                        </Alert> }
                                    <Form>
                                        <FormGroup>
                                            <Label>Renseignez votre ancien mot de passe</Label>
                                            <Input
                                                id=""
                                                name=""
                                                type="password"
                                                /*onChange={(val) => {
                                                    setOldPassword(val.target.value);  
                                                }}*/
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Modifier votre mot de passe</Label>
                                            <Input
                                                id=""
                                                name=""
                                                type="password"
                                                /*onChange={(val) => {
                                                    setNewPassword(val.target.value);  
                                                }}*/
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Confirmer le mot de passe</Label>
                                            <Input
                                                id=""
                                                name=""
                                                type="password"
                                                /*onChange={(val) => {
                                                    setNewPasswordConfirm(val.target.value);  
                                                }}*/
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                                        <ButtonPrimary  color="primary">Modifier</ButtonPrimary>
                                                    </FormGroup>
                                    </Form>
                                </Panel>
                                </Col>
                            </Row>
                        </TabPane>

                    </TabContent>
                </Col>
            </Row>
        </Container>
            
        </>
    );
}

export default Profil;