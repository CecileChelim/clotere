import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import Illu2 from "../img/illu-1.svg";
import Illu1 from "../img/illu-120.svg";
import Illu3 from "../img/illu-15.svg";


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
        font-size:30px;
    }  
 }
 p{font-size:20px;margin-top:26px;}
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



function EnMoyenne() {
    return (
        <EnMoyenneS>
            <Container>
                <Row>
                    <Col md="12" align="center" className="mb-4">
                        <h2>En moyenne</h2>
                    </Col>
                    <Col md="12">
                        <CardFlex className="">
                            <CardS className="first">
                                <h4>50 <span>heures</span></h4>
                                <p>Le temps que vous économisez en passant par Clotere</p>
                            </CardS>
                            <Divider />
                            <CardS className="second">
                                <h4>1 <span>seul</span></h4>
                                <p>Le nombre d'interlocuteur pour mener un projet avec Clotere</p>
                            </CardS>
                            <Divider />
                            <CardS className="third">
                                <h4>15 <span>jours</span></h4>
                                <p>Le nombre de jours  gagnés sur votre rendez-vous de signature</p>
                            </CardS>
                        </CardFlex>
                    </Col>
                </Row>

            </Container>
        </EnMoyenneS>
    );
}

export default EnMoyenne;