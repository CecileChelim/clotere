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
}

.card {
	outline: var(--outline-width) solid hotpink;
}

.card__content {
    background: rgb(2,96,105);
background: linear-gradient(180deg, rgba(2,96,105,1) 24%, rgba(29,43,40,1) 100%);
border-radius:20px;
border:0;
min-height:420px;
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
    @media all and (max-width: 768px) {display:block;}
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
                                <h4>Clotere <span>rédige</span> et <span>contrôle</span> les documents de vente.</h4>
                                <p>On s’assure de la conformité des pièces du dossier, et on rédige les documents avec toutes les clauses juridiques.</p>
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
                                <h4>Suivez plus <span>simplement</span> votre transaction</h4>
                                <p>Vous serez au courant de tout depuis notre plateforme en ligne. Récolte des pièces en cours, étapes de rédaction….</p>
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
                                <h4>Signez depuis <span>votre canapé</span></h4>
                                <p>Tout se fait en ligne, y compris le rendez-vous de signature avec le notaire.</p>
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