import { FC } from "react";
import { UserLoginInfo } from "../../api/auth/login";

import styles from "./loginFormStyle.module.css";

interface LoginFormProps {
	formData: UserLoginInfo;
	setFormData: React.Dispatch<React.SetStateAction<UserLoginInfo>>;
}

const LoginForm: FC<LoginFormProps> = ({ formData, setFormData }) => {
	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
				<label htmlFor="login-form-email" className={styles.label}>
					Email
				</label>
				<input
					id="login-form-email"
					type="email"
					placeholder="type your email here ..."
					value={formData.username}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({ ...formData, username: event.target.value });
					}}
					className={styles.input}
				/>

				<label htmlFor="login-form-password" className={styles.label}>
					Password
				</label>
				<input
					id="login-form-password"
					type="password"
					placeholder="type your password here ..."
					value={formData.password}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({ ...formData, password: event.target.value });
					}}
					className={styles.input}
				/>
			</form>
		</div>
	);
};

export default LoginForm;
