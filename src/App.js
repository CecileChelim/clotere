import React  from 'react';
//components
import Navbar  from './components/Navbar';

//style
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { ButtonPrimary } from "./style/Buttons"

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
