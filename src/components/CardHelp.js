import React, { useState } from "react";
import { Card, CardTitle, CardSubtitle, Offcanvas, OffcanvasHeader } from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ButtonPrimary, LinkS } from "../style/Button";
import imgCardHelp from "../img/img-card-help.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import FormulaireContactConseille from "./FormulaireContactConseille";


const CardS = styled(Card)`
border-radius:8px;
 background-color:#A7C3C5!important;
 margin-bottom:2rem;
 margin-top:2rem;
 display:flex;
 width:100%;
 padding: 40px 20px;
 border:0!important;
 overflow:hidden;
 img{
    position:absolute;
    bottom: 0;
    left: 0;
    width:15%;
 }
 .card-title{font-size:20px;font-weight:600;margin-bottom:1rem;}
 .card-subtitle{font-size:16px;font-weight:400;margin-bottom:1rem;}
`;

const ContenuTxt = styled.div`
margin-left:15%;
width: 70%;
`;
const ContenuAction = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 50%;
a{margin-bottom:.5rem;}
`;


function CardHelp(args) {
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    return (
        <>
            <CardS className="d-flex flex-row">
                <img
                    alt="Besoin d'aide ?"
                    src={imgCardHelp}
                />
                <ContenuTxt>
                    <CardTitle tag="h5">
                        <FontAwesomeIcon icon={faComments} /><br />
                        Besoin <span className="textHighlight">d’aide</span> ?
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Votre conseiller est disponible pour répondre à toutes vos questions, alors n'hésitez pas écrivez lui.
                    </CardSubtitle>
                </ContenuTxt>
                <ContenuAction>
                    <ButtonPrimary color="primary" onClick={toggle}>Contacter mon conseiller</ButtonPrimary>

                    <Link to="/onboard">
                        <LinkS>Lisez le guide de la transaction</LinkS>
                    </Link>
                </ContenuAction>
            </CardS>
            <Offcanvas isOpen={canvas} toggle={toggle} {...args} direction="end" scrollable>
                <OffcanvasHeader toggle={toggle}>Contactez votre conseiller</OffcanvasHeader>
                <FormulaireContactConseille email={args.email} />
            </Offcanvas>
        </>

    );
}

export default CardHelp;