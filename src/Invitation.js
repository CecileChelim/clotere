import React, { useState, useEffect } from "react";
import { useMemberstack, } from "@memberstack/react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Form, Label, Input, Alert, FormText, ListGroup, ListGroupItem } from "reactstrap";
import { ButtonPrimary } from "./style/Button";
import { HomeS } from "./Home"
import styled from "styled-components";
import logoClotere from "./img/logo-clotere.svg";

const Logo = styled.img`
width:200px;
margin:0 auto;
`;
const HomeS2 = styled(HomeS)`
min-height: 100vh;
.avantage,.formulaire{padding:6rem 4rem;min-height: 100vh;}
.formulaire{background-color:#fff!important;}
.mobile{display:none;}
@media all and (max-width: 768px) {
    .avantage{
        display:none;
    }
    .mobile{
        display:block;
        
        img{display:none;}
    }
    .mobile,.formulaire{
        padding:2rem;
    }
    .formulaire{
        min-height: auto;
    }
`;

const ListGroupAvantages = styled(ListGroup)`
border:0;
li.list-group-item{
    border:0;
    margin:.5rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-weight:bold;
    span{
        margin-right:10px;
        background-color:#FFF;
        padding:1rem;
        border-radius:10px;
        margin-right:15px;
    }
}
`;


function Invitation(args, props) {
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

    if (member) {
        navigate("/app/dashboard");
    }




    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        memberstack.loginMemberEmailPassword({ email, password })
            .then((signinData) => {
                //console.log("User connecte!", signinData);
                setMember(member);
                navigate("/app/dashboard");
            })
            .catch(er => {
                //console.log("erreur ajout", er);
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
                <HomeS2>
                    <Row>
                        <Col md="5" className="avantage">
                            <Container>
                                <Logo alt="Clotere"
                                    src={logoClotere}></Logo>
                                <br /><br /><br />
                                <h5>Clotere vous facilite le passage chez le notaire</h5>
                                <ListGroupAvantages>
                                    <ListGroupItem>
                                        <span>🥳</span> Trouvez un notaire rapidement et disponible
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>👌</span> Fini les mails ! Regroupez tous les échanges de votre transaction au même endroit.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>🔥</span> Suivre l'avancement de vos documents notariés
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>📆</span> Fixer vos rendez-vous avec votre notaire
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>📨</span> Réalisez vos signatures d'acte en ligne de manière sécurisée
                                    </ListGroupItem>
                                </ListGroupAvantages>
                            </Container>
                        </Col>

                        <Col md="7" xs="0" className="formulaire">
                            <Container>
                                <br /><br /><br />
                                <div className="d-flex flex-column justify-content-center text-center">

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
                                        <ButtonPrimary color="primary" type="submit">Se connecter</ButtonPrimary>
                                    </FormGroup>
                                </Form>
                            </Container>
                        </Col>
                        <Col xs="12" className="avantage mobile">
                            <Container>
                                <Logo alt="Clotere"
                                    src={logoClotere}></Logo>
                                <br /><br />
                                <h4>Clotere vous facilite le passage chez le notaire</h4>
                                <ListGroupAvantages>
                                    <ListGroupItem>
                                        <span>🥳</span> Trouvez un notaire rapidement et disponible
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>👌</span> Fini les mails ! Regroupez tous les échanges de votre transaction au même endroit.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>🔥</span> Suivre l'avancement de vos documents notariés
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>📆</span> Fixer vos rendez-vous avec votre notaire
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>📨</span> Réalisez vos signatures d'acte en ligne de manière sécurisée
                                    </ListGroupItem>
                                </ListGroupAvantages>
                            </Container>
                        </Col>
                    </Row>
                </HomeS2>
            )}
        </>
    );
}

export default Invitation;