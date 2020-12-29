import React from "react";
import styles from "./card.module.css";
import spades from "../images/spades.svg";

const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.topnumber}>5</div>
			<img src={spades} className={styles.suite}></img>
			<div className={styles.bottomnumber}>5</div>
		</div>
	);
};

export default Card;
