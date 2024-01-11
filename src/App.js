import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

//page
import Home from './Home';
import HomeAgent from './HomeAgent';
import Inscription from './Inscription';
import Invitation from './Invitation';
import Layout from './app/Layout';
import Questionnaire from './app/Questionnaire';
//components
import Navbar from './components/Navbar';

export const userInfoContext = createContext();



const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  console.log("path", window.location.pathname )

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
      return <Navbar user={userInfo} />;
    }
  }
  
  return (
    <>

      <Router>
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
        
                {getNavbar()}
          
          <Routes>
            <Route index element={<Home />} user={userInfo} />
            <Route path="agent-immobilier" element={<HomeAgent />} user={userInfo} />
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
          </Routes>
        </userInfoContext.Provider>
      </Router>

    </>
  );
};





export default App;
