import React, { createContext, useState} from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";


//page
import Home from './Home';
import HomeNotaire from './HomeNotaire';
import Inscription from './Inscription';
import Invitation from './Invitation';
import Layout from './app/Layout';
import Questionnaire from './app/Questionnaire';
import Mentionslegales from './Mentionslegales';
import Cgv from './Cgv';
import DemoNotaire from './DemoNotaire';
import CalculFraisNotaire from './blog/CalculFraisNotaire';

export const userInfoContext = createContext();

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  console.log("path", window.location.pathname );

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
            <Route path="notaire" element={<HomeNotaire />} user={userInfo} />
            <Route path="inscription" element={<Inscription />} user={userInfo} />
            <Route path="connexion" element={<Invitation />} user={userInfo} />
            <Route path="app" element={<Layout />} user={userInfo} />
            <Route path="onboard" element={<Questionnaire />} user={userInfo} />
            <Route path="app/dashboard" exact user={userInfo} element={<Layout />}  />
            <Route path="app/bien" exact user={userInfo} element={<Layout />}  />
            <Route path="app/interlocuteurs" exact user={userInfo} element={<Layout />}  />
            <Route path="app/documents" exact user={userInfo} element={<Layout />}  />
            <Route path="app/transaction" exact user={userInfo} element={<Layout />}  />
            <Route path="app/profil" exact user={userInfo} element={<Layout />}  />
            <Route path="mentions-legales" exact user={userInfo} element={<Mentionslegales />}  />
            <Route path="cgv" exact user={userInfo} element={<Cgv />}  />
            <Route path="demo-notaire" exact user={userInfo} element={<DemoNotaire />}  />
            {/** Articles de contenu **/}
            <Route path="/achat-immobilier/calcul-frais-de-notaire" exact user={userInfo} element={<CalculFraisNotaire />}  />
            
            
          </Routes>
        </userInfoContext.Provider>
      </Router>
    </>
  );
};

export default App;
