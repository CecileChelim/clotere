import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {MemberstackProvider} from "@memberstack/react"; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme from "./Theme";
import { GlobalStyle } from "./style/GlobalStyle";

const config = { publicKey: "pk_sb_e8fdd7a0fda2ede10dee" }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Theme>
  <React.StrictMode>
   <MemberstackProvider config={config}>
    <App />
    </MemberstackProvider>
    <GlobalStyle />
  </React.StrictMode>
  </Theme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
