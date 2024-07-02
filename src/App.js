import React, { createContext, useState} from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";


//page
import Home from './Home';
import Inscription from './Inscription';
import Invitation from './ConnexionLink';
import Layout from './app/Layout';
import ChoisirNotaire from './app/ChoisirNotaire';
import Notaires from './app/Notaires';
import Questionnaire from './app/Questionnaire';
import Mentionslegales from './Mentionslegales';
import Cgv from './Cgv';
import DemoNotaire from './DemoNotaire';
import CalculFraisNotaire from './blog/CalculFraisNotaire';
import CompositionFraisNotaire from './blog/CompositionFraisNotaire';
import Blog from './blog/Blog';
import ArticleRoleNotaire from './blog/ArticleRoleNotaire';
import ArticleDocumentsNotaries from './blog/ArticleDocumentsNotaries';
import ArticleChoisirNotaire from './blog/ArticleChoisirNotaire';
//annuaire

import AllNotaires from './annuaire/HomeAnnuaire'
import NotairesRegions from './annuaire/NotaireRegions';
import NotaireVilleParis from './annuaire/NotaireVilleParis';
import FicheNotaire from './annuaire/FicheNotaire';
import CompetencesNotaire from './blog/CompetencesNotaire';
import ArticleEtapesAchatImmo from './blog/ArticleEtapesAchatImmo';


export const userInfoContext = createContext();

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  //console.log("path", window.location.pathname );

  function getNavbar() {
    if(window.location.pathname === "/app/" ) {
      return "";
    } else if(window.location.pathname === "/app") {
      return "";
       
    }else if(window.location.pathname === "/app/dashboard") {
      return "";
       
    }else if(window.location.pathname === "/app/bien") {
      return "";
    }else if(window.location.pathname === "/app/interlocuteurs") {
      return "";
    }else if(window.location.pathname === "/app/documents") {
      return "";
    } else if(window.location.pathname === "/app/transactions") {
      return "";
    }
    else if(window.location.pathname === "/app/profil") {
      return "";
    } else {
      return "";
    }
  }

  
  return (
    <>

      <Router>
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
        
                {getNavbar()}
          
          <Routes>
            <Route index element={<Home />} user={userInfo} />
            <Route path="inscription" element={<Inscription />} user={userInfo} />
            <Route path="connexion" element={<Invitation />} user={userInfo} />
            <Route path="app" element={<Layout />} user={userInfo} />
            <Route path="onboard" element={<Questionnaire />} user={userInfo} />
            <Route path="app/notaires" exact element={<Notaires />} user={userInfo} />
            <Route path="app/dashboard" exact user={userInfo} element={<Layout />}  />
            <Route path="app/bien" exact user={userInfo} element={<Layout />}  />
            <Route path="app/interlocuteurs" exact user={userInfo} element={<Layout />}  />
            <Route path="app/documents" exact user={userInfo} element={<Layout />}  />
            <Route path="app/profil" exact user={userInfo} element={<Layout />}  />
            <Route path="app/choisir-notaire/:id/:transaction" exact user={userInfo} element={<ChoisirNotaire />}  />
            <Route path="mentions-legales" exact user={userInfo} element={<Mentionslegales />}  />
            <Route path="cgv" exact user={userInfo} element={<Cgv />}  />
            <Route path="demo-notaire" exact user={userInfo} element={<DemoNotaire />}  />
            {/** Articles de contenu **/}
            <Route path="/blog" exact user={userInfo} element={<Blog />}  />
            <Route path="/achat-immobilier/role-notaire-dans-un-achat-immobilier" exact user={userInfo} element={<ArticleRoleNotaire />}  />
            <Route path="/achat-immobilier/documents-de-vente-chez-le-notaire" exact user={userInfo} element={<ArticleDocumentsNotaries />}  />
            <Route path="/achat-immobilier/comment-choisir-son-notaire" exact user={userInfo} element={<ArticleChoisirNotaire />}  />
            <Route path="/achat-immobilier/etapes-achat-immobilier" exact user={userInfo} element={<ArticleEtapesAchatImmo />}  />
            <Route path="/achat-immobilier/calcul-frais-de-notaire" exact user={userInfo} element={<CalculFraisNotaire />}  />
            <Route path="/achat-immobilier/de-quoi-se-compose-les-frais-de-notaire" exact user={userInfo} element={<CompositionFraisNotaire />}  />
            <Route path="/notaires/domaines-competences-notaire" exact user={userInfo} element={<CompetencesNotaire />}  />
            {/** Annuaires **/}
            <Route path="/fr/notaires" exact user={userInfo} element={<AllNotaires />}  />
            <Route path="/notaires" exact user={userInfo} element={<AllNotaires />}  />
            <Route path="/fr/notaires/region/ile-de-france" exact user={userInfo} element={<NotairesRegions />}  />
            <Route path="/fr/notaires/ville/paris" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/lyon" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/lille" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/bordeaux" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/montpellier" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/strasbourg" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/rennes" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/fr/notaires/ville/toulouse" exact user={userInfo} element={<NotaireVilleParis />}  />
            <Route path="/notaire/:nom" exact user={userInfo} element={<FicheNotaire />}  />
           


          </Routes>
        </userInfoContext.Provider>
      </Router>
    </>
  );
};

export default App;
