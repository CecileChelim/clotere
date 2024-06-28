import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Row} from "reactstrap";
import { rotatedTwo, jumpThree, jumpTwo } from '../style/Animations';
import { SearchBar } from "./SearchBar";
import { Avantages } from "./Avantages";
import { RechercheParVilleS, ListeVille } from './RechercheParVille';
/** style */
import { SearchForm } from '../style/Annuaire';
/** images */
import Shape67 from '../img/deski/shape/67.svg';
import Shape68 from '../img/deski/shape/68.svg';
import Shape69 from '../img/deski/shape/69.svg';
import Shape70 from '../img/deski/shape/70.svg';
import Shape71 from '../img/deski/shape/71.svg';
import Shape72 from '../img/deski/shape/71.svg';
import Shape73 from '../img/deski/shape/73.svg';
import Shape74 from '../img/deski/shape/74.svg';
import Shape75 from '../img/deski/shape/75.svg';
import Shape76 from '../img/deski/shape/76.svg';
import Shape77 from '../img/deski/shape/77.svg';
import Surligne from '../img/deski/shape/line-shape-12.svg';

export const HeaderBannerThree = styled.div`

  padding: 60px 0 0;
  position: relative;
&:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 83%;
  background: url(${Shape67});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  left: 0;
  bottom: 0;
  z-index: -1;
}

h1 {
  font-size: 85px;
  line-height: 1.05em;
  text-align: center;
}
.sub-text {
  font-size: 28px;
  line-height: 1.39em;
  font-weight: 300;
  color: #2a2a2a;
  text-align: center;
  padding: 25px 0 45px;
}
.sing-in-call {
  font-size: 16px;
  padding-top: 25px;
  color: #2c2c2c;
  text-align: center;
}
.sing-in-call a {
  color: var(--blue-light);
  transition: all 0.25s ease-in-out;
}
.sing-in-call a:hover {
  text-decoration: underline;
}
.illustration {
  margin: 95px auto 0;
}

  .shapes {
    position: absolute;
    z-index: -1;
}
.shape-one {
  top: 5%;
  right: 15%;
  animation: ${rotatedTwo} 25s infinite linear;
}
 .shape-two {
  top: 11%;
  right: 7%;
}
 .shape-three {
  top: 24%;
  right: 20%;
}
 .shape-four {
  top: 28%;
  right: 11%;
  animation: ${jumpTwo} 5s infinite linear;
}
 .shape-five {
  top: 40%;
  right: 8%;
}
 .shape-six {
  top: 6%;
  left: 9%;
}
 .shape-seven {
  top: 19%;
  left: 7%;
}
 .shape-eight {
  top: 24%;
  left: 16%;
  animation: ${jumpThree} 5s infinite linear;
}
 .shape-nine {
  top: 35%;
  left: 21%;
}
 .shape-ten {
  top: 42%;
  left: 11%;
  animation: ${rotatedTwo} 50s infinite linear;
}
      @media all and (max-width: 768px) {
      padding: 30px 0 0;
      h1{font-size:70px!important;}
      h2{
      font-size: 20px !important;
        line-height: 30px;
        margin-top: 16px;
      }
      };
`;

const ContainerCcm = styled(Container)`
margin:4rem 0;
.block-style-twentyEight .icon {
  img{height: 70px;}
}
  .block-style-twentyEight h4 {
	font-weight: 500;
	font-size: 24px;
	margin: 33px 0 20px;
  }
`;

const HeaderAnnuaire2 = () => {
  const [results, setResults] = useState([]);
  return (
    <HeaderBannerThree className="hero-banner-three">
      <Container className="container">
        <Row>
          <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
            <h1>Trouvez  <span className="surligne"> votre notaire<img src={Surligne} alt="shape" class="cs-screen" /></span></h1>

          </div>
          {/* End .col */}

          <div className="col-xl-8 col-lg-9 m-auto">
            <p className="sub-text">
              L'annuaire des notaires de France.
            </p>
          </div>
          {/* End .col */}
        </Row>
        {/* End .row */}

        <SearchForm>
          <SearchBar />
        </SearchForm>
        {/* End search-filter-from */}
      </Container>
      <Container>
        <Row>
          <RechercheParVilleS>
            <Container>
              <h2 className="mb-5 mt-5"><small>Recherchez votre notaire dans les grandes villes de France</small></h2>
              <ListeVille>
                <Link to="/fr/notaires/ville/paris">Notaires à Paris</Link>
                <Link to="/fr/notaires/ville/lyon">Notaires à Lyon</Link>
                <Link to="/fr/notaires/ville/lille">Notaires à Lille</Link>
                <Link to="/fr/notaires/ville/bordeaux">Notaires à Bordeaux</Link>
                <Link to="/fr/notaires/ville/rennes">Notaires à Rennes</Link>
                <Link to="/fr/notaires/ville/montpellier">Notaires à Montpellier</Link>
                <Link to="/fr/notaires/ville/toulouse">Notaires à Toulouse</Link>

              </ListeVille>
            </Container>
          </RechercheParVilleS>
          

        </Row>
        <Row>
          <ContainerCcm>

              <Avantages/>
          </ContainerCcm>
        </Row>
      </Container>
      {/* /.container */}

      <img src={Shape68} alt="shape" className="shapes shape-one" />
      <img src={Shape69} alt="shape" className="shapes shape-two" />
      <img
        src={Shape70}
        alt="shape"
        className="shapes shape-three"
      />
      <img
        src={Shape71}
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src={Shape72}
        alt="shape"
        className="shapes shape-five"
      />
      <img src={Shape73} alt="shape" className="shapes shape-six" />
      <img
        src={Shape74}
        alt="shape"
        className="shapes shape-seven"
      />
      <img
        src={Shape75}
        alt="shape"
        className="shapes shape-eight"
      />
      <img
        src={Shape76}
        alt="shape"
        className="shapes shape-nine"
      />
      <img src={Shape77} alt="shape" className="shapes shape-ten" />
    </HeaderBannerThree>
    // End hero-banner-three
  );
};

export default HeaderAnnuaire2;
