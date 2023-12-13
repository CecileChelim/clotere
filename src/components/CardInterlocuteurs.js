import React from "react";
import { ListGroupItem, Row, Col, CardBody, Card, Badge } from "reactstrap";
import styled from "styled-components";


const CardS = styled(Card)`
border:0;
overflow:hidden;
h4{font-size:18px;font-weight:600; }
p{ margin-bottom:0;}
.badge{position: absolute; top: 1rem;right: 1rem;}
  &.acheteur{.badge{background-color:#faba00a8!important}}
  &.vendeur{.badge{background-color:#00fab7a1!important}}
  &.agent{.badge{background-color:#d100fa94!important}}

  @media all and (max-width: 768px) {
    margin-bottom:2rem;
  }
`;

const ListGroupItemCarac = styled(ListGroupItem)`
  p{
    font-size:16px;
    font-weight:400;
    color:black;
    margin-bottom:.5rem;
    small{
        color:#636060;
        display:block;
    }
  }
`;

function CardInterlocuteurs(args) {
    return (
        <CardS className={args.className}>
            <CardBody>
                <Row>
                    <Col md='12'>
                        <h4>{args.prenom} {" "} {args.nom}</h4>
                        <Badge color="primary">{args.roles}</Badge>
                    </Col>
                    <Col md='12' className="pt-3">

                        <ul>
                            <ListGroupItemCarac>
                                <p><small>Telephone</small>
                                    {!args.tel ? (<>non renseigné</>) : (<>{args.tel}</> )}
                                </p>
                            </ListGroupItemCarac>
                            <ListGroupItemCarac>
                                <p><small>Email</small> {args.email}</p>
                            </ListGroupItemCarac>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </CardS>

    );
}

export default CardInterlocuteurs;