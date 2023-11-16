import React  from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
//page
import HomePage from './Home';
import HomeAgentPage from './HomeAgent';
//components
import Navbar  from './components/Navbar';


//style


const App = () => {
  return (
    <> <Router>
      <Navbar/>
      <Routes>
      <Route index element={<HomePage />} />
      <Route path="agent-immobilier" element={<HomeAgentPage />} />
      </Routes>
      
      
      
    </Router>
    </>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function HomeAgent() {
  return (
    <div>
      <h2>HomeAgent</h2>
    </div>
  );
}

export default App;
