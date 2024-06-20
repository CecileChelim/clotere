import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Container, Row, Col, ListGroupItem,Card,ListGroup } from "reactstrap";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { faLink, faMapPin, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icnNotaire from '../img/icn-notaire.svg';
import {HomeS} from "./HomeAnnuaire"


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
.head{
    display:flex;
    flex-direction:row;
    gap:1rem;
    align-items:center;
    h4{font-size:1.3rem;font-weight:500;margin: 0;}
    p{font-size:14px;opacity:.7;margin:0;}
}
    img{width:100px;}
    .list-group{
    border:0;
    margin:0;
    @media all and (max-width: 768px) {flex-direction: column;margin-top: 1rem;};
    .list-group-item{    gap: 18px;}
    p{margin:0;}
        .list-group-item{
            border: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.8rem;
            svg{color:${props => props.theme.colors.greenDark};}
            
        }
    }
`;

const ColNotaire = styled(Col)`
display:flex;
flex-direction:column;
gap:1.5rem;
`;

function NotairesRegions(args) {
    const [notaires, setNotaires] = useState(null);
    const [isLoading, setLoading] = useState(true);

    //get info user airtable
    useEffect(() => {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/notaire`;

            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log("all notaire", res.records);
                    setNotaires(res.records);
                    setLoading(false);
                })
                .catch((error) => console.log(error));
        
    }, []);

    if (isLoading) {
        return <Loading/>;
      }
      return (
        <>
        <HomeS>
            <Navbar user={args.user} />
        <Container>
            <Row>
            <ColNotaire>
                {notaires.map((col, i) => (
                <>
                    <CardNotaires key={i}>
                    <img src={icnNotaire} alt="notaire" />
                    <div>
                        <div className="head">
                            <div>
                                <h4>{notaires[i].fields.nom_etude}</h4>
                            </div>
                        </div>
                        <ListGroup horizontal>
                            <ListGroupItem className='p-0'>
                                <FontAwesomeIcon icon={faMapPin} className='mr-3 rounded' />
                                <p>{notaires[i].fields.adresse} {" "} {notaires[i].fields.code_postal}{" "} {notaires[i].fields.ville}</p>
                            </ListGroupItem>
                            {notaires[i].fields.telephone && 
                                <>
                                <ListGroupItem>
                                <FontAwesomeIcon icon={faPhone} className='mr-3 rounded' />
                                <p className="text-muted">non renseigné</p>
                            </ListGroupItem>
                                </>
                            }
                            {notaires[i].fields.site && 
                                <>
                                <ListGroupItem>
                                <FontAwesomeIcon icon={faLink} className='mr-3 rounded' />
                                <a href={notaires[i].fields.site} target="blank">{notaires[i].fields.site}</a>
                            </ListGroupItem>
                                </>
                            }
                            
                        </ListGroup>
                        </div>
                    </CardNotaires>
                    </>
                ))}
                    </ColNotaire>
            </Row>
        </Container>
        </HomeS>
        </>
    
      );
}

export default NotairesRegions;