import React, { useState } from "react";
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

function Invitation(args, props) {
    const memberstack = useMemberstack();
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [member, setMember] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        memberstack.loginMemberEmailPassword({ email, password })
            .then((signinData) => {
                console.log("User connecte!", signinData);
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
            <ContainerFormRegister>
                <Row>
                    <Col md="3" xs="0"></Col>
                    <Col md="6" xs="0">
                    <div className="d-flex flex-column justify-content-center text-center">
                        <Logo alt="Clotere"
                            src={logoClotere}></Logo>
                        <h3 className="mt-3 mb-3">Connectez-vous</h3>
                        </div>
                        <Form data-ms-form="login" onSubmit={handleSubmit}>
                            {formError ? (
                                <Alert color="danger">
                                    {formErrorMessage}
                                </Alert>
                            ) : (<>{" "}</>)}

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
                                    name="password" type="password" data-ms-member="password" minlength="8" required
                                />
                                <FormText>
                                    8 charactères minimum
                                </FormText>

                            </FormGroup>
                            <FormGroup>
                                <ButtonPrimary type="submit">Se connecter</ButtonPrimary>
                            </FormGroup>
                        </Form>

                    </Col>
                </Row>
            </ContainerFormRegister>
        </>
    );
}

export default Invitation;