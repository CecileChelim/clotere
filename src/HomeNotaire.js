import React from "react";
import styled from "styled-components";
import Background from "./img/background-notaire.png"
import Navbar from './components/Navbar';
import Fade from 'react-reveal/Fade';
/** composants **/
import HeaderNotaire from './components/HeaderNotaire';
import LeadClient from './components/LeadClient';
import FeatureLead from './components/FeatureLead';
import Calendly from './components/Calendly';
import Footer from './components/Footer';

const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

function HomeNotaire(args) {
    return (
        <>
        <HomeS>
            <Navbar user={args.user} />
            <HeaderNotaire/>
            <LeadClient/>
            <FeatureLead/>
            <Fade bottom><Calendly/></Fade>
            <Footer/>
        </HomeS>
        </>
    );
}

export default HomeNotaire;