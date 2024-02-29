import React from "react";
import {
    Container, Row, Col, FormGroup, Label, Card, CardBody, Form, Input, Alert, CardTitle, CardText
} from "reactstrap";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import Background from "../img/back-clotere.png"
import { ButtonPrimarySmall,LinkCard } from "../style/Button";
import { Link } from "react-router-dom";


const CardArticle = styled(Card)`
.card-title{
    font-size: 18px;
    font-weight: 600;
}
.card-body{
    padding:2rem;
}
`;

const BackgroundS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

const ContainerS = styled(Container)`
h3{
    font-size:42px;
    line-height: 1.6;
    margin-bottom:2rem!important;
}
li.list-group-item{
    font-size:20px;
    background-color:white;
}
.card{
    background-color: transparent;
    .card-body{
        background-color: #fff;
        border-radius:10px;
    }
}
form{
    align-items: end;
    gap: 1%;
    justify-content: space-evenly;
    .mb-3{margin:0!important;}
}
@media all and (max-width: 768px) {
    .lg{flex-wrap: wrap;justify-content: center;width:100%;}
    .revert{flex-wrap: wrap-reverse;}
    .content{padding: 1rem;}
    form{
        flex-direction: column !important;
        align-items: center;
        justify-content: start;
        .mb-3{margin:1rem!important;width:100%;}
        button{width: 100%;}
    }
  }
`;

const handleChangeSelect = (e) => {
    console.log(e);
};


function CalculFraisNotaire(args) {


    return (
        <>
            <BackgroundS>
                <Navbar user={args.user} />
                <ContainerS>

                    <Row className="d-flex align-items-center">
                        <Col md='12' align="center">
                            <h3>Calculez vos <span className="textHighlight">frais de notaire</span></h3>
                            <p>
                                Les frais de notaire représente une dépense importante dans votre achat immobilier.<br />
                                Pour éviter les suprises calculez à l'avance ces frais de notaire.<br />
                            </p>
                        </Col>
                        <Col md='1'></Col>
                        <Col md='10'>
                            <Card>
                                <CardBody>
                                    <Form className="d-flex flex-row">
                                        <FormGroup>
                                            <Label>Montant de votre achat</Label>
                                            <Input type="text" name="montant" placeholder="Montant en €" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Type de projet</Label>
                                            <Input
                                                id=""
                                                name="type"
                                                type="select"
                                                onChange={handleChangeSelect}
                                            >
                                                <option key={1} value="neuf">Neuf</option>
                                                <option key={2} value="ancien">Ancien</option>
                                                <option key={3} value="plan">Vente sur plan (VEFA)</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Ville</Label>
                                            <Input type="text" name="ville" placeholder="Lyon" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonPrimarySmall color="primary">Calculez vos frais</ButtonPrimarySmall>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Alert color="success" className="mt-5">
                                <p>
                                    <span role="img">👋</span> Il est important de noter qe les frais de notaire, malgré ce que l'on en dit souvent, ne reviennent quand petite partie à votre notaire. <br/>En réalité la plus grand partie revient à l'État !
                                </p>
                            </Alert>

                        </Col>
                    </Row>

                    <Row className="d-flex align-items-center justify-content-center mt-3">
                        <Col md='12' align="center">
                            <br/><br/><br/>
                            <h3>Tous nos articles sur les notaires, leurs rôles et leurs frais.</h3>
                        </Col>
                    <Col md="4" xs="12">
                        <CardArticle>
                            <CardBody>
                                <CardTitle>Mais au fait les frais de notaire qu'est-ce que c'est ? </CardTitle>
                                <CardText>
                                    Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais : 
                                    <ul>
                                        <li>
                                        Les impôts et les taxes
                                        </li>
                                       <li> Les frais de débours</li>
                                        <li>Les émoluments du notaire   
                                        </li>
                                    </ul>
                                </CardText>
                                <Link to="/achat-immobilier/de-quoi-se-compose-les-frais-de-notaire">Lire l'article</Link>
                            </CardBody>
                        </CardArticle>
                    </Col>
                    <Col md="4" xs="12">
                        <CardArticle>
                            <CardBody>
                                <CardTitle>Quel est le rôle du notaire dans un achat immobilier ?</CardTitle>
                                <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
                                </CardText>
                                <LinkCard to="/">En savoir plus</LinkCard>
                            </CardBody>
                        </CardArticle>
                    </Col>
                    <Col md="4" xs="12">
                        <CardArticle>
                            <CardBody>
                                <CardTitle>Quel est le rôle du notaire dans un achat immobilier ?</CardTitle>
                                <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
                                </CardText>
                                <LinkCard to="/">En savoir plus</LinkCard>
                            </CardBody>
                        </CardArticle>
                    </Col>
                    </Row>

                </ContainerS>
                <Footer />
            </BackgroundS>
        </>
    );
}

export default CalculFraisNotaire;