import React, { useState, useEffect } from "react";
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
    //console.log(args);

    const handleChangeSelect = (e) => {
        //console.log(e.target.value);
        setSituation(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const prenom = event.target.prenom.value;
        const nom = event.target.nom.value;
        const ddn = event.target.ddn.value;
        const villenaissance = event.target.villenaissance.value;
        const nationalite = event.target.nationalite.value;
        const profession = event.target.profession.value;
        const adresse = event.target.adresse.value;
        const ville = event.target.ville.value;
        const cp = event.target.cp.value;
        const tel = event.target.tel.value;
        const situation = event.target.situation.value;
        const usage = event.target.usage.value;
        const premieracquisition = event.target.premieracquisition.value;
        const emprunt = event.target.emprunt.value;

        //const details_sitation = "mariage :" + event.target.datemariage.value + " " + event.target.communemariage.value + " " + event.target.cpmariage.value+"divorce :" + event.target.tribunaldivorce.value + " " + event.target.datedivorce.value;
        


        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${args.user.airtable_id}`;

        fetch(
            URL,
            {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                    "Accept": "application/json",
                    'content-type': "application/json"
                },
                body: JSON.stringify({
                    "fields": {
                        "email": email,
                        "prenom": prenom,
                        "nom": nom,
                        "date_de_naissance": ddn,
                        "ville_naissance": villenaissance,
                        "nationalite": nationalite,
                        "profession": profession,
                        "adresse": adresse,
                        "ville": ville,
                        "code_postal": cp,
                        "telephone": tel,
                        "situation": situation,
                        "usage": usage,
                        "acquereur_premier_achat": premieracquisition,
                        "acquereur_emprunt": emprunt
                    }
                })
            })
            .then((res) => {
                console.log(res);
                setFormSuccess(true);
                setFormSuccessMessage("👌 Vos informations on bien été ajoutées.");
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
                                <Input type="text" name="prenom" defaultValue={args.user.prenom} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nom</Label>
                                <Input type="text" name="nom" defaultValue={args.user.nom} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Date de naissance</Label>
                        <Input type="date" name="ddn" defaultValue={args.user.date_de_naissance} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Ville de naissance</Label>
                        <Input type="text" name="villenaissance" defaultValue={args.user.ville_naissance} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nationalité</Label>
                        <Input type="text" name="nationalite" defaultValue={args.user.nationalite} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Profession</Label>
                        <Input type="text" name="profession" defaultValue={args.user.profession} />
                    </FormGroup>
                </Panel>
                <br /><br />
                <h6><span className="textHighlight">Coordonnées auxquels votre notaire peux vous joindre</span></h6>
                <Panel>
                    <FormGroup>
                        <Label>Adresse </Label>
                        <Input type="text" name="adresse" defaultValue={args.user.adresse} />
                    </FormGroup>
                    <Row>
                        <Col md={8}>
                            <FormGroup>
                                <Label>Ville</Label>
                                <Input type="text" name="ville" defaultValue={args.user.ville} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Code postal</Label>
                                <Input type="text" name="cp" defaultValue={args.user.code_postal} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Email </Label>
                        <Input type="text" name="email" defaultValue={args.user.email} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Téléphone </Label>
                        <Input type="text" name="tel" defaultValue={args.user.telephone} />
                    </FormGroup>
                </Panel>
                <br /><br />
                <h6><span className="textHighlight">Votre situation</span></h6>
                <Panel>

                    <FormGroup>
                        <Label>Situation </Label>
                        <Input
                            id="situation"
                            name="situation"
                            type="select"
                            onChange={handleChangeSelect}
                            defaultValue={args.user.situation}
                        >
                            <option key="1" value="Null">Sélectionner</option>
                            <option key="2" value="Célibataire">Célibataire</option>
                            <option key="3" value="Marié">Marié</option>
                            <option key="4" value="Divorcé">Divorcé</option>
                            <option key="5" value="En instance de divorce">En instance de divorce</option>
                            <option key="6" value="Pacsé">PACS encore en vigueur</option>
                            <option key="7" value="Dépacsé">PACS plus en vigueur</option>
                            <option key="8" value="Veuf(ve)">Veuf(ve)</option>
                        </Input>
                        <br />
                        {/**
                        {situation === "Marié" &&
                            <>
                                <FormGroup>
                                    <Label>Date du mariage </Label>
                                    <Input type="date" name="datemariage" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Commune du mariage </Label>
                                    <Input type="text" name="communemariage" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Code postal du mariage </Label>
                                    <Input type="text" name="cpmariage" />
                                </FormGroup>
                            </>
                        }
                        {situation === "Divorcé" &&
                            <>
                                <FormGroup>
                                    <Label>Par jugement du tribunal de : </Label>
                                    <Input type="text" name="tribunaldivorce" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>En date du </Label>
                                    <Input type="date" name="datedivorce" />
                                </FormGroup>
                            </>
                        }
                         */}
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
                                        value="Résidence principale"
                                        defaultChecked={args.user.usage === "Résidence principale"}
                                        required
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
                                        value="Résidence secondaire"
                                        defaultChecked={args.user.usage === "Résidence secondaire"}
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
                                        value="Locatif"
                                        defaultChecked={args.user.usage === "Locatif"}
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
                                        value="Professionnel"
                                        defaultChecked={args.user.usage === "Professionnel"}
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
                                        value="oui"
                                        defaultChecked={args.user.acquereur_premier_achat === "oui"}
                                        required
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
                                        value="non"
                                        defaultChecked={args.user.acquereur_premier_achat === "non"}
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
                                        value="oui"
                                        defaultChecked={args.user.acquereur_emprunt === "oui"}
                                        required
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
                                        value="non"
                                        defaultChecked={args.user.acquereur_emprunt === "non"}
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