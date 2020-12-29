import React from "react";
import Wrapper from "./Wrapper";
import Card from "./Card";
import styles from "./hand.module.css";

const Hand = () => {
	return (
		<div className={styles.playerhand}>
			<p>Your Hand:</p>
			<div className={styles.hand}>
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Hand;
