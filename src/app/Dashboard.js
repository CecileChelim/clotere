import React, { useState } from "react";
import {
    Container, Row, Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Offcanvas, Card, ListGroup, ListGroupItem, OffcanvasHeader, OffcanvasBody,Alert
} from "reactstrap";
import { Link } from 'react-router-dom';
import { TitlePage, TitlePageApp, TitleSection, Panel } from "../style/Layout";
import moment from "moment";
import { DropdownPrimary, ButtonPrimarySmall, LinkS } from "../style/Button";
import TimelineListItem from "../components/TimelineListItem";
import styled from "styled-components";
import icnRdv from "../img/icn-rdv.svg";
import backWelcome from "../img/back-alert-welcome.png";


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
        heigth:30px;
    }
    &.done{
        &:before{
            content: "✔️";
            background-color:${props => props.theme.colors.main};
            color:white;
            border:0;
        }
    }
    &.encours{
        &:before{
            content: "⏳";
        }
    }
    &.avenir{
        opacity:.5;
        &:before{
            content: "👉";
        }
    }
    h4{color:#1D2B28;}
    color:#84847C;
  }
`;
const CardRdv = styled(Card)`
padding:30px;
border:0;
background:${props => props.theme.colors.linearBackground};
margin-right:2rem;
margin-bottom:2rem;
 img{
    width:60px;
    height:60px;
    margin-right: 20px;
 }
 p{
    font-size:18px;
    color:#1D2B28;
    margin:0;
    small{
        display:block;
        font-size:14px;
        color:#1D2B28;
    }
 }
 h5{
    margin-top:30px;
    font-size:24px;
    font-weight:500;
 }
`;
const AlertPret = styled(Alert)`
margin-left: 4rem !important;
background-color: transparent;
border: 2px solid #e0eeee;
margin: 0;
p{
    margin-bottom: 0;
    font-size: 14px;
}
h5{
    color: #006855;
}
`;

const AlertWelcome = styled(Alert)`
background-image:url(${backWelcome});
background-size:cover;
background-repeat:no-repeat;
color: white;
border: 0;
border-radius:16px;
margin-bottom: 3rem;
padding: 2rem;
p{
    margin-bottom: 0;
    font-size: 18px;
}
a{color:white!important;}
`;




function Dashboard(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [canvas, setCanvas] = useState(false);
    const toggle2 = () => setCanvas(!canvas);
    const toggle3 = () => setCanvas(!canvas);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

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
                                        <ListGroupItem  className="encours">
                                            <div className="d-flex flex-column">
                                                <h4>Vérification de votre transaction immobilière</h4>
                                                <p>En cours</p>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem  className="avenir">
                                            <div className="d-flex flex-column">
                                                <h4>Ouvertures des accès aux utilisateurs (acheteur(s), vendeur(s), agent, notaire)</h4>
                                                <p>A venir</p>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem  className="avenir">
                                            <div className="d-flex flex-column">
                                                <h4>Attribution de votre notaire</h4>
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
    } else {
        return (
            <>
                <Container>
                    <Row className="d-flex align-self-start">
                        <TitlePageApp>
                            <Col md="7">
                                <TitlePage>Bonjour {args.user.prenom},</TitlePage>
                                <p>Voici l'avancement de votre transaction : <b>{args.transactionName}</b> </p>
                            </Col>
                            <Col md="5" className="text-end">
                                <DropdownPrimary isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>Actions rapides</DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem onClick={toggle2}>+ Ajouter un document</DropdownItem>
                                        <DropdownItem>Posez une question</DropdownItem>
                                    </DropdownMenu>
                                </DropdownPrimary>
                            </Col>
                        </TitlePageApp>
                        <Col md="12" className="mt-3">
                        {args.user.statut === "new user" ?
                        <>
                        <AlertWelcome>
                            <p>Votre dossier va être pris en charge par un notaire Clotere. <br/>
                            Vous pourrez programmer vos rendez-vous, suivre l'avancée et déposer vos documents en lieu sûre !
                                <br/><br/>
                                Sans plus attendre complétez votre dossier en <Link to="/app/documents"> ajoutant vos documents</Link>
                            </p>
                        </AlertWelcome>
                        </>
                        : <></>

                        }
                            {args.rdv !== undefined && args.rdv.length > 0 ?
                                <div>
                                    <TitleSection>Vos prochains rendez-vous</TitleSection>
                                    <div className="d-flex flex-row justify-start align-items-stretch flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-wrap">
                                        {args.rdv.map((col, i) => (
                                            <CardRdv key={i}>
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src={icnRdv} alt="votre rendez-vous" />
                                                    {args.rdv[i].fields.statut === "a programmer" ? (
                                                        <p><small>Date</small>Non programmé</p>
                                                    ) : (<>{" "}</>)}
                                                    {args.rdv[i].fields.statut === "en cours de prog" ? (
                                                        <p><small>Date</small>A programmer</p>
                                                    ) : (<>{" "}</>)}
                                                    {args.rdv[i].fields.statut === "programme" ? (
                                                        <p><small>Date</small>
                                                            {args.rdv[i].fields.date}
                                                        </p>
                                                    ) : (<>{" "}</>)}
                                                    {args.rdv[i].fields.statut === "passe" ? (
                                                        <p><small>Déjà réalisé</small>
                                                            {args.rdv[i].fields.date}
                                                        </p>
                                                    ) : (<>{" "}</>)}
                                                </div>
                                                <div>
                                                    <h5>{args.rdv[i].fields.nom}</h5>
                                                    <div className="link">
                                                        {args.rdv[i].fields.statut === "en cours de prog" ? (
                                                            <LinkS href={args.rdv[i].fields.lien_reservation} target="blank">Indiquez vos disponibilités</LinkS>
                                                        ) : (<>{" "}</>)}
                                                        {args.rdv[i].fields.statut === "programme" ? (
                                                            <>
                                                                <LinkS onClick={toggle3}>Vous n'êtes plus disponible ?</LinkS>
                                                                <ButtonPrimarySmall className="mt-2" href={args.rdv[i].fields.lien_reunion} color="primary">Rejoindre la réunion</ButtonPrimarySmall>
                                                            </>
                                                        ) : (<>{" "}</>)}

                                                            {args.rdv[i].fields.nom === "Rendez-vous avec votre conseillé" & args.rdv[i].fields.statut === "a programmer" ? (
                                                            <>
                                                            <LinkS href={args.rdv[i].fields.lien_reservation} target="blank">Réservez une réunion avec votre conseillé</LinkS>
                                                            </>
                                                        ) : (<>{" "}</>)}

                                                    </div>
                                                </div>
                                            </CardRdv>
                                        ))}
                                    </div>
                                </div>

                                : <></>

                            }


                            {args.evenement !== undefined && args.evenement.length > 0 ? <>
                                <TitleSection className="mt-5">Les étapes de votre transaction</TitleSection>
                                <Panel>
                                    <ListGroupActionAmener numbered>
                                        <ListGroupItem>
                                            {/* Composant offre d'achat */}
                                            {args.evenement[0].fields.etat === "pas fait" ? (

                                            <TimelineListItem etat={args.evenement[0].fields.etat} type={args.evenement[0].fields.type} message={args.evenement[0].fields.message} contenu={args.evenement[0].fields.contenu} action="ensavoirplusOffre"  />
                                            ) : (<>{" "}</>)}

                                            {args.evenement[0].fields.etat === "fait" ? (

                                                <TimelineListItem etat={args.evenement[0].fields.etat} type={args.evenement[0].fields.type} message={args.evenement[0].fields.message} contenu={args.evenement[0].fields.contenu} action="telecharger" lienDoc={args.evenement[0].fields.document_from_document !== undefined && args.evenement[0].fields.document_from_document[0].url} />
                                            ) : (<>{" "}</>)}
                                            {args.evenement[0].fields.etat === "en cours" ? (
                                                <TimelineListItem etat={args.evenement[0].fields.etat} type={args.evenement[0].fields.type} message={args.evenement[0].fields.message} contenu={args.evenement[0].fields.contenu} action="ajouterDoc" />
                                            ) : (<>{" "}</>)}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            {/* Composant compromis de vente */}
                                            {args.evenement[1].fields.etat === "pas fait" ? (
                                                <TimelineListItem etat={args.evenement[1].fields.etat} type={args.evenement[1].fields.type} message={args.evenement[1].fields.message} contenu={args.evenement[1].fields.contenu} action="ensavoirplusCompromis" />
                                            ) : (<>{" "}</>)}

                                            {/* 2 états pour en cours, un sans action et l'autre avec action "Voir et signer" + lien de signature A DÉTERMINER*/}
                                            {args.evenement[1].fields.etat === "en cours" ? (
                                                <TimelineListItem etat={args.evenement[1].fields.etat} type={args.evenement[1].fields.type} message={args.evenement[1].fields.message} contenu={args.evenement[1].fields.contenu} />
                                            ) : (<>{" "}</>)}

                                            {args.evenement[1].fields.etat === "a signer" ? (
                                                <TimelineListItem etat={args.evenement[1].fields.etat} type={args.evenement[1].fields.type} message={args.evenement[1].fields.message} contenu={args.evenement[1].fields.contenu} action="Voiretsigner" lienSignaure="#" />
                                            ) : (<>{" "}</>)}

                                            {args.evenement[1].fields.etat === "information(s) manquante(s)" ? (
                                                <TimelineListItem etatcss="infoManquantes" etat={args.evenement[1].fields.etat} type={args.evenement[1].fields.type} message={args.evenement[1].fields.message} contenu={args.evenement[1].fields.contenu} action="Contacter" />
                                            ) : (<>{" "}</>)}

                                            {args.evenement[1].fields.etat === "fait" ? (
                                                <TimelineListItem etat={args.evenement[1].fields.etat} type={args.evenement[1].fields.type} message={args.evenement[1].fields.message} contenu={args.evenement[1].fields.contenu} action="telecharger" lienDoc={args.evenement[1].fields.document_from_document !== undefined && args.evenement[1].fields.document_from_document[0].url} />
                                            ) : (<>{" "}</>)}
                                        </ListGroupItem>
                                        {/* Affichage de l'alerte du délai */}
                                        {args.transaction.type_financement === "avec pret immobilier" ? (
                                                <>
                                                <AlertPret> 
                                                    <h5><span role="image">👋</span>Information importante</h5>
                                                    <p> Cette transaction immobilière est financée par un prêt.<br/> 
                                                L’acquéreur dispose d’un délai généralement compris entre 45 et 90 jours pour effectuer sa demande de prêt.<br/>
                                                Concrètement, la date de signature de l'acte de vente authentique ne pourras pas avoir lieu avant cette date, fixée dans le compromis de vente.
                                                </p>
                                                </AlertPret>
                                                </>

                                            ) : (<>{" "}</>)}
                                        <ListGroupItem>
                                            {/* Composant acte de vente */}
                                            {args.evenement[2].fields.etat === "pas fait" ? (
                                                <TimelineListItem etat={args.evenement[2].fields.etat} type={args.evenement[2].fields.type} message={args.evenement[2].fields.message} contenu={args.evenement[2].fields.contenu} action="ensavoirplusActe" />
                                            ) : (<>{" "}</>)}

                                            {/* 2 états pour en cours, un sans action et l'autre avec action "Indiquez vos dispo" + lien doodle*/}
                                            {args.evenement[2].fields.etat === "en cours" ? (
                                                <TimelineListItem etat={args.evenement[2].fields.etat} type={args.evenement[2].fields.type} message={args.evenement[2].fields.message} contenu={args.evenement[2].fields.contenu} action="rdvActe" lienDoodle={args.evenement[2].fields.lien_doodle} />
                                            ) : (<>{" "}</>)}
                                        </ListGroupItem>
                                    </ListGroupActionAmener>
                                </Panel></> : <></>}


                            {args.activite !== undefined && args.activite.length > 0 ? <>
                            <TitleSection className="mt-5">Où en est votre notaire ?</TitleSection>
                            <Panel>
                                <ListGroupActionAmener numbered>
                                    {args.activite.map((col, i) => (
                                        <ListGroupItem key={i}>
                                            <div className="d-flex flex-column">
                                                <h4>{args.activite[i].fields.message}</h4>
                                                <p><span> {moment(args.activite[i].fields.date).format('DD/MM/YYYY')}</span></p>
                                            </div>

                                        </ListGroupItem>
                                    ))}


                                </ListGroupActionAmener>
                            </Panel>
                            </> : <></>}
                        </Col>

                    </Row>
                </Container>
                <Offcanvas
                    isOpen={canvas}
                    toggle={toggle2}
                    {...args}
                    direction="end"
                    scrollable></Offcanvas>
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
            </>
        )
    }
}

export default Dashboard;