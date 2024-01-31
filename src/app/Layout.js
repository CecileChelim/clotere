import React, { useEffect, useState } from 'react';
import { Col, Row, Nav, NavItem, NavLink, TabContent, TabPane, Navbar, NavbarBrand, Collapse, NavbarToggler, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useMemberstack } from "@memberstack/react";
import styled from "styled-components";
import Dashboard from './Dashboard';
import Bien from './Bien';
import Interlocuteurs from './Interlocuteurs';
import Documents from './Documents';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import icnDash from '../img/icn-dashboard.svg';
import icnBien from '../img/icn-home.svg';
import icnDoc from '../img/icn-doc.svg';
import icnUser from '../img/icn-user.svg';
import icnTransac from '../img/icn-transac.svg';
import icnLogo from '../img/icn-logo.svg';


const LayoutS = styled.div`
  background-color:#E0EEEE;
`;

const ColMenu = styled(Col)`
  background-color:#FFF;
  min-height:100vh;
  ul{
    padding:20px;
    position: fixed;
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
    .navbar{display:block}
    min-height:auto!important;
  }
  .profilItem{
    position:absolute;
    bottom:1rem;
  }
`;

const ColContent = styled(Col)`
    padding : 3rem 2rem;
`;


function Layout(args, props) {
    const memberstack = useMemberstack();
    const [member, setMember] = useState(null);
    const [user, setUser] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [bien, setBien] = useState(null);
    const [evenement, setEvenement] = useState(null);
    const [activite, setActivite] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const toggle = tab => { if (currentActiveTab !== tab) setCurrentActiveTab(tab); }
    const [collapsed, setCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleProfil = () => setDropdownOpen((prevState) => !prevState);

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
        }
        else if (window.location.pathname === "/app/profil") {
            setCurrentActiveTab("5")
        } else {
            setCurrentActiveTab("1")
        }
    }, []);

    //get info memberstack
    useEffect(() => {
        fetchDataMemberstack();
    }, []);


    //get info user airtable
    useEffect(() => {
        //avec les info memberstack on recupere les info user airtable
        //console.log("seulement si member est update");
        if (member !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/user/${member.metaData.airtable_id}`;

            return fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer keyOJASKOIpyF1ACT",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("this user info", res);
                    setUser(res.fields);
                })
                .catch((error) => console.log(error));
        }
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
                        Authorization: "Bearer keyOJASKOIpyF1ACT",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("transaction info", res);
                    setTransaction(res.fields);
                })
                .catch((error) => console.log("transaction info error", error),);
        }

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
                        Authorization: "Bearer keyOJASKOIpyF1ACT",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    //console.log("bien info", res);
                    setBien(res.fields);
                })
                .catch((error) => console.log("bien info error", error),);
        }

    }, [transaction]);

    //get info event
    useEffect(() => {
        //on recupere les event de la transaction
        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/event?filterByFormula=SEARCH("${transaction.id}",{transaction})`;

            return fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer keyOJASKOIpyF1ACT",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log("all event transaction", res.records);
                    setEvenement(res.records);
                })
                .catch((error) => console.log(error));
        }
    }, [transaction]);

    //get info activite
    useEffect(() => {
        //on recupere les activite de la transaction
        if (transaction !== null && member.metaData.airtable_id !== undefined) {
            const URL = `https://api.airtable.com/v0/appD48APNaGA4GN0B/activite?filterByFormula=SEARCH("${transaction.id}",{transaction})`;

            return fetch(
                URL,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer keyOJASKOIpyF1ACT",
                        'content-type': 'application/x-www-form-urlencoded',
                        "Accept": "application/json, text/plain, /"
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log("all event transaction", res.records);
                    setActivite(res.records);
                })
                .catch((error) => console.log(error));
        }
    }, [transaction]);

    //console.log("member", member);
    //console.log("user", user);
    //console.log("transaction", transaction);
    //console.log("bien", bien);
    //console.log("activite", activite);

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


    if (user !== null & transaction !== null & bien !== null & evenement !== null & activite !== null) {
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
                            <NavItem>
                                <Link
                                    to="/app/transaction"
                                    className={`nav-link  ${window.location.pathname === "/app/transaction" ? "active" : ""}`}
                                    onClick={() => { toggle('5'); }} >
                                    <img src={icnTransac} alt="tableau de bord"/>Transactions
                                </Link>
                            </NavItem>
                        </Nav>
                    </ColMenu>
                    <ColContent md="10">
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Dashboard transactionName={transaction.nom} user={user} evenement={evenement} activite={activite} />
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
                                        <h5>Transactions</h5>
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
                        {/** Navbar mobile **/}
                        <Navbar color="faded" light>
                            <NavbarBrand className="me-auto">
                                <NavLink onClick={() => { toggle('1'); }}>
                                    <b>Clotere</b>
                                </NavLink>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} className="me-2" />
                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar>
                                    <NavItem className='brand'>
                                        <NavLink
                                            onClick={() => { toggle('1'); }}
                                        >
                                            <b>Clotere</b>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/dashboard"

                                            className={`nav-link  ${window.location.pathname === "/app/dashboard" ? "active" : ""} ${window.location.pathname === "/app" ? "active" : ""}`}

                                            onClick={() => { toggle('1'); }}
                                        >
                                            <FontAwesomeIcon icon={faHome} className='mr-3' /> Tableau de bord
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/bien"
                                            className={`nav-link  ${window.location.pathname === "/app/bien" ? "active" : ""}`}
                                            onClick={() => { toggle('2'); }} >
                                            <FontAwesomeIcon icon={faHome} className='mr-3' /> Bien
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/interlocuteurs"
                                            className={`nav-link  ${window.location.pathname === "/app/interlocuteurs" ? "active" : ""}`}
                                            onClick={() => { toggle('3'); }} >
                                            <FontAwesomeIcon icon={faHome} className='mr-3' /> Interlocuteurs
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/documents"
                                            className={`nav-link  ${window.location.pathname === "/app/documents" ? "active" : ""}`}
                                            onClick={() => { toggle('4'); }} >
                                            <FontAwesomeIcon icon={faHome} className='mr-3' /> Documents
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/app/transaction"
                                            className={`nav-link  ${window.location.pathname === "/app/transaction" ? "active" : ""}`}
                                            onClick={() => { toggle('5'); }} >
                                            <FontAwesomeIcon icon={faHome} className='mr-3' /> Transactions
                                        </Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        {/** Navbar desktop **/}
                        <Nav vertical className='menuSidebar'>
                            <NavItem className='brand'>
                                <NavLink
                                    onClick={() => { toggle('1'); }}
                                >
                                    <b>Clotere</b>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/dashboard"

                                    className={`nav-link  ${window.location.pathname === "/app/dashboard" ? "active" : ""} ${window.location.pathname === "/app" ? "active" : ""}`}

                                    onClick={() => { toggle('1'); }}
                                >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Tableau de bord
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/bien"
                                    className={`nav-link  ${window.location.pathname === "/app/bien" ? "active" : ""}`}
                                    onClick={() => { toggle('2'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Bien
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/interlocuteurs"
                                    className={`nav-link  ${window.location.pathname === "/app/interlocuteurs" ? "active" : ""}`}
                                    onClick={() => { toggle('3'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Interlocuteurs
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/documents"
                                    className={`nav-link  ${window.location.pathname === "/app/documents" ? "active" : ""}`}
                                    onClick={() => { toggle('4'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Documents
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/app/transaction"
                                    className={`nav-link  ${window.location.pathname === "/app/transaction" ? "active" : ""}`}
                                    onClick={() => { toggle('5'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Transactions
                                </Link>
                            </NavItem>
                            <NavItem>
                                {member && (
                                    <>
                                        <Dropdown isOpen={dropdownOpen} toggle={toggleProfil}>
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
                            </NavItem>
                        </Nav>
                    </ColMenu>
                    <ColContent md="10">
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        Composant new user
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