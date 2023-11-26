import React, { useState }  from "react";
import { ListGroup, ListGroupItem,Offcanvas } from "reactstrap";
import { LinkCard, ButtonPrimarySmall } from "../style/Button";
import styled from "styled-components";
import AideCompromis from "./AideCompromis";
import AideActe from "./AideActe";

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
  color:#006855;
  display:inline;
  margin-right:.2rem;
  svg{height: 0.7em;}

  &.done{color:#006855;}
  &.ongoing{color:#F7C802;}
  &.infomanquante{color:#D40404;}
  &.pasfait{color:#000;}
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
width: 40%;
text-align: end;
  p{
    color:#636060;
    font-size:14px;
  font-weight:400;
  }
`;



function TimelineCard(args) {
    const [canvas, setCanvas] = useState(false);
    const toggleCompromis = () => setCanvas(!canvas);
    const toggleActe = () => setCanvas(!canvas);

  return (
    <>
    <ListGroupS className={args.etat + ' ' + args.etatcss}>
      <h4 className="mb-2 type">
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

        <Content className="flex-grow-1">
          <h4>{args.message}</h4>
          <p><div dangerouslySetInnerHTML={{__html: args.contenu}}></div></p>
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

{args.action === "rdvActe" ? (
            <>
              <ButtonPrimarySmall href={args.lienDoodle} target="blank" className="mt-3 mr-3"> Indiquez vos disponibilités</ButtonPrimarySmall>
            </>
          ) : (<>{" "}</>)}



        </Content>
        <Actions>
          {args.action === "telecharger" ? (
            <>
              <LinkCard href={args.lienDoc}  target="_blank" className="mr-3"> Télécharger</LinkCard>
            </>
          ) : (<>{" "}</>)}
          {args.action === "ajouterDoc" ? (
            <>
              <LinkCard href="#" className="mr-3"> Ajouter le document</LinkCard>
            </>
          ) : (<>{" "}</>)}

          {args.action === "ensavoirplusCompromis" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleCompromis}> Qu’est-ce que le compromis ?</LinkCard>
            </>
          ) : (<>{" "}</>)}

          {args.action === "ensavoirplusActe" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleActe}> Qu’est-ce que l'acte de vente ?</LinkCard>
            </>
          ) : (<>{" "}</>)}



        </Actions>
      </ListGroupItem>
    </ListGroupS>
      <Offcanvas isOpen={canvas} toggle={toggleCompromis} {...args} direction="end" scrollable><AideCompromis /> </Offcanvas>
      <Offcanvas isOpen={canvas} toggle={toggleActe} {...args} direction="end" scrollable><AideActe /> </Offcanvas>
    </>
  );
}

export default TimelineCard;