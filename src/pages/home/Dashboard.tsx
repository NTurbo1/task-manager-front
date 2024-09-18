import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

import styles from "./dashboardStyle.module.css";

export default function Dashboard() {
	return (
		<div className={styles.dashboardContainer}>
			<NavBar />
			<Outlet />
		</div>
	);
}
