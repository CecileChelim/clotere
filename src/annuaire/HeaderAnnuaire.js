import React, { useState }  from "react";
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardBody, Form, Label, Input, Button } from "reactstrap";
import styled from "styled-components";
import Rapide from "../img/rapide.webp";
import Simple from "../img/simple.webp";
import Gratuit from "../img/gratuit.webp";

import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";


export const ContainerS = styled(Container)`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content:center;
position:relative;
margin-bottom:3rem;
margin-top: 50px;
flex-direction:column;
padding:5rem;
`;

export const Title = styled.h1`
line-height;46px;
font-size: 72px;
margin-bottom: 30px;
font-weight: 500;
&.mobile{display:none;}
@media all and (max-width: 768px) {
      font-size:50px!important;
      display:none;
      &.mobile{display:block;}
  }
`;
export const SubTitle = styled.h2`
font-family:"Manrope",sans-serif;
line-height: 44px;
font-size:20px;
width: 90%;
color:${props => props.theme.colors.black};
font-weight: 300;
margin-bottom:50px;
@media all and (max-width: 768px) {margin-bottom:30px;}
`;

export const BlocCard = styled.div`
display:flex;
flex-direction:row;
align-items:stretch;
gap:16px;
justify-content:center;
.card{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:24px;
padding:30px;
width:400px;
overflow:hidden;
&.notaire{background-color:${props => props.theme.colors.mainDark};color:#fff;}
&.agent{background-color:${props => props.theme.colors.main};color:#000;}
.btn{width:100%;}
}
@media all and (max-width: 768px) {
    flex-direction:column;
    align-items:center;
    
}
`;
export const Avantages = styled.p`
display:flex;
flex-direction:row;
gap:10px;
margin:0;
img{width:42px;}
font-size:16px;
`;
export const Titre = styled.h3`
font-size:24px;
font-weight:bold;
`;
export const CardProcess = styled.div`
display:flex;
flex-direction:row;
align-items:start;
gap:3%;
background-color:#fff;
padding:2rem 0;
.container{
    gap: 3rem;
    }

.card{
    display:flex!important;
    border:0;
    max-width:33%;
    .card-body{
        text-align:left;
        display: flex;
    flex-direction: row;
        gap: 1rem;
    }
    .card-img{
        width: 60px;
        height: 60px;
        margin-left: -15px;
    }
    .card-title{
        font-size:22px;
        font-weight:bold;
        margin:0;
    }
    .card-text{
        font-size:16px;
        font-weight:regular;
    }
}
@media screen and (max-width: 600px) {
padding:2rem!important;
    .container{flex-direction:column;}
    .card{width:100%;max-width:none;}
    .card-body{
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .card-img{
        display:flex;
    }
}
`;





function HeaderAnnuaire() {
    const [results, setResults] = useState([]);
    return (
        <>
            <ContainerS className="grey-bg">
                <Row className="d-flex align-items-center" align="center">
                    <Col md="12" xs="12" align="center">
                        <Title>Trouvez <span className="textHighlight">votre notaire</span> simplement</Title>
                        <SubTitle>
                            L'annuaire des notaires de France.
                        </SubTitle>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}

                    </Col>
                </Row>
            </ContainerS>
            <Row>
                <CardProcess>
                    <Container className="d-flex">
                        <Card>
                            <CardBody>
                                <CardImg src={Simple} />
                                <div>
                                    <CardTitle>Simple</CardTitle>
                                    <CardText>
                                        Trouvez votre notaire par région ou ville.
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>

                            <CardBody>
                                <CardImg src={Rapide} />
                                <div>
                                    <CardTitle>Rapide</CardTitle>
                                    <CardText>
                                        Prenez contact rapidement avec votre notaire.
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardImg src={Gratuit} />
                                <div>
                                    <CardTitle>Gratuit </CardTitle>
                                    <CardText>
                                        Choisissez le notaire idéal gratuitement.
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </CardProcess>
            </Row>
        </>
    );
}

export default HeaderAnnuaire;