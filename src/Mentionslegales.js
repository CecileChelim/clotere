import React from "react";
import styled from "styled-components";
import Background from "./img/back-clotere.png"
/** composants **/
import { Container,Row,Col } from "reactstrap";
import BlocCta from './components/BlocCta';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const HomeS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

function Mentionslegales(args) {
    return (
        <>
        <HomeS>
        <Navbar user={args.user} />        
            <Container>
                <Row>
                    <Col md="12" align="center" ><h1>Mentions légales</h1></Col>
                </Row>
                <Row>
                <Col md="3"></Col>
                    <Col md="6">
                        <p>
                        Le présent site internet clotere.fr a été créé en France.

                        <br/><br/>L’accès au site, sa consultation et son utilisation sont subordonnés à l’acceptation sans réserve des Conditions Générales d’Utilisation.

                        <br/><br/><b>Le site est édité par :</b>

                        <br/> Cofidelity, SAS au capital de 1 500,00 euros, immatriculée au registre du commerce et des sociétés de Paris sous le numéro 834 239 501.

                        <br/><br/>Siège social : 99 rue Ardoin, 93400 SAINT-OUEN.

                        <br/><br/>La responsable de publication de clotere.fr est Madame Cécile CHELIM.

                        <br/><br/><b>Le site clotere.fr est hébergé par :</b>

                        <br/>La société OVH :
                        <br/>SAS au capital de 10 069 020 € 
                        <br/>RCS Lille Métropole 424 761 419 00045 
                        <br/>Code APE 2620Z 
                        <br/>N° TVA : FR 22 424 761 419 
                        <br/>Siège social : 2 rue Kellermann - 59100 Roubaix - France


                        <br/><br/>Pour toutes questions sur l’entreprise, vous pouvez nous envoyer vos questions par email à <a href="mailto:contact@clotere.fr">contact@clotere.fr</a>.

                        <br/><br/> Pour simplifier nos procédures, merci de bien vouloir indiquer dans votre réquisition l’adresse email à laquelle vous faire parvenir notre réponse.
                        </p>
                        </Col>
                </Row>
            </Container>
            <BlocCta/>
        <Footer/>
        </HomeS>
        
        </>
    );
}

export default Mentionslegales;