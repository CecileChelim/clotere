import React from "react";
import {
    Container, Row, Col, Card, CardImg, CardBody
} from "reactstrap";
import styled from "styled-components";
import Img from "../img/img-card-prospect-notaire.png";

const LeadClientS = styled.section`
 margin-top:90px;
 .card-img{
    margin-bottom:2rem;
 }
 .card{
    padding:0;
    background: rgb(29,43,40);
    background: linear-gradient(180deg, rgba(29,43,40,1) 0%, rgba(2,96,105,1) 100%);
    border-radius:16px;
    color:#fff;
    padding:0 1rem;
    h4{
        font-size:42px;
        font-family: "BodoniMedium", serif;
    }
    p{
        font-size:22px;
        width:80%;
    }
 }
 @media all and (max-width: 768px) {
    h4{font-size:30px!important;}
    p{ font-size:22px!important;width:100%!important;}
  }
`;

function LeadClient(args) {

    return (
        <>
            <LeadClientS>
                <Container>
                    <Row>
                        <Col md="12">
                            <Card align="center">
                                <CardBody>
                                    <CardImg src={Img}></CardImg>
                                    <h4>Ce ne sont pas des leads qualifiés que l’on vous <br />adresse mais <span className="textHighlight">des clients</span></h4>
                                    
                                    <p>
                                        Les utilisateurs constituent en ligne leur dossier de transactions immobilières.<br />
                                        Clotere classe, analyse et archive les données & documents pour vous.
                                        Lorsque le dossier est complet, si vous l’acceptez il est pour vous !
                                        Gérez et suivez le sur votre interface dédiée.
                                    </p>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </LeadClientS>

        </>
    );
}

export default LeadClient;