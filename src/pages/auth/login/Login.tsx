import { FC, useState } from "react";
import { sendLoginRequest, UserLoginInfo } from "../../../api/auth/login";
import LoginForm from "../../../components/form/LoginForm";

import styles from "./loginStyle.module.css";

const Login: FC = (): JSX.Element => {
	const [formData, setFormData] = useState<UserLoginInfo>({
		username: "",
		password: "",
	});

	return (
		<div className={styles.loginContainer}>
			<LoginForm formData={formData} setFormData={setFormData} />
			<button
				onClick={() => {
					sendLoginRequest(formData);
				}}
				className={styles.loginButton}
			>
				Log in
			</button>
		</div>
	);
};

export default Login;
