import React from "react";
import {
    Container, Row, Col, CardBody, CardTitle, CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderBlog from "../img/header-blog.png";
import { ContainerS, Title, SubTitle } from '../components/Header';
import { HomeS } from '../Home';
import { CardArticle } from "../style/Blog";




function Blog(args) {

    return (
        <>
            <HomeS>
                <Navbar user={args.user} />
                <ContainerS className="grey-bg">
                    <Row className="d-flex align-items-center" align="center">
                        <Col md="7" xs="12" align="left">
                            <Title>Le blog by <span className="textHighlight">Clotere</span></Title>
                            <Title className="mobile">Le blog by <span className="textHighlight">Clotere</span></Title>
                            <SubTitle>Tous savoir sur votre passage chez le notaire, lors de votre achat immobilier.</SubTitle>

                        </Col>
                        <Col md="5">
                            <img width="150%" src={HeaderBlog} alt="" />
                        </Col>


                    </Row>
                </ContainerS>
                <section className="white-background">
                    <Container>
                        <Row className="d-flex align-items-center justify-content-center mt-3">
                            <Col md='12' align="center">
                                <br /><br /><br />
                                <h3>Tous nos articles sur les notaires, leurs rôles et leurs frais.</h3>
                                <br /><br /><br />
                            </Col>
                            <Col md="4" xs="12">
                            <CardArticle>
                                    <img className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp" alt="clotere" />

                                    <CardBody>
                                        <CardTitle>Quel est le rôle du notaire dans un achat immobilier ? </CardTitle>
                                        <CardText>
                                        Si vous avez un projet d’achat immobilier, vous devez savoir que le notaire tient un rôle indispensable dans le processus d’achat.
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img alt="auteur" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
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
                                    <img className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp" alt="clotere" />

                                    <CardBody>
                                        <CardTitle>Comment choisir son notaire pour son achat immobilier ?</CardTitle>
                                        <CardText>Acquérir un bien immobilier requiert toujours l’intervention d’un notaire, au moins pour réaliser l’acte de vente. Comment faire le choix d’un notaire pour un achat immobilier ? Découvrez nos conseils.
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img alt="auteur" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Robin</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        <Link to="/achat-immobilier/comment-choisir-son-notaire">Lire l'article</Link>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                            
                            <Col md="4" xs="12">
                            <CardArticle>
                                    <img alt="clotere votre notaire en ligne" className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp" />

                                    <CardBody>
                                        <CardTitle>Quels sont les documents de vente chez le notaire pour un achat immobilier ? </CardTitle>
                                        <CardText>
                                        Vous projetez un achat immobilier. Durant la négociation, vous aurez à signer plusieurs documents actant la vente de ce bien immobilier à votre profit. Quels sont ces documents ? À quoi servent-ils ? Dans quelles conditions les signe-t-on ? On vous en dit plus.
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img alt="notaire" height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
                                            <div class="content-author">
                                                <p><b>Rédigé par Robin</b></p>
                                                <p class="read-time">Lecture : 7 min</p>
                                            </div>
                                        </div>
                                        <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire" onClick={window.scrollTo(0, 0)}>Lire l'article</Link>
                                    </CardBody>
                                </CardArticle>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </HomeS>
        </>
    );
}

export default Blog;