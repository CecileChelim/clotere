import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
/** style  */
import {ContainerListeArticle, RowArticle} from '../style/Blog';
/* img articles */
import img1 from "../img/blog/img-blog-1.webp";
import img2 from "../img/blog/img-blog-2.webp";
import img3 from "../img/blog/img-blog-3.webp";
import Surligne from '../img/deski/shape/line-shape-12.svg';

function ArticlesSimilaires(args) {

  return (
    <>
      <ContainerListeArticle>
        <Row>
          <Col md="12" align="center" className="mb-5">
            <h2>Découvrez nos articles sur le  <span className="surligne"> métier de notaire<img src={Surligne} alt="shape" class="cs-screen" /></span></h2>
          </Col>
        </Row>
        <RowArticle>
          <Col
            className="col-lg-4 col-sm-6 col-article"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
            <article className="post-meta mt-30">
              <figure className="post-img m0">
                <Link to="/achat-immobilier/role-notaire-dans-un-achat-immobilier" className="w-100 d-block">
                  <img
                    src={img3}
                    alt="blog"
                    className="w-100 tran4s"
                  />
                </Link>
              </figure>
              <div className="post-data">
                <h3 className="blog-title">
                  <Link to="/achat-immobilier/role-notaire-dans-un-achat-immobilier">Quel est le rôle du notaire dans un achat immobilier ? </Link>
                </h3>
                <p>
                  Si vous avez un projet d’achat immobilier, vous devez savoir que le notaire tient un rôle indispensable dans le processus d’achat.
                </p>
                <Link to="/achat-immobilier/role-notaire-dans-un-achat-immobilier" className="read-btn tran3s">
                  En savoir plus
                </Link>
              </div>
              {/* <!-- /.post-data --> */}
            </article>
          </Col>
          <Col
            className="col-lg-4 col-sm-6  col-article"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <article className="post-meta mt-30">
              <figure className="post-img m0">
                <Link to="/achat-immobilier/comment-choisir-son-notaire" className="w-100 d-block">
                  <img
                    src={img2}
                    alt="blog"
                    className="w-100 tran4s"
                  />
                </Link>
              </figure>
              <div className="post-data">
                <h3 className="blog-title">
                  <Link to="/achat-immobilier/comment-choisir-son-notaire">Comment choisir son notaire pour son achat immobilier ?</Link>
                </h3>
                <p>Acquérir un bien immobilier requiert toujours l’intervention d’un notaire, au moins pour réaliser l’acte de vente. Comment faire le choix d’un notaire pour un achat immobilier ? Découvrez nos conseils. </p>
                <Link to="/achat-immobilier/comment-choisir-son-notaire" className="read-btn tran3s">
                  En savoir plus
                </Link>
              </div>
              {/* <!-- /.post-data --> */}
            </article>
          </Col>
          <Col
            className="col-lg-4 col-sm-6  col-article"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
            <article className="post-meta mt-30">
              <figure className="post-img m0">
                <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire" className="w-100 d-block">
                  <img
                    alt="trouver un notaire pour votre achat immobilier" src={img1}
                    className="w-100 tran4s"
                  />
                </Link>
              </figure>
              <div className="post-data">
                <h3 className="blog-title">
                  <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire">Quels sont les documents de vente chez le notaire pour un achat immobilier ?</Link>
                </h3>
                <p>
                  Durant la négociation, vous aurez à signer plusieurs documents actant la vente de ce bien immobilier. Quels sont ces documents ? À quoi servent-ils ? On vous en dit plus.
                </p>
                <Link to="/achat-immobilier/documents-de-vente-chez-le-notaire" className="read-btn tran3s">
                  En savoir plus
                </Link>
              </div>
              {/* <!-- /.post-data --> */}
            </article>
          </Col>
          
        </RowArticle>
      </ContainerListeArticle>
    </>
  );
}

export default ArticlesSimilaires;