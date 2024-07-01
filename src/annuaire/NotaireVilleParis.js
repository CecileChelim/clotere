import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Tooltip } from "reactstrap";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { HomeS } from "./HomeAnnuaire"
import { ContainerS, SubTitle } from "./HeaderAnnuaire"
import FindePage from './FindePage';
import Footer from '../components/Footer';
import RechercheParVille from "./RechercheParVille"
import CardNotaire from './CardNotaire';
import { HeaderBannerThree } from './HeaderAnnuaire2';
import CtaNotaire from './CtaNotaire';
import Surligne from '../img/deski/shape/line-shape-12.svg';
import axios from 'axios';
import { parseCSV } from '../functions/Csvdata.js';


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
display:flex;
.breadcrumb-item{
    a{
    color:${props => props.theme.colors.main}
    }
}
`;
const FormS = styled(Form)`
    a{
    color: black;
    text-decoration: none;
    }
    .form-check-input:checked{
    background-color:${props => props.theme.colors.main}
    border-color:${props => props.theme.colors.main}
    }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid #ddd;
    background-color: #f9f9f9;

    &:hover {
      background-color: #f1f1f1;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #ddd;
    }
  }

  span {
    margin: 0 10px;
  }
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
    const [state, setState] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [data, setData] = useState([]);
    const [itemsPage, setItemsPage] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = notaires?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(notaires?.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setItemsPage(notaires?.slice(indexOfFirstItem, indexOfLastItem));
        }
    };
    
    const SPREADSHEET_ID = '1goMuEIM_a2g9k0jivUC4t0ABw5ABLaX1QSLvJwnGlgk';
    const API_KEY = 'AIzaSyDOypSeMIO3bhhlZt9-2KZ7OKpQW1n-njg';
    const RANGE = 'Ile-de-France!A1:H10000';


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const rows = response.data.values;
                console.log(rows);
                setData(rows);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 1) {
            const headers = data[0];
            const rows = data.slice(1);
            const formatted = rows.map(row => {
                const obj = {};
                headers.forEach((header, index) => {
                    obj[header] = row[index] || '';
                });
                return obj;
            });


            if (formatted != null) {
                var filteredData = formatted.filter(item => item.ville === "PARIS");

                setNotaires(filteredData);

                setLoading(false);
            }
        }
    }, [data]);

    useEffect(() => {
        if(notaires != null){
            setItemsPage(notaires?.slice(indexOfFirstItem, indexOfLastItem))
        }
        
    }, [notaires]);

    useEffect(() => {
        if(notaires != null){
            var newItems = notaires?.slice(indexOfFirstItem, indexOfLastItem)
            console.log(newItems);
            setItemsPage(newItems);
        }
        
    }, [currentPage]);
       
  

    // const fetchCSVData = () => {


    // //     const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTg3RI6d8QDNaIA8kPUz__DkubDkvxywZKjPQdLrwFEnBouJ4GQ6xyfKDdMlcXbXC6T8AKwotXKhsG/pub?output=csv'; // Replace with your Google Sheets CSV file URL
    // //    // const csvUrl = `https://sheets.googleapis.com/v4/spreadsheets/1goMuEIM_a2g9k0jivUC4t0ABw5ABLaX1QSLvJwnGlgk/values:batchGet?ranges=$'Auvergne-rhone-alpes'`;

    // //     axios.get(csvUrl)    // Use Axios to fetch the CSV data
    // //         .then((response) => {
    // //             const parsedCsvData = parseCSV(response.data);  
    // //             const filtered = parsedCsvData.filter(parsedCsvData => parsedCsvData.ville.includes("PARIS"));      // Parse the CSV data into an array of objects
    // //             setNotaires(filtered);       // Set the fetched data in the component's state
    // //             console.log(parsedCsvData);        // Now you can work with 'csvData' in your component's state.
    // //             setLoading(false);
    // //         })
    // //         .catch((error) => {
    // //             console.error('Error fetching CSV data:', error);
    // //         });
    // }


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
                                <BreadcrumbItem >
                                    <Link to="/">
                                        Annuaire des notaires de France
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link to="/fr/notaires">
                                        Notaires Île-de-France
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    Notaire à Paris
                                </BreadcrumbItem>
                            </BreadcrumbS>
                        </Col>
                        <Col md="12" xs="12" align="center">
                            <h1>Trouvez  <span className="surligne"> votre notaire<img src={Surligne} alt="shape" class="cs-screen" /></span> à Paris</h1>
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
                                <FormS>
                                    <FormGroup switch>
                                        <Input
                                            type="switch"
                                            checked={state}

                                            onClick={() => {
                                                setState(!state);
                                            }}
                                        />
                                        <Label check><a href="#" rel="noreferrer"
                                            id="TooltipExample">Gère votre dossier en ligne</a></Label>
                                    </FormGroup>
                                </FormS>
                                <Tooltip
                                    {...args}
                                    isOpen={tooltipOpen}
                                    target="TooltipExample"
                                    toggle={toggle}
                                >
                                    Ces notaires vous assurent un suivi de votre dossier en ligne facilement.
                                </Tooltip>
                            </Col>
                        </RowFiltres>

                        <ColNotaire>

                            {itemsPage.map((col, i) => (
                                <>
                                    <CardNotaire fiche={itemsPage[i].lien_fiche} key={i} nom={itemsPage[i].nom} adresse={itemsPage[i].adresse} cp={itemsPage[i].code_postal} ville={itemsPage[i].ville} site={itemsPage[i].site} />

                                </>
                            ))}

                        </ColNotaire>

                        <Pagination>
                            <button onClick={() => handlePrevious()} disabled={currentPage === 1}>
                                &lt; Précédent
                            </button>
                            <span>
                                Page {currentPage} sur {totalPages}
                            </span>
                            <button onClick={() => handleNext()} disabled={currentPage === totalPages}>
                                Suivant &gt;
                            </button>
                        </Pagination>

                        <RechercheParVille />
                        <FindePage ville="Paris" />

                    </Container>
                    <CtaNotaire />
                </Content>
                <Footer />
            </HomeS>

        </>

    );
}



export default NotairesVilleParis;