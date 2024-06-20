import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from "reactstrap";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { HomeS } from "./HomeAnnuaire"
import { ContainerS, SubTitle } from "./HeaderAnnuaire"
import FindePage from './FindePage';
import Footer from '../components/Footer';
import RechercheParVille from "./RechercheParVille"
import CardNotaire from './CardNotaire';
import {HeaderBannerThree} from './HeaderAnnuaire2';
import CtaNotaire from './CtaNotaire';
import Surligne from '../img/deski/shape/line-shape-12.svg';
import axios from 'axios';
import {parseCSV} from '../functions/Csvdata.js';

export const ContainerSP = styled(ContainerS)`
margin-bottom:0;
padding:1rem;
`;
const ColNotaire = styled(Col)`
display:flex;
flex-direction:column;
gap:1.5rem;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
@media all and (max-width: 768px) {
      .card{width:100%;}
  }
`;
const Content = styled.div`
background-color:#f8fafe;
`;
const BreadcrumbS = styled(Breadcrumb)`
justify-content:center;
`;


const RowFiltres = styled(Row)`
padding:2rem 4rem;
form{
font-size:20px;
.form-check{
    display: flex;
    justify-content: end;
    gap:8px; 
    align-items:center;
    }
}
`;

function NotairesVilleParis(args) {
    const [notaires, setNotaires] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [state, setState] = useState(true);

    useEffect(() => {
        fetchCSVData();    // Fetch the CSV data when the component mounts
    }, []); 


    const fetchCSVData = () => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTg3RI6d8QDNaIA8kPUz__DkubDkvxywZKjPQdLrwFEnBouJ4GQ6xyfKDdMlcXbXC6T8AKwotXKhsG/pub?output=csv'; // Replace with your Google Sheets CSV file URL

        axios.get(csvUrl)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
                setNotaires(parsedCsvData);        // Set the fetched data in the component's state
                console.log(parsedCsvData);        // Now you can work with 'csvData' in your component's state.
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <HomeS>
                <Navbar user={args.user} />
                <HeaderBannerThree className="grey-bg">
                    <Row className="d-flex align-items-center" align="center">
                        <Col md="12" align="center">
                            <BreadcrumbS>
                                <BreadcrumbItem active>
                                <Link to="/">
                                        Accueil
                                        </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                <Link to="/fr/notaires">
                                        Notaires
                                        </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    Notaire à {args.ville}
                                </BreadcrumbItem>
                            </BreadcrumbS>
                        </Col>
                        <Col md="12" xs="12" align="center">
                        <h1>Trouvez  <span className="surligne"> votre notaire<img src={Surligne} alt="shape" class="cs-screen"/></span> à Paris</h1>
                            <SubTitle>
                                Retrouvez dans l'annuaire des notaires de Paris, le notaire idéal pour vous accompagner dans vos démarches.
                                <br />
                            </SubTitle>
                        </Col>
                    </Row>
                    
                </HeaderBannerThree>
                <Content>
                <Container>
                    
                    <RowFiltres>
                        <Col md="6" align="left">
                        <h3><small>{notaires.length} notaires à <span className="textHighlight">Paris</span></small></h3>
                        </Col>
                        <Col md="6" align="right">
                            <Form>
                                <FormGroup switch>
                                    <Input
                                        type="switch"
                                        checked={state}
                                        onClick={() => {
                                            setState(!state);
                                        }}
                                    />
                                    <Label check>Suivi de dossier en ligne</Label>
                                </FormGroup>
                            </Form>
                        </Col>
                    </RowFiltres>
                    <Row>

                        <ColNotaire>
                            {notaires.map((col, i) => (
                                <>
                                    <CardNotaire fiche={notaires[i].lien_fiche} key={i} nom={notaires[i].nom} adresse={notaires[i].adresse} cp={notaires[i].code_postal} ville={notaires[i].ville} site={notaires[i].site} />

                                </>
                            ))}
                        </ColNotaire>
                    </Row>
                    
                    <RechercheParVille />
                    <FindePage ville="Paris" />
                    
                </Container>
                <CtaNotaire/>
                </Content>
                <Footer />
            </HomeS>
            
        </>

    );
}

export default NotairesVilleParis;