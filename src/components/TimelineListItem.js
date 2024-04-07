import React, { useState } from "react";
import { Offcanvas, ListGroupItem } from "reactstrap";
import { ButtonPrimarySmall } from "../style/Button";
import styled from "styled-components";
import AideOffre from "./AideOffre";
import AideCompromis from "./AideCompromis";
import AideActe from "./AideActe";

function TimelineCard(args) {
  const [canvas, setCanvas] = useState(false);
  const toggleOffre = () => setCanvas(!canvas);
  const toggleCompromis = () => setCanvas(!canvas);
  const toggleActe = () => setCanvas(!canvas);
  console.log(args)

  return (
    <>
      <ListGroupItemS className={args.statut}>
        {/** Composant de questionnaire **/}
        {args.type === "questionnaire" ? (
          <>
            <ListGroupS>
              <h4 className="mb-2 type">
                Remplissez votre questionnaire client
                <br />
              </h4>
              <Content className="flex-grow-1 content">

                {args.statut === "à faire" ? (
                  <>
                    <p>
                      Le questionnaire permet de récolter toutes les informations importantes nécessaires à la rédaction de vos documents notariés.
                    </p>
                    <ButtonPrimarySmall color="primary" href="#" target="blank" className="mt-3 mr-3"> Remplir le questionnaire</ButtonPrimarySmall>
                  </>
                ) : (<>{""}</>)}
                {args.statut === "fait" ? (
                  <>
                    <p>
                      Le questionnaire permet de récolter toutes les informations importantes nécessaires à la rédaction de vos documents notariés.
                    </p>
                  </>
                ) : (<>{""}</>)}
              </Content>

            </ListGroupS>
          </>
        ) : (<>{""}</>)}

        {/** Composant de document **/}
        {args.type === "document" ? (
          <>
            <ListGroupS className={args.etat + ' ' + args.etatcss}>
              <h4 className="mb-2 type">
                Ajoutez vos documents
                <br />
              </h4>
              <Content className="flex-grow-1  content">

                {args.statut === "à faire" ? (
                  <>
                    <p>
                      Pour débuter les démarches, votre notaire a besoin de documents, ajoutez-les le plus tôt possible.
                    </p>
                    <ButtonPrimarySmall color="primary" href="#" target="blank" className="mt-3 mr-3"> Ajoutez vos documents</ButtonPrimarySmall>
                  </>
                ) : (<>{""}</>)}
                {args.statut === "fait" ? (
                  <>
                    <p>
                      Merveilleux tout vos documents ont été ajoutés sur la plateforme. Merci :)
                    </p>
                  </>
                ) : (<>{""}</>)}
              </Content>

            </ListGroupS>
          </>
        ) : (<>{""}</>)}

        {/** Composant de rib **/}
        {args.type === "rib" ? (
          <>
            <ListGroupS className={args.etat + ' ' + args.etatcss}>
              <h4 className="mb-2 type">
                Ajoutez votre RIB
                <br />
              </h4>
              <Content className="flex-grow-1 content">

                {args.statut === "à faire" ? (
                  <>
                    <p>
                      Afin de sécuriser les futures transactions, il faut ajouter vos informations bancaires avec une double authentification. Ne vous inquiétez pas, cela prend moins de 2 minutes !
                    </p>
                    <ButtonPrimarySmall color="primary" href="#" target="blank" className="mt-3 mr-3"> Ajoutez votre RIB</ButtonPrimarySmall>
                  </>
                ) : (<>{""}</>)}
                {args.statut === "fait" ? (
                  <>
                    <p>
                      Vos données bancaires ont bien été transmises de manière sécurisée.
                    </p>
                  </>
                ) : (<>{""}</>)}
              </Content>

            </ListGroupS>
          </>
        ) : (<>{""}</>)}

        {/** Composant de rdv **/}
        {args.type === "rdv" ? (
          <>
            <ListGroupS className={args.etat + ' ' + args.etatcss}>
              <h4 className="mb-2 type">
                Organisez vos rendez-vous de vente
                <br />
              </h4>
              <Content className="flex-grow-1 content">

                {args.statut === "à faire" ? (
                  <>
                    <p>
                      Votre notaire indiquera ses disponibilités et vous pourrez indiquer les votres par la suite. vous serez avertie lorsqu'il faudra donner vos disponibilités.
                    </p>

                  </>
                ) : (<>{""}</>)}
                {args.statut === "en cours" ? (
                  <>
                    <p>
                      Deux rendez-vous majeurs vous attendent pendant votre votre. Le 1er pour la signature de la promesse de vente et le second, celui de la signature de l'acte de vente authentique.
                      <br />Votre notaire renseigne ses disponibilités et vous pourrez indiquer les votres par la suite.
                    </p>
                    <ButtonPrimarySmall color="primary" href="#" target="blank" className="mt-3 mr-3"> Indiquez vos disponibilités</ButtonPrimarySmall>
                  </>
                ) : (<>{""}</>)}
              </Content>

            </ListGroupS>
          </>
        ) : (<>{""}</>)}

      </ListGroupItemS>

      {/** 
    <ListGroupS className={args.etat + ' ' + args.etatcss}>
      <h4 className="mb-2 type">
        {args.type === "questionnaire" ? (
            <>
              Remplissez votre questionnaire client
            </>
          ) : (<>{""}</>)}
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
          **/}
      <Offcanvas isOpen={canvas} toggle={toggleOffre} {...args} direction="end" scrollable><AideOffre /> </Offcanvas>
      <Offcanvas isOpen={canvas} toggle={toggleCompromis} {...args} direction="end" scrollable><AideCompromis /> </Offcanvas>
      <Offcanvas isOpen={canvas} toggle={toggleActe} {...args} direction="end" scrollable><AideActe /> </Offcanvas>
    </>
  );
}


const ListGroupItemS = styled(ListGroupItem)`
  width:100%;
  padding:23px 23px;
  border-radius:8px;
  border:0;
  margin-bottom:16px;
  &.fait{
    opacity:.5;
    &:before{
        content: "✔️"!important;
        background-color:${props => props.theme.colors.main};
        color:white;
        border:0;
    }
}



`;

const ListGroupS = styled.div`
  width:100%;
  
  h4.type{
    display: inline-block;
    text-transform: lowercase;
    font-size:24px;
    font-weight:400;
    &:first-letter {
      text-transform: uppercase;
    }
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


export default TimelineCard;