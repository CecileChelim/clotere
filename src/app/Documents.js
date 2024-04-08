import React, { useEffect, useState } from "react";
import {
    Container, Row, Col,
    Offcanvas, Nav, NavItem, NavLink, TabContent, TabPane, OffcanvasHeader, OffcanvasBody, FormGroup, Form, Label, Input, Spinner, Button, Alert
} from "reactstrap";
import { TitlePageBig, TitlePageApp } from "../style/Layout";
import { LinkS } from "../style/Button";
import CardDoc from "../components/CardDocument";
import IconPDF from '../img/icon-pdf.png';
import { FileUploader } from "react-drag-drop-files";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import styled from "styled-components";

import { useMemberstack } from "@memberstack/react";


function Documents(args) {
    const [data, setData] = useState([]);
    const memberstack = useMemberstack();
    const [userInfo, setUserInfo] = useState(null);
    const [valueNomDoc, setValueNomDoc] = useState(null);
    
    const [idSelectedDoc, setIdSelectedDoc] = useState(null);
    const [listTabs, setListTabs] = useState([]);

    const [showSideBar, setShowSideBar] = useState(false);
    const toggleSideBar = () => {
        setShowSideBar(false);
        setDefaultValueType(null)
        setIdSelectedDoc(null)
        setFile(null);
        setValueNomDoc(null)
    }

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    //console.log("arg  bien",args.bien)
    const [currentActiveTab, setCurrentActiveTab] = useState(null);
    const toggle = tab => {if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [storage, setStorage] = useState([]);
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [defaultValueType, setDefaultValueType] = useState(null);

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
            // eslint-disable-next-line
            appFirebase = initializeApp(firebaseConfig);
            setStorage(getStorage(appFirebase));
        }

        fetchData()
    }, [])

    useEffect(() => {
        getUserDocuments()

         // eslint-disable-next-line react-hooks/exhaustive-deps
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
                categoriesFiltrees = ["acheteur", "commun"];
            }else if(userData.fields.role === "vendeur"){
                categoriesFiltrees = ["vendeur", "commun"];
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
                setData(dataFilterTemp.map(item => {
                    const { fields } = item;
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
        if (data !== undefined && data !== null) {

            var listTabsTemp = ["tous les documents","vente", "personnel", "copropriété", "technique et diagnostics", "autre"]
            var nomsDocuments = []

            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                nomsDocuments.push(element.nom)
                    // setDropdownCategorie(dropdownCategorie => [...dropdownCategorie, element.categorie[0]])
            }

            setListTabs(listTabsTemp)
            setCurrentActiveTab(listTabsTemp[0]);
            setDefaultValueType("autre")
        }

    }, [data])

    const handleChangeSelect = (e) => {
        console.log(e);
        setDefaultValueType(e.target.value);
      };

      const handleChangeNom = (e) => {
        console.log(e);
        setValueNomDoc(e.target.value);
      };

      const handleDeleteDocument = async (doc) => {
        const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/document/${doc.id}`;

        if(doc.type === "autre"){
            await fetch(
                URL,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        "Accept": "application/json",
                        'content-type':"application/json"
                    },
                }).then((res) => res.json());
        }else{
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
                        "document": [],
                        "etat": "non ajouté",
                        "date_upload": "",
                        "qui_upload": ""
                    }})
                }).then((res) => res.json());
        }

            await getUserDocuments();

            setSuccess("Document supprimé avec succès !")

            setTimeout(() => {
                setSuccess(null);
              }, 5000);
    };

    const handleDelete = (event) => {
        // Empêcher la propagation de l'événement de clic
        event.stopPropagation();

        // Empêcher le comportement par défaut (ouvrir l'explorateur de fichiers)
        event.preventDefault(); // Empêche l'ouverture de l'explorateur de fichiers
        setFile(null);
    };

    const formattedDate = () => {
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
        return jour + '/' + mois + '/' + annee + ' ' + heures + ':' + minutes;
    }

      const handleUpload = async () => {
        try{
            setLoadingUpload(true)
    
            // ---------------------- //
            // Formattage de la date  //
            // ---------------------- //
            var date = formattedDate(); 
    
    
            // Upload du fichier sur firestore le temps de l'upload
    
            const storageRef = ref(storage, file.name);
            await uploadBytes(storageRef, file);
    
            const url = await getDownloadURL(storageRef);
    
            // Requete pour upload sur airtable
            if(defaultValueType !== "autre"){
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
                            "date_upload": date,
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
                            "date_upload": date,
                            "nom": valueNomDoc,
                            "qui_upload": userInfo.airtable_id,
                            "type": "autre",
                            "categorie": [userInfo.role],
                            "transaction": [userInfo.transaction_id]
                        }})
                    }).then((res) => res.json());
            }

            setSuccess("Document upload avec succès !")

            setTimeout(() => {
                setSuccess(null);
              }, 5000);

        }catch(e){
            console.log(e);
            setError("Erreur lors de l'upload de votre document.")

            setTimeout(() => {
                setError(null);
              }, 5000);
        }
        
        await getUserDocuments();
        setLoadingUpload(false)
        toggleSideBar();
    }

    const uploadWithoutPreSelection = async () => {
        try{
            setLoadingUpload(true);

            // Upload du fichier sur firestore le temps de l'upload
      
            const storageRef = ref(storage, file.name);
            await uploadBytes(storageRef, file);
    
            const url = await getDownloadURL(storageRef);
  
          var date = formattedDate();
  
          console.log("Date", date)
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
                      "date_upload": date,
                      "nom": valueNomDoc,
                      "qui_upload": userInfo.airtable_id,
                      "type": defaultValueType,
                      "categorie": [userInfo.role],
                      "transaction": [userInfo.transaction_id]
                  }})
              }).then((res) => res.json());

              setSuccess("Document upload avec succès !")

            setTimeout(() => {
                setSuccess(null);
              }, 5000);

              
        }catch(e){
            console.log(e);
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
        <DragAndDropContainer>
            <img alt="IconPDF" style={{ height: "60px", marginBottom: "10px" }} src={IconPDF} />
            <div className="subtitle">Fichier acceptés : PDF/JPG/PNG</div>
            <div className="subtitle">Taille maximum : 40MB</div>
            <br />
            <div style={{ display: "inline-flex" }}>
                <div className="file-name">{file !== undefined && file !== null && file.name}</div>
                <div onClick={handleDelete} style={{ textDecoration: "underline" }}>Supprimer</div>
            </div>
        </DragAndDropContainer>
    );

    const stackNotSelected = (
        <DragAndDropContainer>
            <img style={{ height: "60px", marginBottom: "10px" }} alt="drop" src={IconPDF} />
            <p style={{ fontWeight: "500" }}>Déposez votre document ici ou</p>
            <p className="title-underline">Sélectionnez un document</p>
            <div className="subtitle">Fichier acceptés : PDF/JPG/PNG</div>
            <div className="subtitle">Taille maximum : 40MB</div>
        </DragAndDropContainer>
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
                      </div> : <Form style={{ width: '100%' }}>
                        <FormGroup>
                            <FileUploader disabled={file != null} handleChange={handleChange} name="file" types={fileTypes} children={file != null ? stackSelected : stackNotSelected}>
                            </FileUploader>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ width: '100%' }} for="exampleEmail">
                                De quel document s'agit-il ?
                            </Label>

                            <Input
                                disabled={idSelectedDoc !== null}
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={defaultValueType}
                                onChange={handleChangeSelect}
                            >
                                {listTabs !== undefined && listTabs !== null ? 
                                    listTabs
                                        ?.filter(tab => {  
                                            if(tab !== "tous les documents") {
                                                return true;
                                            } else {
                                                return false; // ou simplement, return tab !== "tous les documents";
                                            }
                                        })
                                        .map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        )) 
                                    : 
                                    <></>
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input onChange={handleChangeNom} disabled={idSelectedDoc !== null} name="nom" type="nom" value={valueNomDoc}/>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={idSelectedDoc !== null ? handleUpload: uploadWithoutPreSelection} disabled={file === null || valueNomDoc === null || valueNomDoc === ""} style={{backgroundColor: "#1c6856"}}>Ajouter</Button>
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
                    {error == null ? <></> :
                <Alert color="danger">
                    {error}
                </Alert> }
                {success == null ? <></>:
                <Alert color="success">
                    {success}
                </Alert> }
                    <Col md="12">
                        <Nav pills>
                        { listTabs.map((item, index) => (
                                    <NavItemNameCategorie key={index}>
                                
                                    <NavLink
                                        onClick={() => { toggle(item); }}
                                        className={`${currentActiveTab === item ? "active" : ""}`}
                                    >
                                        {item}
                                    </NavLink>
                                </NavItemNameCategorie>
                                    ))}

                        </Nav>
                        </Col>
                        <Col md="12" xs="12">

                        <TabContent className="mt-3" activeTab={currentActiveTab}>
                            {listTabs.map((item, index) => (
                                 <TabPane key={index} tabId={item}>
                                 <Row>
                                     <Col key={"dsjhnfsod"} sm="12">
                                         <CardDoc onAddDoc={(doc) => {
                                            setIdSelectedDoc(doc.id);
                                            setDefaultValueType(doc.type);
                                            setValueNomDoc(doc.nom)
                                            setShowSideBar(true);
                                            //console.log(doc);
                                         }} onDeleteDoc={(doc) => {
                                            handleDeleteDocument(doc)
                                         }} documents={data.filter(document => {
                                            if(document.type === item || item === "tous les documents"){
                                                return true
                                            }else{
                                                return false
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


const NavItemNameCategorie = styled(NavItem)`
a.nav-link {text-transform: lowercase}
a.nav-link::first-letter {text-transform: uppercase}
`;


const DragAndDropContainer = styled.div`
width: 100%; /* Largeur de la container */
    height: 100vh; /* Hauteur de la container */
    display: flex;
    justify-content: center; /* Centre les éléments horizontalement */
    align-items: center; /* Centre les éléments verticalement */
    border-style: dotted;
    border-color: #c3dbf7;
    border-width: 2px;
    border-radius:5px; 
    width: 100%; 
    height:250px;
    background-color: #eef6ff;
    flex-direction: column;

    .title-underline{
        color: #54958c; 
        font-weight: 500; 
        text-decoration: underline;
      }
    
      .subtitle{
        font-size: 15px;
      }
    
      .file-name{
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        margin-right: "40px"
      }
`;