import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBell, faCheck, faExclamation } from '@fortawesome/fontawesome-free-solid'



const TitleStep = styled.h4`
  
}
`;

const BlocIcon = styled.div`
  width:50px;
  height:auto;
  color:#006855;
  overflow:hidden;
  text-align:center;
  border-radius:8px;
  padding:.5rem 1rem;
  display:inline;
  margin-right:1rem;
  svg{
    height: 0.9em;
  }

  &.fait{background-color:#D0DFDB;color:#006855;}
  &.ongoing{background-color:#f7c80233;color:#F7C802;}
  &.infomanquante{background-color:#d4040433;color:#D40404;}
  &.pasfait{background-color:transparent;color:#000;}
}
`;

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
const Actions = styled.div`
  p{
    color:#636060;
    font-size:14px;
  font-weight:400;
  }
`;

function TimelineCard(args) {
    return (
      
        <ListGroupS className={args.etat}>
          <TitleStep>
          {args.etat === "fait" ? ( <><BlocIcon className="done"><FontAwesomeIcon icon={faCheck} /></BlocIcon></>
          ) : (<>{" "}</> )}
          {args.etat === "en cours" ? ( <><BlocIcon className="ongoing"><FontAwesomeIcon icon={faCheck} /></BlocIcon></>
          ) : (<>{" "}</> )}
          {args.etat === "information(s) manquante(s)" ? ( <><BlocIcon className="infomanquante"><FontAwesomeIcon icon={faExclamation} /></BlocIcon></>
          ) : (<>{" "}</> )}
          {args.etat === "pas fait" ? ( <><BlocIcon className="pasfait"><FontAwesomeIcon icon={faAngleRight} /></BlocIcon></>
          ) : (<>{" "}</> )}
          
            {args.type}
            </TitleStep>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
              
                <Content>
                    <h4>{args.message}</h4>
                    <p>{args.contenu}</p>

                </Content>
                <Actions>
                    <p>Invitation envoyée</p>
                </Actions>
            </ListGroupItem>
        </ListGroupS>
    );
}

export default TimelineCard;