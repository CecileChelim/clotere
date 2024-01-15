import React from "react";
import { Container,Row,Col,Card } from "reactstrap";
import styled from "styled-components";

const EnMoyenneS = styled.section`
 margin-top:90px;
`;
const CardS = styled(Card)`
 text-align:center;
 border:0;
 background: linear-gradient(#FFFFFE, #E7E2D9);
 padding:40px 30px;
 margin:1.5rem;
 h3{
font-size:104px;
font-weight:bold;
    span{
        display:block;
        font-weight:normal;
        font-size:30px;
    }  
 }
 p{font-size:20px;margin-top:26px;}
 @media all and (max-width: 768px) {
    padding:20px;
    h3{font-size:74px;}
    span{font-size:20px;}
    p{font-size:18px;margin-top:0px;}
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
                    <div className="d-flex flex-sm-row flex-column justify-space-between align-center">
                    <CardS>
                        <h3>120 <span>heures</span></h3>
                        <p>C'est le temps que vous économisez en passant par Clotere</p>
                    </CardS>
                    <CardS>
                        <h3>1 <span>seul</span></h3>
                        <p>Le nombre d'interlocuteur pour mener un projet avec Clotere</p>
                    </CardS>
                    <CardS>
                        <h3>15 <span>jours</span></h3>
                        <p>Le nombre de jours  gagnés sur votre rendez-vous de signature</p>
                    </CardS>
                    </div>
                </Col>
            </Row>
            
        </Container>
        </EnMoyenneS>
    );
}

export default EnMoyenne;