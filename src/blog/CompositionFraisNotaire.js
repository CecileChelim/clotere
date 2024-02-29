import React from "react";
import {
    Container, Row, Col, FormGroup, Label, Card, CardBody, Form, Input, Alert, CardTitle, CardText, ListGroup, ListGroupItem
} from "reactstrap";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import Background from "../img/back-clotere.png"
import { Link, Element } from 'react-scroll';


const MenuAncre = styled(ListGroup)`
background-color:transparent!impoertant;
display: block;
position: sticky;
top: 104px;
align-self: start;
padding-right: 24px;
flex: 0 0 30%;
li.list-item{
    font-size: 16px;
    background-color: transparent!important;
    border: 0;
}
}
`;

const BackgroundS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;




function CompositionFraisNotaire(args) {


    return (
        <>
            <BackgroundS>
                <Navbar user={args.user} />
                <Container>

                    <Row className="d-flex align-items-center">
                        <Col md='12' align="center">
                            <h3>De quoi sont composés les <span className="textHighlight">frais de notaire</span> ?</h3>
                            <p>
                                Les frais de notaire représente une dépense importante dans votre achat immobilier.<br />
                                Pour éviter les suprises calculez à l'avance ces frais de notaire.<br />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <MenuAncre>
                                Sommaire
                                <ListGroupItem>
                                <Link to="section1" smooth={true} duration={500}>Section 1</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                <Link to="section2" smooth={true} duration={500}>Section 2</Link>
                                </ListGroupItem>
                                <ListGroupItem href="#"
      tag="a">test</ListGroupItem>
                            </MenuAncre>
                        </Col>
                        <Col md='8'>
                        <Element name="section1">
                            <p>
                                u moment de l’achat, vous devrez nécessairement faire appel à un notaire dont les frais viendront s’ajouter au prix d’acquisition de votre bien immobilier.

                                Parmi ces frais, on peut distinguer trois postes principaux :

                                Les impôts et les taxes
                                Les frais de débours
                                Les émoluments du notaire
                                Les impôts et les taxes
                                Ils représentent la majeure partie des frais de notaire (près de 80 % !). Ils correspondent en réalité à la taxe de publicité foncière, aussi appelée “droits de mutation” ou “droits d’enregistrement” ou “taxe de publicité foncière”. Le montant de cette taxe varie selon les départements.

                                Les frais et débours
                                Sous ce terme obscur se cache l’ensemble des frais que le notaire a dû avancer pour le compte de son client. Par exemple, le coût de l’intervention d’un géomètre, des frais cadastraux, de publication de vente ou encore des frais destinés à l’établissement de documents d’urbanisme, etc. Les débours correspondent à environ 10 % des frais de notaire.

                                ENVIE DE FAIRE DES ÉCONOMIES SUR VOS FRAIS DE NOTAIRE ?
                                Découvrez les astuces de Virgil pour réduire vos frais de notaire !


                                FAIRE LA SIMULATION
                                ‍Les émoluments du notaire
                                On retrouve naturellement une part de rémunération du notaire. Ils représentent en moyenne 10 % des frais de notaire. Le montant des émoluments du notaire sont réglementés par l’Etat. Le barème a d’ailleurs été revu légèrement à la baisse en janvier 2021. La partie des frais de notaire qui correspond à sa rémunération se calcule en fonction du prix du bien, tranche par tranche :

                                entre 0 et 6 500 € : on applique un taux de 3,870 % ;
                                entre 6 500 et 17 000 € : le taux pour le calcul des émoluments est de 1,596 % ;
                                entre 17 000 et 60 000 € : le taux baisse à 1,064 % ;
                                au-delà de 60 000 € : le taux passe à 0,799 %.
                                À cela, il ne faut pas oublier d’ajouter la TVA.

                                Dans tous les cas, la rémunération du notaire ne peut pas dépasser 10 % de la valeur de l’appartement ou de la maison, avec une somme plancher de 90 € (Article R444-9 du Code de commerce).

                                Même si plusieurs notaires interviennent dans la transaction immobilière, cela ne changera rien au montant des frais de notaire. Pas même sur la partie « émoluments », qu’ils devront se partager. Aucune raison de se priver de l’appui d’un notaire pour sécuriser son projet immobilier donc !
                                ‍Estimation de vos frais de notaire
                                Vous trouverez ci-dessous quelques exemples qui vous permettront de vous projeter en fonction du prix de vente du bien que vous pensez acheter :

                                Vous pouvez calculer ici les frais de notaire que vous devrez débourser si vous connaissez déjà le montant de l'achat.
                            </p>
                            </Element>
                            <Element name="section2">
                            <p>
                                u moment de l’achat, vous devrez nécessairement faire appel à un notaire dont les frais viendront s’ajouter au prix d’acquisition de votre bien immobilier.

                                Parmi ces frais, on peut distinguer trois postes principaux :

                                Les impôts et les taxes
                                Les frais de débours
                                Les émoluments du notaire
                                Les impôts et les taxes
                                Ils représentent la majeure partie des frais de notaire (près de 80 % !). Ils correspondent en réalité à la taxe de publicité foncière, aussi appelée “droits de mutation” ou “droits d’enregistrement” ou “taxe de publicité foncière”. Le montant de cette taxe varie selon les départements.

                                Les frais et débours
                                Sous ce terme obscur se cache l’ensemble des frais que le notaire a dû avancer pour le compte de son client. Par exemple, le coût de l’intervention d’un géomètre, des frais cadastraux, de publication de vente ou encore des frais destinés à l’établissement de documents d’urbanisme, etc. Les débours correspondent à environ 10 % des frais de notaire.

                                ENVIE DE FAIRE DES ÉCONOMIES SUR VOS FRAIS DE NOTAIRE ?
                                Découvrez les astuces de Virgil pour réduire vos frais de notaire !


                                FAIRE LA SIMULATION
                                ‍Les émoluments du notaire
                                On retrouve naturellement une part de rémunération du notaire. Ils représentent en moyenne 10 % des frais de notaire. Le montant des émoluments du notaire sont réglementés par l’Etat. Le barème a d’ailleurs été revu légèrement à la baisse en janvier 2021. La partie des frais de notaire qui correspond à sa rémunération se calcule en fonction du prix du bien, tranche par tranche :

                                entre 0 et 6 500 € : on applique un taux de 3,870 % ;
                                entre 6 500 et 17 000 € : le taux pour le calcul des émoluments est de 1,596 % ;
                                entre 17 000 et 60 000 € : le taux baisse à 1,064 % ;
                                au-delà de 60 000 € : le taux passe à 0,799 %.
                                À cela, il ne faut pas oublier d’ajouter la TVA.

                                Dans tous les cas, la rémunération du notaire ne peut pas dépasser 10 % de la valeur de l’appartement ou de la maison, avec une somme plancher de 90 € (Article R444-9 du Code de commerce).

                                Même si plusieurs notaires interviennent dans la transaction immobilière, cela ne changera rien au montant des frais de notaire. Pas même sur la partie « émoluments », qu’ils devront se partager. Aucune raison de se priver de l’appui d’un notaire pour sécuriser son projet immobilier donc !
                                ‍Estimation de vos frais de notaire
                                Vous trouverez ci-dessous quelques exemples qui vous permettront de vous projeter en fonction du prix de vente du bien que vous pensez acheter :

                                Vous pouvez calculer ici les frais de notaire que vous devrez débourser si vous connaissez déjà le montant de l'achat.
                            </p>
                            </Element>
                            <p>
                                u moment de l’achat, vous devrez nécessairement faire appel à un notaire dont les frais viendront s’ajouter au prix d’acquisition de votre bien immobilier.

                                Parmi ces frais, on peut distinguer trois postes principaux :

                                Les impôts et les taxes
                                Les frais de débours
                                Les émoluments du notaire
                                Les impôts et les taxes
                                Ils représentent la majeure partie des frais de notaire (près de 80 % !). Ils correspondent en réalité à la taxe de publicité foncière, aussi appelée “droits de mutation” ou “droits d’enregistrement” ou “taxe de publicité foncière”. Le montant de cette taxe varie selon les départements.

                                Les frais et débours
                                Sous ce terme obscur se cache l’ensemble des frais que le notaire a dû avancer pour le compte de son client. Par exemple, le coût de l’intervention d’un géomètre, des frais cadastraux, de publication de vente ou encore des frais destinés à l’établissement de documents d’urbanisme, etc. Les débours correspondent à environ 10 % des frais de notaire.

                                ENVIE DE FAIRE DES ÉCONOMIES SUR VOS FRAIS DE NOTAIRE ?
                                Découvrez les astuces de Virgil pour réduire vos frais de notaire !


                                FAIRE LA SIMULATION
                                ‍Les émoluments du notaire
                                On retrouve naturellement une part de rémunération du notaire. Ils représentent en moyenne 10 % des frais de notaire. Le montant des émoluments du notaire sont réglementés par l’Etat. Le barème a d’ailleurs été revu légèrement à la baisse en janvier 2021. La partie des frais de notaire qui correspond à sa rémunération se calcule en fonction du prix du bien, tranche par tranche :

                                entre 0 et 6 500 € : on applique un taux de 3,870 % ;
                                entre 6 500 et 17 000 € : le taux pour le calcul des émoluments est de 1,596 % ;
                                entre 17 000 et 60 000 € : le taux baisse à 1,064 % ;
                                au-delà de 60 000 € : le taux passe à 0,799 %.
                                À cela, il ne faut pas oublier d’ajouter la TVA.

                                Dans tous les cas, la rémunération du notaire ne peut pas dépasser 10 % de la valeur de l’appartement ou de la maison, avec une somme plancher de 90 € (Article R444-9 du Code de commerce).

                                Même si plusieurs notaires interviennent dans la transaction immobilière, cela ne changera rien au montant des frais de notaire. Pas même sur la partie « émoluments », qu’ils devront se partager. Aucune raison de se priver de l’appui d’un notaire pour sécuriser son projet immobilier donc !
                                ‍Estimation de vos frais de notaire
                                Vous trouverez ci-dessous quelques exemples qui vous permettront de vous projeter en fonction du prix de vente du bien que vous pensez acheter :

                                Vous pouvez calculer ici les frais de notaire que vous devrez débourser si vous connaissez déjà le montant de l'achat.
                            </p>
                            <p>
                                u moment de l’achat, vous devrez nécessairement faire appel à un notaire dont les frais viendront s’ajouter au prix d’acquisition de votre bien immobilier.

                                Parmi ces frais, on peut distinguer trois postes principaux :

                                Les impôts et les taxes
                                Les frais de débours
                                Les émoluments du notaire
                                Les impôts et les taxes
                                Ils représentent la majeure partie des frais de notaire (près de 80 % !). Ils correspondent en réalité à la taxe de publicité foncière, aussi appelée “droits de mutation” ou “droits d’enregistrement” ou “taxe de publicité foncière”. Le montant de cette taxe varie selon les départements.

                                Les frais et débours
                                Sous ce terme obscur se cache l’ensemble des frais que le notaire a dû avancer pour le compte de son client. Par exemple, le coût de l’intervention d’un géomètre, des frais cadastraux, de publication de vente ou encore des frais destinés à l’établissement de documents d’urbanisme, etc. Les débours correspondent à environ 10 % des frais de notaire.

                                ENVIE DE FAIRE DES ÉCONOMIES SUR VOS FRAIS DE NOTAIRE ?
                                Découvrez les astuces de Virgil pour réduire vos frais de notaire !


                                FAIRE LA SIMULATION
                                ‍Les émoluments du notaire
                                On retrouve naturellement une part de rémunération du notaire. Ils représentent en moyenne 10 % des frais de notaire. Le montant des émoluments du notaire sont réglementés par l’Etat. Le barème a d’ailleurs été revu légèrement à la baisse en janvier 2021. La partie des frais de notaire qui correspond à sa rémunération se calcule en fonction du prix du bien, tranche par tranche :

                                entre 0 et 6 500 € : on applique un taux de 3,870 % ;
                                entre 6 500 et 17 000 € : le taux pour le calcul des émoluments est de 1,596 % ;
                                entre 17 000 et 60 000 € : le taux baisse à 1,064 % ;
                                au-delà de 60 000 € : le taux passe à 0,799 %.
                                À cela, il ne faut pas oublier d’ajouter la TVA.

                                Dans tous les cas, la rémunération du notaire ne peut pas dépasser 10 % de la valeur de l’appartement ou de la maison, avec une somme plancher de 90 € (Article R444-9 du Code de commerce).

                                Même si plusieurs notaires interviennent dans la transaction immobilière, cela ne changera rien au montant des frais de notaire. Pas même sur la partie « émoluments », qu’ils devront se partager. Aucune raison de se priver de l’appui d’un notaire pour sécuriser son projet immobilier donc !
                                ‍Estimation de vos frais de notaire
                                Vous trouverez ci-dessous quelques exemples qui vous permettront de vous projeter en fonction du prix de vente du bien que vous pensez acheter :

                                Vous pouvez calculer ici les frais de notaire que vous devrez débourser si vous connaissez déjà le montant de l'achat.
                            </p>
                        </Col>
                    </Row>

                </Container>
                <Footer />
            </BackgroundS>
        </>
    );
}

export default CompositionFraisNotaire;