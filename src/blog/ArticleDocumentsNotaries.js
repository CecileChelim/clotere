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


function ArticleDocumentsNotaries(args) {

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
                                Quels sont les documents de vente chez le notaire pour un achat immobilier ?
                            </BreadcrumbItem>
                        </Container>
                    </Breadcrumb>

                    <section>
                        <Container>
                            <Row>
                                <Col md='1'></Col>
                                <Col md='8'>
                                    <h1>Quels sont les documents de vente chez le notaire pour un achat immobilier ?</h1>
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

                                    <p>Vous projetez un achat immobilier. Durant la négociation, vous aurez à signer plusieurs documents actant la vente de ce bien immobilier à votre profit.
                                        <br />Quels sont ces documents ? À quoi servent-ils ? Dans quelles conditions les signe-t-on ? On vous en dit plus.</p>


                                    <h2>1/ L’offre d’achat</h2>

                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>Descriptif</h3>
                                            <p>
                                                Si vous êtes intéressé par un bien immobilier à vendre, vous pouvez adresser une offre d’achat au propriétaire du bien.
                                                Cette démarche permet de sécuriser votre candidature auprès du vendeur.
                                                <br />En effet, si celui-ci y répond positivement dans le délai de validité de l’offre, vous emportez la priorité sur d’éventuels concurrents.
                                                <br /><br />
                                                <Alert>
                                                    Mais attention : <b>cela vous engage alors à acheter</b>. L’offre d’achat, pour avoir une valeur juridique, doit être formulée par écrit, et envoyée sous forme d’un mail ou d’un courrier postal (de préférence en recommandé avec accusé de réception)

                                                    <br /><Link to="/onboard">Faites appel à un notaire disponible et qualifié pour gérer votre achat immobilier.</Link>
                                                </Alert>
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Les mentions obligatoires de l'offre d'achat.</h3>

                                            <p>
                                                <ul>
                                                    <li>la désignation exacte du bien concerné,</li>
                                                    <li>le prix proposé par l’acheteur (il peut être égal ou inférieur au prix demandé par le vendeur),</li>
                                                    <li>la date de l’offre d’achat et sa durée de validité. Celle-ci doit se situer dans un laps de temps « raisonnable », généralement de quelques jours à 2 semaines.</li>
                                                </ul>
                                                <br />
                                                L’offre peut contenir aussi des informations utiles comme l’existence de conditions suspensives à l’achat (par exemple l’obtention d’un prêt par l’acheteur).

                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Avec ou sans le notaire ?.</h3>

                                            <p>
                                            L'offre d'achat doit-elle être réalisé par un notaire ?
                                            <br/>
                                            L’offre d’achat ne constitue en rien une démarche obligatoire. Elle est effectuée à l’initiative de l’acheteur. Elle ne nécessite donc pas l’intervention d’un notaire.
                                            </p>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <CardClotere1 />
                                    <h2>2/ Le compromis de vente</h2>

                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>Descriptif</h3>
                                            <p>Lorsque le vendeur et le futur acheteur se sont accordés sur la vente d’un bien immobilier, <b>ils signent un compromis de vente qui les engage réciproquement et définit déjà les conditions de la transaction</b>. 
                                                <br/>Il s’agit d’une sorte de pré-contrat qui précède la signature de l’acte authentique de vente.
                                                <br/>
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
                                            <h3>Les mentions obligatoires</h3>
                                            <p>Que doit contenir le compromis de vente ?</p>
                                            <p>Le compromis de vente doit mentionner au minimum des informations sur : <br/>
                                                <ul>
                                                    <li>l’identité du vendeur et de l’acquéreur,</li>
                                                    <li>la nature, la situation et l’origine du bien immobilier (adresse, descriptif précis, historique des ventes précédentes),</li>
                                                    <li>la vente : prix de vente et modalités de paiement,</li>
                                                    <li>les dates et délais concernant la possibilité de rétractation, la signature de l’acte de vente, l’entrée dans les lieux.</li>
                                                </ul>
                                                <br/>Ce contrat doit s’accompagner de documents annexes (en cours de validité) comme :
                                                <ul>
                                                    <li>les diagnostics techniques (mentionnant la présence ou non d’amiante, de plomb, de risques naturels et technologiques) et le diagnostic de performance énergétique,</li>
                                                    <li>les documents mentionnant l’existence d’une hypothèque ou d’une servitude,</li>
                                                    <li>les documents concernant les logements en copropriété,</li>
                                                    <li>les clauses suspensives à la vente, s’il en existe : obtention d’un prêt par l’acquéreur, d’un certificat d’urbanisme, réalisation de travaux par le vendeur, etc.</li>
                                                </ul>
                                                <br /><br />
                                                <Alert>
                                                <h3>Focus sur le délai de rétractation</h3>
                                                <p>Après la signature d’un compromis de vente, <b>seul l’acheteur bénéficie d’un droit de rétractation à formuler par lettre recommandée avec accusé de réception</b>. Le <b>délai de rétractation (sans motif exigé) est de 10 jours ouvrés</b>, à compter de la remise en main propre ou de la réception par courrier RAR du compromis complet, signé par les deux parties. Si l’acheteur avait versé un dépôt de garantie, il lui sera remboursé.</p>
                                                <Link to="/onboard">Faites appel à un notaire disponible et qualifié pour gérer votre achat immobilier.</Link>
                                                </Alert>
                                            </p>
                                        </ListGroupItem>
                                        </ListGroup>


                                    <h2>3/ L’acte authentique de vente</h2>

                                    <ListGroup>
                                        <ListGroupItem>
                                            <h3>Descriptif</h3>
                                            <p>Il s’agit de <b>l’unique document officiel obligatoire</b> qui acte la vente d’un bien immobilier et qui tient lieu de titre de propriété pour l’acquéreur. 
                                            <br/>Il a une valeur administrative et juridique incontestable.
                                            </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Les mentions obligatoires</h3>
                                            <p>On retrouve sur l’acte de vente les mentions obligatoires déjà présentes sur le compromis de vente, de même que les pièces annexes. S’y ajoutent :</p>
                                                <ul>
                                                    <li>les date et lieu de la signature,</li>
                                                    <li>les nom et lieu d’exercice du notaire ayant procédé à la vente,</li>
                                                    <li>le montant des honoraires perçus par le notaire.</li>
                                                </ul>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <h3>Avec ou sans le notaire ?</h3>
                                            <p>Il <b>est obligatoire de faire préparer et rédiger un acte de vente par un notaire</b>. La signature a nécessairement lieu chez un notaire, 2 ou 3 mois après la signature du compromis de vente, en présence de l’acheteur et du vendeur (ou de leurs représentants dûment mandatés).
                                            <br/> L’acte de vente peut aussi être signé de manière électronique. Le notaire conserve l’original de cet acte authentique de vente.
                                            <br/> Il en transmet copie au service fiscal de publicité foncière, au service du cadastre, à l’acquéreur et au vendeur. Cette copie a valeur de titre de propriété définitive pour l’acheteur.</p>

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

export default ArticleDocumentsNotaries;