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
import ArticlesSimilaires from "./ArticlesSimilaires";




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
                <section className="p-5">
                    <ArticlesSimilaires title="Tous nos articles sur les notaires, leurs rôles et leurs frais."/>
                </section>
                <Footer />
            </HomeS>
        </>
    );
}

export default Blog;