import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Container, Row, Col, Badge, ListGroup, ListGroupItem, Card,CardBody, CardTitle } from "reactstrap";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { HomeS } from "./HomeAnnuaire"
import UseClotereCard from "./UseClotereCard";
import {HeaderBannerThree} from './HeaderAnnuaire2';
import Footer from '../components/Footer';
import icnNotaire from '../img/icn-notaire.svg';
import { faLink, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonPrimary } from "../style/Button";
import ArrowRight from "../img/arrow-right.png";

const Fiche = styled.div`
    background-color:#f8fafe;
    .card{
        padding:2rem;
        box-shadow:0 1px 20px 0 rgb(234 244 243);
        .card-title{
            font-size: 28px;
        }
        ul.list-group{
            border:0;
            li.list-group-item{
            border:0;
            padding-left:0;
            display:flex;
            flex-direction:row;
            align-items:center;
            gap:.5rem;
            p{margin:0;}
            svg{color:#1cf36c}
            }
        }
    }
        .col-competences{
            display:flex;
            flex-direction:row;
            gap:.8rem;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    .competence{
    border-radius: 1rem;
    padding: 1rem;
    background-color: #eaf4f3 !important;
    color: #1cf36c;
    font-size: 1rem;
    font-weight: 500;
    }
`;

const HeaderBannerThreeS = styled(HeaderBannerThree)`
padding:40px 0 0;
h1{
font-size:48px;
margin: 1.5rem 0;
}

`;

function FicheNotaire(args) {
    const [notaires, setNotaires] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [state, setState] = useState(true);

    //get info user airtable
    useEffect(() => {
        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/notaire?filterByFormula=SEARCH("PARIS",{ville})`;

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
                console.log("all notaire", res.records);
                setNotaires(res.records);
                setLoading(false);
            })
            .catch((error) => console.log(error));

    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <HomeS>
                <Navbar user={args.user} />
                <HeaderBannerThreeS className="grey-bg">
                    <Row className="d-flex align-items-center" align="center">
                        <Col md="12" xs="12" align="center">
                        <img src={icnNotaire} alt="notaire" />
                            <h1><small>Maître Lomick FONTANILLE</small></h1>
                        </Col>
                    </Row>

                    <Row className="d-flex align-items-center" align="center">
                        <Col md="12" xs="12" align="center">
                        <UseClotereCard/>
                        </Col>
                    </Row>
                    
                </HeaderBannerThreeS>
                <Fiche>
                    <Container>
                        <Row>
                            <Col className='col-xl-8 offset-xl-2 col-xs-12 col-lg-12'>
                            <Card>
                                <CardTitle>Coordonnées</CardTitle>
                                <CardBody>
                                <ListGroup>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faLocationDot} className='mr-3 rounded' /> 
                                <p>12 avenue de la marne 78800 HOUILLES</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faPhone} className='mr-3 rounded' />
                                <p className="text-muted">07 09 09 09 09 </p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faLink} className='mr-3 rounded' />
                                <a href="#" target="blank">Voir le site</a>
                            </ListGroupItem>
                            
                        </ListGroup>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col className='col-xl-8 offset-xl-2 col-xs-12 col-lg-12'>
                            <Card>
                                <CardTitle>Présentation</CardTitle>
                                <CardBody>
                                <p className='presentation'>
                                L'Etude vous accompagne et vous soutient dans tous vos projets :<br/>
                                -immobiliers : vente, acquisition, échange, rachat de droits ; promotion immobilière (acquisition du foncier, négociation, mise en place du programme immobilier et vente à la suite) ; vente en bloc, découpe,
                                <br/>- professionnels : création de votre entreprise, transmission, cession, création de sociétés civile ou commerciales (rédaction statuts personnalisés et immatriculation), cession de parts sociales, cession de fonds de commerce ;
                                <br/><br/>Nous vous accompagnons dans vos montages financiers, refinancement, prêts hypothécaires, Crédit-bail immobilier, translation d’hypothèque, ….
                                <br/>- familiaux : mariage (choix du régime matrimonial) , pacs (choix de la convention) adoption, donation (simple, partage) protection du conjoint, du partenaire, testament ;
                                <br/>- dans les moments plus douloureux : divorce, séparation des partenaires, décès ; perte d’autonomie entraînant une mesure de protection, liquidation d’entreprise, cessation d’activité ; accident de la vie, partages successoraux…
                                </p>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col className='col-xl-8 offset-xl-2 col-xs-12 col-lg-12'>
                            <Card>
                                <CardTitle>Domaines de compétences</CardTitle>
                                <CardBody className='p-0'>
                                    <div className='col-competences'>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    <Badge className='competence'>Droit de l'immobilier</Badge>
                                    </div>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col className='col-xl-8 offset-xl-2 col-xs-12 col-lg-12'>
                            <Card>
                                <CardTitle>Expérience</CardTitle>
                                <CardBody>
                                <p className='presentation'>
                                L'Etude vous accompagne et vous soutient dans tous vos projets :<br/>
                                -immobiliers : vente, acquisition, échange, rachat de droits ; promotion immobilière (acquisition du foncier, négociation, mise en place du programme immobilier et vente à la suite) ; vente en bloc, découpe,
                                <br/>- professionnels : création de votre entreprise, transmission, cession, création de sociétés civile ou commerciales (rédaction statuts personnalisés et immatriculation), cession de parts sociales, cession de fonds de commerce ;
                                <br/><br/>Nous vous accompagnons dans vos montages financiers, refinancement, prêts hypothécaires, Crédit-bail immobilier, translation d’hypothèque, ….
                                <br/>- familiaux : mariage (choix du régime matrimonial) , pacs (choix de la convention) adoption, donation (simple, partage) protection du conjoint, du partenaire, testament ;
                                <br/>- dans les moments plus douloureux : divorce, séparation des partenaires, décès ; perte d’autonomie entraînant une mesure de protection, liquidation d’entreprise, cessation d’activité ; accident de la vie, partages successoraux…
                                </p>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col className='col-xl-8 offset-xl-2 col-xs-12 col-lg-12 mb-5' align="center">
                            <ButtonPrimary color="primary">Contactez ce notaire<img src={ArrowRight} alt=""/></ButtonPrimary>
                            </Col>
                        </Row>
                        
                    </Container>
                    
                </Fiche>
                <Footer />
            </HomeS>
        </>

    );
}

export default FicheNotaire;