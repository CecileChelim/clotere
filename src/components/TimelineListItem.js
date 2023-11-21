import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/fontawesome-free-solid'


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

function TimelineCard() {
    return (
        <ListGroupS>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
                <Icon>
                    <FontAwesomeIcon icon={faBell} className='mr-3' />
                </Icon>
                <Content>
                    <h4>Création de votre dossier</h4>
                    <p>Dossier KOVALKOV/CHELIM</p>

                </Content>
                <Details>
                    <p>Invitation envoyée</p>
                </Details>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
                <Icon>
                    <FontAwesomeIcon icon={faBell} className='mr-3' />
                </Icon>
                <Content>
                    <h4>Création de votre dossier</h4>
                    <p>Dossier KOVALKOV/CHELIM</p>

                </Content>
                <Details>
                    <p>Invitation envoyée</p>
                </Details>
            </ListGroupItem>
        </ListGroupS>
    );
}

export default TimelineCard;