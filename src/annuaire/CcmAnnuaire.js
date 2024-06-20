import React from "react";
import styled from "styled-components";
import { Container,Row,Col} from "reactstrap";

import Rapide from "../img/rapide.webp";
import Simple from "../img/simple.webp";
import Gratuit from "../img/gratuit.webp";

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



const CcmAnnuaire = () => {
  return (
	<ContainerCcm>
	
    <Row className="justify-content-between">
        <Col
          className="col-xl-3 col-md-3 bg-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={Simple} alt="icon" />
            </div>
            <h4>Simple</h4>
            <p>Trouvez votre notaire par région ou ville</p>
          </div>
          {/* /.block-style-twentyEight */}
        </Col>
		<Col
          className="col-xl-3 col-md-3 bg-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={Rapide} alt="icon" />
            </div>
            <h4>Rapide</h4>
            <p>Prenez contact rapidement avec votre notaire</p>
          </div>
          {/* /.block-style-twentyEight */}
        </Col>
		<Col
          className="col-xl-3 col-md-3 bg-wrapper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={Gratuit} alt="icon" />
            </div>
            <h4>Gratuit</h4>
            <p>Choisissez le notaire idéal gratuitement.</p>
          </div>
          {/* /.block-style-twentyEight */}
        </Col>
		
    </Row>
	</ContainerCcm>
  );
};

export default CcmAnnuaire;
