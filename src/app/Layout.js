import React, { useEffect, useState } from 'react';
import { Col, Row, Nav, NavItem, NavLink, TabContent, TabPane, Navbar, NavbarBrand, Collapse, NavbarToggler} from 'reactstrap';
import { useMemberstack } from "@memberstack/react";
import styled from "styled-components";
import Dashboard from './Dashboard';
import Bien from './Bien';
import Interlocuteurs from './Interlocuteurs';
import Documents from './Documents';
import Profil from './Profil';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

//style & icone
import icnDash from '../img/icn-dashboard.svg';
import icnBien from '../img/icn-home.svg';
import icnDoc from '../img/icn-doc.svg';
import icnUser from '../img/icn-user.svg';
import icnLogo from '../img/icn-logo.svg';
import Logo from '../img/logo-clotere.svg';


function Layout(args, props) {
    const memberstack = useMemberstack();
    const [member, setMember] = useState(null);
    const [user, setUser] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [bien, setBien] = useState(null);
    const [evenement, setEvenement] = useState(null);
    const [action, setAction] = useState(null);
    const [activite, setActivite] = useState(null);
    const [rdv, setRdv] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const toggle = tab => { if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    //active tabs with route
    useEffect(() => {
        if (window.location.pathname === "/app/dashboard") {
            setCurrentActiveTab("1")
        } else if (window.location.pathname === "/app/bien") {
            setCurrentActiveTab("2")
        } else if (window.location.pathname === "/app/interlocuteurs") {
            setCurrentActiveTab("3")
        } else if (window.location.pathname === "/app/documents") {
            setCurrentActiveTab("4")
        }else if (window.location.pathname === "/app/profil") {
            setCurrentActiveTab("5")
        } else {
            setCurrentActiveTab("1")
        }
    }, []);

    //get info memberstack
    useEffect(() => {
        fetchDataMemberstack();
        // eslint-disable-next-line
    }, []);


    //get info user airtable
    useEffect(() => {
        //avec les info memberstack on recupere les info user airtable
        //console.log("seulement si member est update");
        if (member !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${member.metaData.airtable_id}`;

            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log("this user info", res);
                    setUser(res.fields);
                })
                .catch((error) => console.log(error));
        }
        // eslint-disable-next-line
    }, [loading]);

    //get info transaction
    useEffect(() => {
        //on recupere toutes les informations du dossier
        if (user !== null && member.metaData.airtable_id !== undefined) {
            //La transaction
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/transaction/${user.transaction_id}`;
            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log("transaction info", res);
                    setTransaction(res.fields);
                })
                .catch((error) => console.log("transaction info error", error),);
        }
// eslint-disable-next-line
    }, [user]);

    //get info bien
    useEffect(() => {
        //on recupere toutes les informations du dossier
        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            //Le bien
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/bien/${transaction.bien}`;
            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        "Accept": "application/json"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("bien info", res);
                    setBien(res.fields);
                })
                .catch((error) => console.log("bien info error", error),);
        }

// eslint-disable-next-line
    }, [transaction]);

    //get info event
    useEffect(() => {
        //on recupere les event de la transaction
        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/event?filterByFormula=SEARCH("${transaction.id}",{transaction})`;

            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("all event transaction", res.records);
                    setEvenement(res.records);
                })
                .catch((error) => console.log(error));
        }
    // eslint-disable-next-line
    }, [transaction]);

    //get info action
    useEffect(() => {
        //on recupere les action de la transaction

        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/actions?filterByFormula=SEARCH("${transaction.id}",{transaction})`;
            //const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/actions?filterByFormula=SEARCH("${transaction.id}",{transaction},"${user.role}",{acteur})`;
            
            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log("all event action", res.records);
                    const actionNonTrie = res.records;
                    actionNonTrie.sort((a, b) => (a.fields.ordre > b.fields.ordre) ? 1 : -1);
                    

                    const actionVendeur = [];
                    const actionAcheteur = [];
                    for (let i = 0; i < actionNonTrie.length; i++) {
                        if (actionNonTrie[i].fields.acteur === "vendeur") {
                            actionVendeur.push({
                            nom: actionNonTrie[i].fields.nom,
                            statut: actionNonTrie[i].fields.statut,
                            id: actionNonTrie[i].fields.id
                        });
                        } else if (actionNonTrie[i].fields.acteur === "acheteur") {
                            actionAcheteur.push({
                                nom: actionNonTrie[i].fields.nom,
                                statut: actionNonTrie[i].fields.statut,
                                id: actionNonTrie[i].fields.id
                        });
                        }
                    }
                    console.log("action vendeur ", actionVendeur);
                    console.log("action acheteur ", actionAcheteur);
                    if(user.role === "vendeur")
                    {setAction(actionVendeur);}
                    else if(user.role === "acheteur")
                    {setAction(actionAcheteur);}
                    
                })
                .catch((error) => console.log(error));
        }
    // eslint-disable-next-line
    }, [transaction]);

    //get info activite
    useEffect(() => {
        //on recupere les activite de la transaction
        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/activite?filterByFormula=SEARCH("${transaction.id}",{transaction})`;

            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("all event transaction", res.records);
                    setActivite(res.records);
                })
                .catch((error) => console.log(error));
        }
    // eslint-disable-next-line
    }, [transaction]);

    //get info rdv
    useEffect(() => {
        //on recupere les rdv de la transaction
        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/rdv?filterByFormula=SEARCH("${transaction.id}",{transaction})`;

            fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer patfRIUbOM9xqwLV2.dfbc9a305f2124aff75634c819a8335ecd984b1d19e98f67f14013378ed6bb02",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("all rdv transaction", res.records);
                    setRdv(res.records);
                })
                .catch((error) => console.log(error));
        }
    // eslint-disable-next-line
    }, [transaction]);

   

    //console.log("member", member);
    //console.log("user", user);
    //console.log("transaction", transaction);
    //console.log("bien", bien);
    //console.log("activite", activite);
    //console.log("rdv",rdv);
    //console.log("action",action);

    const fetchDataMemberstack = () => {
        setLoading(true);
        memberstack.getCurrentMember()
            .then(({ data: member }) => setMember(member))
            .then((data) => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };


    if (user !== null & transaction !== null & bien !== null & evenement !== null & activite !== null  & rdv !== null & action !== null ) {
        return (
            <LayoutS>
                <Row>
                    <ColMenu md="2">
                        
                        {/** Navbar desktop **/}
                        <Nav vertical className='menuSidebar'>
                            <NavItem className='brand'>
                                <NavLink
                                    onClick={() => { toggle('1'); }}
                                >
                                    <img src={icnLogo} alt="Clotere"/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/dashboard"

                                    className={`nav-link  ${window.location.pathname === "/app/dashboard" ? "active" : ""} ${window.location.pathname === "/app" ? "active" : ""}`}

                                    onClick={() => { toggle('1'); }}
                                >
                                    <img src={icnDash} alt="tableau de bord"/> Tableau de bord
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/bien"
                                    className={`nav-link  ${window.location.pathname === "/app/bien" ? "active" : ""}`}
                                    onClick={() => { toggle('2'); }} >
                                    <img src={icnBien} alt="tableau de bord"/> Bien
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/interlocuteurs"
                                    className={`nav-link  ${window.location.pathname === "/app/interlocuteurs" ? "active" : ""}`}
                                    onClick={() => { toggle('3'); }} >
                                    <img src={icnUser} alt="tableau de bord"/> Interlocuteurs
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/documents"
                                    className={`nav-link  ${window.location.pathname === "/app/documents" ? "active" : ""}`}
                                    onClick={() => { toggle('4'); }} >
                                    <img src={icnDoc} alt="tableau de bord"/> Documents
                                </Link>
                            </NavItem>
                            
                            <NavItem className='profil'>
                                <Link
                                    to="/app/profil"
                                    className={`nav-link  ${window.location.pathname === "/app/profil" ? "active" : ""}`}
                                    onClick={() => { toggle('5'); }} >Profil
                                </Link>
                            </NavItem>
                             
                            <NavItem className='logout'>
                                <Link
                                className="nav-link"
                                    onClick={() =>
                                        memberstack.logout()
                                          .then(({ data, type }) => {
                                            window.location.replace('/');
                                          })} >
                                    Se déconnecter
                                </Link>
                            </NavItem>
                        </Nav>

                        {/** Navbar mobile **/}
                        <Navbar>
                        <NavbarBrand className="me-auto">
                                <img src={Logo} alt="Clotere" className='imgBrand'/>
                            </NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="me-2" />
                            <Collapse isOpen={!collapsed} navbar>
                                <Nav vertical>
                                    <NavItem>
                                        <Link
                                            to="/app/dashboard"
                                            className={`${window.location.pathname === "/app/dashboard" ? "active" : ""} ${window.location.pathname === "/app" ? "active" : ""}`}
                                            onClick={() => {
                                                toggle('1');
                                                toggleNavbar();
                                              }}
                                        >
                                            <img src={icnDash} alt="tableau de bord"/> Tableau de bord
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/bien"
                                            className={`${window.location.pathname === "/app/bien" ? "active" : ""}`}
                                            onClick={() => { toggle('2');toggleNavbar(); }} >
                                            <img src={icnBien} alt="bien"/> Bien
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/interlocuteurs"
                                            className={`${window.location.pathname === "/app/interlocuteurs" ? "active" : ""}`}
                                            onClick={() => { toggle('3');toggleNavbar(); }} >
                                            <img src={icnUser} alt="interlocuteurs"/> Interlocuteurs
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/documents"
                                            className={`${window.location.pathname === "/app/documents" ? "active" : ""}`}
                                            onClick={() => { toggle('4');toggleNavbar(); }} >
                                            <img src={icnDoc} alt="documents"/> Documents
                                        </Link>
                                    </NavItem>
                                    {/**
                                    <NavItem>
                                        <Link
                                            to="/app/transaction"
                                            className={`${window.location.pathname === "/app/transaction" ? "active" : ""}`}
                                            onClick={() => { toggle('5');toggleNavbar(); }} >
                                            <img src={icnTransac} alt="transactions"/>Transactions
                                        </Link>
                                    </NavItem>
                                     */}
                                    <NavItem className='logout'>
                                        <Link
                                            onClick={() =>
                                                memberstack.logout()
                                                .then(({ data, type }) => {
                                                    window.location.replace('/');
                                                })} >
                                            Se déconnecter
                                        </Link>
                                    </NavItem>
                                </Nav>
                                </Collapse>
                        </Navbar>

                    </ColMenu>
                    <ColContent md="9">
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Dashboard transaction={transaction} user={user} evenement={evenement} activite={activite} rdv={rdv} action={action}/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <Bien user={user} bien={bien} />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <Interlocuteurs user={user} transaction={transaction} />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <Documents user={user} />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Row>
                                    <Col sm="12">
                                    <Profil user={user} />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </ColContent>
                </Row>
            </LayoutS>
        );
    }
    else if (member !== null && member.metaData.airtable_id === undefined) {
        return (
            <LayoutS>
                <Row>
                <ColMenu md="2">
                        
                        {/** Navbar desktop **/}
                        <Nav vertical className='menuSidebar'>
                            <NavItem className='brand'>
                                <NavLink
                                    onClick={() => { toggle('1'); }}
                                >
                                    <img src={icnLogo} alt="Clotere"/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/dashboard"

                                    className={`nav-link  ${window.location.pathname === "/app/dashboard" ? "active" : ""} ${window.location.pathname === "/app" ? "active" : ""}`}

                                    onClick={() => { toggle('1'); }}
                                >
                                    <img src={icnDash} alt="tableau de bord"/> Tableau de bord
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link disable
                                    to="/app/bien"
                                    className={`disabled-link nav-link  ${window.location.pathname === "/app/bien" ? "active" : ""}`}
                                    onClick={() => { toggle('2'); }} >
                                    <img src={icnBien} alt="bien"/> Bien
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/interlocuteurs"
                                    className={`disabled-link nav-link  ${window.location.pathname === "/app/interlocuteurs" ? "active" : ""}`}
                                    onClick={() => { toggle('3'); }} >
                                    <img src={icnUser} alt="interlocuteurs"/> Interlocuteurs
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/documents"
                                    className={`disabled-link nav-link  ${window.location.pathname === "/app/documents" ? "active" : ""}`}
                                    onClick={() => { toggle('4'); }} >
                                    <img src={icnDoc} alt="documents"/> Documents
                                </Link>
                            </NavItem>
                             
                            <NavItem className='logout'>
                                <Link
                                className="nav-link"
                                    onClick={() =>
                                        memberstack.logout()
                                          .then(({ data, type }) => {
                                            window.location.replace('/');
                                          })} >
                                    Se déconnecter
                                </Link>
                            </NavItem>
                        </Nav>

                        {/** Navbar mobile **/}
                        <Navbar>
                        <NavbarBrand className="me-auto">
                                <img src={Logo} alt="Clotere" className='imgBrand'/>
                            </NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="me-2" />
                            <Collapse isOpen={!collapsed} navbar>
                                <Nav vertical>
                                    <NavItem>
                                        <Link
                                            to="/app/dashboard"
                                            className={`${window.location.pathname === "/app/dashboard" ? "active" : ""} ${window.location.pathname === "/app" ? "active" : ""}`}
                                            onClick={() => {
                                                toggle('1');
                                                toggleNavbar();
                                              }}
                                        >
                                            <img src={icnDash} alt="tableau de bord"/> Tableau de bord
                                        </Link>
                                    </NavItem>
                                    
                                    <NavItem className='logout'>
                                        <Link
                                            onClick={() =>
                                                memberstack.logout()
                                                .then(({ data, type }) => {
                                                    window.location.replace('/');
                                                })} >
                                            Se déconnecter
                                        </Link>
                                    </NavItem>
                                </Nav>
                                </Collapse>
                        </Navbar>

                    </ColMenu>
                    <ColContent md="10">
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row>
                                <Col sm="12">
                                        <Dashboard info="newUser"/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </ColContent>
                </Row>
            </LayoutS>
        )
    }
    return (
        <>
            <Loading />
        </>
    )

}

export default Layout;

const LayoutS = styled.div`
  background-color:#E0EEEE;
`;

const ColMenu = styled(Col)`
  background-color:#FFF;
  min-height:100vh;
  ul{
    padding:20px;
    //position: fixed;
    margin-left: 1rem;
    li.brand{
        background-color: transparent;  
        a img{width:70px!important;}
    }
  }
  a.nav-link{
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#000;
    font-size:18px;
    transition:all ease .5s;
    cursor: pointer;
    border-radius:16px;
    margin-bottom:15px;
    padding:20px;
    &:hover,&.active{background-color:#EAF3F2;}
    img{
        width:30px;
        height:30px;
        margin-bottom:15px;
    }
  }
  .navbar{display:none;}
  @media all and (max-width: 768px) {
    ul.menuSidebar{ display:none;}
    .navbar{
        display:block;
        .navbar-collapse{padding:0;margin:0;}
        .imgBrand{ width: auto;height: 30px;margin-bottom: 0;}
        ul{padding:0;}
        li.nav-item{
            padding:1rem 0;border-bottom:1px solid #ddd;
            img{
                height:30px;
                margin-right:.5rem;
            }
            a{text-decoration:none;}
        }
    }
    min-height:auto!important;
  }
  .profilItem{
    position:absolute;
    bottom:1rem;
  }
  a.disabled-link {
    pointer-events: none;
    opacity: .2;
  }
`;

const ColContent = styled(Col)`
    padding : 3rem 5rem;
`;