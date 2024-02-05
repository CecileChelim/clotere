import React from "react";
import { ListGroupItem,Badge,ListGroup } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const ListS = styled.div`
border:0;
overflow:hidden;
border-bottom:1px solid #ddd;
margin-bottom:1rem;
h4{font-size:24px;font-weight:600;display:block;}
p{ margin-bottom:0;}
  &.acheteur{.badge{background-color:#faba00a8!important}}
  &.vendeur{.badge{background-color:#00fab7a1!important}}
  &.agent{.badge{background-color:#d100fa94!important}}

  @media all and (max-width: 768px) {
    margin-bottom:2rem;
  }
`;

const ListGroupItemCarac = styled(ListGroupItem)`
background-color:transparent;
margin:20px 0;
border:0;
display:flex;
align-items:baseline;
padding-left: 0;
svg{margin-right:.5rem;}
  p{
    font-size:18px;
    font-weight:400;
    color:black;
    margin-bottom:0;
    small{
        color:#636060;
        display:block;
    }
  }
`;

function CardInterlocuteurs(args) {
    return (
        <ListS>
            <h4 className="mr-2">{args.prenom} {" "} {args.nom} {" "}</h4>
                <Badge color={args.color}>{args.roles}</Badge>

        <ListGroup className="d-flex flex-row">
            <ListGroupItemCarac>
            <FontAwesomeIcon icon={faPhone} className='mr-3' />
                <p><small>Telephone</small>
                    {!args.tel ? (<>non renseigné</>) : (<>{args.tel}</>)}
                </p>
            </ListGroupItemCarac>
            <ListGroupItemCarac>
            <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                <p><small>Email</small> {args.email}</p>
            </ListGroupItemCarac>
            </ListGroup>
        </ListS>

    );
}

export default CardInterlocuteurs;