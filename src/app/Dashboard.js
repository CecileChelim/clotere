import React, { useEffect, useState } from 'react';
import {
    Container, Row, Col, Modal,
    Offcanvas, Card, ListGroup, ListGroupItem, OffcanvasHeader, OffcanvasBody, Alert, CardBody, CardTitle
} from "reactstrap";
import { TitlePage, TitlePageApp, TitleSection, Panel } from "../style/Layout";
import { ButtonPrimarySmall,ButtonPrimary, LinkS } from "../style/Button";
import TimelineListItem from "../components/TimelineListItem";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import CardHelp from '../components/CardHelp';
import AideCompromis from "../components/AideCompromis";
import AideActe from "../components/AideActe";
import ChoisirNotaire from "../components/ChoisirNotaire";
import styled from "styled-components";
import backWelcome from "../img/back-alert-welcome.png";
import icnDocVente from "../img/icn-doc-vente.svg";
import icnDoc from "../img/icn-doc.svg";
import icnCalendar from "../img/icn-calendar.svg";
import icnTuto from "../img/icn-tuto.svg";

function Dashboard(args) {
    const [canvas, setCanvas] = useState(false);
    const [canvasCompromis, setCanvasCompromis] = useState(false);
    const [canvasActe, setCanvasActe] = useState(false);
    const [canvasChoisirNotaire, setCanvasChoisirNotaire] = useState(false);
    const [candidatures, setCandidatures] = useState(undefined);

    const toggle3 = () => setCanvas(!canvas);
    const toggleCompromis = () => setCanvasCompromis(!canvasCompromis);
    const toggleActe = () => setCanvasActe(!canvasActe);
    const toggleChoisirNotaire = () => setCanvasChoisirNotaire(!canvasChoisirNotaire);
    

    const [pdfName, setPdfName] = useState(null);
    const toggleModal = () => setPdfName(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    console.log("args dahboasrd", args);

    //get info candidature
    useEffect(() => {
        //on recupere les candidatures de la transaction
        if (args.transaction !== null) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/candidatures_notaire?filterByFormula=SEARCH("${args.transaction.id}",{transaction})`;

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
                    console.log("all candidature transaction", res.records);
                    setCandidatures(res.records);
                })
                .catch((error) => console.log(error));
        }
        // eslint-disable-next-line
    }, [args.transaction]);



    if (args.info === "newUser") {
        return (
            <>
                <Container>
                    <Row>
                        <TitlePageApp>
                            <Col md="12">
                                <TitlePage>Bonjour <span role="img">👋</span> </TitlePage>
                                <p>Votre transaction est en attente de validation. Nous vous enverrons un email lorsquelle sera validée. </p>
                            </Col>
                        </TitlePageApp>
                        <Col md="12">
                            <TitleSection className="mt-5">Suivi de votre transaction</TitleSection>
                            <Panel>
                                <ListGroupActionAmener numbered>
                                    <ListGroupItem className="done">
                                        <div className="d-flex flex-column">
                                            <h4>Création de votre transaction immobilière</h4>
                                            <p>Aujourd'hui</p>
                                        </div>

                                    </ListGroupItem>
                                    <ListGroupItem className="encours">
                                        <div className="d-flex flex-column">
                                            <h4>Vérification de votre transaction immobilière</h4>
                                            <p>En cours</p>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="avenir">
                                        <div className="d-flex flex-column">
                                            <h4>Ouvertures des accès aux utilisateurs (acheteur(s), vendeur(s), agent immobilier)</h4>
                                            <p>A venir</p>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="avenir">
                                        <div className="d-flex flex-column">
                                            <h4>Prise en charge de l'affaire par votre notaire</h4>
                                            <p>A venir</p>
                                        </div>
                                    </ListGroupItem>


                                </ListGroupActionAmener>
                            </Panel>
                        </Col>
                    </Row>
                </Container>

            </>
        )
    } else if (args !== null & candidatures !== undefined) {
        return (
            <>
                <Container>
                    <Row className="d-flex align-self-start">
                        <TitlePageApp>
                            <Col md="7">
                                <TitlePage>Bonjour {args.user.prenom},</TitlePage>
                                <p>Voici l'avancement de votre transaction : <b>{args.transaction.nom}</b> </p>
                            </Col>
                        </TitlePageApp>


                        <Col md="12" className="mt-3">
                            {/** on regarde si la transaction a un notaire */}
                            {args.transaction.statut_marketplace_notaire === "en recherche de notaire" ? (
                                <>
                                    {candidatures !== null ? (
                                        <>
                                        <TitleSection><span role="img">👋</span> Bonne nouvelle ! Un notaire est disponible pour prendre en charge votre dossier.</TitleSection>
                                          <RowCandidatureNotaire>
                                            {candidatures.map((i) => (
                                                <>
                                                    <Col md='4' key={i} className='flex'>
                                                        <Panel>
                                                                <h5>Maître {" "} {i.fields.nom_from_notaire} {" "} {i.fields.prenom_from_notaire}</h5>
                                                                <p className='m-0'>{i.fields.etude_from_info_notaire}</p>
                                                                <p>{i.fields.adresse_from_info_notaire} {" "} {i.fields.code_postal_from_info_notaire} {" "} {i.fields.ville_from_info_notaire} </p>
                                                                <p><a href={i.fields.lien_notaire_de_france_from_info_notaire} target="blank">Consulter la fiche Notaire de france  </a></p>
                                                                <Message>
                                                                    <p>
                                                                        {i.fields.message}
                                                                    </p>
                                                                </Message>
                                                                <ButtonPrimary color="primary" onClick={toggleChoisirNotaire}>Choisir ce notaire</ButtonPrimary>
                                                        </Panel>
                                                    </Col>
                                                </>
                                            ))}
                                            </RowCandidatureNotaire>
                                        </>
                                    ) : (<>
                                        <Col md='12' align="left">
                                            <AlertWelcome>
                                                <p><span role="img">👋</span>Nous recherchons actuellement un notaire pour votre transaction. Cela ne prendra pas beaucoup de temps, vous serez avertie par email lorsqu'il prendra votre affaire.
                                                </p>
                                            </AlertWelcome>
                                        </Col>
                                    </>)}

                                </>
                            ) : (<></>)}


                            {/** action à mener**/}
                            {args.action !== undefined && args.action.length > 0 ? <>
                                <TitleSection className="mt-5">Vos actions à mener</TitleSection>

                                <Panel>
                                    <ListGroupActionAmener numbered>
                                        {args.action.map((col, i) => (
                                            <>
                                                {args.action[i].nom === "Questionnaire de connaissance" ? (
                                                    <>
                                                        <TimelineListItem type="questionnaire" statut={args.action[i].statut} user={args.user} />
                                                    </>
                                                ) : (<>{" "}</>)}

                                                {args.action[i].nom === "Rib" ? (
                                                    <>
                                                        <TimelineListItem type="rib" statut={args.action[i].statut} />
                                                    </>
                                                ) : (<>{" "}</>)}

                                                {args.action[i].nom === "Ajout document" ? (
                                                    <>
                                                        <TimelineListItem type="document" statut={args.action[i].statut} />
                                                    </>
                                                ) : (<>{" "}</>)}
                                            </>

                                        ))}
                                    </ListGroupActionAmener>
                                </Panel></> : <></>}

                            {/**composant document de vente */}
                            {args.evenement !== undefined && args.evenement.length > 0 ? <>
                                <TitleSection className="mt-5">Vos documents de vente</TitleSection>
                                <Row>
                                    {args.evenement.map((col, i) => (
                                        <>

                                            <Col md='6' xs='12'>
                                                <PanelDocVente>
                                                    <div className="titre d-flex">
                                                        <img src={icnDocVente} alt="document-vente" className="mr-2" />
                                                        {args.evenement[i].fields.type === "promesse de vente" ? (
                                                            <>
                                                                <h4>Promesse de vente</h4>
                                                            </>
                                                        ) : (<>{" "}</>)}
                                                        {args.evenement[i].fields.type === "acte authentique de vente" ? (
                                                            <>
                                                                <h4>Acte authentique de vente</h4>
                                                            </>
                                                        ) : (<>{" "}</>)}
                                                    </div>
                                                    <div className="list">
                                                        <ListGroup>
                                                            <ListGroupItem>
                                                                <img src={icnDoc} alt="document-vente" className="mr-2" />
                                                                <p className="flex-grow-1">
                                                                    <span>Document</span>
                                                                    {args.evenement[i].fields.etat === "pas fait" ? (<>Non débuté</>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.etat === "en cours" ? (<>En cours de rédaction</>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.etat === "information(s) manquante(s)" ? (<>Des informations sont manquantes</>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.etat === "fait" ? (
                                                                        <>
                                                                            Votre document est prêt 🥳 !
                                                                            <br />
                                                                            <LinkS onClick={() => { setPdfName({ "url": args.evenement[i].fields.document_from_document[0].url, "type": "application/pdf" }); }} color="primary">Relire le document</LinkS>
                                                                        </>
                                                                    ) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.etat === "a signer" ? (<>Votre document est prêt à être signé !</>) : (<>{" "}</>)}
                                                                </p>
                                                            </ListGroupItem>
                                                            <ListGroupItem>
                                                                <img src={icnCalendar} alt="rendez-vous-de-vente" className="mr-2" />
                                                                <p>
                                                                    <span>Rendez-vous</span>
                                                                    {args.evenement[i].fields.statut_from_rdv[0] === "a programmer" ? (<>Pas prévu pour le moment</>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.statut_from_rdv[0] === "en cours de prog" ? (
                                                                        <>
                                                                            En cours de programmation
                                                                            <br />
                                                                            <ButtonPrimarySmall href={args.evenement[i].fields.lien_reservation_from_rdv[0]} target="blank" color="primary">Indiquez vos disponibilités</ButtonPrimarySmall>
                                                                        </>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.statut_from_rdv[0] === "programme" ? (
                                                                        <>
                                                                            Rendez-vous prévu le : <br />
                                                                            <div className="date">{args.evenement[i].fields.date_from_rdv[0]}</div>
                                                                        </>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.etat === "information(s) manquante(s)" ? (<>Des informations sont manquantes</>) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.etat === "a signer" ? (<>Votre document est prêt à être signé !</>) : (<>{" "}</>)}
                                                                </p>
                                                            </ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                    <div className="tuto">
                                                        <Card>
                                                            <img src={icnTuto} alt="tuto" />

                                                            <CardBody>

                                                                {args.evenement[i].fields.type === "promesse de vente" ? (
                                                                    <>
                                                                        <CardTitle>La promesse de vente est un contrat qui engage l’acquéreur  et le vendeur.</CardTitle>
                                                                        <ul>
                                                                            <li>L’acquéreur se retrouve dans l’obligation d’acheter le bien</li>
                                                                            <li>Le vendeur ne peut se rétracter et proposer le bien à la vente à quelqu’un d’autre</li>
                                                                        </ul>
                                                                        <div className="help">
                                                                            <p><span role="img">👋</span> Pour bien comprendre vos obligations et vos responsabilités, suivez le guide.</p>
                                                                            <LinkS onClick={toggleCompromis}>Qu'est-ce que la promesse de vente ?</LinkS>
                                                                        </div>
                                                                    </>
                                                                ) : (<>{" "}</>)}
                                                                {args.evenement[i].fields.type === "acte authentique de vente" ? (
                                                                    <>
                                                                        <CardTitle>Il s'agit du document officiel rédigé par un notaire, qui d'officialise la vente du bien immobilier</CardTitle>
                                                                        <ul>
                                                                            <li>A lieu dans un délai de 2 à 3 mois suivant la signature de la promesse de vente</li>
                                                                            <li>Il est obligatoire de faire établir et de signer l’acte de vente devant un notaire</li>
                                                                        </ul>
                                                                        <div className="help">
                                                                            <p><span role="img">👋</span> Pour bien comprendre ce document crucial, suivez le guide.</p>
                                                                            <LinkS onClick={toggleActe}>Qu'est-ce que l'acte authentique de vente ?</LinkS>
                                                                        </div>

                                                                    </>
                                                                ) : (<>{" "}</>)}
                                                            </CardBody>
                                                        </Card>
                                                    </div>
                                                </PanelDocVente>
                                            </Col>
                                        </>
                                    ))}
                                </Row>
                            </> : <></>}

                            <CardHelp email={args.user.email} />
                        </Col>

                    </Row>
                </Container>
                {/** Toutes les modals et canvas */}
                <Offcanvas
                    isOpen={canvas}
                    toggle={toggle3}
                    {...args}
                    direction="end"
                    scrollable>
                    <OffcanvasHeader toggle={toggle3}>
                        Vous n'êtes plus disponible ?
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <p>Pour indiquer les raisons de votre indisponibilités veuillez contacter votre conseillé directement.</p>
                    </OffcanvasBody>

                </Offcanvas>
                <Offcanvas isOpen={canvasCompromis} toggle={toggleCompromis} {...args} direction="end" scrollable>
                    <OffcanvasHeader toggle={toggleCompromis}>Qu'est-ce que la promesse de vente ?</OffcanvasHeader>
                    <AideCompromis />
                </Offcanvas>
                <Offcanvas isOpen={canvasActe} toggle={toggleActe} {...args} direction="end" scrollable>
                    <OffcanvasHeader toggle={toggleActe}>Qu'est-ce que l'acte authentique de vente ?</OffcanvasHeader>
                    <AideActe />
                </Offcanvas>
                <Offcanvas isOpen={canvasChoisirNotaire} toggle={toggleChoisirNotaire} {...args} direction="end" scrollable>
                <OffcanvasHeader toggle={toggleChoisirNotaire}>Choisir ce notaire</OffcanvasHeader>
                <ChoisirNotaire/>
            </Offcanvas>


                <Modal isOpen={pdfName != null} toggle={toggleModal} size="lg" centered>

                    {pdfName != null ? pdfName.type === "application/pdf" ? <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                        <Viewer fileUrl={pdfName.url}
                            plugins={[
                                // Register plugins
                                defaultLayoutPluginInstance,
                            ]}
                        />
                    </Worker> : <img alt="document" src={pdfName.url}></img> : <></>}
                </Modal>
            </>
        )
    }
}

const ListGroupActionAmener = styled(ListGroup)`
  border-radius:0;
  border:0;
  .list-group-item{
    border:0;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom:30px;
    &:before{
        content: counters(section, "") "";
        counter-increment: section;
        display: inline;
        border: 1px solid #ddd;
        font-weight:500;
        border-radius: 100px;
        padding: 10px 17px;
        margin-right: 30px;
    }
    &.done{
        &:before{
            content: "✔️";
        }  
    }
    h4{color:#1D2B28;}
    color:#84847C;
  }
  @media all and (max-width: 768px) {
    .list-group-item{
        flex-direction:column;
        &:before{
            margin-bottom:1rem;
        }
    }
  }
`;


const AlertWelcome = styled(Alert)`
background-image:url(${backWelcome});
background-size:cover;
background-repeat:no-repeat;
color: white!important;
border: 0!important;
border-radius:16px!important;
margin-bottom: 3rem;
padding: 3rem!important;
p{
    margin-bottom: 0;
    font-size: 18px;
}
a{color:white!important;}
`;

const PanelDocVente = styled(Panel)`

.titre{
    align-items:center;
    img{margin-right:8px;}
    h4{font-size:22px}
}
.list{
    margin-top:1rem;
    margin-left:1rem;
    .list-group{
        border:0;
        .list-group-item{
            border:0;
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            img{margin-right:1rem;}
            p{
                span{opacity:.5;display:block;}
            }
            .date{
                background:${props => props.theme.colors.linearBackground};
                padding:8px;
                text-align:center;
                font-weight:600;
                border-radius:8px;
            }
        }
    }
}
.tuto{
    .card{
        position:relative;
        padding:16px;
        border:0;
        border-radius:16px;
        background:${props => props.theme.colors.linearBackground};
        margin-right:2rem;
        margin-bottom:2rem;
        img{
            position: absolute;
            right: 20px;
            top: -25px;
            width: 50px;
        }
        .card-title{
            font-size:16px;
            color:${props => props.theme.colors.mainDark};
            font-weight:600;
        }
        ul{
            font-size:16px;
            color:#636060;
            li::marker {
                color: ${props => props.theme.colors.main};
                font-size:2rem;
        }
        @media all and (max-width: 768px) {
            margin-bottom:1.5rem;
        }
    }
    @media all and (max-width: 768px) {
        margin-right:0;
        margin-left:0;
    }
}

`;
const Message = styled.div`
  padding:1rem;
  background:${props => props.theme.colors.linearBackground};
  text-align:center;
  border-radius:6px;
`;

const RowCandidatureNotaire = styled(Row)`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
.card{
    height: 100%;
    display: flex;
    justify-content: space-between;
    border:0;
}
@media all and (max-width: 768px) {
    flex-direction: column;
    margin-bottom:1rem;
  }
`;




export default Dashboard;