import React, { useEffect, useState } from 'react';
import { Col, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useMemberstack } from "@memberstack/react";
import styled from "styled-components";
import classnames from 'classnames';
import Dashboard from './Dashboard';
import Bien from './Bien';
import Interlocuteurs from './Interlocuteurs';
import Loading from '../components/Loading';

//style & icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'


const LayoutS = styled.div`
  background-color:#F6F5F4;
  padding-top:5rem;
`;

const ColMenu = styled(Col)`
  background-color:#FFF;
  min-height:100vh;
  ul{
    padding:.5rem;
    li.nav-item{   
    }
  }
  a.nav-link{
    color:#000;
    font-size:18px;
    transition:all ease .5s;
    cursor: pointer;
    svg{
        margin-right:16px;
    }
        &:hover,&.active{
            background-color:#F7F3EF;
        }
  }
`;

const ColContent = styled(Col)`
  padding:2rem;
`;


function Layout(args, props) {
    const memberstack = useMemberstack();
    const [member, setMember] = useState(null);
    const [user, setUser] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [bien, setBien] = useState(null);
    const [evenement,setEvenement] = useState(null);
    const [loading, setLoading] = useState(false);

    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }
//get info memberstack
    useEffect(() => {
        fetchDataMemberstack();
    }, []);

    //get info user airtable
    useEffect(() => {
        //avec les info memberstack on recupere les info user airtable
        //console.log("seulement si member est update");
        if (member !== null) {
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
        if (user !== null) {
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
        if (transaction !== null) {
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
        if (transaction !== null) {
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

    //console.log("member", member);
    //console.log("user", user);
    //console.log("transaction", transaction);
    //console.log("bien", bien);

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


    if (user !== null & transaction !== null & bien !== null & evenement !== null) {
        return (
            <LayoutS>
                <Row>
                    <ColMenu md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active:
                                            currentActiveTab === '1'
                                    })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Tableau de bord
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({
                                    active:
                                        currentActiveTab === '2'
                                })}
                                    onClick={() => { toggle('2'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Bien
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({
                                    active:
                                        currentActiveTab === '3'
                                })}
                                    onClick={() => { toggle('3'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Interlocuteurs
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({
                                    active:
                                        currentActiveTab === '4'
                                })}
                                    onClick={() => { toggle('4'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Documents
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({
                                    active:
                                        currentActiveTab === '5'
                                })}
                                    onClick={() => { toggle('5'); }} >
                                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Transactions
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </ColMenu>
                    <ColContent md="10">
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Dashboard user={user} evenement={evenement} />
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
                                        <h5>Documents</h5>
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
    return (
        <>
            <Loading />
        </>
    )

}

export default Layout;