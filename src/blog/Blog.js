import React from "react";
import {
    Container, Row, Col, FormGroup, Label, Card, CardBody, Form, Input, Alert, CardTitle, CardText, ListGroup, ListGroupItem, CardImg
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import HeaderBlog from "../img/header-blog.png";
import { ContainerS, Title, SubTitle, IlluS } from '../components/Header';
import { ButtonPrimarySmall, LinkCard } from "../style/Button";
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
                            <SubTitle>Tous savoir sur votre passage chez le notaire.</SubTitle>

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
                                        <CardTitle>Mais au fait les frais de notaire qu'est-ce que c'est ? </CardTitle>
                                        <CardText>
                                            Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais :
                                          
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
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
                                    <img className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp" alt="clotere" />

                                    <CardBody>
                                        <CardTitle>Quel est le rôle du notaire dans un achat immobilier ? </CardTitle>
                                        <CardText>
                                            Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais :
                                          
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
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
                                    <img className="mainimg" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,f_auto,h_225,q_auto,w_576/fnbueqbbj0iutgl0expq.webp" alt="clotere" />

                                    <CardBody>
                                        <CardTitle>Quel est le rôle du notaire dans un achat immobilier ? </CardTitle>
                                        <CardText>
                                            Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais :
                                          
                                        </CardText>
                                        <div className="card-blog-author">
                                            <img height="50" width="50" auto="best" class="vesta-card-blog--expert-pic" src="https://res.cloudinary.com/vesta-home/image/upload/c_fill,g_face,h_80,r_max,w_80/v1/eugene/photos_profil/robin_boursier_5c7de5b196a2f904b493.webp" />
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
                </section>
                <Footer />
            </HomeS>
        </>
    );
}

export default Blog;