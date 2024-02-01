import React, { useState } from "react";
import { Badge,ListGroup, ListGroupItem, Row, Col, Offcanvas, OffcanvasHeader, OffcanvasBody, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import styled from "styled-components";
import { LinkCard } from "../style/Button";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import imgBien from '../img/img-bien.svg';


function CardBien(args) {
  const [canvas, setCanvas] = useState(false);
  const toggle2 = () => setCanvas(!canvas);
  return (
    <>
      <ListGroupS>
        <ListGroupItem>
          <Row>
            <Col md="3">
              <img src={imgBien} alt="votre bien"/>
            </Col>
            <Col md="9">
                <p className="mb-0"><FontAwesomeIcon icon={faMapMarked} className='mr-3' /></p>
                <p> {args.bien.adresse} {" "} <br/>{args.bien.code_postal}{" "} {args.bien.ville}</p>
                <Details>
                <LinkCard onClick={toggle2} className="mr-3"> voir</LinkCard>
              </Details>
              <ListGroup horizontal>
                <ListGroupItemCarac>
                  <p><small>Superficie</small> {args.bien.superficie} m2</p>
                </ListGroupItemCarac>
                <ListGroupItemCarac>
                  <p><small>Prix de vente</small>  {args.bien.prix} €</p>
                </ListGroupItemCarac>
                <ListGroupItemCarac>
                  <p><small>Nombre de lot</small> {!args.bien.nb_lot ? (<>non renseigné</>) : (<>{args.bien.nb_lot}</>)}</p>
                </ListGroupItemCarac>
              </ListGroup>
              
            </Col>
          </Row>

        </ListGroupItem>
      </ListGroupS>
      <Offcanvas
        isOpen={canvas}
        toggle={toggle2}
        {...args}
        direction="end"
        scrollable>

        <OffcanvasHeader toggle={toggle2}>
          Informations sur votre bien
        </OffcanvasHeader>
        <OffcanvasBody>
          <ListGroupDetailsBien>
          <ListGroupItem>
              <ListGroupItemText>Prix</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.prix ? args.bien.prix  : '--'} € </ListGroupItemHeading> 
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemText> Adresse</ListGroupItemText>
              <ListGroupItemHeading>
                {args.bien.adresse}{" "}
                {args.bien.code_postal}{" "}
                {args.bien.ville}

              </ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText> Type </ListGroupItemText>
              <ListGroupItemHeading>
                <Badge color="primary">
                {args.bien.type}
                </Badge>
              </ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText>Désignation</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.designation ? args.bien.designation : '--'} </ListGroupItemHeading>
            </ListGroupItem>

            <hr/>

            <ListGroupItem>
              <ListGroupItemText>Superficie</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.superficie ? args.bien.superficie : '--'} m2</ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText>Etage</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.etage ? args.bien.etage : '--'}</ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText>Dépendance</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.dependance ? args.bien.dependance : '--'}</ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText>Nombre de lot</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.nb_lot ? args.bien.nb_lot : '--'}</ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText>Orientation</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.orientation ? args.bien.orientation : '--'}</ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemText>Reference Cadastrale</ListGroupItemText>
              <ListGroupItemHeading>{args.bien.reference_cadastrale ? args.bien.reference_cadastrale : '--'}</ListGroupItemHeading>
            </ListGroupItem>
          </ListGroupDetailsBien>
        </OffcanvasBody>
      </Offcanvas>
    </>

  );
}

const ListGroupS = styled(ListGroup)`
  width:100%;
  position:relative;
  background: ${props => props.theme.colors.linearBackground};
  li.list-group-item{
    background:transparent;
    width:100%;
    padding:23px 23px;
    border-radius:8px;
    border:0;
    margin-bottom:16px;
}
img{
  height: 100%;
    width: auto;
    max-width: 100%;
}
@media all and (max-width: 768px) {
  .colTitre{display:block!important;}
  list-group-horizontal{flex-direction:column;}
}
`;


const Details = styled.div`
position:absolute;
top:2rem;
right:2rem;
  p{
    color:#636060;
    font-size:14px;
  font-weight:400;
  }
  @media all and (max-width: 768px) {
    text-align:right;
  }
`;
const ListGroupItemCarac = styled(ListGroupItem)`
padding: .5rem 0!important;
    width: auto!important;
    margin-right: 2rem;
    margin-bottom: 0!important;
  p{
    font-size:18px;
    font-weight:600;
    color:black;
    margin-bottom:0;
    font-size:20px;
    small{
      font-size:12px;
      font-weight:400;
        color:#1D2B28;
        opacity:.5;
        display:block;
    }
  }
`;
const ListGroupDetailsBien = styled(ListGroup)`
background : ${props => props.theme.colors.linearBackground}!important;
li.list-group-item{
  background:transparent;
  border:0;
}
`;


export default CardBien;