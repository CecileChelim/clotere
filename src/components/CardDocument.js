import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Modal, } from "reactstrap";
import styled from "styled-components";
import { LinkCard } from "../style/Button";
import { Viewer, Worker } from '@react-pdf-viewer/core';

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFile } from "@fortawesome/free-solid-svg-icons";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Styles de base du PDF viewer
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Styles de la mise en page par défaut

function CardDocument(args) {
  const [canvas, setCanvas] = useState(false);
  const toggle = () => setCanvas(!canvas);
  const [pdfName, setPdfName] = useState(null);
  const toggleModal = () => setPdfName(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    console.log("Filtered data", args.documents)
  }, [])
  return (
    <div>
      <Modal isOpen={pdfName != null} toggle={toggleModal} size="lg" centered>
            
            {  pdfName != null ? pdfName.type === "application/pdf" ? <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
               <Viewer  fileUrl={pdfName.url}
               plugins={[
                   // Register plugins
                   defaultLayoutPluginInstance,
               ]}
               />
           </Worker> :  <img alt="document" src={pdfName.url}></img> : <></>}
         </Modal>
      {args.documents.map((item, index) => (
        
          item.etat === "ajouté" ?  <CardS className="d-flex flex-row align-items-center doc-ajoute">
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
          <CardBody className=" d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h5">
                {item.nom}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Déposée le {item.date_upload}
              </CardSubtitle>
            </div>
            <Details>
              <LinkCard onClick={() => {setPdfName({"url": item.document, "type": item.typeDocument});}} className="mr-3"> Voir</LinkCard>
              <LinkCard onClick={() => {args.onDeleteDoc(item);}} className="mr-3"> Supprimer</LinkCard>
            </Details>
          </CardBody>
        </CardS> : <CardS className="d-flex flex-row align-items-center doc-non-ajoute">
        <Icon>
          <FontAwesomeIcon icon={faFile} />
        </Icon>
        <CardBody className=" d-flex justify-content-between align-items-center">
          <div>
            <CardTitle tag="h5">
              {item.nom}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Non déposé
            </CardSubtitle>
          </div>
          <Details>
            <LinkCard onClick={() => {
              args.onAddDoc(item);
            }} className="mr-3"> Ajouter le document</LinkCard>
          </Details>
        </CardBody>
      </CardS>
        
       
      ))}
      {/* card document ajouté */} 
      

      {/* card document non ajouté */} 
      {/* <CardS className="d-flex flex-row align-items-center doc-non-ajoute">
        <Icon>
          <FontAwesomeIcon icon={faFile} />
        </Icon>
        <CardBody className=" d-flex justify-content-between align-items-center">
          <div>
            <CardTitle tag="h5">
              Nom document
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Non déposé
            </CardSubtitle>
          </div>
          <Details>
            <LinkCard onClick={toggle} className="mr-3"> Ajouter le document</LinkCard>
          </Details>
        </CardBody>
      </CardS> */}

      {/* card document anomalie */} 
      {/* <CardS className="d-flex flex-row align-items-center doc-anomalie">
        <Icon>
          <FontAwesomeIcon icon={faExclamation} />
        </Icon>
        <CardBody className=" d-flex justify-content-between align-items-center">
          <div>
            <CardTitle tag="h5">
              Nom document
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Le document déposé n'est pas conforme
            </CardSubtitle>
          </div>
          <Details>
            <LinkCard onClick={toggle} className="mr-3"> Ajouter le document</LinkCard>
          </Details>
        </CardBody>
      </CardS> */}
    </div>
  );
}

const CardS = styled(Card)`
border:0;
margin-bottom:1rem;
.card-body{
    display;flex!important;
    flex-direction:row!important;
}
&.doc-ajoute{
  background-color: rgba(0, 104, 85, 0.1);
}
&.doc-non-ajoute{
  .svg-inline--fa{color:#ddd;}
}
&.doc-anomalie{
  background-color: rgba(247, 138, 2, 0.5);
}
`;
const Icon = styled.div`
margin: 1rem 2rem;
.svg-inline--fa{
    color:#006855;
    height: 2em;
  }
`;
const Details = styled.div`
  p{
    color:#636060;
    font-size:14px;
  font-weight:400;
  }
  @media all and (max-width: 768px) {
    text-align:right;
  }
`;

export default CardDocument;