import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container, Row, Col} from "reactstrap";


const ContainerS = styled(Container)`
p{
color: #2a2a2a;
    padding-bottom: 30px;
    line-height: 28px;
    }
`;
function FindePage(args) {
      return (
        <>
        <ContainerS align="center">
            <Row>
                <Col md="12" className='mt-5'>
                    <h2>Comment trouver <span className="textHighlight">un notaire à {args.ville}</span></h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                </Col>
                <Col md="12" className='mt-5'>
                    <h2>Comprendre les <span className="textHighlight">frais de notaire</span> à  {args.ville} </h2>
                    <p>
                    Les frais de notaire, à la charge de l’acheteur du bien immobilier, comprennent 3 éléments : Les droits de mutation ou d’enregistrement (80% du montant total), Les frais de débours (10% du montant). Les émoluments du notaire (10% du montant) .<br/>
                    Retrouvez le détails de ces frais dans notre article dédié <Link to="/achat-immobilier/role-notaire-dans-un-achat-immobilier">Comprendre les frais de notaire</Link>
                    </p>
                </Col>
                <Col md="12" className='mt-5'>
                    <h2>Vous vendez ou achetez un bien à {args.ville} ? Vous aurez <span className="textHighlight">besoin d'un notaire</span> à {args.ville} </h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                </Col>
            </Row>
        </ContainerS>
        </>
    
      );
}

export default FindePage;