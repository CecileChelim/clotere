import React from "react";
import styled from "styled-components";
import IlluFeature from "../img/illu-test.png";


const BodyParallax = styled.div`
:root {
	--card-height: 40vw;
	--card-margin: 4vw;
	--card-top-offset: 5em;
	--numcards: 2;
	--outline-width: 0px;
}

#cards {
	padding-bottom: calc(var(--numcards) * var(--card-top-offset)); /* Make place at bottom, as items will slide to that position*/
	margin-bottom: var(--card-margin); /* Don't include the --card-margin in padding, as that will affect the scroll-timeline*/
    
}

#card_1 {
	--index: 1;
}

#card_2 {
	--index: 2;
}

#card_3 {
	--index: 3;
}

.card {
	position: sticky;
	top: 20px;
	padding-top: calc(var(--index) * var(--card-top-offset));
    background-color: transparent;
    
}

@supports (animation-timeline: works) {

	@scroll-timeline cards-element-scrolls-in-body {
		source: selector(body);
		scroll-offsets:
			/* Start when the start edge touches the top of the scrollport */
			selector(#cards) start 1,
			/* End when the start edge touches the start of the scrollport */
			selector(#cards) start 0
		;
		start: selector(#cards) start 1; /* Start when the start edge touches the top of the scrollport */
		end: selector(#cards) start 0; /* End when the start edge touches the start of the scrollport */
		time-range: 4s;
	}

	.card {
		--index0: calc(var(--index) - 1); /* 0-based index */
		--reverse-index: calc(var(--numcards) - var(--index0)); /* reverse index */
		--reverse-index0: calc(var(--reverse-index) - 1); /* 0-based reverse index */
	}
	
	.card__content {
		transform-origin: 50% 0%;
		will-change: transform;

		--duration: calc(var(--reverse-index0) * 1s);
		--delay: calc(var(--index0) * 1s);

		animation: var(--duration) linear scale var(--delay) forwards;
		animation-timeline: cards-element-scrolls-in-body;
	}

	@keyframes scale {
		to {
			transform:
				scale(calc(
					1.1
					-
					calc(0.1 * var(--reverse-index))
				));
		}
	}
}

/** DEBUG **/
#debug {
  position: fixed;
  top: 1em;
  left: 1em;
}
#debug::after {
  content: " Show Debug";
  margin-left: 1.5em;
  color: white;
  white-space: nowrap;
}

#debug:checked ~ main {
  --outline-width: 1px;
}

header,
main {
	width: 80vw;
	margin: 0 auto;
	@media all and (max-width: 768px) {
		width: 95vw;
	margin: 0;
	}
}

header {
	height: 100vh;
	display: grid;
	place-items: center;
}

#cards {
	list-style: none;
	outline: calc(var(--outline-width) * 10) solid blue;
	
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(var(--numcards), var(--card-height));
	gap: var(--card-margin);

	@media all and (max-width: 768px) {
		padding-left: 1rem;
	}
	
	;
}

.card {
	outline: var(--outline-width) solid hotpink;
}

.card__content {
    background: rgb(2,96,105);
border-radius:20px;
border:0;
min-height:420px;
margin-bottom:2rem;
margin-top:4rem;
.carousel{position:relative;min-height:420px;}
.carousel-inner{
    overflow:visible;
}
	overflow: hidden;
	display: grid;
	grid-template-areas: "text img";
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	align-items: stretch;
	outline: var(--outline-width) solid lime;
    color:white;
    padding:60px 60px 90px 60px;
    @media all and (max-width: 768px) {display:block;padding: 2rem;}
h4{
    font-size:36px;
    
    span{
        font-weight: 500;
        background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #1DF36C 50%);
    }
    margin-bottom:20px;
}
p{
    font-size:24px;
}
}

.card__content > div {
	grid-area: text;
	width: 100%;
	place-self: center;
	text-align: left;

	display: grid;
	gap: 1em;
	place-items: start;
}


`;


function FeatureParallax() {
    return (
        <BodyParallax>
            <main>
                <ul id="cards">
                    <li className="card" id="card_1">
                        <div className="card__content">
                            <div>
                                <h4 className="number">01.</h4>
                                <h4> Ajoutez votre <span>projet immobilier</span>.</h4>
                                <p>Remplissez les informations de votre transaction et ajoutez vos documents en quelques minutes.</p>
                            </div>
                            <figure>
                                <img src={IlluFeature} alt="feature1" />
                            </figure>
                        </div>
                    </li>
                    <li className="card" id="card_2">
                        <div className="card__content">
                            <div>
                                <h4 className="number">02.</h4>
                                <h4>Un <span>notaire</span> vous prends en charge</h4>
                                <p>Votre notaire vérifie, et prépare les documents pour signature. Suivez l'avancement en ligne.</p>
                            </div>
                            <figure>
                                <img src={IlluFeature} alt="feature2" />
                            </figure>
                        </div>
                    </li>
                    <li className="card" id="card_3">
                        <div className="card__content">
                            <div>
                                <h4 className="number">03.</h4>
                                <h4><span>Suivez</span> et <span>signez</span> vos documents en ligne</h4>
                                <p>Signez vos documents de manière sécurisée et 100% conforme à la législation.</p>
                            </div>
                            <figure>
                                <img src={IlluFeature} alt="feature3" />
                            </figure>
                        </div>
                    </li>
                </ul>
            </main>
        </BodyParallax>
    );
}

export default FeatureParallax;