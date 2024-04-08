import React, { useState } from "react";
/** composants **/
import { Alert, Form, Input, FormGroup, Label } from "reactstrap";
import { ButtonPrimary } from "../style/Button";



function FormulaireContactConseille(args) {
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState("");

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
                    <Label>Votre email</Label>
                    {args.email ? <Input type="text" value={args.email} name="email" />
                        : <><Input disabled type="text" placeholder="votre email" name="email" required /></>
                    }

                </FormGroup>
                <FormGroup>
                    <Label>Votre message</Label>
                    <Input type="textarea" rows="6" name="message" required />
                </FormGroup>
                <FormGroup>
                    <ButtonPrimary color="primary" type="submit">Envoyer</ButtonPrimary>
                </FormGroup>
            </Form>

        </>
    );
}

export default FormulaireContactConseille;