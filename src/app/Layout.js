import React, { useState } from 'react';
import { Col, Row, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import styled from "styled-components";
import classnames from 'classnames';
import Dashboard from './Dashboard'

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
    padding:2rem;
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


function Layout(args) {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <LayoutS>
            <Row>
                <ColMenu md="3">
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
                                    currentActiveTab === '2'
                            })}
                                onClick={() => { toggle('2'); }} >
                                <FontAwesomeIcon icon={faHome} className='mr-3' /> Interlocuteurs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({
                                active:
                                    currentActiveTab === '2'
                            })}
                                onClick={() => { toggle('2'); }} >
                                <FontAwesomeIcon icon={faHome} className='mr-3' /> Documents
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({
                                active:
                                    currentActiveTab === '2'
                            })}
                                onClick={() => { toggle('2'); }} >
                                <FontAwesomeIcon icon={faHome} className='mr-3' /> Transactions
                            </NavLink>
                        </NavItem>
                    </Nav>
                </ColMenu>
                <ColContent md="9">
                    <TabContent activeTab={currentActiveTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Dashboard />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <h5>Sample Tab 2 Content</h5>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <h5>Sample Tab 3 Content</h5>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </ColContent>
            </Row>
        </LayoutS>
    );
}

export default Layout;