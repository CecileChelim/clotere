import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { LinkCard, ButtonPrimarySmall } from "../style/Button";
import styled from "styled-components";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCheck, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'


const ListGroupS = styled(ListGroup)`
  width:100%;
  li.list-group-item{
    width:100%;
    padding:23px 23px;
    border-radius:8px;
    border:0;
    margin-bottom:16px;
  }
  h4.type{
    display: inline-block;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  &.fait{
    li.list-group-item{background-color:#D0DFDB;}
  }
  &.infoManquantes{
    li.list-group-item{background-color:#d4040433;}
  }
  &.pas{
    li.list-group-item{background-color:#e0e0e052;}
  }
`;
const BlocIcon = styled.div`
  width:50px;
  height:auto;
  color:#006855;
  overflow:hidden;
  text-align:center;
  border-radius:8px;
  padding:.5rem;
  display:inline;
  margin-right:.2rem;
  svg{height: 0.7em;}

  &.done{color:#006855;}
  &.ongoing{background-color:#f7c80233;color:#F7C802;}
  &.infomanquante{background-color:#d4040433;color:#D40404;}
  &.pasfait{background-color:transparent;color:#000;}
}
`;
const Content = styled.div`
  h4{
    font-size:16px;
  font-weight:600;
  margin-bottom:.5rem;
  }
  p{
font-size:16px;
  font-weight:400;
  margin-bottom:0;
  }
`;
const Actions = styled.div`
  p{
    color:#636060;
    font-size:14px;
  font-weight:400;
  }
`;



function TimelineCard(args) {
  return (
      <ListGroupS className={args.etat+ ' ' + args.etatcss}>
        <h4 className="mb-4 type">
          {args.etat === "fait" ? (<><BlocIcon className="done"><FontAwesomeIcon icon={faCheck} /></BlocIcon></>
          ) : (<>{" "}</>)}
          {args.etat === "en cours" ? (<><BlocIcon className="ongoing"><FontAwesomeIcon icon={faBolt} /></BlocIcon></>
          ) : (<>{" "}</>)}
          {args.etat === "information(s) manquante(s)" ? (<><BlocIcon className="infomanquante"><FontAwesomeIcon icon={faExclamationTriangle} /></BlocIcon></>
          ) : (<>{" "}</>)}
          {args.etat === "pas fait" ? (<></>
          ) : (<>{" "}</>)}

          {args.type}
        </h4>
        <ListGroupItem className="d-flex justify-content-between align-items-top">

          <Content>
            <h4>{args.message}</h4>
            <p>{args.contenu}</p>
            {args.action === "Voir et signer" ? (
              <>
                <ButtonPrimarySmall href="#" className="mt-3 mr-3"> Voir et signer</ButtonPrimarySmall>
              </>
            ) : (<>{" "}</>)}

            {args.action === "Contacter" ? (
              <>
                <ButtonPrimarySmall href="#" className="mt-3 mr-3"> Contacter mon conseillé</ButtonPrimarySmall>
              </>
            ) : (<>{" "}</>)}

          </Content>
          <Actions>
            {args.action === "telecharger" ? (
              <>
                <LinkCard href="#" className="mr-3"> Télécharger</LinkCard>
              </>
            ) : (<>{" "}</>)}
            {args.action === "ajouterDoc" ? (
              <>
                <LinkCard href="#" className="mr-3"> Ajouter le document</LinkCard>
              </>
            ) : (<>{" "}</>)}
            
          </Actions>
        </ListGroupItem>
      </ListGroupS>
  );
}

export default TimelineCard;