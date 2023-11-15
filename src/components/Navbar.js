import React, { useState } from 'react';
import {
    
    Container,List,Col
} from 'reactstrap';

function Example(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container>
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <Col md="3" className="mb-2 mb-md-0 text-start">
                        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                            Acteo
                        </a>
                    </Col>

                    <List className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 link-secondary">Lien 1</a></li>
                        <li><a href="#" class="nav-link px-2">Lien 2</a></li>
                        <li><a href="#" class="nav-link px-2">Vous êtes agent immobilier ?</a></li>
                    </List>

                    <Col md="3" className="text-end">
                        <button type="button" class="btn btn-outline-primary me-2">Connexion</button>
                        <button type="button" class="btn btn-primary">Inscription</button>
                    </Col>
                </header>
            </Container>
        </div>
    );
}

export default Example;