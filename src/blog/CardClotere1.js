import React from "react";
import { Card, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary } from "../style/Button";
import ArrowRight from "../img/arrow-right.png";


export const CardS = styled(Card)`
background: rgb(2, 96, 105);
border-radius: 20px;
border: 0;
margin-bottom: 2rem;
margin-top: 4rem;
 color:#fff;
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;
 padding: 2rem;
 .card-title{
    font-size:24px;
 }
 @media all and (max-width: 768px) {
    flex-direction:column!important;
    .card-title{
        font-size:18px;
     }
  }
`;


function CardClotere1() {
    return (
        <CardS>
                <CardTitle>
                    Trouvez votre notaire, <span className="textHighlight">qualifié</span> <br/>et <span className="textHighlight">disponible</span>
                </CardTitle>
                <Link to="/onboard">
                            <ButtonPrimary color="primary">Débuter ma transaction <img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
           
            
        </CardS>
    );
}

export default CardClotere1;