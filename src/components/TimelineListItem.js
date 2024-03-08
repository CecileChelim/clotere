import React, { useState }  from "react";
import { Offcanvas } from "reactstrap";
import { LinkCard, ButtonPrimarySmall,ButtonPrimary } from "../style/Button";
import styled from "styled-components";
import AideOffre from "./AideOffre";
import AideCompromis from "./AideCompromis";
import AideActe from "./AideActe";

function TimelineCard(args) {
    const [canvas, setCanvas] = useState(false);
    const toggleOffre = () => setCanvas(!canvas);
    const toggleCompromis = () => setCanvas(!canvas);
    const toggleActe = () => setCanvas(!canvas);

  return (
    <>
    <ListGroupS className={args.etat + ' ' + args.etatcss}>
      <h4 className="mb-2 type">
        {args.type}
        <br/>
      </h4>

        <Content className="flex-grow-1">
          <h4>{args.message}</h4>
          <div dangerouslySetInnerHTML={{__html: args.contenu}}></div>
          

          {args.action === "Voiretsigner" ? (
            <>
              <ButtonPrimarySmall color="primary" href="#" target="blank" className="mt-3 mr-3"> Lire et signer</ButtonPrimarySmall>
            </>
          ) : (<>{""}</>)}
          

          {args.action === "Contacter" ? (
            <>
              <ButtonPrimarySmall color="primary" href="#" className="mt-3 mr-3"> Contacter mon conseillé</ButtonPrimarySmall>
            </>
          ) : (<>{""}</>)}

        {args.action === "rdvActe" ? (
            <>
              <ButtonPrimarySmall color="primary" href={args.lienDoodle} target="blank" className="mt-3 mr-3"> Indiquez vos disponibilités</ButtonPrimarySmall>
            </>
          ) : (<>{" "}</>)}

        {args.action === "telecharger" ? (
            <>
              <ButtonPrimary color="primary" href={args.lienDoc}  target="_blank" className="mt-3 mr-3"> Télécharger</ButtonPrimary>
            </>
          ) : (<>{" "}</>)}



        </Content>
        <Actions>
          
          {args.action === "ajouterDoc" ? (
            <>
              <LinkCard href="#" className="mr-3"> Ajouter le document</LinkCard>
            </>
          ) : (<>{" "}</>)}


        {args.action === "ensavoirplusOffre" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleOffre}> Qu’est-ce que l'offre d'achat ?</LinkCard>
            </>
          ) : (<>{" "}</>)}

          {args.action === "ensavoirplusCompromis" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleCompromis}> Qu’est-ce que le compromis de vente ?</LinkCard>
            </>
          ) : (<>{" "}</>)}

          {args.action === "ensavoirplusActe" ? (
            <>
              <LinkCard href="#" className="mr-3" onClick={toggleActe}> Qu’est-ce que l'acte de vente authentique ?</LinkCard>
            </>
          ) : (<>{" "}</>)}



        </Actions>
    </ListGroupS>
    <Offcanvas isOpen={canvas} toggle={toggleOffre} {...args} direction="end" scrollable><AideOffre /> </Offcanvas>
      <Offcanvas isOpen={canvas} toggle={toggleCompromis} {...args} direction="end" scrollable><AideCompromis /> </Offcanvas>
      <Offcanvas isOpen={canvas} toggle={toggleActe} {...args} direction="end" scrollable><AideActe /> </Offcanvas>
    </>
  );
}

const ListGroupS = styled.div`
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
    font-size:24px;
    font-weight:400;
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

export default TimelineCard;