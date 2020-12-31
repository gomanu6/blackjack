import React, { useState } from "react";
import styles from "./card.module.css";
import Card from "./Card";

const Deck = (props) => {
	const [deck, setDeck] = useState([]);

	let suites = ["Spades", "Hearts", "Clubs", "Diamonds"];
	let faceCards = ["J", "Q", "K", "A"];

	const createDeck = () => {
		console.log("Setting the Deck...");
		let newDeck = [];
		for (let i = 0; i < suites.length; i++) {
			for (let j = 2; j <= 10; j++) {
				newDeck.push({
					id: j + suites[i],
					name: j + " of " + suites[i],
					value: j,
					suite: suites[i],
					"Blackjack-Value": j,
				});
			}

			for (let k = 0; k < faceCards.length; k++) {
				newDeck.push({
					id: faceCards[k] + suites[i],
					name: faceCards[k] + " of " + suites[i],
					value: faceCards[k],
					suite: suites[i],
					"Blackjack-Value": faceCards[k] === "A" ? [1, 10] : 10,
				});
			}
		}

		return newDeck;
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
		const theDeck = createDeck();
		setDeck(theDeck);
		console.log("The Deck has been set...");
	};

	const shuffleTheDeck = () => {
		console.log("shuffling the Deck...");
		const deckToShuffle = deck;
		const shuffledDeck = shuffleDeck(deckToShuffle);
		setDeck(shuffledDeck);

		// if (deck.length < 2) {
		// 	console.log("The deck is empty...");
		// } else {
		// 	console.log("shuffling the Deck...");
		// 	const deckToShuffle = deck;
		// 	const shuffledDeck = shuffleDeck(deckToShuffle);
		// 	setDeck(shuffledDeck);
		// 	console.log("The Deck has been shuffled...");
		// }
	};

	const deckArr = deck.map((card) => {
		return (
			<Card
				key={card.id}
				className={styles.card}
				value={card.value}
				suite={card.suite}
			></Card>
		);
	});

	return (
		<div>
			<div>
				<button onClick={createNewDeck}>Set Deck</button>
				<button onClick={shuffleTheDeck}>Shuffle Deck</button>
				{/* <button onClick={createDeck}>Create Deck</button>
				<button onClick={shuffleDeck(deck)}>Shuffle Deck</button> */}
			</div>
			<div>{deckArr}</div>
		</div>
	);
};
export default Deck;
