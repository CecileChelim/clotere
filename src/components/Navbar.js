import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container,List,Col} from 'reactstrap';
import styled from "styled-components";

const NavS = styled.header`
  
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

function Example(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container>
                <NavS className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <Col md="3" className="mb-2 mb-md-0 text-start">
                        <Link to="/" class="d-inline-flex link-body-emphasis text-decoration-none brand">
                            Acteo
                        </Link>
                    </Col>

                    <List className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/home" className="nav-link px-2">home</Link></li>
                        <li><Link to="/agent-immobilier"  className="nav-link px-2">Agent immobilier</Link></li>
                    </List>

                    <Col md="3" className="text-end">
                    <Link to="/home" className="nav-link px-2">Inscription</Link>
                    </Col>
                </NavS>
            </Container>
        </div>
    );
}

export default Example;