import React from "react";
import { ListGroup, ListGroupItem,Row,Col } from "reactstrap";
import styled from "styled-components";
import { LinkCard } from "../style/Button";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";

const ListGroupS = styled(ListGroup)`
  width:100%;
  li.list-group-item{
    width:100%;
    padding:23px 23px;
    border-radius:8px;
    border:0;
    margin-bottom:16px;
}
`;
const Icon = styled.div`
margin-right:-10rem;
.svg-inline--fa{
    color:#006855;
    height: 2em;
  }
`;
const Content = styled.div`
  h4{
    font-size:16px;
  font-weight:600;
  margin-bottom:0;
  }
  p{
font-size:16px;
  font-weight:400;
  margin-bottom:0;
  }
`;
const Details = styled.div`
  p{
    color:#636060;
    font-size:14px;
  font-weight:400;
  }
`;
const ListGroupItemCarac = styled(ListGroupItem)`
padding: 1rem 0!important;
    width: auto!important;
    margin-right: 2rem;
    margin-bottom: 0!important;
  p{
    font-size:16px;
    font-weight:400;
    color:black;
    margin-bottom:0;
    small{
        color:#636060;
        display:block;
    }
  }
`;


function CardBien(args) {
    return (
        <ListGroupS>
            <ListGroupItem>
                <Row>
                <Col md="12" className="d-flex justify-content-between align-items-center p0">
                <Icon>
                    <FontAwesomeIcon icon={faMapMarked} className='mr-3' />
                </Icon>
                <Content>
                    <h4> {args.bien.adresse} {" "} {args.bien.code_postal}{" "} {args.bien.ville}</h4>

                </Content>
                <Details>
                    <LinkCard href="#" className="mr-3"> voir</LinkCard>
                    <LinkCard href="#"> modifier</LinkCard>
                </Details>
                </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <ListGroup horizontal>
                            <ListGroupItemCarac>
                                <p><small>Superficie</small> {args.bien.superficie} m2</p>
                            </ListGroupItemCarac>
                            <ListGroupItemCarac>
                                <p><small>Prix de vente</small>  {args.bien.prix} €</p>
                            </ListGroupItemCarac>
                            <ListGroupItemCarac>
                                <p><small>Nombre de lot</small> {!args.bien.nb_lot ? (<>non renseigné</>) : (<>{args.bien.nb_lot}</> )}</p>
                            </ListGroupItemCarac>
                        </ListGroup>
                    </Col>
                </Row>
                
            </ListGroupItem>
        </ListGroupS>
    );
}

export default CardBien;