import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ListGroupItem,Offcanvas,OffcanvasHeader } from "reactstrap";
import { ButtonPrimarySmall } from "../style/Button";
import { Link } from 'react-router-dom';
import QuestionnaireConnaissance from "./QuestionnaireConnaissanceClient";
import styled from "styled-components";
import { PopupButton } from '@typeform/embed-react'

function TimelineCard(args) {
  const navigate = useNavigate();
  const [canvasQuestionnaire, setCanvasQuestionnaire] = useState(false);
  const toggleQuestionnaire = () => setCanvasQuestionnaire(!canvasQuestionnaire);
  
  function goPageDocument() {
    navigate("/app/documents");
    window.location.reload(false);
  }

  const QuestionnaireConnaissanceSubmit = (event) => {
    //console.log("QuestionnaireAcheteurSubmit",args.action);
    const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/actions/${args.action}`;
      //on update le statut de l'action
      fetch(
        URL,
        {
            method: "PATCH",
            headers: {
                Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                "Accept": "application/json",
                'content-type': "application/json"
            },
            body: JSON.stringify({
                "fields": {
                    "statut": "fait"
                }
            })
        })
        .then((res) => res.json())
        .then((res) => {window.location.reload(true);})
    
  }

 
  //console.log(args)

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
                      Le questionnaire permet de récolter toutes les informations importantes nécessaires à la rédaction de vos documents notariés et la liste des documents à fournir.
                    </p>
                    {args.user.role === "vendeur" ? ( <>
                      <PopupButton 
                        id="rvzO0MOV" 
                        style={{ fontSize: 20 }} 
                        className="mt-2 btn-primary"
                        hidden={{ user_id: args.user.airtable_id }}
                        autoClose={true}
                        onSubmit={QuestionnaireConnaissanceSubmit}
                        >
                      Remplir mon questionnaire
                    </PopupButton>
                            </>
                            ) : (<>{
                              <PopupButton 
                              id="IZAUWQhO" 
                              style={{ fontSize: 20 }} 
                              className="mt-2 btn-primary"
                              hidden={{ user_id: args.user.airtable_id }}
                              autoClose={true}
                              onSubmit={QuestionnaireConnaissanceSubmit}
                              >
                            Remplir mon questionnaire
                          </PopupButton>
                            }</>)}
                  </>
                ) : (<>{""}</>)}
                {args.statut === "fait" ? (
                  <>
                    <p>
                      C'est tout bon, merci de nous avoir communiqué vos infos 🙂
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
                    <Link to="/app/documents" onClick={goPageDocument}><ButtonPrimarySmall  color="primary" className="mt-3 mr-3"> Ajoutez vos documents</ButtonPrimarySmall></Link>
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

      <Offcanvas isOpen={canvasQuestionnaire} toggle={toggleQuestionnaire} {...args} direction="end" scrollable>
                    <OffcanvasHeader toggle={toggleQuestionnaire}>Remplir votre questionnaire de connaissance</OffcanvasHeader>
                    <QuestionnaireConnaissance user={args.user} />
                </Offcanvas>

     
     
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
    opacity:.9;
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