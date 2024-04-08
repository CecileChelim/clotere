import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt, faInfoCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
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

function AideActe(arg) {
    return (
        <>
        <AideContent>
            <p>
                <div className="d-flex">
                <FontAwesomeIcon icon={faFileAlt} className="fa-3x iconflex" />
                L'acte de vente est le document qui officialise le transfert effectif de propriété, le passage des clés et le paiement du prix total du bien au vendeur.
                </div>
                <br/>
                
                Les points importants à retenir : <br/>
                <ul>
                    <li> La signature de l’acte de vente <b>a lieu dans un délai de 2 à 3 mois suivant la signature du compromis ou de la promesse de vente</b>.</li>
                    <li><b>L’acte authentique se signe chez un notaire</b></li>
                    <li>Les deux parties, ou leurs représentants désignés, <b>sont convoquées à l’étude notariale pour lecture et signature de l’acte de vente</b>.</li>
                </ul>
                <br/>
                
                <Alert>
                <FontAwesomeIcon icon={faInfoCircle} /><b> La remise des clés </b><br/>
                La remise des clés, a généralement lieu le jour de la signature de l’acte authentique chez le notaire.
                <br/>
                <small>Sachez également que vous pouvez, d’un commun accord avec l’acheteur, décider de différer la date de remise des clés pour des raisons logistiques. Dans ce cas, la date de remise des clés exacte doit figurer dans l’acte authentique.</small>
                 </Alert>
                <br/>
                <b>Ai-je la possibilité de décaler la date de la signature de l'acte de vente ?</b>
                <br/>
                Oui c'est possible de décaler la date de la signature de l'acte de vente si les deux parties y sont favorables.<br/>
                Dans ce cas, <b>il faut rédiger et signer un amendement du contrat mentionnant une nouvelle date.</b>
                 En cas de contraintes administratives, le notaire peut également prendre la décision seul de repousser la date de la signature de l'acte de vente.
                <br/><br/>
                <b>Et ensuite ?</b>
                <br/>
                À la signature de l’acte de vente, <b>le notaire remet à l’acquéreur une attestation de propriété</b>.<br/> Mais attention : les formalités ne sont pas terminées. Il faut encore un délai de quelques mois pour que l’acquéreur reçoive une copie de l’acte de vente définitif (l’original est conservé par le notaire).
C’est ce dernier document qui a la valeur de titre de propriété définitif.
<br/>
<Alert>
                <FontAwesomeIcon icon={faQuestionCircle} /><b> Il vous manque une information ? </b><br/>
                N'hésitez pas à contacter votre conseillé, il saura vous apportez une réponse complète.
                </Alert>
                </p>
        </AideContent>
        </>
    );
}

export default AideActe;