import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import { ButtonPrimary } from "../style/Button";
import IcnLogoBlanc from "../img/icn-logo-blanc.svg";
import IcnLogoNoir from "../img/icn-logo-noir.svg";


export const ContainerS = styled(Container)`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content:center;
position:relative;
margin-bottom:3rem;
margin-top: 50px;
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
font-size:28px;
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


function HeaderNew() {
    return (
        <ContainerS className="grey-bg">
            <Row className="d-flex align-items-center" align="center">
                <Col md="12" xs="12" align="center">
                    <Title>Simplifiez votre passage chez le notaire</Title>
                    <Title className="mobile">Simplifiez votre passage chez le notaire</Title>
                    <SubTitle>
                        La plateforme la plus complète au service des <span className="textHighlight">agents immobiliers</span> et <span className="textHighlight">notaires</span>.
                        <br />Pour offrir le <span className="textHighlight">meilleur accompagnement</span> à vos clients.
                    </SubTitle>
                    <BlocCard>
                        <Card className="notaire">
                            <Avantages>
                                <img src={IcnLogoBlanc} alt="Clotere" />
                                Renforcez la relation client
                            </Avantages>
                            <Titre>Solution pour<br/> les notaires</Titre>
                            <ButtonPrimary color="white" target="blank" href="https://notaire.clotere.fr?utm_source=wwww">En savoir plus</ButtonPrimary>
                        </Card>
                        <Card className="agent">
                            <Avantages>
                                <img src={IcnLogoNoir} alt="Clotere" />
                                Accélerez vos ventes
                            </Avantages>
                            <Titre>Solution pour<br/> les agents immobiliers</Titre>
                            <ButtonPrimary color="dark" target="blank"  href="https://agent.clotere.fr?utm_source=wwww">En savoir plus</ButtonPrimary>
                        </Card>
                    </BlocCard>

                    <p className="mt-2">Essai gratuit. Sans engagement.</p>
                </Col>

            </Row>
        </ContainerS>
    );
}

export default HeaderNew;