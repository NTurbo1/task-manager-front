import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/home/Dashboard";

export default function AppRoute(): ReactElement {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />}>
				<Route path="login" element={<Login />} />
			</Route>
		</Routes>
	);
}
