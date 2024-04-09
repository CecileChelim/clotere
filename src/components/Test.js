import React, { useState } from "react";
/** composants **/
import { Alert, Form, Input, FormGroup, Label, Row, Col } from "reactstrap";
import { ButtonPrimary } from "../style/Button";
import { Panel } from "../style/Layout";



function Test(args) {
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [situation, setSituation] = useState(null);

   

    const handleChangeSelect = (e) => {
        console.log(e.target.value);
        setSituation(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const prenom = event.target.prenom.value;
        const nom = event.target.nom.value;
        const situation = event.target.situation.value;
        const usage = event.target.usage.value;

        console.log(prenom, nom, situation, usage);

        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${args.user.id}`;

        let data = {
            nom: event.target.nom.value,
            prenom: event.target.prenom.value,
        };
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
                                <Input type="text" name="prenom" defaultValue={args.user.prenom} required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nom</Label>
                                <Input type="text" name="nom" defaultValue={args.user.nom} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input
                            id="exampleSelect"
                            name="situation"
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
                    </FormGroup>
                    <FormGroup>
                        <Label>Quel est l'usage du bien acheté ?</Label>
                        <FormGroup check>
                            <Input
                                name="usage"
                                type="radio"
                                value="principale"
                                checked={args.user.usage === "Résidence principale"}
                                
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
                                value="secondaire"
                                checked={args.user.usage === "Résidence secondair"}
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
                                value="locatif"
                                checked={args.user.usage === "Locatif"}
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
                                value="pro"
                                checked={args.user.usage === "Professionnel"}
                            />
                            {' '}
                            <Label check>
                                Professionel / Commercial / Artisanal
                            </Label>
                        </FormGroup>

                    </FormGroup>
                </Panel>
                <FormGroup>
                    <ButtonPrimary color="primary" type="submit">Envoyer</ButtonPrimary>
                </FormGroup>


            </Form>

        </>
    );
}

export default Test;