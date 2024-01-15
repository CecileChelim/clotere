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
    padding: 1rem;
    text-align: justify;
    p{
        font-size:14px;
        font-weight:normal;
    }
 }
`;



function Faq() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
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
                                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux</p>
                            </Collapse>
                            <ListGroupItem onClick={toggle1} >
                                Pourquoi Clotere est plus rapide et moins cher qu’un notaire physique ?
                                <FontAwesomeIcon icon={faAngleDown} />
                            </ListGroupItem>
                            <Collapse isOpen={isOpen1}>
                                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux</p>
                            </Collapse>
                            <ListGroupItem onClick={toggle2} >
                                Est-ce que Clotere est un notaire ?
                                <FontAwesomeIcon icon={faAngleDown} />
                            </ListGroupItem>
                            <Collapse isOpen={isOpen2}>
                                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux</p>
                            </Collapse>
                        </ListGroupFaq>
                    </Col>
                </Row>
            </Container>
        </FaqS>
    );
}

export default Faq;