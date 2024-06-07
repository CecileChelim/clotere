import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Background from "../img/back-clotere.png";
/** composants **/
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Alert } from "reactstrap";
import { RowCandidatureNotaire, Message } from "./Dashboard"
import { Panel } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";


const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
padding:3rem 15rem;
@media all and (max-width: 768px) {
    padding:1rem;
}
`;

const InfoNotaire = styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
gap: 4rem;
text-align: left;
p{
    margin-bottom:0;
    color:#84847C;
}
h5,a{
    font-size:16px;
}
@media all and (max-width: 768px) {
    flex-direction: column;
    gap: .5rem;
}
`;
const NameNotaire = styled.div`
display:flex;
flex-direction:row;
gap:10px;
align-items: end;
justify-content: center;
margin:1rem 0;
svg{
    padding:1.5rem;
    text-align:center;
    border-radius:100px;
    color:black;
    background-color:${props => props.theme.colors.main};
}
`;

const ListGroupAvantage = styled(ListGroup)`
p{
    margin:0;
    text-align:left;
    .light{color:#84847C;}
}
.icon{
    border-radius: 100px;
    padding: 0.5rem;
    
    width: 40px;
    height: 40px;
    text-align: center;
    background-color:${props => props.theme.colors.main};
    margin-right:1rem;
}
.bg-primary{
    background-color:#CCE1DD!important;
    color:${props => props.theme.colors.greenDark}!important;
}

.list-group-item{
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ddd!important;
    border: 0;
    background-color: transparent;
}
`;



function ChoisirNotaire(args) {
    const { id} = useParams();
    const [infoCandidature, setInfoCandidature] = useState(null);

    //get info candidature
    const getInfoCandidature = async () => {
        try {
            if (id !== null) {
                const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/candidatures_notaire?filterByFormula=SEARCH("${id}",{id})`;

                fetch(
                    URL,
                    {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                            'content-type': 'application/x-www-form-urlencoded',
                            "Accept": "application/json, text/plain, /"
                        },
                    })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log("info candidature", res.records);
                        setInfoCandidature(res.records[0].fields);
                    })
                    .catch((error) => console.log(error));
            }
        } catch (e) {
            console.log(e);
        }
    };

    //use effect candidature
    useEffect(() => {
        getInfoCandidature();
    }, []);

    const handleChoisirCeNotaire = (event) => { 
        console.log("choisir");

        //appeler un webhook zapier qui fait
        //retrouver la candidature et la passer à en cours d'attribution
        //mettre toutes les autres candidature à non retenues
        //mettre le statut de la transaction à en cours d'attribution
        //envoyer un slack sur l'event du site
        //créer un lien de paiement stripe
        //envoyer un mail à la main au notaire avec le paiement stripe pour prendre l'affaire
        //a réception du paiement
        // attribuer l'affaire et faire un mail de confirmation notaire, agent et acheteur ou vendeur

    }

    return (
        <>
            <HomeS>
                <Container>
                    <Row>
                        <Col align="center">
                            <h1> Choisissez votre notaire</h1>
                            <p>Vous êtes sur le point de confier cette affaire à</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' align="center">
                            <NameNotaire>
                             <FontAwesomeIcon icon={faUser} />
                             <p>Mr Claire Bouchat</p>
                            </NameNotaire>
                            <Panel className="mb-5">
                                <InfoNotaire>
                                <div className="info">
                                    <p>Etude</p>
                                    <h5>Etude Bouchat</h5>
                                </div>
                                <div className="info">
                                    <p>Adresse</p>
                                    <h5>25 rue jules ferry <br/>95110 SANNOIS</h5>
                                </div>
                                <div className="info">
                                    <p>Informations légales</p>
                                    <a href="#">Voir les informations officielles</a>
                                </div>
                                </InfoNotaire>
                                <Message className="mt-4 mb-4">
                                    <p>
                                    Bonjour,
                                    <br/>je suis notaire à Aubervilliers et j'ai l'habitude de traiter des affaires dans cette ville, je suis disponible pour votre affaire. Cordialement.
                                    </p>
                                </Message>
                            </Panel>
                        </Col>
                        <Col md='12' align="center">
                            <ButtonPrimary color="primary">Choisir ce notaire</ButtonPrimary>
                            <p><br/>
                            <small>En choisissant de confiez votre affaire à ce notaire,<br/> vous acceptez <a href="#">les conditions générales d’utilisation</a> de Clotere. </small>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" align="center"  className="mt-3">
                            <h2><span role="img">👋</span> Quelques conseils pour bien choisir</h2>
                            <ListGroupAvantage className="mt-3">
                                <ListGroupItem className="d-flex align-items-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInfoCircle} className='mr-3' />
                                    </div>
                                    <p>
                                        <b>Vérifiez l’adresse de l’étude</b><br />
                                        <span className="light">
                                        Il y aura des déplacements à prévoir à l’étude du notaire. Sauf si vous décidez de faire une dérogation. L’adresse de l’étude est donc un point important à vérifier
                                        </span>
                                    </p>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex align-items-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                                    </div>
                                    <p>
                                        <b>N’hésitez pas à contacter votre conseiller</b><br />
                                        <span className="light">Si vous avez des questions avant de faire votre choix, vous pouvez contacter votre conseiller.</span>
                                    </p>
                                </ListGroupItem>
                                </ListGroupAvantage>
                        </Col>
                        <Col md="12" className="mt-5">
                        <Alert>
                                    <FontAwesomeIcon icon={faInfoCircle} /><b> Et si ce notaire ne me convient plus ? </b><br />
                                    Vous pouvez changer de notaire si il ne vous convient pas.
                                    <br />
                                    Sachez cependant que les notaires Clotere, s'engagent à être disponibles, réactifs et pédagogues pour vous accompagner de la meilleure maniere.
                                    <br />
                                    <small>Si vous n'êtes pas satisfait de l'avancement de votre dossier, contactez-nous pour nous en faire part et nous trouverons une solution.</small>
                                </Alert>
                        </Col>
                    </Row>
                </Container>

            </HomeS>

        </>
    );
}

export default ChoisirNotaire;