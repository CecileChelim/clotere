import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Explication} from "../../style/ExplicationsDocuments";


const Component = styled(ListGroup)`
 
`;


function Pre() {
    return (
        <Explication>
            <h3>Qu'est-ce que le pré état daté ?</h3>
            <p>
            Un "pré-état daté" est un document préparatoire dans le cadre de la vente d'un bien en copropriété en France. 
            <br/>Il s'agit d'une version provisoire de l'état daté, qui est un <b>document officiel nécessaire pour finaliser la vente</b>. 
            <br/>L'état daté contient :
            <ul>
                <li><b>Des informations financières</b> essentielles sur le lot de copropriété à vendre, telles que les charges de copropriété, les dettes éventuelles du copropriétaire vendeur</li>
                <li>Des informations sur le syndicat des copropriétaires</li>
            </ul>
            <br/>
            Ce document est non exhaustif et sujet à modifications. Pour une transaction officielle, un état daté complet et certifié par le syndic est nécessaire. Le pré-état daté permet de donner un aperçu des informations financières et administratives liées au lot de copropriété, facilitant ainsi les discussions préalables à la vente.
            </p>
            
        </Explication>
    );
}

export default Pre;