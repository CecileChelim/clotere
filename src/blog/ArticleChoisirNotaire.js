import React from "react";
import {
    Container, Row, Col, BreadcrumbItem, Alert, ListGroup, ListGroupItem, Breadcrumb
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HomeS } from '../Home';
import { ArticleContent } from "../style/Blog";
import CardClotere1 from "./CardClotere1";
import CardClotere2 from "./CardClotere2";
import ArticlesSimilaires from "./ArticlesSimilaires";
import BlocCta from "../components/BlocCta";


function ArticleChoisirNotaire(args) {

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
                            Comment choisir son notaire pour son achat immobilier ?
                            </BreadcrumbItem>
                        </Container>
                    </Breadcrumb>

                    <section>
                        <Container>
                            <Row>
                                <Col md='1'></Col>
                                <Col md='8'>
                                    <h1>Comment choisir son notaire pour son achat immobilier ?</h1>
                                    <Row>
                                        <Col md='8'>
                                            <div className="card-blog-author">
                                                <img alt="trouver votre notaire en ligne" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />

                                                <div class="content-author">
                                                    <p><b>Rédigé par Cécile</b></p>
                                                    <p class="">Responsable produit</p>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4' align="right">
                                            <div className="card-blog-author">
                                                <div class="content-author">
                                                    <p class="read-time">Lecture : 7 min</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <p>Acquérir un bien immobilier requiert toujours l’intervention d’un notaire, au moins pour réaliser l’acte de vente. 
                                        <br/>Comment faire le choix d’un notaire pour un achat immobilier ? Découvrez nos conseils.</p>

                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>1/ Qui choisit le notaire dans une vente immobilière ?</h3>
                                            <p>Si la signature d’une promesse de vente ou d’un compromis de vente ne requiert pas la présence d’un notaire, en revanche celle-ci est obligatoire pour préparer, rédiger et faire signer l’acte de vente. Il n’existe aucune règle concernant le choix du notaire pour acter un achat immobilier. Plusieurs cas de figure sont possibles :</p>
                                            <p>
                                                <ul>
                                                    <li><strong>C’est l’acquéreur qui choisit le notaire.</strong> 
                                                    <br/>Cas le plus fréquent, il est de coutume de « laisser la politesse » à l’acheteur puisque c’est lui qui devra régler les frais de notaire. Il peut notamment avoir une préférence pour un notaire qui lui fera profiter d’une réduction sur ses honoraires dans le cadre d’un achat immobilier, dans la limite de ce que permet la loi.</li>
                                                    <li><strong>C’est le vendeur qui choisit le notaire.</strong>
                                                    <br/>Le vendeur du bien peut souhaiter se faire accompagner, dans la transaction, par son notaire de famille, d’autant plus si c’est dans son office notarial que le bien a été mis en vente.</li>
                                                </ul>

                                                
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                        <h3>2/ Ai-je besoin d’un ou plusieurs notaires ?</h3>
                                        <p>Un seul notaire, choisi par l’acquéreur ou le vendeur, sera nécessaire et suffisant pour mener à bien toutes les démarches menant à la vente.
                                            <br/> Cependant, il est toujours possible que deux notaires interviennent dans la même transaction. 
                                            <br/>C’est le cas si vendeur et acheteur tiennent chacun à se faire accompagner par le notaire de leur choix. Alors, ceux-ci se partageront les tâches et le montant des frais de notaire, en proportion du travail accompli.
                                            </p>

                                        </ListGroupItem>
                                        <CardClotere1/>
                                        <ListGroupItem>
                                            <h3>3/ Les points à vérifier pour bien choisir votre notaire</h3>

                                            <p>Vous n’avez jamais eu recours aux services d’un notaire et vous en cherchez un pour acter une transaction immobilière ? 
                                                <br/>Voici les principaux critères qui guideront votre choix :</p>

                                            <ul>
                                                <li><strong>Sa proximité :</strong><br/> C’est une donnée à prendre en compte parce que vous serez amené à lui rendre plusieurs visites (signature du compromis de vente, de l’acte de vente, et peut-être rendez-vous pour des conseils relatifs à la vente). 
                                                <br/>Proximité géographique avec votre adresse actuelle, mais surtout avec la commune où se trouve le bien que vous envisagez d’acheter. 
                                                <br/>C’est le gage d’une connaissance précise des règles locales d’urbanisme, pour un meilleur conseil.</li>
                                                <li><strong>Sa compétence, son expertise :</strong><br/> C’est une évidence, mais comment s’en assurer ? En se fiant par exemple au bouche-à-oreille : interrogez les expériences de votre entourage, ou des professionnels amenés à travailler avec des notaires (agents immobiliers, banquiers, …).
                                                <br/> Il est tentant aussi de consulter les avis Google, mais en les considérant avec prudence.</li>
                                                <li><strong>Sa disponibilité :</strong><br/> L’expertise professionnelle ne suffit pas toujours. Dans le cas d’un achat immobilier, <b>il est bon de pouvoir compter sur un professionnel qui sait se montrer disponible et pédagogue pour répondre à vos questions</b>, qui prend la peine de vous expliquer le pourquoi et le comment de chaque étape du processus d’achat.
                                                Et bien sûr, un notaire qui sait vous apporter des conseils judicieux et personnalisés.</li>
                                            </ul>
                                            <br/>
                                            <Alert>
                                            <p><b><span role="img">👋</span>Clotere réunis les notaires les plus qualifiés pour votre transaction immobilière</b></p>
                                            <p>Le notaire en charge de votre affaire s'engage à un réactivité et une disponibilité, et votre conseiller Clotère vous permet d'avoir un accompagnement dédié, vous expliquant chaque étape de ce moment important, votre achat immobilier !</p>
                                                    <Link to="/onboard">Faites appel à un notaire disponible et qualifié pour votre achat immobilier.</Link>
                                                </Alert>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                        <h2>Et si le notaire que j’ai choisi ne me convient pas ?</h2>

                                        <p>Vous n’avez pas pu appliquer les conseils précédents, et voilà que vous avez des doutes sur la compétence de votre notaire, ou bien le courant ne passe pas du tout entre vous ? 
                                            <br/>Dans ce cas, vous pouvez changer de notaire et vous adresser à l’un de ses confrères. 
                                            <br/>Le premier est alors tenu de vous rendre toutes les pièces de votre dossier ou de les transmettre à son confrère. 
                                            </p>
                                            <Alert>
                                                <p>Attention : il est aussi en droit de vous réclamer des frais de notaire à hauteur du travail qu’il a déjà accompli pour vous. 
                                                    <br/>Enfin, si un litige vous oppose à ce notaire, vous pouvez déposer un recours auprès de la Chambre départementale des notaires dont il dépend.</p>
                                                    <b>Clotere prévoit dans ce cas une médiation, et vous permet de changer de notaire rapidement sur la plateforme.</b>
                                                </Alert>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col md='3'>
                                    <CardClotere2 />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </ArticleContent>
                <ArticlesSimilaires />
                <BlocCta />
                <Footer />
            </HomeS >
        </>
    );
}

export default ArticleChoisirNotaire;