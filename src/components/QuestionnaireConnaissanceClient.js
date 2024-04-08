import React, { useState } from "react";
/** composants **/
import { Alert, Form, Input, FormGroup, Label, Row, Col } from "reactstrap";
import { ButtonPrimary } from "../style/Button";
import { Panel } from "../style/Layout";



function QuestionnaireConnaissanceClient(args) {
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [situation, setSituation] = useState(null);

    const handleChangeSelect = (e) => {
        //console.log(e.target.value);
        setSituation(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const message = event.target.message.value;

        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/message-conseille`;

        fetch(
            URL,
            {
                method: "POST",
                headers: {
                    Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                    "Accept": "application/json",
                    'content-type': "application/json"
                },
                body: JSON.stringify({
                    "fields": {
                        "email": email,
                        "message": message,
                    }
                })
            }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                setFormSuccess(true);
                setFormSuccessMessage("👌 Votre message a bien été envoyé. On vous réponds rapidement ");
                setTimeout(() => {
                    setFormSuccess(false);
                }, 3000);
            }).catch((error) => {
                console.log(error);
                setFormError(true);
                setFormErrorMessage("Un problème est survenu. Veillez recommencer.");
            });


    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                {formSuccess ? (
                    <Alert color="success">
                        {formSuccessMessage}
                    </Alert>
                ) : (<>{" "}</>)}
                {formError ? (
                    <Alert color="success">
                        {formErrorMessage}
                    </Alert>
                ) : (<>{" "}</>)}

                <FormGroup>
                    <p>
                        Ce questionnaire doit permettre au notaire de préparer au mieux l'acte de vente afin qu'il corresponde exactement à la
                        situation du bien acquis et aux accords intervenus entre les parties.
                    </p>
                </FormGroup>
                <h6><span className="textHighlight">Informations personnelles</span></h6>
                <Panel>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Prénom</Label>
                                <Input type="text" name="prenom" value={args.user.prenom} required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nom</Label>
                                <Input type="text" name="nom" value={args.user.nom} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Date de naissance</Label>
                        <Input type="date" name="ddn" value={args.user.date_de_naissance} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ville de naissance</Label>
                        <Input type="text" name="villenaissance" value={args.user.ville_naissance} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nationalité</Label>
                        <Input type="text" name="nationalite" value={args.user.nationalite} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Profession</Label>
                        <Input type="text" name="profession" value={args.user.profession} required />
                    </FormGroup>
                </Panel>
                <br /><br />
                <h6><span className="textHighlight">Coordonnées auxquels votre notaire peux vous joindre</span></h6>
                <Panel>
                    <FormGroup>
                        <Label>Adresse </Label>
                        <Input type="text" name="adresse" value={args.user.adresse} required />
                    </FormGroup>
                    <Row>
                        <Col md={8}>
                            <FormGroup>
                                <Label>Ville</Label>
                                <Input type="text" name="ville" value={args.user.ville} required />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Code postal</Label>
                                <Input type="text" name="cp" value={args.user.code_postal} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Email </Label>
                        <Input type="text" name="email" value={args.user.email} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Téléphone </Label>
                        <Input type="text" name="tel" value={args.user.telephone} required />
                    </FormGroup>
                </Panel>
                <br /><br />
                <h6><span className="textHighlight">Votre situation</span></h6>
                <Panel>
                    
                    <FormGroup>
                        <Label>Situation </Label>
                        <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        onChange={handleChangeSelect}
                                    >
                                        <option key="null" value="null">Sélectionner</option>
                                        <option key="ad" value="celibataire">Célibataire</option>
                                        <option key="redac" value="marie">Marié</option>
                                        <option key="copro" value="divorce">Divorcé</option>
                                        <option key="cadastre" value="eninstancededivorce">En instance de divorce</option>
                                        <option key="depot" value="pacs">PACS encore en vigueur</option>
                                        <option key="autre" value="pluspacs">PACS plus en vigueur</option>
                                    </Input>
                                    <br/>

                                    {situation === "marie" &&
                                        <>
                                            <FormGroup>
                                                <Label>Date du mariage </Label>
                                                <Input type="date" name="datemariage"   />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Commune du mariage </Label>
                                                <Input type="text" name="communemariage"   />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Code postal du mariage </Label>
                                                <Input type="text" name="cpmariage"   />
                                            </FormGroup>
                                        </>
                                    }
                                    {situation === "divorce" &&
                                        <>
                                            <FormGroup>
                                                <Label>Par jugement du tribunal de : </Label>
                                                <Input type="text" name="tribunaldivorce"   />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>En date du </Label>
                                                <Input type="date" name="datedivorce"   />
                                            </FormGroup>
                                        </>
                                    }
                    </FormGroup>
                </Panel>
                {args.user.role === "acheteur" ? (
                    <>
                        <br /><br />
                        <h6><span className="textHighlight">Usage et Financement</span></h6>
                        <Panel>
                            <FormGroup>
                                <Label>Quel est l'usage du bien acheté ?</Label>
                                <FormGroup check>
                                    <Input
                                        name="usage"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Résidence principale
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="usage"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Résidence secondaire
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="usage"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Investissement locatif
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="usage"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Professionel / Commercial / Artisanal
                                    </Label>
                                </FormGroup>

                            </FormGroup>
                            <FormGroup>
                                <Label>Est-ce votre première acquisition d'un bien immobilier ? </Label>
                                <FormGroup check>
                                    <Input
                                        name="premieracquisition"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Oui
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="premieracquisition"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Non
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Avez-vous recours à un emprunt pour financer ce bien ?</Label>
                                <FormGroup check>
                                    <Input
                                        name="emprunt"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Oui
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        name="emprunt"
                                        type="radio"
                                    />
                                    {' '}
                                    <Label check>
                                        Non
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Panel>
                    </>
                ) : (<>{" "}</>)}
                <br />
                <FormGroup>
                    <ButtonPrimary color="primary" type="submit">Envoyer</ButtonPrimary>
                </FormGroup>


            </Form>

        </>
    );
}

export default QuestionnaireConnaissanceClient;