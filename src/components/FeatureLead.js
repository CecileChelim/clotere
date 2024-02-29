import React from "react";
import {
    Container, Row, Col,Card
} from "reactstrap";
import styled from "styled-components";
import Illu2 from "../img/illu-2-notaire.svg";
import Illu1 from "../img/illu-1-notaire.svg";
import Illu3 from "../img/illu-3-notaire.svg";


const EnMoyenneS = styled.section`
 margin-top:90px;
`;

const CardFlex = styled.div`
display:flex;
flex-direction:column:
justify-content:space-between;
align-items:center;
@media all and (max-width: 768px) {display:block;}
`;

const CardS = styled(Card)`
 text-align:center;
 border:0;
 background: transparent;
 padding:40px 30px;
 margin:1.5rem;
 background-size:200px;
    background-repeat:no-repeat;
    background-position:center;
 h4{
font-size:124px;
font-family: "BodoniMedium", serif;
    span{
        display:block;
        font-weight:normal;
        font-size:48px;
    }  
 }
 p{font-size:20px;margin-top:26px;font-weight:600;}
 p.desc{
    font-size:16px;
    text-align:left;
    margin-top:2rem;
    font-weight:400;
 }
 &.first{
    background-image:url(${Illu1}); 
 }
 &.second{background-image:url(${Illu2}); }
 &.third{background-image:url(${Illu3}); }
 @media all and (max-width: 768px) {
    padding:20px;
    h3{font-size:74px;}
    span{font-size:20px;}
    p{font-size:18px;margin-top:0px;}
  }
`;
const Divider = styled.div`
 height:180px;
 width:1px;
 background-color:rgb(11,85,92,30%);
 @media all and (max-width: 768px) {
    display:none;
  }
`;

function FeatureLead(args) {

    return (
        <>
        <EnMoyenneS>
            <Container>
                <Row>
                    <Col md="12" align="center" className="mb-4">
                        <h1>Pourquoi Clotere ?</h1>
                    </Col>
                    <Col md="12">
                        <CardFlex className="">
                            <CardS className="first">
                                <h4>100% <span>sécurisé</span></h4>
                                <p>Tous les documents dans un espace sécurisé</p>
                                <p className="desc">
                                On vous génère automatiquement la liste des documents nécessaires pour la signature et on demande ces documents aux différents interlocuteurs
                                </p>
                            </CardS>
                            <Divider />
                            <CardS className="second">
                                <h4>1 <span>outil</span></h4>
                                <p>Simplifiez vos échanges avec les clients</p>
                                <p className="desc">
                                Profitez de nos mails type de demande de documents, rappels automatiques.
Evitez les mails, les pièces jointes perdues et les Re:Re:Re:Re 
                                </p>
                            </CardS>
                            <Divider />
                            <CardS className="third">
                                <h4>3 <span>clics</span></h4>
                                <p>Fixez des rendez-vous facilement</p>
                                <p className="desc">On vous génère automatiquement la liste des documents nécessaires pour la signature et on demande ces documents aux différents interlocuteurs</p>
                            </CardS>
                        </CardFlex>
                    </Col>
                </Row>

            </Container>
        </EnMoyenneS>
        {/**
        <ContainerFeatureNotaire className="grey-bg">
            <div className="text-center mt-5">
                <br/><br/><h3>Pourquoi choisir Clotere ?</h3>
                <h5>
                    Une somme de petits détails qui font une grande différence pour vos clients.
                </h5>
                <br/><br/>
            </div>

            <Fade bottom>
                <Row>
                    <Col md='4' xs='12'>
                        <div className="d-flex flex-row align-items-center lg">
                            <div className="content">
                                <p className="text-lead">Des clients pas des prospects</p>
                                <h4>Pas de leads qualifiés mais <span className="textHighlight">des vrais clients</span></h4>
                                <p>Les utilisateurs constituent en ligne leur dossier de transactions immobilières. Clotere classe, analyse et archive les données & documents pour vous. Lorsque le dossier est complet, si vous l’acceptez il est pour vous ! Gérez et suivez le sur votre interface dédiée.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='4' xs='12'>
                        <div className="d-flex flex-row align-items-center lg">
                            <div className="content">
                            <p className="text-lead">Stocké et 100% sécurisé</p>
                        <h4>Tous les documents regroupés dans un  <span className="textHighlight">espace sécurisé</span></h4>
                        <p>On vous génère automatiquement la liste des documents nécessaires pour la signature et on demande ces documents aux différents interlocuteurs.</p>
                            <br/></div>
                        </div>
                    </Col>
                    <Col md='4' xs='12'>
                        <div className="d-flex flex-row align-items-center lg">
                            <div className="content">
                            <p className="text-lead">Une date en 3 clics</p>
                        <h4>Fixez des <span className="textHighlight">rendez-vous facilement</span></h4>
                        <p>Finis les Re:re:re:re pour trouver une date de rendez-vous. <br/>Profitez de nos agendas partagées et de nos rappels automatiques,  pour trouver une date de signature commune. </p>
                        <br/> </div>
                        </div>
                    </Col>
                </Row>

            </Fade>


        </ContainerFeatureNotaire>
         **/}
        </>
    );
}

export default FeatureLead;