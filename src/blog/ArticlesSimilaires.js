import React from "react";
import { CardTitle,Container,Row,Col,CardBody,CardText } from "reactstrap";
import { Link } from 'react-router-dom';
import { CardArticle } from "../style/Blog";



function ArticlesSimilaires() {
    return (
                    <Container className="mt-5">
                        <Row className="d-flex align-items-center justify-content-center mt-3">
                            
                            <Col md="4" xs="12">
                            <CardArticle>
                                    <img className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp" alt="clotere" />

                                    <CardBody>
                                        <CardTitle>Quel est le rôle du notaire dans un achat immobilier ? </CardTitle>
                                        <CardText>
                                        Si vous avez un projet d’achat immobilier, vous devez savoir que le notaire tient un rôle indispensable dans le processus d’achat.
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img alt="trouver-votre-notaire" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Cécile</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        <Link to="/achat-immobilier/role-notaire-dans-un-achat-immobilier">Lire l'article</Link>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                            <Col md="4" xs="12">
                                <CardArticle>
                                    <img alt="trouver un notaire qualifié" className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp"  />

                                    <CardBody>
                                        <CardTitle>Mais au fait les frais de notaire qu'est-ce que c'est ? </CardTitle>
                                        <CardText>
                                            Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais :
                                          
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img alt="Notaire en ligne" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Robin</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        <Link to="/achat-immobilier/de-quoi-se-compose-les-frais-de-notaire">Lire l'article</Link>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                            
                            <Col md="4" xs="12">
                            <CardArticle>
                                    <img  alt="trouver un notaire pour votre achat immobilier" className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp"/>

                                    <CardBody>
                                        <CardTitle>Quel est le rôle du notaire dans un achat immobilier ? </CardTitle>
                                        <CardText>
                                            Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais :
                                          
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img alt="Clotere votre notaire en ligne" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Robin</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        <Link to="/achat-immobilier/de-quoi-se-compose-les-frais-de-notaire">Lire l'article</Link>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                        </Row>
                    </Container>
    );
}

export default ArticlesSimilaires;