import React, { useState } from "react";
import { Container, Row, Col, ListGroupItem, ListGroup, Collapse } from "reactstrap";
import styled from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FaqS = styled.section`
 margin-top:90px;
 .subtitle{
    font-size:28px;
    font-weight: 300;
        span{
            font-weight: 500;
            background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #1DF36C 50%);
        }
        @media all and (max-width: 768px) {
            font-size:18px;
          }
    }
    
 }
`;
const ListGroupFaq = styled(ListGroup)`
 
 li.list-group-item{
    font-size:18px;
 font-weight:bold;
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:left;
    background-color:transparent;
    border:0;
    border-bottom:1px solid #ddd;
    padding-bottom:30px;
    margin-bottom:30px;
    border-radius:0;
 }
 .collapse{
    padding: 0 1rem;
    text-align: justify;
    p{
        font-size:18px;
        font-weight:normal;
    }
 }
`;

function Faq() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    return (
        <FaqS>
            <Container>
                <Row>
                    <Col md="12" align="center" className="mb-4">
                        <h2>On répond à toutes vos questions</h2>
                        <p className="subtitle">Vous pouvez prendre <span>rendez-vous</span> avec <br />un conseiller Clotere pour obtenir plus de détails</p>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="8" align="center" className="mb-4">
                        <ListGroupFaq>
                            <ListGroupItem onClick={toggle} >
                                Est-ce que Clotere est payant ?
                                <FontAwesomeIcon icon={faAngleDown} />
                            </ListGroupItem>
                            <Collapse isOpen={isOpen}>
                                <p>La plateforme Clotere est totalement gratuite pour l’acheteur et le vendeur.<br />
                                    Une seule de nos prestations est payante : la rédaction du compromis de vente.</p>
                            </Collapse>
                            <ListGroupItem onClick={toggle1} >
                                Pourquoi Clotere est plus rapide ?
                                <FontAwesomeIcon icon={faAngleDown} />
                            </ListGroupItem>
                            <Collapse isOpen={isOpen1}>
                                <p>
                                    Clotere vous permet de regrouper tous vos échanges, documents et événements avec toutes les parties prenantes de votre transaction immobilière.
                                    <br />Ainsi, en vous proposant des rappels automatiques, des fixations de rendez-vous en ligne…etc, vous signez plus rapidement l'acte de vente !
                                </p>
                            </Collapse>
                            <ListGroupItem onClick={toggle2} >
                                Est-ce que Clotere est un notaire ?
                                <FontAwesomeIcon icon={faAngleDown} />
                            </ListGroupItem>
                            <Collapse isOpen={isOpen2}>
                                <p>
                                    Non ! Clotere est une plateforme de mise en relation entre des acheteurs, des vendeurs et des notaires.
                                </p>
                            </Collapse>
                            <ListGroupItem onClick={toggle3} >
                                Est-ce que Clotere est un système sécurisé ?
                                <FontAwesomeIcon icon={faAngleDown} />
                            </ListGroupItem>
                            <Collapse isOpen={isOpen3}>
                                <p>
                                    La confidentialité et la sécurité de vos données sont toujours protégées lorsque vous utilisez Clotere.
                                    <br />Nous utilisation la sécurité SSL qui garantit une parfaite sécurité dans la communication entre votre navigateur et nos serveurs.
                                    <br />Les serveurs Clotere sont situés dans des centres de données en France conformes aux normes ISO 27001.
                                    <br />Aucune de vos données personnelles n’est visible ni stockée par l'un de nos partenaires ou entreprises sous-traitantes, ou utilisée à des fins publicitaires.
                                    <br />Conformément à la loi RGPR, les utilisateurs peuvent corriger, bloquer ou supprimer leurs données personnelles à tout moment.
                                </p>
                            </Collapse>
                        </ListGroupFaq>
                    </Col>
                </Row>
            </Container>
        </FaqS>
    );
}

export default Faq;