import React from "react";
import styles from "./card.module.css";
import Card from "./Card";

const Deck = (props) => {
	let suites = ["Spades", "Hearts", "Clubs", "Diamonds"];
	let faceCards = ["J", "Q", "K", "A"];
	let deck = [];

	const createDeck = () => {
		deck = [];
		for (let i = 0; i < suites.length; i++) {
			for (let j = 2; j <= 10; j++) {
				deck.push({
					id: j + suites[i],
					Name: j + " of " + suites[i],
					value: j,
					Suite: suites[i],
					"Blackjack-Value": j,
				});
			}

			for (let k = 0; k < faceCards.length; k++) {
				deck.push({
					Id: faceCards[k] + suites[i],
					Name: faceCards[k] + " of " + suites[i],
					Value: faceCards[k],
					Suite: suites[i],
					"Blackjack-Value": faceCards[k] === "A" ? [1, 10] : 10,
				});
			}
		}
		// console.log(deck);
		return deck;
	};

	const shuffleDeck = (array) => {
		//copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

		var currentIndex = array.length,
			temporaryValue,
			randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	};

	const createNewDeck = () => {
		console.log("Creating New Deck...");
		createDeck();
		console.log(deck);
		return deck;
	};

	const shuffleTheDeck = () => {
		console.log("shuffling the Deck...");
		shuffleDeck(deck);
		console.log(deck);
		return deck;
	};

	const deckArr = deck.map((card) => {
		return <div key={card.Id}>Card</div>;
	});
	console.log(deck);
	console.log(deckArr);

	return (
		<div>
			<div>
				<button onClick={createNewDeck}>Create Deck</button>
				<button onClick={() => shuffleTheDeck(deck)}>Shuffle Deck</button>
				{/* <button onClick={createDeck}>Create Deck</button>
				<button onClick={shuffleDeck(deck)}>Shuffle Deck</button> */}
			</div>
			<div>{deckArr}</div>
		</div>
	);
};
export default Deck;
