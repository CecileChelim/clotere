import React from "react";
import styled from "styled-components";
import Background from "./img/back-clotere.png"
import Navbar from './components/Navbar';
import Fade from 'react-reveal/Fade';
/** composants **/
import Header from './components/Header';
import HeaderNew from './components/HeaderNew';
import Efficacite from './components/Efficacite';
import FeatureParallax2 from './components/FeatureParallax2';
import Engagement from './components/Engagements';
import EnMoyenne from './components/EnMoyenne';
import Faq from './components/Faq';
import BlocCta from './components/BlocCta';
import Footer from './components/Footer';

export const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

function Home(args) {
    return (
        <>
        <HomeS>
            <Navbar user={args.user} />
            <Fade bottom><HeaderNew/></Fade>
            <Fade bottom><Efficacite/></Fade>
            <Fade bottom><FeatureParallax2/></Fade>
            <Fade bottom><EnMoyenne/></Fade>
            <Fade bottom><Faq/></Fade>
            <Fade bottom><BlocCta/></Fade>
            <Fade bottom><Footer/></Fade>
        </HomeS>
        </>
    );
}

export default Home;