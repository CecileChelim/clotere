import React from "react";
import styled from "styled-components";
import Surligne from '../img/deski/shape/line-shape-12.svg';
import { ButtonPrimary } from "../style/Button";

export const CtaNotaireS = styled.div`
margin-top:3rem;
max-width: 1700px;
    position: relative;
    background: #edf0fb;
    padding: 75px 0 72px;
    text-align: center;
    z-index: 1;

    h2{
    font-weight: 700;
    font-size: 58px;
    line-height: 1.29em;
    }
    p{
        font-size: 24px;
    line-height: 1.75em;
    }
`;



function CtaNotaire(args) {
    return (
        <CtaNotaireS>
            <div className="fancy-short-banner-thirteen mt-100 md-mt-130">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 m-auto">
                                <div className="title-style-twelve">
                                    <h2>
                                        <span>
                                            Vous êtes <span className="surligne"> notaire<img src={Surligne} alt="shape" class="cs-screen"/></span> ?
                                        </span>
                                    </h2>
                                    <p className="pt-45 pb-50 text-dark">
                                       Nos outils vous aident à créer une expérience mémorable et renforcent votre relation client
                                    </p>
                                    <ButtonPrimary color="primary" href="https://notaire.clotere.fr" target="blank" className="btn btn-primaru">
                                        Découvrez nos solutions
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </CtaNotaireS>
    );
}

export default CtaNotaire;

