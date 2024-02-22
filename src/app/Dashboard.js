import React, { useEffect, useState } from "react";
import {
    Container, Row, Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Offcanvas, Card, ListGroup, ListGroupItem
} from "reactstrap";
import { TitlePage, TitlePageApp, TitleSection, Panel } from "../style/Layout";
import moment from "moment";
import { DropdownPrimary } from "../style/Button";
import TimelineListItem from "../components/TimelineListItem";
import styled from "styled-components";
import icnRdv from "../img/icn-rdv.svg";



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

function Dashboard(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [canvas, setCanvas] = useState(false);
    const toggle2 = () => setCanvas(!canvas);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    useEffect(() => {
        console.log("LAAAA", args)
    }, [args])

    return (
        <>
            <Container>
                <Row className="d-flex align-self-start">
                    <TitlePageApp>
                        <Col md="7">
                            <TitlePage>Bonjour Catherine</TitlePage>
                            <p>Voici l'avancement de votre transaction : {args.transactionName} </p>
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
                        

                            {args.rdv !== undefined && args.rdv.length > 0 ?
                                <>
                                <TitleSection>Vos prochains rendez-vous</TitleSection>
                        <div className="d-flex flex-row justify-start align-items-start flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-wrap">
                                    {args.rdv.map((col, i) => (
                                        <>
                                            <CardRdv>
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src={icnRdv} alt="votre rendez-vous" />
                                                    <p><small>Date</small>Non programmé</p>
                                                </div>
                                                <div>
                                                    <h5>{args.rdv[i].fields.nom}</h5>
                                                </div>
                                            </CardRdv>
                                        </>
                                    ))}
                                    </div>
                                </>
                                
                                : <></>
                                
                            }
                        



                        {args.evenement !== undefined && args.evenement.length > 0 ? <>
                            <TitleSection className="mt-5">Vos actions à mener</TitleSection>
                            <Panel>
                                <ListGroupActionAmener numbered>
                                    <ListGroupItem>
                                        {/* Composant offre d'achat */}

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


                        <TitleSection className="mt-5">Où en est votre notaire ?</TitleSection>
                        <Panel>
                            <ListGroupActionAmener numbered>
                                {args.activite.map((col, i) => (
                                    <>
                                        <ListGroupItem>
                                            <div className="d-flex flex-column">
                                                <h4>{args.activite[i].fields.message}</h4>
                                                <p><span> {moment(args.activite[i].fields.date).format('DD/MM/YYYY')}</span></p>
                                            </div>

                                        </ListGroupItem>
                                    </>
                                ))}


                            </ListGroupActionAmener>
                        </Panel>
                    </Col>

                </Row>
            </Container>
            <Offcanvas
                isOpen={canvas}
                toggle={toggle2}
                {...args}
                direction="end"
                scrollable></Offcanvas>
        </>
    );
}

export default Dashboard;