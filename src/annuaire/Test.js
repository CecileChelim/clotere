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
import useGoogleSheets from 'use-google-sheets';




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

    const { data, loading, error } = useGoogleSheets({
        apiKey: 'AIzaSyDOypSeMIO3bhhlZt9-2KZ7OKpQW1n-njg',
        sheetId: '1goMuEIM_a2g9k0jivUC4t0ABw5ABLaX1QSLvJwnGlgk',
        sheetsNames: [{ id: 'Auvergne-rhone-alpes' }],
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error!</div>;
      }
    
      return <div>{JSON.stringify(data)}</div>;
}

export default NotairesVilleParis;