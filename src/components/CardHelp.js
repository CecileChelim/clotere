import React from "react";
import { Card, CardBody,CardTitle,CardSubtitle} from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary } from "../style/Button";
import imgCardHelp from "../img/img-card-help.png";


const CardS = styled(Card)`
 width:100%;
 padding: 40px 20px;
 border-radius:8px;
 background-color:#D0DFDB;
 border:0;
 overflow:hidden;
 img{
    position:absolute;
    bottom: 0;
    left: 0;
 }
.card-body{margin-left:35%}
 .card-title{font-size:20px;font-weight:600;margin-bottom:1rem;}
 .card-subtitle{font-size:16px;font-weight:400;margin-bottom:1rem;}
`;


function CardHelp() {
    return (
        <CardS className="d-flex flex-row">
            <img
                alt="Besoin d'aide ?"
                src={imgCardHelp}
            />
            <CardBody>
                <CardTitle tag="h5">
                Vous avez une question ?
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Votre conseillé réponds à toutes vos questions
                </CardSubtitle>
                <Link to="/onboard">
                            <ButtonPrimary>Contacter mon conseillé</ButtonPrimary>
                        </Link>
            </CardBody>
        </CardS>
    );
}

export default CardHelp;