import React, { useState } from "react";
import {
    Container, Row, Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Offcanvas, Card, ListGroup, ListGroupItem, OffcanvasHeader, OffcanvasBody, Alert,Badge, CardBody, CardTitle
} from "reactstrap";
import { Link } from 'react-router-dom';
import { TitlePage, TitlePageApp, TitleSection, Panel } from "../style/Layout";
import moment from "moment";
import { DropdownPrimary, ButtonPrimarySmall, LinkS } from "../style/Button";
import TimelineListItem from "../components/TimelineListItem";
import CardHelp from '../components/CardHelp';
import styled from "styled-components";
import backWelcome from "../img/back-alert-welcome.png";
import icnRdv from "../img/icn-rdv.svg";
import icnDocVente from "../img/icn-doc-vente.svg";
import icnDoc from "../img/icn-doc.svg";
import icnCalendar from "../img/icn-calendar.svg";
import icnTuto from "../img/icn-tuto.svg";


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
    }
}

`;





function Dashboard(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [canvas, setCanvas] = useState(false);
    const toggle2 = () => setCanvas(!canvas);
    const toggle3 = () => setCanvas(!canvas);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    console.log("event",args.evenement)

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
                                            <h4>Ouvertures des accès aux utilisateurs (acheteur(s), vendeur(s), agent, notaire)</h4>
                                            <p>A venir</p>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="avenir">
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
                                <p>Voici l'avancement de votre transaction : <b>{args.transaction.nom}</b> </p>
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
                                        <p>Votre dossier va être pris en charge par un notaire Clotere. <br />
                                            Vous pourrez programmer vos rendez-vous, suivre l'avancée et déposer vos documents en lieu sûre !
                                            <br /><br />
                                            Sans plus attendre complétez votre dossier en <Link to="/app/documents"> ajoutant vos documents</Link>
                                        </p>
                                    </AlertWelcome>
                                </>
                                : <></>

                            }

                            <CardHelp />
                            
                            {/** action à mener**/}
                            {args.action !== undefined && args.action.length > 0 ? <>
                                <TitleSection className="mt-5">Vos actions à mener</TitleSection>
                                <Panel>
                                    <ListGroupActionAmener numbered>
                                        {args.action.map((col, i) => (
                                            <>
                                                {args.action[i].fields.nom === "Questionnaire de connaissance" ? (
                                                    <>
                                                        <TimelineListItem type="questionnaire" statut={args.action[i].fields.statut} />
                                                    </>
                                                ) : (<>{" "}</>)}

                                                {args.action[i].fields.nom === "Rib" ? (
                                                    <>
                                                        <TimelineListItem type="rib" statut={args.action[i].fields.statut} />
                                                    </>
                                                ) : (<>{" "}</>)}

                                                {args.action[i].fields.nom === "Ajout document" ? (
                                                    <>
                                                        <TimelineListItem type="document" statut={args.action[i].fields.statut} />
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
                                                                {args.evenement[i].fields.etat === "pas fait" ? (<>En cours de rédaction</>) : (<>{" "}</>)}
                                                                {args.evenement[i].fields.etat === "en cours" ? (<>En cours de rédaction</>) : (<>{" "}</>)}
                                                                {args.evenement[i].fields.etat === "information(s) manquante(s)" ? (<>Des informations sont manquantes</>) : (<>{" "}</>)}
                                                                {args.evenement[i].fields.etat === "fait" ? (
                                                                <>
                                                                Votre document est prêt 🥳 !
                                                                <br/>
                                                                <LinkS color="primary">Relire le document</LinkS>
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
                                                                <br/>
                                                                <ButtonPrimarySmall href={args.evenement[i].fields.lien_reservation_from_rdv[0]} target="blank" color="primary">Indiquez vos disponibilités</ButtonPrimarySmall>
                                                                </>) : (<>{" "}</>)}
                                                                {args.evenement[i].fields.statut_from_rdv[0] === "programme" ? (
                                                                <>
                                                                Rendez-vous prévu le : <br/>
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
                                                            <img src={icnTuto} alt="tuto"/>

                                                            <CardBody>
                                                                    
                                                                    {args.evenement[i].fields.type === "promesse de vente" ? (
                                                                        <>
                                                                            <CardTitle>La promesse de vente est un contrat qui engage l’acquéreur  et le vendeur.</CardTitle>
                                                                            <ul>
                                                                                <li>L’acquéreur se retrouve dans l’obligation d’acheter le bien</li>
                                                                                <li>Le vendeur ne peut se rétracter et proposer le bien à la vente à quelqu’un d’autre</li>
                                                                            </ul>
                                                                            <div className="help">
                                                                            <p><span role="img">👋</span> Pour bien comprendre vos obligations et vos responsabilités, suive le guide.</p>
                                                                            <LinkS>Qu'est-ce que la promesse de vente ?</LinkS>
                                                                            </div>
                                                                        </>
                                                                    ) : (<>{" "}</>)}
                                                                    {args.evenement[i].fields.type === "acte authentique de vente" ? (
                                                                        <>
                                                                            <h4>Acte authentique de vente</h4>
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

                            {args.activite !== undefined && args.activite.length > 0 ? <>
                                <TitleSection className="mt-5">Dernières activités de votre vente</TitleSection>
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

                            {/** ancien composant vos rdv
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
                        **/}


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