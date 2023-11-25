import React, { useState, useEffect } from "react";
import { useMemberstack } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
import { Link } from 'react-router-dom';
import { List, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
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

function Navigation(args, props) {
  const memberstack = useMemberstack();
  const { openModal, hideModal } = useMemberstackModal();
  const [member, setMember] = useState(null);
  const navigate = useNavigate();

  
useEffect(() => {
    if (member === null) {
      memberstack.getCurrentMember()
        .then(({ data: member }) => setMember(member))
    }
  }, []);

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
          {member && (
            <>
              <a className="nav-link"
                href="#"
                onClick={() =>
                  memberstack.logout()
                    .then(({ data, type }) => {
                      window.location.replace('/');
                    })}
              >
                Deconnexion
              </a>
              <a
                outline
                className="mr-2 cta"
                type="button"
                href="/admin"
              >
                {member.auth.email}
              </a>
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
                if (type === "LOGIN"){
                  console.log("login");
                  hideModal();
                  setMember(member);
                  navigate("/app");
                }else if(type === "REGISTER"){
                  console.log("REGISTER");
                  hideModal();
                  navigate("/onboard");
                }
                hideModal();
            })
        }>Connexion</Link>
        </>
          )}
          

        </Col>
      </NavS>
    </div>
  );
}

export default Navigation;