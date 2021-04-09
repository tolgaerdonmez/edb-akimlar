import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AkimListPage } from "./pages/AkimListPage";
import { Home } from "./pages/Home";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/akimlar">
						<AkimListPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
