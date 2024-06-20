import React from "react";
import { Container} from "reactstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";


export const RechercheParVilleS = styled.div`
 text-align:center;
 padding:3rem 0;
`;
export const ListeVille = styled.div`
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
 gap:.5rem;
 align-items:start;
 justify-content:center;
 a{
 color:${props => props.theme.colors.mainDark};
 text-decoration: none;
    border-radius: 1rem;
    display: inline-block;
    padding: .5rem 1rem;
    line-height: 1.5rem;
    background: #1be4661c;
    margin: 0 1rem 1rem 0;
    font-size:18px;
    transition: all ease .5s;
    &:hover{
    background-color:${props => props.theme.colors.main};
    
    }
    }
`;


function RechercheParVille() {
    return (
        <RechercheParVilleS>
            <Container>
            <h2 className="mb-5">Recherchez votre notaire dans les grandes villes de France</h2>
            <ListeVille>
                <Link to="/fr/notaires/ville/paris">Notaires à Paris</Link>
                <Link to="/fr/notaires/ville/lyon">Notaires à Lyon</Link>
                <Link to="/fr/notaires/ville/lille">Notaires à Lille</Link>
                <Link to="/fr/notaires/ville/bordeaux">Notaires à Bordeaux</Link>
                <Link to="/fr/notaires/ville/rennes">Notaires à Rennes</Link>
                <Link to="/fr/notaires/ville/montpellier">Notaires à Montpellier</Link>
                <Link to="/fr/notaires/ville/toulouse">Notaires à Toulouse</Link>

            </ListeVille>
            </Container>
        </RechercheParVilleS>
    );
}

export default RechercheParVille;