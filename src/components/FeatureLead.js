import React from "react";
import {
    Container, Row, Col
} from "reactstrap";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";

const ContainerFeatureNotaire = styled(Container)`
margin-top:8rem;margin-bottom:8rem;
.lg{
    border-radius: 16px;
    border: 1px solid #fff;
    background: linear-gradient(130deg,hsla(0,0%,100%,.3),#fff);
    box-shadow: 0 20px 28px 0 rgba(0,0,0,.15), inset 0 1px 0 0 #fff;
}
p.text-lead{
    font-size: 22px;
    font-weight: 600;
    color:${props => props.theme.colors.greenDark};
}
p{
    font-size:16px;
    line-height: 2;
}
h4{
    font-size:32px;
    line-height: 1.3;
    margin-bottom:2rem!important;
}
.content{padding:2rem;}
}
@media all and (max-width: 768px) {
    margin-top:4rem;margin-bottom:4srem;
    .lg{flex-wrap: wrap;justify-content: center;width:100%!important;margin-bottom:2rem!important;}
    .revert{flex-wrap: wrap-reverse;}
    .content{padding: 1rem!important;}
  }
`;




function FeatureLead(args) {


    return (
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


        </ContainerFeatureNotaire >
    );
}

export default FeatureLead;