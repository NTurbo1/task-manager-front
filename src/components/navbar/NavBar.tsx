import { FC, ReactElement } from "react";
import NavBarLinks from "./navbarLinks/NavBarLinks";
import { Link } from "react-router-dom";

import styles from "./navBarStyle.module.css"
import CustomNavLink from "../link/CustomNavLink";
import CompanyLogo from "../logo/CompanyLogo";

const NavBar:FC = () => {

	const linkElements:ReactElement<typeof Link>[] = [
		<CustomNavLink name="Home" to="/" />
	]

	return (
		<div className={styles.navbar}>
			<CompanyLogo name="company logo" imgSrc="../../assets/someIMage.png" /> {/* Change the image src to a valid one.*/}
			<NavBarLinks links = { linkElements }/>
			
		</div>
	)
}

export default NavBar