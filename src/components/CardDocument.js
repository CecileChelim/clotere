import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import styled from "styled-components";
import { LinkCard } from "../style/Button";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamation, faFile } from "@fortawesome/free-solid-svg-icons";

function CardDocument(args) {
  const [canvas, setCanvas] = useState(false);
  const toggle = () => setCanvas(!canvas);
  return (
    <div>
      {/* card document ajouté */} 
      <CardS className="d-flex flex-row align-items-center doc-ajoute">
        <Icon>
          <FontAwesomeIcon icon={faCheck} />
        </Icon>
        <CardBody className=" d-flex justify-content-between align-items-center">
          <div>
            <CardTitle tag="h5">
              Offre d’achat
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Déposée le 12/01/2023
            </CardSubtitle>
          </div>
          <Details>
            <LinkCard  className="mr-3"> Voir</LinkCard>
          </Details>
        </CardBody>
      </CardS>

      {/* card document non ajouté */} 
      <CardS className="d-flex flex-row align-items-center doc-non-ajoute">
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
      </CardS>

      {/* card document anomalie */} 
      <CardS className="d-flex flex-row align-items-center doc-anomalie">
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
      </CardS>
      <Offcanvas
        isOpen={canvas}
        toggle={toggle}
        {...args}
        direction="end"
        scrollable>

        <OffcanvasHeader toggle={function noRefCheck() { }}>
          Votre document
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>
            This is the Offcanvas body.
          </strong>
        </OffcanvasBody>
      </Offcanvas>
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