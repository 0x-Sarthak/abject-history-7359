import React from "react";
import { useToast } from "@chakra-ui/react";
import {
	Button,
	Center,
	Text,
	Box,
	Image,
	Link,
	Heading,
} from "@chakra-ui/react";
// import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Homescreen = () => {
	// const { colorMode, toggleColorMode } = useColorMode();
	const toast = useToast();
	return (
		<div>
			<Center bg="black" h="100px" color="white">
				<Button
					onClick={() =>
						toast({
							title: "Account created.",
							description: "We've created your account for you.",
							status: "success",
							duration: 9000,
							isClosable: true,
						})
					}>
					Show Toast
				</Button>
			</Center>
			<br />
			<Center>
				<Box borderWidth={4} borderColor="purple.500" p={5} className="my-box">
					<Heading size="lg">
						Hover the box...
						<Box
							as="span"
							color="red.500"
							sx={{
								".my-box:hover &": {
									color: "green.500",
								},
							}}>
							And I will turn green!
						</Box>
					</Heading>
				</Box>
			</Center>
			<Box p={4} display={{ md: "flex" }}>
				<Box flexShrink={0}>
					<Image
						borderRadius="lg"
						width={{ md: 40 }}
						src="https://bit.ly/2jYM25F"
						alt="Woman paying for a purchase"
					/>
				</Box>
				<br />
				<br />
				<Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
					<Text
						fontWeight="bold"
						textTransform="uppercase"
						fontSize="sm"
						letterSpacing="wide"
						color="teal.600">
						Marketing
					</Text>
					<Link
						mt={1}
						display="block"
						fontSize="lg"
						lineHeight="normal"
						fontWeight="semibold"
						href="#">
						Finding customers for your new business
					</Link>
					<Text mt={2} color="gray.500">
						Getting a new business off the ground is a lot of hard work. Here
						are five ideas you can use to find your first customers.
					</Text>
				</Box>
			</Box>
		</div>
	);
};

export default Homescreen;
