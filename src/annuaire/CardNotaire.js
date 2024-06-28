import React from "react";
import { ListGroup, ListGroupItem,Card } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { faLink, faPhone,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icnNotaire from '../img/icn-notaire.svg';

const CardNotaires = styled(Card)`
    padding: 0;
    border: 0;
    border-radius: 16px;
    padding: 1.5rem;
    position:relative;
    box-shadow:0 1px 20px 0 #1df36c12;
    display: flex;
    flex-direction: row;
    gap: 2rem;
     align-items:center;
      width: 45%;
.head{
    display:flex;
    flex-direction:row;
    gap:1rem;
    align-items:center;
    justify-content: center;
    a{
    color:black!important;text-decoration:none;
     transition: all 1s ease-out;
    h4{font-size:1.3rem;font-weight:500;margin: 0;}
    &:hover{
       h4{ transform: scale(1.01);}
    }
    }
    
    p{font-size:14px;opacity:.7;margin:0;}
}
    img{width:100px;}
    .list-group{
    border:0;
    margin:0;
        flex-direction: column;
    gap: .5rem;
    margin-top:1.5rem;
    text-align:center;
    @media all and (max-width: 768px) {flex-direction: column;margin-top: 1rem;};
    .list-group-item{    gap: 18px;}
    p{margin:0;}
        .list-group-item{
            border: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.8rem;
            justify-content: center;
            svg{color:${props => props.theme.colors.greenDark};}
            
        }
    }
`;

function CardNotaire(args) {
    return (
        <CardNotaires>
                    <img src={icnNotaire} alt="notaire" />
                    <div>
                        <div className="head">
                            <Link to={`/notaire/${args.fiche}`}>
                                <h4>{args.nom}</h4>
                            </Link>
                        </div>
                        <ListGroup horizontal>
                            <ListGroupItem className='p-0'>
                                <FontAwesomeIcon icon={faLocationDot} className='mr-3 rounded' />
                                <p>{args.adresse} {" "} {args.cp}{" "} {args.ville}</p>
                            </ListGroupItem>
                            {args.telephone && 
                                <>
                                <ListGroupItem>
                                <FontAwesomeIcon icon={faPhone} className='mr-3 rounded' />
                                <p className="text-muted">non renseigné</p>
                            </ListGroupItem>
                                </>
                            }
                            {args.site && 
                                <>
                                <ListGroupItem>
                                <FontAwesomeIcon icon={faLink} className='mr-3 rounded' />
                                <a href={`${args.site}?utm_source=clotere`} target="blank">Consulter le site internet</a>
                            </ListGroupItem>
                                </>
                            }
                            
                        </ListGroup>
                        </div>
                    </CardNotaires>
    );
}

export default CardNotaire;