import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Modal,Offcanvas,OffcanvasHeader,OffcanvasBody } from "reactstrap";
import styled from "styled-components";
import { LinkCard } from "../style/Button";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Styles de base du PDF viewer
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Styles de la mise en page par défaut
//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFile, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";

function CardDocument(args) {
  const [pdfName, setPdfName] = useState(null);
  const toggleModal = () => setPdfName(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [canvas, setCanvas] = useState(false);
    const toggleExplicationDocument = () => setCanvas(!canvas);

  return (
    <div>
      <Modal isOpen={pdfName != null} toggle={toggleModal} size="lg" centered>

        {pdfName != null ? pdfName.type === "application/pdf" ? <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfName.url}
            plugins={[
              // Register plugins
              defaultLayoutPluginInstance,
            ]}
          />
        </Worker> : <img alt="document" src={pdfName.url}></img> : <></>}
      </Modal>
      {args.documents.map((item, index) => (

        item.etat === "ajouté" ? <CardS key={index} className="d-flex flex-row doc-ajoute">
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
          <CardBody className=" d-flex justify-content-between align-items-start">
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
              <LinkCard onClick={() => { setPdfName({ "url": item.document, "type": item.typeDocument }); }} className="mr-3"> Voir</LinkCard>
              <LinkCard onClick={() => { args.onDeleteDoc(item); }} className="mr-3"> Supprimer</LinkCard>
            </Details>
          </CardBody>
        </CardS> : <CardS key={index} className="d-flex flex-row doc-non-ajoute">
          <Icon>
            <FontAwesomeIcon icon={faFile} />
          </Icon>
          <CardBody className=" d-flex justify-content-between  align-items-start">
            <div style={{ width: "90%" }}>
              <CardTitle tag="h5">
                {item.nom}
              </CardTitle>
              <div className="d-flex flex-row">
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >

                  Non déposé
                </CardSubtitle>
                <CardSubtitle
                  className="mb-2 ml-5"
                  tag="h6"
                >

                <a onClick={toggleExplicationDocument(item.nom)} className="infoDoc"> <FontAwesomeIcon icon={faInfoCircle} /> Qu'est-ce que c'est ?</a>
                </CardSubtitle>
              </div>
            </div>
            <Details>
              <LinkCard onClick={() => {
                args.onAddDoc(item);
              }} className="ml-3"> <FontAwesomeIcon icon={faPlusCircle} />Ajouter</LinkCard>
            </Details>
          </CardBody>
        </CardS>


      ))}
      <Offcanvas
        isOpen={canvas}
        toggle={toggleExplicationDocument}
        {...args}
        direction="end"
        scrollable>
        <OffcanvasHeader toggle={toggleExplicationDocument}>
          Qu'est-ce que le <b>{args.item.nom}</b> ?
        </OffcanvasHeader>
        <OffcanvasBody>
          
        </OffcanvasBody>

      </Offcanvas>
    </div>
  );
}

const CardS = styled(Card)`
border:0;
margin-bottom:1rem;
align-items:center;
.card-body{
    display;flex!important;
    flex-direction:row!important;
    align-items:center;
    padding-left:0;
}
.card-title{font-size:18px;}
&.doc-ajoute{
  background-color: rgba(0, 104, 85, 0.1);
}
&.doc-non-ajoute{
  .fa-file {color:#e0eeee;}
}
&.doc-anomalie{
  background-color: rgba(247, 138, 2, 0.5);
}
.infoDoc{
margin-left:.5rem;
}
@media all and (max-width: 768px) {
  flex-direction:column!important;
}
`;
const Icon = styled.div`
margin: 1rem;
align-items:center;
.svg-inline--fa{
    color:#006855;
    height: 1.5rem;
  }
  @media all and (max-width: 768px) {
    margin: 1rem;
    .svg-inline--fa{
      height: 1em;
    }
  }
`;
const Details = styled.div`
align-items:center;
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