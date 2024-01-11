import React, { useState,useEffect } from "react";
import { useMemberstack } from "@memberstack/react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Form, Label, Input, Alert, FormText } from "reactstrap";
import { ButtonPrimary } from "./style/Button";
import styled from "styled-components";
import logoClotere from "./img/logo-clotere.svg";

const Logo = styled.img`
width:200px;
margin:0 auto;
`;
const ContainerFormRegister = styled(Container)`
margin-top:8%;
`;

function Inscription(args, props) {
    const memberstack = useMemberstack();
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [member, setMember] = useState(null);
    const navigate = useNavigate();

    //redirect if already logged
      useEffect(() => {
        memberstack.getCurrentMember()
        .then(({ data: member }) => setMember(member))
      }, []);

      if (member){
        navigate("/app/dashboard");
      } 


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        memberstack.signupMemberEmailPassword({ email, password })
            .then((signupData) => {
                console.log("User signed up!", signupData);
                setMember(member);
                navigate("/app/dashboard");
            })
            .catch(er => {
                console.log("erreur ajout", er);
                setFormError(true);
                setFormErrorMessage(er.message);
                setTimeout(() => {
                    setFormError(false);
                }, 3000);
                ;
            });
        ;
    }

    return (
        <>
        {!member && (
            <ContainerFormRegister>
                <Row>
                    <Col md="3" xs="0"></Col>
                    <Col md="6" xs="0">
                        <div className="d-flex flex-column justify-content-center text-center">
                        <Logo alt="Clotere"
                            src={logoClotere}></Logo>
                        <h3 className="mt-3 mb-3">Inscrivez-vous</h3>
                        </div>
                        <Form data-ms-form="login" onSubmit={handleSubmit}>
                            {formError ? (
                                <Alert color="danger">
                                    {formErrorMessage}
                                </Alert>
                            ) : (<>{" "}</>)}

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="nom">
                                            Nom
                                        </Label>
                                        <Input
                                            name="nom"
                                            type="text"
                                            data-ms-member="nom" 
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="prenom">
                                            Prenom
                                        </Label>
                                        <Input
                                            name="prenom"
                                            type="text"
                                            data-ms-member="prenom" 
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    name="email" type="email" data-ms-member="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="mdp">
                                    Mot de passe
                                </Label>
                                <Input
                                    name="password" type="password" data-ms-member="password" minLength="8" required
                                />
                                <FormText>
                                    8 charactères minimum
                                </FormText>

                            </FormGroup>
                            <FormGroup>
                                <ButtonPrimary type="submit">S'inscrire</ButtonPrimary>
                            </FormGroup>
                        </Form>

                    </Col>
                </Row>
            </ContainerFormRegister>
            )}
        </>
    );
}

export default Inscription;