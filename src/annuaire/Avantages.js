import styled from "styled-components";
import { Row, Col } from "reactstrap";
/** style */
import Rapide from "../img/rapide.webp";
import Simple from "../img/simple.webp";
import Gratuit from "../img/gratuit.webp";


const AvantagesRow = styled(Row)`
justify-content:space-between;
@media all and (max-width: 768px) {
display: block !important;
}
`;

export const Avantages = () => {
 

    return (
        <>
            <AvantagesRow>
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

              </AvantagesRow>
        </>
    );
};