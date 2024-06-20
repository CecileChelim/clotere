import React from "react";
import { Container} from "reactstrap";
import styled from "styled-components";
import IcnLogoNoir from "../img/icn-logo-noir.svg";


const Bloc = styled.div`
 display:flex;
flex-direction:row;
align-items:start;
gap:16px;
justify-content:space-between;
@media all and (max-width: 768px) {
    flex-direction:column;
        align-items: center;
}
`;
const Point = styled.div`
 display:flex;
flex-direction:column;
justify-content:center;
align-items:start;
gap:24px;
padding:30px 0;
width:400px;
@media all and (max-width: 768px) {
    padding:0 0 30px 0;
}

`;
const Avantages = styled.p`
display:flex;
flex-direction:row;
gap:10px;
margin:0;
img{width:42px;}
font-size:16px;
font-weight:bold;
`;


function Efficacite() {
    return (
        <Container>
                <Bloc>
                    <Point>
                        <Avantages>
                            <img src={IcnLogoNoir} alt="Clotere" />
                            Expérience client
                        </Avantages>
                        <p>
                            En plaçant nos clients au cœur de tout ce que nous faisons, nous nous efforçons de proposer des expériences exceptionnelles et des solutions personnalisées.
                        </p>
                    </Point>
                    <Point>
                        <Avantages>
                            <img src={IcnLogoNoir} alt="Clotere" />
                            Intelligence artificielle
                        </Avantages>
                        <p>
                        Automatisez vos tâches à faible valeur ajoutée, et libérez votre temps grâce à notre IA. 
                        Vous pourrez enfin vous concentrez  sur ce qui compte vraiment.
                        </p>
                    </Point>
                    <Point>
                        <Avantages>
                            <img src={IcnLogoNoir} alt="Clotere" />
                            Une technologie & une équipe
                        </Avantages>
                        <p>
                        Nous construisons avec vous la solution la plus adaptée au succès de vos clients et de votre activité, en vous offrant un soutien technologique, opérationnel et commercial.
                        </p>
                    </Point>
                </Bloc>
        </Container>
    );
}

export default Efficacite;