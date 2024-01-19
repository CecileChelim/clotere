import React from "react";
import styled from "styled-components";
import Background from "./img/back-clotere.png"
import Navbar from './components/Navbar';
import Fade from 'react-reveal/Fade';
/** composants **/
import Header from './components/Header';
import Feature from './components/Feature';
import Engagement from './components/Engagements';
import EnMoyenne from './components/EnMoyenne';
import Faq from './components/Faq';
import BlocCta from './components/BlocCta';
import Footer from './components/Footer';

const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

function Home(args) {
    return (
        <>
        <HomeS>
            <Navbar user={args.user} />
            <Header/>
            <Fade bottom><Feature/></Fade>
            <Fade bottom><Engagement/></Fade>
            <Fade bottom><EnMoyenne/></Fade>
            <Fade bottom><Faq/></Fade>
            <Fade bottom><BlocCta/></Fade>
            <Fade bottom><Footer/></Fade>
        </HomeS>
        </>
    );
}

export default Home;