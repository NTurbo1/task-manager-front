import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "./navbarLinks/NavBarLinks";

import defaultCompanyLogo from "../../assets/logo/default_company_logo.svg";
import CustomNavLink from "../link/CustomNavLink";
import CompanyLogo from "../logo/CompanyLogo";
import styles from "./navBarStyle.module.css";

const NavBar: FC = () => {
	const linkElements: ReactElement<typeof Link>[] = [
		<CustomNavLink name="Home" to="/" />,
		<CustomNavLink name="Log in" to="/login" />,
	];

	return (
		<div className={styles.navbar}>
			<CompanyLogo name="company logo" imgSrc={defaultCompanyLogo} />
			<NavBarLinks links={linkElements} />
		</div>
	);
};

export default NavBar;
