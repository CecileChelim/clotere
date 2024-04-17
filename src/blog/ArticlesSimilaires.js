import React from "react";
import { CardTitle,Container,Row,Col,CardBody,CardText } from "reactstrap";
import { Link } from 'react-router-dom';
import { CardArticle } from "../style/Blog";
/* img articles */
import img1 from "../img/blog/img-blog-1.webp";
import img2 from "../img/blog/img-blog-2.webp";
import img3 from "../img/blog/img-blog-3.webp";



function ArticlesSimilaires(args) {

    return (
                    <Container className="mt-5">
                        <Row>
                            <Col md='12' align="center">
                                <h2>{args.title}</h2>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-start justify-content-center mt-5">
                            
                            <Col md="4" xs="12">
                            <CardArticle>
                                    <img className="mainimg" src={img3} alt="clotere" />

                                    <CardBody>
                                        <CardTitle>Quel est le rôle du notaire dans un achat immobilier ? </CardTitle>
                                        <CardText>
                                        Si vous avez un projet d’achat immobilier, vous devez savoir que le notaire tient un rôle indispensable dans le processus d’achat.
                                        </CardText>
                                        <Link to="/achat-immobilier/role-notaire-dans-un-achat-immobilier">Lire l'article</Link>
                                        <div className="EndBloc">
                                        <div className="card-blog-author">
                                            <img alt="trouver-votre-notaire" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Cécile</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                            <Col md="4" xs="12">
                                <CardArticle>
                                    <img alt="trouver un notaire qualifié" className="mainimg" src={img2} />

                                    <CardBody>
                                        <CardTitle>Comment choisir son notaire pour son achat immobilier ?</CardTitle>
                                        <CardText>Acquérir un bien immobilier requiert toujours l’intervention d’un notaire, au moins pour réaliser l’acte de vente. Comment faire le choix d’un notaire pour un achat immobilier ? Découvrez nos conseils.
                                        </CardText>
                                        <Link to="/achat-immobilier/comment-choisir-son-notaire">Lire l'article</Link>
                                        <div className="EndBloc">
                                        <div className="card-blog-author">
                                            <img alt="auteur" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Robin</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                            
                            <Col md="4" xs="12">
                            <CardArticle>
                                    <img  alt="trouver un notaire pour votre achat immobilier" className="mainimg" src={img1}/>

                                    <CardBody>
                                        <CardTitle>Quels sont les documents de vente chez le notaire pour un achat immobilier ? </CardTitle>
                                        <CardText>
                                        Durant la négociation, vous aurez à signer plusieurs documents actant la vente de ce bien immobilier. Quels sont ces documents ? À quoi servent-ils ? On vous en dit plus.
                                        </CardText>
                                        <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire" onClick={window.scrollTo(0, 0)}>Lire l'article</Link>
                                        <div className="EndBloc">
                                        <div className="card-blog-author">
                                            <img alt="notaire" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Robin</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                       
                                        </div>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                        </Row>
                    </Container>
    );
}

export default ArticlesSimilaires;