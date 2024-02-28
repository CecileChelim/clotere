import React, { useState, useEffect } from "react";
import { useMemberstack } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
import { Link } from 'react-router-dom';
import {
  List, Col, Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Navbar, Collapse, NavbarToggler, Nav
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
  .dropdown {
    button{background-color: transparent;border: 0;color: black;}
  }
}
`;

const LinkEspaceClient = styled.a`
font-weight: 500;
    background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #1DF36C 50%);
`;
const LinkNotaire = styled.a`
transition:all ease .5s;
text-decoration:none;
padding: 0.5rem;
font-size: 18px;
font-weight: 300;
color: #000000;
&:hover{
  color:${props => props.theme.colors.main};
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
  const { openModal } = useMemberstackModal();
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

      {window.innerWidth >= 768 ? <NavS className="d-flex fixed flex-wrap align-items-center justify-content-center justify-content-md-between">
        <Col md="3" className="mb-2 mb-md-0 text-start">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none brand">
            <img src={ClotereLogo} width="150px" alt="Clotere" />
          </Link>
        </Col>
        <Col md="4" align="center">
        <Link to="/achat-immobilier/calcul-frais-de-notaire">Calculer vos frais de notaire</Link>
        </Col>

        <Col md="5" className="d-flex  justify-content-end">
          <LinkNotaire href="https://notaire.clotere.fr" target="blank">Notaire ? Par ici</LinkNotaire>
          <div className="d-flex p-2">
            {member ? <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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
            </Dropdown> : <>
              <LinkEspaceClient
                className="nav-link px-2"
                onClick={() =>
                  openModal({
                    type: "LOGIN"
                  }).then(({ data, type }) => {
                    if (type === "LOGIN") {
                      setMember(member);
                      navigate("/app");
                    } else if (type === "REGISTER") {
                      navigate("/onboard");
                    }
                    memberstack.hideModal();
                  })
                }><b>Espace client</b></LinkEspaceClient>
            </>}

          </div>
        </Col>
      </NavS> : <NavMobileS className="d-flex fixed flex-wrap align-items-center  justify-content-between">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none brand">
          <img src={ClotereLogo} width="150px" alt="Clotere" />
        </Link>
        <NavbarToggler onClick={toggle2} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <List className="nav d-flex flex-column justify-content-center mb-md-0">
              <li><a href="https://notaire.clotere.fr" target="blank" className="nav-link px-2">Vous êtes notaire ? Par ici</a></li>
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
                <LinkEspaceClient
                  className="nav-link px-2"
                  onClick={() =>
                    openModal({
                      type: "LOGIN"
                    }).then(({ data, type }) => {
                      console.log('data', data);
                      console.log('type: ', type);
                      if (type === "LOGIN") {
                        console.log("login");
                        setMember(member);
                        navigate("/app");
                      } else if (type === "REGISTER") {
                        console.log("REGISTER");
                        navigate("/onboard");
                      }
                      memberstack.hideModal();
                    })
                  }>Espace client</LinkEspaceClient>
              </>
            )}
          </Nav>
        </Collapse>
      </NavMobileS>}
    </>
  );
}

export default Navigation;