import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import styles from './navBarLinksStyle.module.css'

interface NavBarLinksProps {
	links: ReactElement<typeof Link>[]
}

const NavBarLinks:FC<NavBarLinksProps> = ({ links }):JSX.Element => {
	return (
		<div className={styles.links}>
			{links.map((link, index) => (
				<div className={styles.link} key={ index }>{ link }</div>
			))}
		</div>
	)
}

export default NavBarLinks