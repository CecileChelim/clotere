import React from "react";
import { Card, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary } from "../style/Button";
import ArrowRight from "../img/arrow-right.png";


export const CardS = styled(Card)`
max-width:60%;
background: rgb(234 244 243) !important;
border-radius: 20px;
border: 0;
margin-bottom: 2rem;
margin-top: 2rem;
 color:#fff;
 display:flex;
 flex-direction:row!important;
 align-items:center;
 justify-content:space-between;
 padding: 2rem;
 .card-title{
    font-size:18px;
    text-align:left;
 }
 @media all and (max-width: 768px) {
    max-width:90%;
  }
`;


function UseClotereCard() {
    return (
        <CardS>
                <CardTitle>
                    Ce notaire vous propose le suivi de dossier en ligne
                </CardTitle>
                <Link to="/fr/notaires">
                            <ButtonPrimary color="primary">Contactez ce notaire<img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
           
            
        </CardS>
    );
}

export default UseClotereCard;