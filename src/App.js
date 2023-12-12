import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes,useLocation
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

//page
import Home from './Home';
import HomeAgent from './HomeAgent';
import Layout from './app/Layout';
import Questionnaire from './app/Questionnaire';
//components
import Navbar from './components/Navbar';

export const userInfoContext = createContext();

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  
  return (
    <>

      <Router>
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
        
                {window.location.pathname === "/app" ? "" : <Navbar user={userInfo} />}
          
          <Routes>
            <Route index element={<Home />} user={userInfo} />
            <Route path="agent-immobilier" element={<HomeAgent />} user={userInfo} />
            <Route path="app" element={<Layout />} user={userInfo} />
            <Route path="onboard" element={<Questionnaire />} user={userInfo} />
          </Routes>
        </userInfoContext.Provider>
      </Router>

    </>
  );
};





export default App;
