import React, { useState } from "react";
import { Card, CardBody,CardTitle,CardSubtitle, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import styled from "styled-components";
import { LinkCard } from "../style/Button";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from "@fortawesome/free-solid-svg-icons";

function CardDocument(args) {
    const [canvas, setCanvas] = useState(false);
  const toggle = () => setCanvas(!canvas);
    return (
        <div>
            <CardS className="d-flex flex-row">
            <Icon>
                    <FontAwesomeIcon icon={faFile}  />
                </Icon>
            <CardBody>
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
                    <LinkCard onClick={toggle} className="mr-3"> Voir</LinkCard>
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
.card-body{
    display;flex!important;
    flex-direction:row!important;
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