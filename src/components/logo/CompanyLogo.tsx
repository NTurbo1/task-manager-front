import { FC } from "react";

import styles from "./companyLogoStyle.module.css"

interface CompanyLogoProps {
	name: string,
	imgSrc: string
}

const CompanyLogo:FC<CompanyLogoProps> = ({ name, imgSrc }):JSX.Element => {


	return (
		<div className={styles.companyLogo}>
			<img src={imgSrc} alt={name} />
		</div>
	)
}

export default CompanyLogo