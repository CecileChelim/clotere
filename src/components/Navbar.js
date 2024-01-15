import React, { useState, useEffect } from "react";
import { useMemberstack } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
import { Link } from 'react-router-dom';
import {
  List, Col, Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Navbar,Collapse,NavbarToggler,Nav
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ClotereLogo from "../img/logo-clotere.svg";

const NavS = styled(Navbar)`
  background-color:transparent;
  padding:2rem 3rem 4rem 3rem;
    margin-right: auto;
    margin-left: auto;
  .brand{
    font-size:22px;
    font-weight:500;
    height: 30px!important;
  }
  a{
    font-size:18px;
    font-weight:300;
    color:#000000;
  }
  @media (max-width: 768px){
    display: none!important;
  } 
}
`;

const NavMobileS = styled(Navbar)`
display:none!important;
@media (max-width: 768px){
  display: flex!important;
  padding: 1rem;
  margin-bottom: 3rem;
} 
.collapse{
  background-color: white;
    padding: 1rem;
    margin-top: 1rem;
    a{
      color:${props => props.theme.colors.black};
    }
}
}
`;


function Navigation(args, props) {
  const memberstack = useMemberstack();
  const { openModal, hideModal } = useMemberstackModal();
  const [member, setMember] = useState(null);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [isOpen, setIsOpen] = useState(false);
  const toggle2 = () => setIsOpen(!isOpen);


  useEffect(() => {
    if (member === null) {
      memberstack.getCurrentMember()
        .then(({ data: member }) => setMember(member))
    }
  }, []);

  return (
    <>
    <NavS className="d-flex fixed flex-wrap align-items-center justify-content-center justify-content-md-between">
        <Col md="3" className="mb-2 mb-md-0 text-start">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none brand">
            <img src={ClotereLogo} width="150px" alt="Clotere" />
          </Link>
        </Col>
        
        <List className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2">Accueil</Link></li>
          <li><Link to="/notaire" className="nav-link px-2">Vous êtes notaire ?</Link></li>
        </List>

        <Col md="3" className="d-flex  justify-content-end">
          {member && (
            <>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>{member.auth.email}</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem>
                    <Link to="/app/dashboard">Dashboard</Link>
                  </DropdownItem>
                  <DropdownItem text><Link to="/app/profil">Profil</Link></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem><a className="nav-link"
                    href="#"
                    onClick={() =>
                      memberstack.logout()
                        .then(({ data, type }) => {
                          window.location.replace('/');
                        })}
                  >
                    Deconnexion
                  </a></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
          {!member && (
            <>
              <Link
                className="nav-link px-2"
                onClick={() =>
                  openModal({
                    type: "LOGIN"
                  }).then(({ data, type }) => {
                    console.log('data', data);
                    console.log('type: ', type);
                    if (type === "LOGIN") {
                      console.log("login");
                      hideModal();
                      setMember(member);
                      navigate("/app");
                    } else if (type === "REGISTER") {
                      console.log("REGISTER");
                      hideModal();
                      navigate("/onboard");
                    }
                    hideModal();
                  })
                }><u><b>Espace client</b></u></Link>
            </>
          )}
        </Col>
    </NavS>
    <NavMobileS className="d-flex fixed flex-wrap align-items-center  justify-content-between">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none brand">
            <img src={ClotereLogo} width="150px" alt="Clotere" />
          </Link>
        <NavbarToggler onClick={toggle2} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <List className="nav d-flex flex-column justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2">Accueil</Link></li>
              <li><Link to="/notaire" className="nav-link px-2">Vous êtes notaire ?</Link></li>
            </List>
            {member && (
            <>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>{member.auth.email}</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem>
                    <Link to="/app/dashboard">Dashboard</Link>
                  </DropdownItem>
                  <DropdownItem text><Link to="/app/profil">Profil</Link></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem><a className="nav-link"
                    href="#"
                    onClick={() =>
                      memberstack.logout()
                        .then(({ data, type }) => {
                          window.location.replace('/');
                        })}
                  >
                    Deconnexion
                  </a></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
          {!member && (
            <>
              <Link
                className="nav-link px-2"
                onClick={() =>
                  openModal({
                    type: "LOGIN"
                  }).then(({ data, type }) => {
                    console.log('data', data);
                    console.log('type: ', type);
                    if (type === "LOGIN") {
                      console.log("login");
                      hideModal();
                      setMember(member);
                      navigate("/app");
                    } else if (type === "REGISTER") {
                      console.log("REGISTER");
                      hideModal();
                      navigate("/onboard");
                    }
                    hideModal();
                  })
                }><u>Espace client</u></Link>
            </>
          )}
            </Nav>
        </Collapse>
    </NavMobileS>
    </>
  );
}

export default Navigation;