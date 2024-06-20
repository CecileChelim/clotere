import React from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
/** composants **/
import HeaderAnnuaire from './HeaderAnnuaire2';
import PourquoiClotere from './PourquoiClotere';
import CtaNotaire from './CtaNotaire';
import ArticlesSimilaires from '../blog/ArticlesSimilaires';
import Footer from '../components/Footer';

export const HomeS = styled.div`
background-position:top center;
background-size:cover;
`;



function HomeAnnuaire(args) {
    return (
        <>
        <HomeS>
            <Navbar user={args.user} />
            <Fade><HeaderAnnuaire/></Fade>
            <Fade bottom><ArticlesSimilaires title="Tous nos articles sur les notaires, leurs rôles et leurs frais."/></Fade>
            <Fade bottom><PourquoiClotere/></Fade>
            <Fade bottom><CtaNotaire/></Fade>
            <Fade bottom><Footer/></Fade>
        </HomeS>
        </>
    );
}

export default HomeAnnuaire;