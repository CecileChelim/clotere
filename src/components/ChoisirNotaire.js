import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckDouble, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {Alert} from "reactstrap";

export const AideContent = styled.div`
p{
    font-size: 16px;
    font-weight: 400;
    line-height: 2rem;
    color:#094c40;
    
}
small{line-height: 1.5rem;}
svg.iconflex{
    margin-right:2rem;
    margin-left:2rem;
    color:${props => props.theme.colors.main};
}
.alert{
    background-color: #1af46c2b !important;
    border: 0;
}
li::marker {
    color: ${props => props.theme.colors.main};
}
`;

function ChoisirNotaire(arg) {
    return (
        <>
        <AideContent>
            <p>
                <div className="d-flex">
                <FontAwesomeIcon icon={faCheckDouble} className="fa-3x iconflex" />
                Vous êtes sur le point de confier cette affaire à un notaire </div>
                <br/>
                
                Les points importants à retenir : <br/>
                <ul>
                    <li>Vous serez toujours en relation direct avec votre conseillé Clotere, qui vous assistera et répondra à toutes vos questions.</li>
                    <li>Vous recevrez des mails pour suivre l'activité de votre dossier et fixer les futurs dates de rendez-vous</li>
                    <li>Vous accéderez aux coordonnées complètes de votre notaire, si vous souhaitez le contacter directement.</li>
                </ul>
                <br/>
                
                <Alert>
                <FontAwesomeIcon icon={faInfoCircle} /><b> Et si ce notaire ne me convient plus ? </b><br/>
                Vous pouvez changer de notaire si il ne vous convient pas.
                <br/>
                Sachez cependant que les notaires Clotere, s'engagent à être disponible, réactif et pédagogue pour vous accompagner de la meilleure maniere.
                <br/>
                L'avancement d'un dossier de transaction immobilière est très réglementée et contraint par la collecte de document notamment.
                <br/>
                <small>Si vous n'êtes pas satisfait de l'avancement de votre dossier, contactez-nous pour nous en faire part et nous trouverons une solution.</small>
                 </Alert>
               
                </p>
        </AideContent>
        </>
    );
}

export default ChoisirNotaire;