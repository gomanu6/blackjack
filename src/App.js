import React from "react";

import Hand from "./components/Hand";
// import CreateDeck from "./components/CreateDeck";
import RenderDeck from "./components/RenderDeck";

const App = () => {
	return (
		<div>
			<Hand />
			<div>No One is winning</div>
			<RenderDeck />
		</div>
	);
};

export default App;
