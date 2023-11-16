import React  from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
//page
import Home from './Home';
import HomeAgent from './HomeAgent';
import Layout from './app/Layout';
//components
import Navbar  from './components/Navbar';


//style


const App = () => {
  return (
    <> <Router>
      <Navbar/>
      <Routes>
      <Route index element={<Home />} />
      <Route path="agent-immobilier" element={<HomeAgent />} />
      <Route path="app" element={<Layout />} />
      </Routes>
      
      
      
    </Router>
    </>
  );
};



export default App;
