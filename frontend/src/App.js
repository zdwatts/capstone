import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./services/auth";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import LandingPage from "./components/LandingPage";

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" exact={true}>
					<LoginForm
						setAuthenticated={setAuthenticated}
						authenticated={authenticated}
					/>
				</Route>
				<Route path="/signup">
					<SignUpForm
						setAuthenticated={setAuthenticated}
						authenticated={authenticated}
					/>
				</Route>
				<Route exact path="/">
					<LandingPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
