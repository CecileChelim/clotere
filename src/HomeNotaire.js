import React from "react";
import styled from "styled-components";
import Background from "./img/back-clotere.png"
import Navbar from './components/Navbar';
import Fade from 'react-reveal/Fade';
/** composants **/
import HeaderNotaire from './components/HeaderNotaire';
import FeatureLead from './components/FeatureLead';
import Faq from './components/Faq';
import BlocCta from './components/BlocCta';
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
            <FeatureLead/>
        </HomeS>
        </>
    );
}

export default HomeNotaire;