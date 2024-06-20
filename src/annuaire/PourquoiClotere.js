import React from "react";
import styled from "styled-components";
import Pourquoi from '../img/pourquoi.svg';

export const PourquoiS = styled.div`

h2{
    font-size: 64px;
    font-weight: 500;
    line-height: 1.32em;
    }
    .tag-line,ul{
    font-weight: normal;
    font-size: 18px;
    position: relative;
    line-height: 1.7em;
    color: #73737b;
    }
ul{
    list-style-type: none;
    }
`;



function PourquoiClotere(args) {
    return (
        <PourquoiS>
            <div className="container  pt-120  md-pt-60">
                <div className="row">
                    <div
                        className="col-xl-5 col-lg-5 text-center text-lg-left order-lg-first"
                        data-aos="fade-right"
                    >
                        <div className="illustration-holder d-inline-block md-mt-60">
                            <img src={Pourquoi} alt="about" />
                        </div>
                    </div>
                    {/* End .col */}
                    <div className="col-xl-7 col-lg-7 order-lg-last" data-aos="fade-left">
                        <div className="pl-lg-5">
                            <div className="title-style-seven">
                                <h2>
                                    Pourquoi choisir <br /><span>Clotere</span> ?
                                </h2>
                            </div>
                            <div className="tag-line">

                                Chez Clotere nous avons décidé de <span><b>digitaliser le process des actes notariés pour vous faire gagner du temps</b></span> dans votre achat immobilier.

                                Avec l'aide des notaires nous vous proposons une solution digitale simple, rapide et conforme aux normes.
                            </div>
                            <br />
                            <ul className="list-item">
                                <li>✔️ Un notaire rapidement</li>
                                <li>✔️ Suivez toutes les étapes facilement</li>
                                <li>✔️ Gagnez du temps</li>
                                <li>✔️ Gagnez en sérénité</li>
                            </ul>
                        </div>
                    </div>
                    {/* Emd .col */}


                </div>
            </div>
        </PourquoiS>
    );
}

export default PourquoiClotere;

