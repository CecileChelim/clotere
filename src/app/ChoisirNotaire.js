import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Background from "../img/back-clotere.png";
/** composants **/
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Alert } from "reactstrap";
import { RowCandidatureNotaire, Message } from "./Dashboard"
import { Panel } from "../style/Layout";
import { ButtonPrimary } from "../style/Button";


const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
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
                            <h1> Vous êtes sur le point de confier cette affaire à un notaire </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Les points importants à retenir : <br />
                                <ul>
                                    <li>Vous serez toujours en relation direct avec votre conseillé Clotere</li>
                                    <li>Vous recevrez des mails pour suivre l'activité de votre dossier</li>
                                    <li>Vous accéderez aux coordonnées complètes de votre notaire</li>
                                </ul>
                                <br />

                                <Alert>
                                    <FontAwesomeIcon icon={faInfoCircle} /><b> Et si ce notaire ne me convient plus ? </b><br />
                                    Vous pouvez changer de notaire si il ne vous convient pas.
                                    <br />
                                    Sachez cependant que les notaires Clotere, s'engagent à être disponibles, réactifs et pédagogues pour vous accompagner de la meilleure maniere.
                                    <br />
                                    <small>Si vous n'êtes pas satisfait de l'avancement de votre dossier, contactez-nous pour nous en faire part et nous trouverons une solution.</small>
                                </Alert>
                            </p>
                        </Col>
                    </Row>
                    <RowCandidatureNotaire>
                        <>
                            <Col className='flex'>
                                <Panel>
                                    <h5>Maître {" "} {" "} </h5>

                                    <Message>
                                        <p>

                                        </p>
                                    </Message>
                                    <ButtonPrimary color="primary" onClick={handleChoisirCeNotaire}>Choisir ce notaire</ButtonPrimary>
                                </Panel>
                            </Col>
                        </>

                    </RowCandidatureNotaire>
                </Container>

            </HomeS>

        </>
    );
}

export default ChoisirNotaire;