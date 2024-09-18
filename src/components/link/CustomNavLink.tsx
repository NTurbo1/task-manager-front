import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./customNavLinkStyle.module.css";

interface CustomNavLinkProps {
	name: string;
	to: string;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({ name, to }): JSX.Element => {
	return (
		<Link to={to} className={styles.customLink}>
			{name}
		</Link>
	);
};

export default CustomNavLink;
