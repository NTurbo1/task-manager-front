import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function AppRoute():ReactElement {
	return (
		<Routes>
			<Route path="/" element = {<Dashboard />} />
		</Routes>
	)
}