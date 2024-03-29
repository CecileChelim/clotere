import React from "react";
import {
    Container, Row, Col, BreadcrumbItem,  Alert, ListGroup, ListGroupItem,  Breadcrumb
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HomeS } from '../Home';
import { ArticleContent } from "../style/Blog";
import CardClotere1 from "./CardClotere1";
import CardSimulateurFrais from "./CardSimulateurFrais";
import ArticlesSimilaires from "./ArticlesSimilaires";
import BlocCta from "../components/BlocCta";


function ArticleRoleNotaire(args) {

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

                    <section>
                        <Container>
                            <Row>
                                <Col md='1'></Col>
                                <Col md='8'>
                                    <h1>Quel est le rôle du notaire dans un achat immobilier ?</h1>
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

                                    <p>
                                        Si vous avez un projet d’achat immobilier, vous devez savoir que le notaire tient un rôle indispensable dans le processus d’achat, que ce soit pour établir des documents administratifs et juridiques, des signatures, mais aussi pour une mission de conseil.
                                        <br/>Voici ses différentes attributions.
                                    </p>
                                    <h2>
                                        Quels sont les documents et signatures pour votre achat immobilier ?
                                    </h2>
                                    <p>
                                        Le processus d’achat d’un bien immobilier implique la rédaction et la signature de plusieurs documents administratifs, au fur et à mesure de l’avancement du projet.
                                    </p>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>La promesse de vente ou le compromis de vente</h3>
                                            <p>
                                                Lorsque le vendeur et le potentiel acheteur d’un bien immobilier se sont mis d’accord sur sa vente, ils formalisent cet accord, d’abord par un compromis ou une promesse de vente.
                                                <br/>Ce pré-contrat engage le vendeur (pour la promesse de vente) ou le vendeur et l’acheteur (pour le compromis de vente). 
                                                Il n’est pas obligatoire de le faire établir par et de le signer devant un notaire : l’accord peut se conclure entre particuliers ou entre un particulier et une agence immobilière, sous la forme d’un document type.
                                                <br /><br />
                                                <Alert>
                                                Toutefois, <b>l’intervention d’un professionnel qualifié et objectif comme un notaire garantira davantage la conformité du compromis de vente</b>, dans l’intérêt des deux parties. 
                                                <br/>Le notaire veillera notamment à <b>la rédaction des conditions suspensives nécessaires à la finalisation de la vente</b> (comme l’obtention d’un prêt par l’acheteur ou encore la réalisation de diagnostics ou de travaux par le vendeur).
                                                <br/><Link to="/onboard">Faites appel à un notaire disponible et qualifié pour gérer votre achat immobilier.</Link>
                                                </Alert>
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>L’acte de vente authentique</h3>
                                            <p>
                                                La signature de l’acte de vente a lieu dans <b>un délai de 2 à 3 mois suivant la signature du compromis ou de la promesse de vente</b>.
                                                <br /><br />Il est obligatoire de faire établir et de signer l’acte de vente devant un notaire. La rédaction de cet acte nécessite la collecte, par le notaire et ses collaborateurs, d’un certain nombre de documents administratifs et juridiques. Ceux-ci sont relatifs à la situation du bien concerné, à l’identité de l’acquéreur et du vendeur, ainsi qu’aux modalités de la vente.
                                                <br />La préparation, la rédaction et la signature de l’acte de vente peuvent se faire, au choix, chez le notaire du vendeur ou de l’acheteur.
                                                <br/>Les deux parties, ou leurs représentants désignés, sont convoquées à l’étude notariale pour lecture et signature de l’acte de vente. Le notaire procède à la remise des clés.
                                                <br />À partir de ce moment, le nouveau propriétaire peut prendre possession de son bien.
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Le titre de propriété</h3>
                                            <p>
                                                À la signature de l’acte de vente, le notaire remet à l’acquéreur une attestation de propriété. Mais attention : les formalités ne sont pas terminées. Il faut encore un délai de quelques mois pour que l’acquéreur reçoive une copie de l’acte de vente définitif (l’original est conservé par le notaire).
                                                <br />C’est ce dernier document qui a la valeur de titre de propriété définitif.
                                            </p>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <CardClotere1/>
                                    <h2>Les autres missions du notaire : le conseil, et l'administratif.</h2>
                                    <p>Hormis la rédaction des actes de vente, le notaire joue d’autres rôles dans un processus d’achat immobilier.</p>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>Un rôle de conseil</h3>
                                            <p>
                                                Le notaire a pour mission de conseiller les particuliers qui le souhaitent, dans leur projet d’achat immobilier. Sa parfaite connaissance du marché immobilier local fait de lui un conseiller compétent et objectif pour estimer la valeur réelle d’une maison, d’un appartement, d’un terrain : quels sont ses qualités et ses défauts ? Son prix est-il conforme au marché ?
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Un rôle administratif</h3>
                                            <p>
                                                Dans le cadre d’un achat immobilier, un notaire a la charge de <b>recueillir et de vérifier la validité des documents administratifs et juridiques nécessaires pour établir un acte de vente</b>.
                                                <br /><br />En cas de décès du propriétaire d’un bien immobilier, il revient également au notaire d’estimer la valeur du bien à intégrer dans la succession, et d’établir une attestation de propriété immobilière ou un acte de notoriété.
                                            </p>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <h2>Comprendre les frais de notaire</h2>
                                    <p>Les frais de notaire, à la charge de l’acheteur du bien immobilier, comprennent 3 éléments :</p>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>Les droits de mutation ou d’enregistrement (80% du montant total) : </h3>
                                            <p>
                                                Ce sont les taxes dues à l’État et aux collectivités locales pour toute transaction immobilière, et que le notaire doit leur reverser en totalité.
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Les frais de débours (10% du montant) : </h3>
                                            <p>
                                                Ils servent à rembourser les sommes que le notaire a avancées, au nom de l’acquéreur, pour obtenir auprès des administrations les documents officiels nécessaires à la vente.
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Les émoluments du notaire (10% du montant) :  </h3>
                                            <p>C’est la seule partie qui sert à rémunérer le notaire.</p>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <h2>Comment les calculer ?</h2>
                                    <p>
                                        On peut évaluer le montant des frais de notaire liés à un achat immobilier, pour en tenir compte dans son budget.
                                        <br />
                                        En effet, ils représentent toujours :
                                    </p>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p>• <b>2 à 3% du prix d’achat d’un bien neuf</b><br/><small> (c’est-à-dire de moins de 5 ans)</small></p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>• <b>8% du prix pour un bien plus ancien.</b></p>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <CardSimulateurFrais/>
                                </Col>
                                <Col md='3'></Col>
                            </Row>
                        </Container>
                    </section>
                </ArticleContent>
                <ArticlesSimilaires/>
                <BlocCta/>
                <Footer />
            </HomeS >
        </>
    );
}

export default ArticleRoleNotaire;