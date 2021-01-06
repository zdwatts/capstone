import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated }) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = async (e) => {
		e.preventDefault();
		const user = await login(email, password);
		if (!user.errors) {
			setAuthenticated(true);
		} else {
			setErrors(user.errors);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<form onSubmit={onLogin}>
				<div>
					{errors.map((error) => (
						<div>
							<p>{error}</p>
						</div>
					))}
				</div>
				<div>
					<label>Email</label>
					<input
						name="email"
						type="text"
						value={email}
						onChange={updateEmail}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						name="password"
						type="password"
						value={password}
						onChange={updatePassword}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
