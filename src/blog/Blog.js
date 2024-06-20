import React from "react";
import {
    Container, Row, 
} from "reactstrap";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Surligne from '../img/deski/shape/line-shape-12.svg';
import {HeaderBannerThree} from '../annuaire/HeaderAnnuaire2'
import ListeArticles from "./ListeArticles";

const ListeArticlesS = styled.div`
background:linear-gradient(45deg,#fffbf2,#edfffd);
`;



function Blog(args) {

    return (
        <>
            <div>
                <Navbar user={args.user} />
                <HeaderBannerThree className="hero-banner-three">
                    <Container className="container">
                        <Row>
                            <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
                                <h1>
                                Tout savoir sur <span className="surligne"> votre notaire<img src={Surligne} alt="shape" class="cs-screen"/></span></h1>

                            </div>
                            {/* End .col */}

                            <div className="col-xl-8 col-lg-9 m-auto">
                                <p className="sub-text font-rubik">
                                Tout savoir sur votre passage chez le notaire, lors de votre achat immobilier.
                                </p>
                            </div>
                            {/* End .col */}
                        </Row>
                        {/* End .row */}
                        {/* End search-filter-from */}
                    </Container>
                </HeaderBannerThree>
                
                <ListeArticlesS className="p-5">
                    <ListeArticles title="Tous nos articles sur les notaires, leurs rôles et leurs frais." />
                </ListeArticlesS>
                <Footer />
            </div>
        </>
    );
}

export default Blog;