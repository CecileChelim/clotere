import React from "react";
import {
    Container, Row, Col, BreadcrumbItem,  Breadcrumb
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HomeS } from '../Home';
import { ArticleContent } from "../style/Blog";
import CardClotere1 from "./CardClotere1";
import ArticlesSimilaires from "./ArticlesSimilaires";


function ArticleEtapesAchatImmo(args) {

    return (
        <>
            <HomeS>
                <Navbar user={args.user} />
                <ArticleContent>
                    <Breadcrumb>
                        <Container>
                            <BreadcrumbItem>
                                <Link to="/">
                                    Clotere
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/blog">
                                    Blog - Votre achat immobilier chez le notaire
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Quel est le rôle du notaire dans un achat immobilier ?
                            </BreadcrumbItem>
                        </Container>
                    </Breadcrumb>

                    <section className="content">
                        <Container>
                            <Row>
                                <Col className="col-xl-10 offset-xl-1 col-lg-12 article">
                                    <h1>Quelles sont les grandes étapes de votre achat immobilier ?</h1>
                                    <Row>
                                    <Col md='4'>
                                    <div  style={{width: 'auto'}}><iframe allow="fullscreen" title="achat immobilier" height="200" src="https://giphy.com/embed/702ybfQFkrkrWnIByR/video"></iframe></div>
                                    </Col>
                                    <Col md='8'>
                                    <p>L'idée de devenir propriétaire vous parle ?! <br/>
                                        Super ! Voici la liste des étapes nécessaires et conseillés qui vous accompagnera pas à pas dans l'achat de votre premier bien immobilier.
                                        <br/> Que vous rêviez d'un appartement en ville ou d'une maison à la campagne, suivez ces étapes pour réaliser votre projet en toute sérénité.</p>
                                    </Col>
                                    </Row>
                                    
                                    <h2>1. Définir votre projet d’achat immobilier <span role="img">🤔</span></h2>
                                    <p>La première étape consiste à clarifier votre projet : 
                                        <ul>
                                            <li>maison ou appartement</li>
                                            <li>localisation</li>
                                            <li>budget</li>
                                            
                                            </ul>
                                            Réfléchissez à vos besoins en termes d’espace, de commodités, et de proximité avec les services essentiels.</p>

                                    <h2>2. Évaluer votre budget <span role="img">💸</span></h2>
                                    <p>Après avoir défini votre projet, il est crucial de déterminer votre budget total, incluant : 
                                        <ul>
                                            <li>le montant maximum que vous pouvez emprunter</li>
                                            <li>les frais d’agence</li>
                                            <li>les frais de notaire</li>
                                            <li>les coûts potentiels de travaux et autres dépenses annexes</li>
                                            </ul>
                                             Utilisez des simulateurs en ligne pour estimer votre capacité d’emprunt.
                                             <br/>
                                             <Link to="/achat-immobilier/de-quoi-se-compose-les-frais-de-notaire">Lisez notre article</Link> sur les frais de notaire pour bien les comprendre et les anticiper.
                                             </p>

                                    <h2>3. Rechercher et visiter des biens <span role="img">🕵️‍♀️</span></h2>
                                    <p>Cette étape nécessite de la patience et de la diligence. Vous pouvez consulter les annonces en ligne, ou faire appel à un agent immobilier. 
                                        <br/>Lors des visites, évaluez : 
                                        <ul>
                                            <li>l’état général des biens</li>
                                            <li>le quartier</li>
                                            <li>les diagnostics techniques</li>
                                        </ul>
                                        Une checklist peut être utile pour ne rien oublier.</p>

                                    <h2>4. Faire une offre d’achat <span role="img">🙌</span></h2>
                                    <p>Si un bien vous plaît, il est temps de faire une offre. Cette offre doit être écrite et préciser le prix proposé, les conditions de financement et les délais. 
                                        <br/>Basée sur l'évaluation du marché local, elle peut être acceptée, refusée, ou faire l’objet d’une contre-proposition par le vendeur.</p>

                                    <h2>5. Signer le compromis ou la promesse de vente <span role="img">🔥</span></h2>
                                    <p>Félicitation votre offre est acceptée 🥳.
                                        <br/>Une fois l’offre acceptée, vous signerez un <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire">compromis de vente</Link> ou une promesse de vente. 
                                        <br/>Ce document fixe les conditions de la transaction, telles que :
                                        <ul>
                                            <li>le prix</li>
                                            <li>la date de la vente</li>
                                            <li>les conditions suspensives</li>
                                        </ul>
                                        Vous disposez <strong>d’un délai de rétractation de 10 jours après la signature</strong>.</p>
                                    <CardClotere1/>
                                    <h2>6. Rechercher un financement <span role="img">👉</span></h2>
                                    <p>Avec un compromis signé, vous avez environ 60 jours pour trouver un financement. Un courtier en crédit immobilier peut grandement faciliter cette recherche en négociant les meilleures conditions pour vous auprès des banques partenaires.</p>

                                    <h2>7. Signer l’offre de prêt <span role="img">🌟</span></h2>
                                    <p>Durant votre recherche de financement, vous recevrez une ou plusieurs offres de prêt de différentes banques. Après avoir comparé ces offres, vous avez un délai de réflexion de 10 jours pour signer celle qui vous convient le mieux.</p>

                                    <h2>8. Signer l’acte authentique <span role="img">🥳</span></h2>
                                    <p>La dernière étape est la signature de <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire">l’acte authentique chez le notaire</Link>. 
                                    <br/>
                                    <blockquote className="blog-quote">
                                    Cet acte officialise la vente et le transfert de propriété. Vous devrez régler le prix du bien, les frais de notaire et éventuellement d’autres frais lors de cette signature.
                                    </blockquote>
                                    
                                    <br/>
                                    Le plus souvent, vous repartez de ce rendez-vous avec vos clés, vous êtes enfin chez vous <span role="img">🥳</span>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </ArticleContent>
                <ArticlesSimilaires title="Articles similaires" />
                <Footer />
            </HomeS >
        </>
    );
}

export default ArticleEtapesAchatImmo;