import React, { useEffect, useState } from "react";
import {
    Container, Row, Col, Card,
    Offcanvas, Nav, NavItem, NavLink, TabContent, TabPane, OffcanvasHeader, OffcanvasBody, FormGroup, Form, Label, Input, CardBody, Spinner, Button
} from "reactstrap";
import { TitlePageBig, TitlePageApp } from "../style/Layout";
import { ButtonPrimary, LinkS } from "../style/Button";
import CardDoc from "../components/CardDocument";
import IconPDF from '../img/icon-pdf.png';
import { FileUploader } from "react-drag-drop-files";
import { FileUploaderS } from "../style/FileUploaderStyle";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../style/styleSideBar.css';

import { useMemberstack } from "@memberstack/react";


const fileTypes = ["PDF", "DOC", "JPEG"];


function Documents(args) {
    const [data, setData] = useState([]);
    const memberstack = useMemberstack();
    const [userInfo, setUserInfo] = useState(null);
    
    const [idSelectedDoc, setIdSelectedDoc] = useState(null);
    const [listTabs, setListTabs] = useState([]);

    const [showSideBar, setShowSideBar] = useState(false);
    const toggleSideBar = () => {
        setShowSideBar(false);
        setFile(null);
    }

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    //console.log("arg  bien",args.bien)
    const [currentActiveTab, setCurrentActiveTab] = useState(null);
    const toggle = tab => {if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [canvas, setCanvas] = useState(false);
    const toggle2 = () => setCanvas(!canvas);
    const [storage, setStorage] = useState([]);
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [defaultValueNomDoc, setDefaultValueNomDoc] = useState(null);
    const [nomsDoc, setNomsDoc] = useState([]);

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        console.log(file);
    };

    const fileTypes = ["PDF", "PNG", "JPG"];

    

    const firebaseConfig = {
        apiKey: "AIzaSyBx-T0tuEcSlSFsPF1zyeYQo3pZG-zytz8",
        authDomain: "clotere-33ee1.firebaseapp.com",
        projectId: "clotere-33ee1",
        storageBucket: "clotere-33ee1.appspot.com",
        messagingSenderId: "488961682641",
        appId: "1:488961682641:web:b89810aa37cda07d7169f0"
    };

    var appFirebase = null

    useEffect(() => {
        const fetchData = async () => {
            appFirebase = initializeApp(firebaseConfig);
            setStorage(getStorage(appFirebase));
        }

        fetchData()
    }, [])

    useEffect(() => {
        getUserDocuments()
    }, [])

    const getUserDocuments = async () => {
        var member = await  memberstack.getCurrentMember()

        if (member !== null && member.data.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${member.data.metaData.airtable_id}`;

          var userData = await fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .catch((error) => console.log(error));

                setUserInfo(userData.fields);
        }

        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/document?filterByFormula=({id_from_transaction} = '${userData.fields.transaction_id}')`;

        var dataTemp = await fetch(
            URL,
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                    "Accept": "application/json"
                },
            }).then((res) => res.json());

            var dataFilterTemp = null
            let categoriesFiltrees = null;

            if(userData.fields.role === "acheteur"){
                categoriesFiltrees = ["commun", "acheteur"];
            }else if(userData.fields.role === "vendeur"){
                categoriesFiltrees = ["commun", "vendeur"];
            }

            if(categoriesFiltrees != null){
                dataFilterTemp = dataTemp.records.filter(objet =>
                   {
                     if(objet.fields.categorie != null){
                       return categoriesFiltrees.includes(objet.fields.categorie[0])
                     }else{
                        return false
                     }
                }
                  );
            }else{
                dataFilterTemp = dataTemp.records;
            }

            if(dataFilterTemp != null && dataFilterTemp.length > 0){
                setIdSelectedDoc(dataFilterTemp[0].id)
                setData(dataFilterTemp.map(item => {
                    const { fields, ...rest } = item;
                    if (fields.hasOwnProperty('document')) {
                        fields.nomDocument = fields.document[0].filename
                        fields.typeDocument = fields.document[0].type
                        const documentUrl = fields.document[0].url;
                        fields.document = documentUrl;
                       
                    }
                    return fields;
                }));
            }
    }

    useEffect(() => {
        if (data != undefined && data != null) {

            var listTabsTemp = []
            var nomsDocuments = []

            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                if(element.categorie != null && !listTabsTemp.includes(element.type)){
                    listTabsTemp.push(element.type)
                }

                nomsDocuments.push(element.nom)
                    // setDropdownCategorie(dropdownCategorie => [...dropdownCategorie, element.categorie[0]])
            }

            setListTabs(listTabsTemp)
            setCurrentActiveTab(listTabsTemp[0]);
            setNomsDoc(nomsDocuments)
            setDefaultValueNomDoc(nomsDocuments[0])
        }

    }, [data])

    const handleChangeSelect = (e) => {
        console.log(e);
        setDefaultValueNomDoc(e.target.value);

        if(e.target.value != "Autres"){
            setIdSelectedDoc(data.find(item => item.nom === e.target.value).id)
        }
      };


    const handleDelete = (event) => {
        // Empêcher la propagation de l'événement de clic
        event.stopPropagation();

        // Empêcher le comportement par défaut (ouvrir l'explorateur de fichiers)
        event.preventDefault(); // Empêche l'ouverture de l'explorateur de fichiers
        setFile(null);
    };

      const handleUpload = async () => {
        try{
            setLoadingUpload(true)
    
            // ---------------------- //
            // Formattage de la date  //
            // ---------------------- //
            var date = new Date()
    
            // Obtenir le jour, le mois, l'année, l'heure et les minutes
            var jour = date.getDate();
            var mois = date.getMonth() + 1; // Ajouter 1 car les mois sont indexés à partir de 0
            var annee = date.getFullYear();
            var heures = date.getHours();
            var minutes = date.getMinutes();
    
            // Formatage du jour et du mois pour qu'ils aient toujours 2 chiffres
            jour = (jour < 10 ? '0' : '') + jour;
            mois = (mois < 10 ? '0' : '') + mois;
    
            // Formatage de l'heure et des minutes pour qu'ils aient toujours 2 chiffres
            heures = (heures < 10 ? '0' : '') + heures;
            minutes = (minutes < 10 ? '0' : '') + minutes;
    
            // Création de la chaîne de caractères au format jj/mm/aaaa hh:mm
            var dateFormatee = jour + '/' + mois + '/' + annee + ' ' + heures + ':' + minutes;
    
    
            // Upload du fichier sur firestore le temps de l'upload
    
            const storageRef = ref(storage, file.name);
            await uploadBytes(storageRef, file);
    
            const url = await getDownloadURL(storageRef);
    
            // Requete pour upload sur airtable
            if(defaultValueNomDoc != "Autres"){
                const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/document/${idSelectedDoc}`;
        
                await fetch(
                    URL,
                    {
                        method: "PATCH",
                        headers: {
                            Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                            "Accept": "application/json",
                            'content-type':"application/json"
                        },
                        body:  JSON.stringify({"fields": {
                            "document": [{
                                "url": url,
                                "filename": file.name
                            }],
                            "etat": "ajouté",
                            "date_upload": dateFormatee,
                            "qui_upload": userInfo.airtable_id
                        }})
                    }).then((res) => res.json());
            }else{
                const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/document`;
        
                await fetch(
                    URL,
                    {
                        method: "POST",
                        headers: {
                            Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                            "Accept": "application/json",
                            'content-type':"application/json"
                        },
                        body:  JSON.stringify({"fields": {
                            "document": [{
                                "url": url,
                                "filename": file.name
                            }],
                            "etat": "ajouté",
                            "date_upload": dateFormatee,
                            "nom": "Autre",
                            "qui_upload": userInfo.airtable_id,
                            "transaction": [args.transaction.id]
                        }})
                    }).then((res) => res.json());
            }

            setSuccess("Document upload avec succès !")

            setTimeout(() => {
                setSuccess(null);
              }, 5000);

        }catch(e){
            setError("Erreur lors de l'upload de votre document.")

            setTimeout(() => {
                setError(null);
              }, 5000);
        }
        
        await getUserDocuments();
        setLoadingUpload(false)
        toggleSideBar();
    }

    const stackSelected = (
        <div className="container-drag-drop">
            <img style={{ height: "60px", marginBottom: "10px" }} src={IconPDF} />
            <div className="subtitle">Fichier acceptés : PDF/JPG</div>
            <div className="subtitle">Taille maximum : 40MB</div>
            <br />
            <div style={{ display: "inline-flex" }}>
                <div className="file-name">{file != undefined && file != null && file.name}</div>
                <div onClick={handleDelete} style={{ textDecoration: "underline" }}>Supprimer</div>
            </div>
        </div>
    );

    const stackNotSelected = (
        <div className="container-drag-drop">
            <img style={{ height: "60px", marginBottom: "10px" }} src={IconPDF} />
            <p style={{ fontWeight: "500" }}>Déposez votre document ici ou</p>
            <p className="title-underline">Sélectionnez un document</p>
            <div className="subtitle">Fichier acceptés : PDF/JPG</div>
            <div className="subtitle">Taille maximum : 40MB</div>
        </div>
    );

    return (
        <>
         <Offcanvas  
            isOpen={showSideBar}
            toggle={toggleSideBar}
            direction="end"
            scrollable> 
              <OffcanvasHeader toggle={toggleSideBar}>
                    Ajouter un document
                </OffcanvasHeader>
                <OffcanvasBody>
                    {
                        loadingUpload ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Spinner style={{ width: '5rem', height: '5rem' }} color="primary" />
                      </div> : <Form>
                        <FormGroup>
                            <FileUploader disabled={file != null} handleChange={handleChange} name="file" types={fileTypes} children={file != null ? stackSelected : stackNotSelected}>
                            </FileUploader>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                De quel document s'agit-il ?
                            </Label>

                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={defaultValueNomDoc}
                                onChange={handleChangeSelect}
                                style={{ width: '400px' }}
                            >
                                {nomsDoc != undefined && nomsDoc != null ? nomsDoc?.map((item, index) => (<option value={item}>
                                    {item}
                                </option>)) : <></>}
                                <option>Autres</option>
                            </Input>
                        </FormGroup>
                        <FormGroup style={{width:"400px"}} className="text-center">
                            <Button onClick={handleUpload} disabled={file === null} style={{backgroundColor: "#1c6856"}}>Ajouter</Button>
                        </FormGroup>
                </Form>
                    }
                    
            </OffcanvasBody>
        </Offcanvas>
            <Container>
                <Row className="d-flex align-self-start">

                    <TitlePageApp>
                        <Col md="7"><TitlePageBig className="mb-4">Vos documents</TitlePageBig></Col>
                        <Col md="5" className="text-end">
                            <LinkS onClick={()  => {setShowSideBar(true)}}>+ Ajouter un document</LinkS>
                        </Col>
                    </TitlePageApp>

                    <Col md="7">
                        <Nav pills>
                        { listTabs.map((item, index) => (
                                    <NavItem>
                                
                                    <NavLink
                                        onClick={() => { toggle(item); }}
                                        className={`${currentActiveTab === item ? "active" : ""}`}
                                    >
                                        {item}
                                    </NavLink>
                                </NavItem>
                                    ))}

                        </Nav>

                        <TabContent className="mt-3" activeTab={currentActiveTab}>
                            {listTabs.map((item, index) => (
                                 <TabPane tabId={item}>
                                 <Row>
                                     <Col sm="12">
                                         <CardDoc onAddDoc={(doc) => {
                                            setIdSelectedDoc(doc.id);
                                            setDefaultValueNomDoc(doc.nom);
                                            setShowSideBar(true);
                                            console.log(doc);
                                         }} documents={data.filter(document => {
                                            if(document.type === item){
                                                return true
                                            }
                                        })} />
                                     </Col>
                                 </Row>
                             </TabPane>
                            ))}
                        </TabContent>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Documents;