import React, { useState, useEffect } from "react";
import { useMemberstack, } from "@memberstack/react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Form, Label, Input, Alert, ListGroup, ListGroupItem,Offcanvas,OffcanvasHeader, OffcanvasBody, } from "reactstrap";
import { ButtonPrimary } from "./style/Button";
import { HomeS } from "./Home"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
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
.alert{border:0;margin:1rem 0;}
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
const InfoMdp = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:20px;
font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    opacity:.7;
svg{font-size: 1.5em!important;}

`;



function ConnexionLink(args, props) {
    const memberstack = useMemberstack();
    const [formError, setFormError] = useState(false);
    const [token, setToken] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [member, setMember] = useState(null);
    const [emailSent, setEmailSent] = useState(null);
    const navigate = useNavigate();
    const [canvas, setCanvas] = useState(false);
    
    const toggleEnSavoirPlus = () => setCanvas(!canvas);

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

        // Send magic link email 
        memberstack.sendMemberLoginPasswordlessEmail({ 
            email
        }).then(() => { 
            // Email sent 
            setEmailSent(email);
            setToken(true);
        }).catch(er => { 
            // Handle error 
            console.log("erreur sent email", er);
            setFormError(true);
            setFormErrorMessage(er.message);
        });

    }

    const handleSubmit2 = (event,emailSent) => {
        event.preventDefault();
        const passwordlessToken = event.target.token.value;

        // Sign up member after they click email link 
        memberstack.loginMemberPasswordless({ 
            passwordlessToken,
            email:"chelim.cecile@gmail.com"
        }).then(result => { 
            console.log("result", result);
            setMember(member);
            navigate("/app/dashboard");
            // Use accessToken from result 
        }).catch(error => { 
            // Handle invalid or expired token 
            // Handle error 
            console.log("erreur sent email", error);
            setFormError(true);
            setFormErrorMessage("Une erreur s'est produite veuillez recommencer");
        });
    }

    return (
        <>
            {!member && (
                <div>
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
                                        <span>🥳</span> Suivez l'avancement de votre transaction immobilère simplement
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>👌</span> Regroupez tous vos échanges au même endroit.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>🔥</span> Trouvez un notaire plus rapidement
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>📆</span> Fixer vos rendez-vous simplement avec votre notaire
                                    </ListGroupItem>
                                </ListGroupAvantages>
                            </Container>
                        </Col>

                        <Col md="7" xs="0" className="formulaire">
                            <Container className="text-center">
                                <br /><br /><br />
                                {token === false ? (
                                    <>
                                        <div className="d-flex flex-column justify-content-center text-center">
                                            <h3 className="mt-3 mb-3">Connectez-vous</h3>
                                        </div>
                                        <Form data-ms-form="passwordless-login" onSubmit={handleSubmit}>
                                                <>

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
                                                </>
                                            <FormGroup>
                                            <ButtonPrimary color="primary" type="submit" data-ms-passwordless-button="Confirm & Signup">Obtenir mon code de connexion</ButtonPrimary>
                                            </FormGroup>
                                            <InfoMdp>
                                            <FontAwesomeIcon icon={faInfoCircle} className="fa-3x iconflex" />
                                            <div>Pour votre sécurité, Clotere n’utilise pas de mot de passe. <br/>Vous recevrez un lien de connexion par email (<a onClick={toggleEnSavoirPlus}>en savoir plus</a>).
                                            </div>
                                            </InfoMdp>
                                        </Form>
                                    </>
                                ) : (<>
                                            <div className="d-flex flex-column justify-content-center text-center">
                                                <h3 className="mt-3 mb-3">Code de vérification</h3>
                                            </div>
                                            <Form data-ms-form="passwordless-login" onSubmit={handleSubmit2}>
                                                    <FormGroup>
                                                        <p>Saisissez le code envoyé à l'adresse <b>{emailSent}</b></p>
                                                        <Input
                                                            name="token" type="text" data-ms-member="token" placeholder="Saisissez votre code de vérification 167589" focus
                                                        />
                                                        <Alert color="light"> <span role="icon">🫤</span> Vous ne trouvez pas votre code de vérification ? Assurez-vous de vérifier votre dossier spam</Alert>
                                                    </FormGroup>
                                           
                                                <FormGroup>
                                                <ButtonPrimary color="primary" type="submit" data-ms-passwordless-button="Confirm & Signup">Valider et se connecter</ButtonPrimary>
                                                </FormGroup>
                                            </Form>
                                        </>
                                    )}

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
                                        <span>🥳</span> Suivez votre transaction immobilière facilement
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>👌</span> Regroupez tous vos échanges au même endroit
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>🔥</span> Trouvez un notaire rapidement
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
                <Offcanvas
                isOpen={canvas}
                toggle={toggleEnSavoirPlus}
                {...args}
                direction="end"
                scrollable>
                <OffcanvasHeader toggle={toggleEnSavoirPlus}>
                Pourquoi n'ai-je pas de mot de passe Clotere ?
                </OffcanvasHeader>
                <OffcanvasBody>
                <p>Clotere est une entreprise où la sécurité et la vie privée de nos utilisateurs est prise extrêmement au sérieux. 
                    Nous savons que vous nous faites confiance en nous confiant des données personnelles et sensibles, et nous mettons tout en œuvre pour les protéger</p>
    
                <p>
                    <b>L'objectif principal est qu'il soit impossible pour un intrus de se connecter à votre place</b> !
                    </p>
                    <p>
                    Pour nous en assurer, nous avons choisi de ne pas utiliser de mot de passe pour vous authentifier. Voici pourquoi :
                    </p>
​                  <p>
    <b>Les mots de passe sont un des plus gros risque de sécurité sur internet</b>, car vous êtes nombreux à les réutiliser sur plusieurs sites. On vous comprend : difficile de tous les retenir ! Mais il suffit qu'un seul de ces sites ait été hacké pour que votre précieux mot de passe soit connu de pirates.
    </p>
            <p>
                Nous utilisons donc une solution passwordless, qui vous impose de cliquer sur un lien "magique" que nous vous envoyons par email à chaque connexion sur un nouvel appareil ou après 30 jours sur vos appareils déjà connus.
                </p>
                </OffcanvasBody>

            </Offcanvas>
            </div>
            )}
        </>
    );
}

export default ConnexionLink;