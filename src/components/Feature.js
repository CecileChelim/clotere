import React, {useState} from "react";
import {
    Container, Row, Col, Card, Carousel,
    CarouselItem,
    CarouselControl
} from "reactstrap";
import styled from "styled-components";
import IlluFeature from "../img/illu-test.png";


const ContainerS = styled(Container)`
margin-top:100px;
margin-bottom:150px;
@media all and (max-width: 768px) {
    margin-bottom:0px;
    margin-top:30px;
}
`;

const CardFeature = styled(Card)`
background: rgb(2,96,105);
background: linear-gradient(180deg, rgba(2,96,105,1) 24%, rgba(29,43,40,1) 100%);
border-radius:20px;
border:0;
min-height:420px;
.carousel{position:relative;min-height:420px;}
.carousel-inner{
    overflow:visible;
}
@media all and (max-width: 768px) {
   .carousel-desktop{display:none;}
  }
`;

const TextCol = styled(Col)`
color:white;
padding:60px 60px 90px 60px;
h4{
    font-size:36px;
    
    span{
        font-weight: 500;
        background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #1DF36C 50%);
    }
    margin-bottom:20px;
}
p{
    font-size:24px;
}

`;
const IlluCol = styled(Col)`
position:relative;
img{
    position: absolute;
    top: 30%;
    width: 90%;
}
`;
const Arrow = styled.div`
position:absolute;
bottom:4rem;
left:6rem;
a{
    width:40px;
    height:40px;
    text-align:center;
    overflow:hidden;
    color:#fff;
    background-color:rgb(29,243,108,30%);
    border-radius:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:10px;
    svg{height:1.8em;}
}
`;
const CarouselMobile = styled(Carousel)`
display:none;
@media all and (max-width: 768px) {
    display:block;
    .imgMobile{
        img{
            position:relative;
            top: 20%;
            width: 90%;
            left: 5%;
        }
    }
  }
`;




function Feature(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const items = [
        {
            src: IlluFeature,
            altText: 'Redaction compromis de vente',
            key: 1,
            number: "01.",
            title: <h4>Clotere <span>rédige</span> et <span>contrôle</span> les documents de vente.</h4>,
            content: "On s’assure de la conformité des pièces du dossier, et on rédige les documents avec toutes les clauses juridiques."
        },
        {
            src: IlluFeature,
            altText: 'Suivez votre vente chez le notaire',
            key: 2,
            number: "02.",
            title: <h4>Suivez plus <span>simplement</span> votre transaction</h4>,
            content: "Vous serez au courant de tout depuis notre plateforme en ligne. Récolte des pièces en cours, étapes de rédaction…."
        },
        {
            src: IlluFeature,
            altText: 'Signature acte de vente en ligne',
            key: 3,
            number: "03.",
            title: <h4>Signez depuis <span>votre canapé</span></h4>,
            content: "Tout se fait en ligne, y compris le rendez-vous de signature avec le notaire."
        },
    ];

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Row>
                    <TextCol md="6">
                        <h4 className="number"><b>{item.number}</b></h4>
                        {item.title}
                        <p>{item.content}</p>

                    </TextCol>
                    <IlluCol md="6">
                        <img src={item.src} alt={item.altText} />
                    </IlluCol>
                </Row>
            </CarouselItem>
        );
    });

    const slidesMobile = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Row>
                <IlluCol xs="12" className="imgMobile">
                        <img src={item.src} alt={item.altText} />
                    </IlluCol>
                    <TextCol xs="12">
                        <h4 className="number"><b>{item.number}</b></h4>
                        {item.title}
                        <p>{item.content}</p>

                    </TextCol>
                    
                </Row>
            </CarouselItem>
        );
    });

    return (
        <ContainerS className="grey-bg">
            <Row className="d-flex align-items-center">
                <Col md="12">
                    <CardFeature>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            {...args}
                            className="carousel-desktop"
                        >
                           
                            {slides}
                            <Arrow>
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={previous}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                            />
                            </Arrow>
                            
                        </Carousel>

                        <CarouselMobile
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            {...args}
                        >
                           
                            {slidesMobile}
                            <Arrow>
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={previous}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                            />
                            </Arrow>
                            
                        </CarouselMobile>

                    </CardFeature>
                </Col>

            </Row>
        </ContainerS>
    );
}

export default Feature;