import React, { useState, useEffect } from "react";
import { useMemberstack } from "@memberstack/react";
import { Container, Row, Col, ListGroupItem,Card,ListGroup } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { AlertNotif } from "../style/Layout";
import icnMagic from '../img/icn-magic.svg';
import { faLink, faMapPin, faPhone,faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icnNotaire from '../img/icn-notaire.svg';
import Background from "../img/back-clotere.png";

import Loading from '../components/Loading';


const NotairesS = styled.div`
 background-image: url(${Background});
background-position:top center;
background-size:cover;
padding:3rem 2rem;
`;
const CardNotaires = styled(Card)`
    padding: 0;
    border: 0;
    border-radius: 16px;
    padding: 1.5rem;
    position:relative;
    box-shadow:0 1px 20px 0 #1df36c12;
.head{
    display:flex;
    flex-direction:row;
    gap:1rem;
    align-items:center;
    h4{font-size:1.3rem;font-weight:500;margin: 0;}
    p{font-size:14px;opacity:.7;margin:0;}
}
    .list-group{
    border:0;
    margin:0;
    @media all and (max-width: 768px) {flex-direction: column;margin-top: 1rem;};
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


function Notaires(args,props) {
    const memberstack = useMemberstack();
    const [member, setMember] = useState(null);
    const [user, setUser] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [listeNotaires, setListeNotaires] = useState(null);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);


    const fetchDataMemberstack = () => {
        setLoading(true);
        memberstack.getCurrentMember()
            .then(({ data: member }) => setMember(member))
            .then((data) => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const fetchDataTransaction = async () => {

        //La transaction
        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/transaction/${user.transaction_id}`;
        await fetch(
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
                setTransaction(res.fields);
                
            })
            .catch((error) => console.log("transaction info error", error),);
        
    };

    const fetchListeNotaires = async () => {
        try {
            if (transaction !== null) {
                console.log("fetc",transaction.code_postal_from_bien[0]);
                const dep = transaction.code_postal_from_bien[0].slice(0,2);
                console.log("dep",dep);
                const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/notaire?filterByFormula=SEARCH("93",{departement})`;
        
                await fetch(
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
                            console.log(res.records)
                            setListeNotaires(res.records);
                            setDone(true);
                        })
                        .catch((error) => console.log("transaction info error", error),);
            }
        } catch (e) {
            console.log(e);
        }

        

    };

    //get info memberstack
    useEffect(() => {
        fetchDataMemberstack();
    }, []);


    //get info user airtable
    useEffect(() => {
        //avec les info memberstack on recupere les info user airtable
        //console.log("seulement si member est update");
        if (member !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${member.metaData.airtable_id}`;

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
                    console.log("this user info", res);
                    setUser(res.fields);
                })
                .catch((error) => console.log(error));
        }
        // eslint-disable-next-line
    }, [loading]);

    //get info transaction
    useEffect(() => {
        //on recupere toutes les informations du dossier
        if (user !== null && member.metaData.airtable_id !== undefined) {
            fetchDataTransaction();
        }
// eslint-disable-next-line
    }, [user]);

    //get notaire dans ce département 
    useEffect(() => {
            fetchListeNotaires();
            console.log(listeNotaires)
// eslint-disable-next-line
    }, [transaction]);

    
    if (done === true & listeNotaires !== undefined) {
    return (
        <NotairesS>
            <Container>
            <Row>
                        <Col md='12'>
                        <Link to="/app/dashboard" className="back d-flex flex-row">
                        <p className="m-0"><FontAwesomeIcon icon={faArrowLeftLong} className='mr-3' /> {"        "} Retour</p>
                        </Link>
                        </Col>
                    </Row>
                <Row>
                    <Col md="12" align="center">
                        <AlertNotif color="primary" className="justify-content-center">
                            <span role="img">👋</span>
                            <img src={icnMagic} alt='ia' />
                            <div>
                                <h6>{listeNotaires.length} notaires pour votre affaire</h6>
                                <p>Voici la liste des notaires dans le département du bien vendu.</p>
                            </div>
                        </AlertNotif>
                    </Col>
                </Row>
                <Row>
                
                <ColNotaire>
                {listeNotaires.map((col, i) => (
                <>
                    <CardNotaires key={i}>
                        <div className="head">
                            <img src={icnNotaire} alt="notaire" />
                            <div>
                                <h4>{listeNotaires[i].fields.nom_etude}</h4>
                                <p>à 1,4km du bien vendu</p>
                            </div>
                        </div>
                        <ListGroup horizontal>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faMapPin} className='mr-3 rounded' />
                                <p>{listeNotaires[i].fields.adresse} {" "} {listeNotaires[i].fields.code_postal}{" "} {listeNotaires[i].fields.ville}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faPhone} className='mr-3 rounded' />
                                <p className="text-muted">non renseigné</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faLink} className='mr-3 rounded' />
                                <a href={listeNotaires[i].fields.site} target="blank">{listeNotaires[i].fields.site}</a>
                            </ListGroupItem>
                        </ListGroup>

                    </CardNotaires>
                    </>
                ))}
                    </ColNotaire>
                </Row>
            </Container>
        </NotairesS>
    );
    }
    return (
        <>
            <Loading />
        </>
    )
}

export default Notaires;