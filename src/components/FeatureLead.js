import React from "react";
import {
    Container
} from "reactstrap";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import IlluFeature from "../img/illu-feature-notaire.png";




const ContainerFeatureNotaire = styled(Container)`

.lg{
    padding-top:2rem;
    padding-bottom:2rem;
    width: 80%;
    margin: 0 auto;
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
.content{padding:3rem;}
}
@media all and (max-width: 768px) {
    .lg{flex-wrap: wrap;justify-content: center;width:100%;}
    .revert{flex-wrap: wrap-reverse;}
    .content{padding: 1rem;}
  }
`;




function FeatureLead(args) {


    return (
        <ContainerFeatureNotaire className="grey-bg">
            <Fade bottom>
                <div className="d-flex flex-row align-items-center lg">
                    <div className="content">
                        <p className="text-lead">Des clients pas des prospects</p>
                        <h3>Ce ne sont pas des leads qualifiés que l’on vous envoit mais <span className="textHighlight">des clients</span></h3>
                        <p>Les utilisateurs constituent en ligne leur dossier de transactions immobilières. Clotere classe, analyse et archive les données & documents pour vous. Lorsque le dossier est complet, si vous l’acceptez il est pour vous ! Gérez et suivez le sur votre interface dédiée.</p>
                    </div>
                    <div align="center">
                        <img src={IlluFeature} alt="" />
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className="d-flex flex-row align-items-center lg revert">
                    <div align="center">
                        <img src={IlluFeature} alt="" />
                    </div>
                    <div className="content">
                        <p className="text-lead">Stocké et 100% sécurisé</p>
                        <h3>Tous les documents regroupés dans un  <span className="textHighlight">espace sécurisé</span></h3>
                        <p>On vous génère automatiquement la liste des documents nécessaires pour la signature et on demande ces documents aux différents interlocuteurs </p>
                    </div>
                </div>
            </Fade>

            <Fade bottom
            ><div className="d-flex flex-row align-items-center lg">
                    <div md="7" className="content">
                        <p className="text-lead">Finis les Re:Re:Re:Re</p>
                        <h3>Simplifiez  <span className="textHighlight">vos échanges</span> avec les clientsespace sécurisé</h3>
                        <p>Profitez de nos mails type de demande de document, rappel automatique. Evitez les mails, les pièces jointes perdus et les Re:Re:Re:Re  </p>
                    </div>
                    <div md="5" align="center">
                        <img src={IlluFeature} alt="" />
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className="d-flex flex-row align-items-center lg revert">
                    <div md="5" align="center">
                        <img src={IlluFeature} alt="" />
                    </div>
                    <div md="7" className="content">
                        <p className="text-lead">Une date en 3 clics</p>
                        <h3>Fixez des <span className="textHighlight">rendez-vous facilement</span></h3>
                        <p>On vous génère automatiquement la liste des documents nécessaires pour la signature et on demande ces documents aux différents interlocuteurs </p>
                    </div>
                </div>
            </Fade>

        
        </ContainerFeatureNotaire >
    );
}

export default FeatureLead;