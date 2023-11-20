import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { List, Col,Button } from 'reactstrap';
import styled from "styled-components";

const NavS = styled.div`
  
  .brand{
    font-size:22px;
    font-weight:500;
  }

  a{
    font-size:18px;
    font-weight:300;
    color:#000000;
  }
`;

function Example(args,props) {

  return (
    <div>
      <NavS className="p-5  fixed-top d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Col md="3" className="mb-2 mb-md-0 text-start">
          <Link to="/" class="d-inline-flex link-body-emphasis text-decoration-none brand">
            Acteo
          </Link>
        </Col>

        <List className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2">home</Link></li>
          <li><Link to="/agent-immobilier" className="nav-link px-2">Agent immobilier</Link></li>
        </List>

        <Col md="3" className="text-end">
          <Link to="/onboard" className="nav-link px-2">Inscription</Link>
          
        </Col>
      </NavS>
    </div>
  );
}

export default Example;