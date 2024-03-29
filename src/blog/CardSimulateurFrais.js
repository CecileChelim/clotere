import React from "react";
import { CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { ButtonPrimary } from "../style/Button";
import { CardS } from "./CardClotere1";
import ArrowRight from "../img/arrow-right.png";



function CardSimulateurFrais() {
    return (
        <CardS>
                <CardTitle>
                    Simulez vos <span className="textHighlight">frais de notaire</span> simplement<br/> avec notrs simulateur.
                </CardTitle>
                <Link to="/achat-immobilier/calcul-frais-de-notaire">
                            <ButtonPrimary color="primary">Calculez mes frais de notaire<img src={ArrowRight} alt=""/></ButtonPrimary>
                        </Link>
           
            
        </CardS>
    );
}

export default CardSimulateurFrais;