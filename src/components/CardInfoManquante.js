import React from "react";
import { Card, CardBody,CardTitle,CardSubtitle} from "reactstrap";
import styled from "styled-components";


const CardS = styled(Card)`
 background-color:transparent;
 border-radius:8px;
 padding: 1rem;
 border:solid 2px #fff;
 overflow:hidden;
 margin-bottom:32px;
 .card-title{font-size:20px;font-weight:600;margin-bottom:1rem;}
 .card-subtitle{font-size:16px;font-weight:400;margin-bottom:1rem;}
`;


function CardInfoManquante() {
    return (
        <CardS className="d-flex flex-row">
            <CardBody>
                <CardTitle tag="h5">
                Signalez un problème
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Un information est manquante ou fausse ? N’hésitez pas à nous avertir dans le chat nous ferons la modification
                </CardSubtitle>
            </CardBody>
        </CardS>
    );
}

export default CardInfoManquante;