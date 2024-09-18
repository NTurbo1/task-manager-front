export type UserLoginInfo = {
	username: string;
	password: string;
};

// Returns true if the login is successful and false otherwise.
export const sendLoginRequest = async (
	requestBody: UserLoginInfo
): Promise<boolean> => {
	try {
		const response = await fetch("http://localhost:8222/api/v1/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});

		console.log(`Status: ${response.status}`);

		if (response.ok) {
			return true;
		} else {
			const errorResponse = await response.json();
			console.log(errorResponse);
			return false;
		}
	} catch (error) {
		console.error("Error during login request:", error);
		return false;
	}
};
