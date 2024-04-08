import React from "react";
import {Alert} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faFileAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


export const AideContent = styled.div`
p{
    font-size: 16px;
    font-weight: 400;
    line-height: 2rem;
    color:#094c40;
}
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

function AideCompromis() {
    return (
        <AideContent>
            <p>
                <div className="d-flex">
                <FontAwesomeIcon icon={faFileAlt} className="fa-3x iconflex" />
                La promesse est un pré contrat permettant de formaliser les accords entre le(s) vendeur(s) et l'acheteur(s).
                </div>
                <br/><br/>
                La promesse de vente engage : <br/>
                <ul>
                    <li> Le vendeur à :<b> réserver le bien à l’attention exclusive d'un futur acquéreur</b> à un prix spécifié dans le contrat et pour une durée limitée.</li>
                    <li> L’acquéreur à <b>verser une indemnité d’immobilisation du bien, qui correspond normalement à 10 % du montant total de la vente</b>.</li>
                </ul>
                <br/>
                <b>Quels sont les possibilités et délais de rétractation ?</b>
                <br/>
                <Alert>
                <FontAwesomeIcon icon={faExclamationTriangle} /><b> A savoir </b><br/>
                L'acquéreur dispose d'un délai de 10 jours à compter de la date de signature de la promesse de vente. Passé ce délai, si il veut se rétracter il perd son indeminité d'immobilisation !
                </Alert>
                <ul>
                    <li> <span className="textHighlight"> Pendant 10 jours l'acquéreur peut se désister</span>, dans ce cas, la somme versée au titre de l'indemnité d'immobilisation lui sera remboursée (délai d’un mois).
                    <br/>Si le désistement à lieu après ce délai de rétractation il perd son indemnité d’immobilisation qui reste acquise au vendeur.<br/>
                    Toutefois, si le désistement est dû à la réalisation de l’une des clauses suspensives de la promesse de vente (impossibilité de trouver un prêt immobilier par exemple), l'acquéreur peut se désengager tout en étant remboursé de son indemnité d’immobilisation.
                    </li>
                    <li><b> Le vendeur reste libre d’annuler la transaction tant que l’acheteur n’a pas levé l’option... mais cela peut lui coûter cher !</b> En plus de perdre l’indemnité d’immobilisation, il risque d'être condamné à payer des dommages et intérêts pouvant s'élever à 20 % du prix du bien ! Si le vendeur souhaite se rétracter après la levée d’option d'achat, l’acquéreur peut choisir d'être indemnisé comme précédemment expliqué ou alors procéder à une vente forcée du bien immobilier en saisissant le tribunal de grande instance.</li>
                </ul>
                <br/>
                <b>Quelles informations doit contenir la promesse de vente ? </b>
                <br/>
                La rédaction de cet avant-contrat, ne s’improvise pas. Ce contrat doit contenir certaines mentions légales pour être valable. 
                <br/>
                On doit retrouver :
                <ul>
                <li>Une description du bien : son emplacement, une description détaillée du type de logement, nombre de pièces, nombre de chambres, surface, espaces extérieurs, dépendances, annexes, etc.</li>
                <li>L’identité du vendeur.</li>
                <li>L’identité de l’acquéreur.</li>
                <li>Le prix de vente du bien.</li>
                <li>Les diagnostics immobiliers obligatoires, leur date d’expiration et/ou d’exécution, etc.</li>
                <li>Les honoraires de l’agent immobilier.</li>
                <li>Le délai de rétractation légal de 10 jours qui s’applique uniquement à l’acquéreur.</li>
                <li>Les conditions suspensives. Ces dernières permettent de mieux protéger les parties, car elles permettent d’annuler la vente si l’une ou l’autre de ces conditions se réalise. <br/>
                Il s’agit communément d’un refus de prêt immobilier, une apparition de servitudes, un exercice du droit de préemption, etc.<br/>
                 Si ces conditions ont lieu, le contrat est annulé de plein droit et l’acquéreur récupère alors les frais d’immobilisation ou dépôt de garantie qu’il a dû verser au moment de la signature de l’avant-contrat.</li>
                </ul>

                <Alert>
                <FontAwesomeIcon icon={faQuestionCircle} /><b> Il vous manque une information ? </b><br/>
                N'hésitez pas à contacter votre conseillé, il saura vous apportez une réponse complète.
                </Alert>

               
                
                
            </p>    
        </AideContent>
    );
}

export default AideCompromis;