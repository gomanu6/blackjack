import React from "react";
import styles from "./card.module.css";
import Spades from "../images/spades.svg";
import Clubs from "../images/clubs.svg";
import Diamond from "../images/diamond.svg";
import Heart from "../images/heart.svg";

const Card = (props) => {
	let suite = props.suite;

	return (
		<div className={styles.card}>
			<div className={styles.topnumber}>{props.value}</div>
			<img src={suite} className={styles.suite}></img>
			<div className={styles.bottomnumber}>{props.value}</div>
		</div>
	);
};

export default Card;
