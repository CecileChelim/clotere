import React from "react";
import { ListGroupItem, Badge, ListGroup } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const ListS = styled.div`
border:0;
overflow:hidden;
border-bottom:1px solid #ddd;
margin-bottom:3rem;
background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    position:relative;
    width:100%;
.list-group{
    gap:16px;
    }
h4{font-size:24px;font-weight:600;display:block;}
p{ margin-bottom:0;}
  &.acheteur{.badge{background-color:#faba00a8!important}}
  &.vendeur{.badge{background-color:#00fab7a1!important}}
  &.agent{.badge{background-color:#d100fa94!important}}
  .badge{
      position: absolute;
    right: 1rem;
    top: 1rem;
    }

  @media all and (max-width: 768px) {
    margin-bottom:2rem;
  }
`;

const ListGroupItemCarac = styled(ListGroupItem)`
background-color:white;
margin:20px 0;
border:0!important;
display:flex!important;
flex-direction:row!important;
gap:8px!important;
padding: 0 !important;
align-items:baseline;
padding-left: 0;
svg{margin-right:.5rem;color:#A6F9C3;}
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
          <p>
            {!args.tel ? (<>non renseigné</>) : (<>{args.tel}</>)}
          </p>
        </ListGroupItemCarac>
        <ListGroupItemCarac>
          <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
          <p>{args.email}</p>
        </ListGroupItemCarac>
      </ListGroup>
    </ListS>

  );
}

export default CardInterlocuteurs;