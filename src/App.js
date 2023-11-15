import React  from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
//page
import Home from './Home';
import HomeAgent from './HomeAgent';
//components
import Navbar  from './components/Navbar';
import Header from './components/Header';

//style


const App = () => {
  return (
    <> <Router>
    
   
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/agent-immobilier" component={HomeAgent} />
      </Routes>
      <Navbar/>
      
      <Header/>
    </Router>
    </>
  );
};

export default App;
