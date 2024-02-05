import React from "react";
import { Card, CardBody,CardTitle,CardSubtitle} from "reactstrap";
import IcnProbleme from "../img/icn-probleme.svg";
import styled from "styled-components";


const CardS = styled(Card)`
 background-color:#A7C3C5;
 border-radius:8px;
 padding: 1rem;
 border:0;
 overflow:hidden;
 margin-bottom:32px;
 .card-title{font-size:22px;font-weight:800!important;margin-bottom:1rem!important;}
 .card-subtitle{font-size:18px;font-weight:400;color:#222222;line-height: 1.3;}
`;


function CardInfoManquante() {
    return (
        <CardS className="d-flex flex-row">
            <CardBody>
                <CardTitle tag="h5">
                    <img src={IcnProbleme} alt="signalez un problème"/><br/>
                <b><span className="textHighlight">Signalez</span></b> un problème
                </CardTitle>
                <CardSubtitle
                    className="mb-2"
                    tag="h6"
                >
                    Un information est manquante ou fausse ? N’hésitez pas à nous avertir dans le chat nous ferons la modification
                </CardSubtitle>
            </CardBody>
        </CardS>
    );
}

export default CardInfoManquante;