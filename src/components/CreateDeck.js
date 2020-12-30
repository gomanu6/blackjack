import React from "react";
import styles from "./card.module.css";

const CreateDeck = () => {
	let deck = [];
	let suites = ["Spades", "Hearts", "Clubs", "Diamonds"];
	let faceCards = ["J", "Q", "K", "A"];

	for (let i = 0; i < suites.length; i++) {
		for (let j = 2; j <= 10; j++) {
			deck.push({
				id: j + suites[i],
				Name: j + " of " + suites[i],
				value: j,
			});
		}
		for (let k = 0; k < faceCards.length; k++) {
			deck.push({
				Id: faceCards[k] + suites[i],
				Name: faceCards[k] + " of " + suites[i],
				Value: faceCards[k],
				"Blackjack-Value": faceCards[k] === "A" ? [1, 10] : 10,
			});
		}
	}
	// console.log(deck);
	// console.log(deck.length);

	const shuffleDeck = (array) => {
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

	let deckArr = deck.map((card) => {
		return <span className={styles.card} key={card.Id}></span>;
	});

	return (
		<div>
			<div>{deckArr}</div>
		</div>
	);
};

export default CreateDeck;
