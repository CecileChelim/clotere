import React, { useState, useEffect } from "react";
import {
    Container, Row, Col, FormGroup, Label, Card, CardBody, Form, Input, Alert, CardTitle, CardText, Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    ListGroup,
    ListGroupItem,
} from "reactstrap";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import Background from "../img/back-clotere.png"
import { ButtonPrimarySmall, LinkCard } from "../style/Button";
import { CardArticle } from "../style/Blog";
import { Link } from "react-router-dom";



const CardResultatFrais = styled(Card)`
border-radius:16px;
 border:0;
 background: linear-gradient(180deg, rgba(239,234,224,1) 24%, rgba(255,255,255,1) 100%);
 padding:30px 30px;
 .card-body{background-color:transparent!important;}
`;

const BackgroundS = styled.div`
background-image: url(${Background});
background-position:top center;
background-size:cover;
`;

const ContainerS = styled(Container)`
h3{
    font-size:42px;
    line-height: 1.6;
    margin-bottom:2rem!important;
}
li.list-group-item{
    font-size:20px;
    background-color:white;
}
.card{
    background-color: transparent;
    .card-body{
        background-color: #fff;
        border-radius:10px;
    }
}
form{
    align-items: end;
    gap: 1%;
    justify-content: space-evenly;
    .mb-3{margin:0!important;}
}
@media all and (max-width: 768px) {
    .lg{flex-wrap: wrap;justify-content: center;width:100%;}
    .revert{flex-wrap: wrap-reverse;}
    .content{padding: 1rem;}
    form{
        flex-direction: column !important;
        align-items: center;
        justify-content: start;
        .mb-3{margin:1rem!important;width:100%;}
        button{width: 100%;}
    }
  }
`;
const AccordionResultat = styled(Accordion)`
&.accordion{
    p,h2,h4{font-family: "Manrope", sans-serif!important;}
}
h2.accordion-header div{
    font-size:18px;
}
.accordion-body{
    background-color:#F5F5F5;
    .list-group {
        background-color:transparent;
        .list-group-item{background-color:transparent;}
        p{font-size:14px;}
        
    }
}
.accordion-button:not(.collapsed){
    background-color:#d1e7dd;
}

.ligneheader{width:90%;}
`;

function CalculFraisNotaire(args) {
    const [fraisTotalNotaire, setFraisTotalNotaire] = useState(0);
    const [emolumentHT, setEmolumentHT] = useState(0);
    const [taxeDepartementale, setTaxeDepartementale] = useState(4, 5);
    const [taxeCommunale, setTaxeCommunale] = useState(1, 2);
    const [taxeFraisAssiette, setTaxeFraisAssiette] = useState(0, 107);
    const [taxeSecuriteImmo, setTaxeSecuriteImmo] = useState(0, 100);
    const [totalTaxes, setTotalTaxes] = useState(0);
    const [montant, setMontant] = useState(0);
    const [formalite, setFormalite] = useState(1360);
    const [typeProjet, setTypeProjet] = useState(null);
    const [departement, setDepartement] = useState(null);
    const [tranche1ok, setTranche1ok] = useState(false);
    const [tranche2ok, setTranche2ok] = useState(false);
    const [tranche3ok, setTranche3ok] = useState(false);
    const [tranche4ok, setTranche4ok] = useState(false);
    const [montantTranche1, setMontantTranche1] = useState(0);
    const [montantTranche2, setMontantTranche2] = useState(0);
    const [montantTranche3, setMontantTranche3] = useState(0);
    const [montantTranche4, setMontantTranche4] = useState(0);
    const [resultat, setResultat] = useState(false);
    const [sub, setSub] = useState(false);

    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const handleChangeSelect = (e) => {
        console.log(e);
        setTypeProjet(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const montant = event.target.montant.value;
        const departement = event.target.departement.value;
        const tranche1 = 0;
        const tranche2 = 0;
        const tranche3 = 0;
        const tranche4 = 0;
        setMontant(montant);
        setDepartement(departement);

        //calcul des emoluments
        console.log("montant", montant);
        console.log("departement", departement);
        console.log("typeProjet", typeProjet);

        if (montant >= 6500) {
            console.log("sup 6500");
            const tranche1 = 252;
            //console.log("tranche 1",tranche1);
            setTranche1ok(true);
            setMontantTranche1(tranche1);

            if (montant >= 17000) {
                console.log("sup 17k");
                const tranche2 = tranche1 + 168;
                setTranche2ok(true);
                setMontantTranche2(168);


                if (montant >= 60000) {
                    console.log("sup 60");
                    const tranche3 = tranche2 + 458;
                    setTranche3ok(true);
                    setMontantTranche3(458);

                    const tranche4 = (montant - 60000) * 0.799 / 100;
                    setTranche4ok(true);
                    setMontantTranche4(tranche4);

                } else if (montant < 60000) {
                    console.log("entre 17k & 60k");
                    const tranche3 = (montant - 17000) * 1.064 / 100;
                    //console.log("tranche 1",tranche1);
                    setTranche3ok(true);
                    setMontantTranche3(tranche3);
                }



            } else if (montant < 17000) {
                console.log("entre 6500 & 17k");
                const tranche2 = (montant - 6500) * 1.596 / 100;
                //console.log("tranche 1",tranche1);
                setTranche2ok(true);
                setMontantTranche2(tranche2);
            }

        } else if (montant < 6500) {
            console.log("inf 6500");
            const tranche1 = montant * 3.870 / 100;
            setTranche1ok(true);
            setMontantTranche1(tranche1);
        }
        setEmolumentHT(montantTranche1 + montantTranche2 + montantTranche3 + montantTranche4);

        //calcul des taxes 
        setTaxeDepartementale(montant * 4.5 / 100);
        setTaxeCommunale(montant * 1.2 / 100);
        setTaxeFraisAssiette(montant * 0.107 / 100)
        setTaxeSecuriteImmo(montant * 0.1 / 100);
        setTotalTaxes(taxeDepartementale + taxeCommunale + taxeFraisAssiette + taxeSecuriteImmo);

        if(totalTaxes !== 0){
            setFraisTotalNotaire((emolumentHT * 20 / 100) + totalTaxes + formalite);
        }

        if(emolumentHT !== 0 && totalTaxes !== 0){
            setSub(true);
        }

    }

    return (
        <>
            <BackgroundS>
                <Navbar user={args.user} />
                <ContainerS>

                    <Row className="d-flex align-items-center">

                        {emolumentHT !== 0 && totalTaxes !== 0 && fraisTotalNotaire !== 0 && resultat === true &&
                            <>
                                <Col md='1'></Col>
                                <Col md='10'>
                                    <div>
                                        <CardResultatFrais>
                                            <CardBody>
                                                <h3><span role="img">👋</span> Vos frais de notaire : <b>{fraisTotalNotaire}€</b></h3>
                                                <p>Pour une transaction d'un montant de <b>{montant} €</b>, un type de projet <b>{typeProjet}</b>, dans le département <b>{departement}</b><br />
                                                    <a href="#" onClick={""}>Modifier</a> </p>
                                            </CardBody>
                                        </CardResultatFrais>
                                        <br /><br />
                                        <h6>Détails de vos frais de notaire</h6>
                                        <AccordionResultat open={open} toggle={toggle}>
                                            <AccordionItem>
                                                <AccordionHeader targetId="1">
                                                    <div className="d-flex justify-content-between ligneheader">
                                                        <div>Honoraires du notaire TTC(émoluments) <a onClick={toggle}><small>voir le détail</small></a></div>
                                                        <div><b>{emolumentHT + (emolumentHT * 20 / 100)}€ </b></div>
                                                    </div>
                                                </AccordionHeader>
                                                <AccordionBody accordionId="1">
                                                    <ListGroup flush>
                                                        {tranche1ok === true &&
                                                            <>
                                                                <ListGroupItem>
                                                                    <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                        <p><small>Tranches</small> <br /><br />de 0 à 6500€</p>
                                                                        <p>3,870% </p>
                                                                        <p><b>{montantTranche1}€ </b></p>
                                                                    </div>
                                                                </ListGroupItem>
                                                            </>
                                                        }
                                                        {tranche2ok === true &&
                                                            <>
                                                                <ListGroupItem>
                                                                    <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                        <p>de 6500€ à 17 000€</p>
                                                                        <p>1,596% </p>
                                                                        <p><b>{montantTranche2}€ </b></p>
                                                                    </div>
                                                                </ListGroupItem>
                                                            </>
                                                        }
                                                        {tranche3ok === true &&
                                                            <>
                                                                <ListGroupItem>
                                                                    <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                        <p>de 17 000€ à 60 000€</p>
                                                                        <p>1,064% </p>
                                                                        <p><b>{montantTranche3}€ </b></p>
                                                                    </div>
                                                                </ListGroupItem>
                                                            </>
                                                        }
                                                        {tranche4ok === true &&
                                                            <>
                                                                <ListGroupItem>
                                                                    <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                        <p>plus de 60 000€</p>
                                                                        <p>0,799% </p>
                                                                        <p><b>{montantTranche4}€ </b></p>
                                                                    </div>
                                                                </ListGroupItem>
                                                            </>
                                                        }
                                                        <ListGroupItem>
                                                            <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                <p>Montant de la tva</p>
                                                                <p>20% </p>
                                                                <p><b>{emolumentHT * 20 / 100}€ </b></p>
                                                            </div>
                                                        </ListGroupItem>
                                                    </ListGroup>
                                                </AccordionBody>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionHeader targetId="2">
                                                    <div className="d-flex justify-content-between ligneheader">
                                                        <div>Taxes et impôts <a onClick={toggle}><small>voir le détail</small></a></div>
                                                        <div><b>{totalTaxes}€ </b></div>
                                                    </div>
                                                </AccordionHeader>
                                                <AccordionBody accordionId="2">
                                                    <ListGroup flush>
                                                        <ListGroupItem>
                                                            <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                <p>Droit départementale d'enregistrement (4,5%)</p>
                                                                <p><b>{taxeDepartementale}€ </b></p>
                                                            </div>
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                <p>Taxe communale (1,2%)</p>
                                                                <p><b>{taxeCommunale}€ </b></p>
                                                            </div>
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                <p>Frais d'assiette (0,107%)</p>
                                                                <p><b>{taxeFraisAssiette}€ </b></p>
                                                            </div>
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            <div className="d-flex justify-content-between align-items-end ligneheader">
                                                                <p>Contribution de sécurité immobilière (0,100%)</p>
                                                                <p><b>{taxeSecuriteImmo}€ </b></p>
                                                            </div>
                                                        </ListGroupItem>
                                                    </ListGroup>
                                                </AccordionBody>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionHeader targetId="3">
                                                    <div className="d-flex justify-content-between ligneheader">
                                                        <div>Débours </div>
                                                        <div><b>{formalite}€ </b></div>
                                                    </div>
                                                </AccordionHeader>
                                            </AccordionItem>
                                        </AccordionResultat>
                                        <br /><p>Simulation non contractuelle à titre informatif sur la base des données déclaratives fournies, à confirmer par une étude complète des informations.</p>
                                    </div>
                                </Col>
                            </>
                        }
                        {resultat === false &&
                            <>
                                <Col md='12' align="center">
                                    <h3>Calculez vos <span className="textHighlight">frais de notaire</span></h3>
                                    <p>
                                        Les frais de notaire représente une dépense importante dans votre achat immobilier.<br />
                                        Pour éviter les suprises calculez à l'avance ces frais de notaire.<br />
                                    </p>
                                </Col>

                                <Col md='1'></Col>
                                <Col md='10'>
                                    <Card>
                                        <CardBody>
                                            <Form className="d-flex flex-row" onSubmit={handleSubmit}>
                                                <FormGroup>
                                                    <Label>Montant de votre achat</Label>
                                                    <Input type="text" name="montant" placeholder="Montant en €" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Type de projet</Label>
                                                    <Input
                                                        id=""
                                                        name="type"
                                                        type="select"
                                                        onChange={handleChangeSelect}
                                                    >
                                                        <option key={2} value="ancien">Ancien</option>
                                                        <option key={1} value="neuf">Neuf</option>
                                                        <option key={3} value="plan">Vente sur plan (VEFA)</option>
                                                    </Input>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Ville</Label>
                                                    <Input type="text" name="departement" placeholder="75" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <ButtonPrimarySmall color="primary">Calculez vos frais</ButtonPrimarySmall>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <Alert color="success" className="mt-5">
                                        <p>
                                            <span role="img">👋</span> Il est important de noter qe les frais de notaire, malgré ce que l'on en dit souvent, ne reviennent quand petite partie à votre notaire. <br />En réalité la plus grand partie revient à l'État !
                                        </p>
                                    </Alert>

                                </Col>
                            </>
                        }
                    </Row>

                    <Row className="d-flex align-items-center justify-content-center mt-3">
                        <Col md='12' align="center">
                            <br /><br /><br />
                            <h3>Tous nos articles sur les notaires, leurs rôles et leurs frais.</h3>
                        </Col>
                        <Col md="4" xs="12">
                            <CardArticle>
                                <CardBody>
                                    <CardTitle>Mais au fait les frais de notaire qu'est-ce que c'est ? </CardTitle>
                                    <CardText>
                                        Les frais de notaire viennent s'ajouter à votre prix d'acquisition. Pour y voir plus claire on vous détaille les différents postes de ces frais :
                                        <ul>
                                            <li>
                                                Les impôts et les taxes
                                            </li>
                                            <li> Les frais de débours</li>
                                            <li>Les émoluments du notaire
                                            </li>
                                        </ul>
                                    </CardText>
                                    <Link to="/achat-immobilier/de-quoi-se-compose-les-frais-de-notaire">Lire l'article</Link>
                                </CardBody>
                            </CardArticle>
                        </Col>
                        <Col md="4" xs="12">
                            <CardArticle>
                                <CardBody>
                                    <CardTitle>Quel est le rôle du notaire dans un achat immobilier ?</CardTitle>
                                    <CardText>
                                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                    </CardText>
                                    <LinkCard to="/">En savoir plus</LinkCard>
                                </CardBody>
                            </CardArticle>
                        </Col>
                        <Col md="4" xs="12">
                            <CardArticle>
                                <CardBody>
                                    <CardTitle>Quel est le rôle du notaire dans un achat immobilier ?</CardTitle>
                                    <CardText>
                                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                    </CardText>
                                    <LinkCard to="/">En savoir plus</LinkCard>
                                </CardBody>
                            </CardArticle>
                        </Col>
                    </Row>

                </ContainerS>
                <Footer />
            </BackgroundS>
        </>
    );

}

export default CalculFraisNotaire;