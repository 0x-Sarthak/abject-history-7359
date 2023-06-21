import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";

const LoginSignupPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(true);

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);
	const handleLoginSignupToggle = () => setIsLogin(!isLogin);

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: handle form submission
	};

	return (
		<Box
			w="100%"
			h="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center">
			<Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
				<Text fontSize="2xl" fontWeight="bold" mb={4}>
					{isLogin ? "Log In" : "Sign Up"}
				</Text>
				<form onSubmit={handleSubmit}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input type="email" value={email} onChange={handleEmailChange} />
						</FormControl>
						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								value={password}
								onChange={handlePasswordChange}
							/>
						</FormControl>
						<Button type="submit" colorScheme="blue" size="lg">
							{isLogin ? "Log In" : "Sign Up"}
						</Button>
					</Stack>
				</form>
				<Button
					variant="link"
					colorScheme="blue"
					mt={4}
					onClick={handleLoginSignupToggle}>
					{isLogin ? "Create an account" : "Log In instead"}
				</Button>
			</Box>
		</Box>
	);
};

export default LoginSignupPage;
