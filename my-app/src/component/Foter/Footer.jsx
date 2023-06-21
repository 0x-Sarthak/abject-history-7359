import {
	Box,
	Container,
	Grid,
	HStack,
	Stack,
	Heading,
	Text,
	Input,
	Image,
	Spacer,
	Divider,
} from "@chakra-ui/react";

import { SiMinutemailer } from "react-icons/si";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";
const Logo = ({ children }) => {
	return (
		<Box
			m="2"
			_hover={{ color: "red.500", cursor: "pointer" }}
			className="BtnClickEffect">
			{children}
		</Box>
	);
};

const logoImage = [
	<AiFillInstagram />,
	<BsYoutube />,
	<BsTwitter />,
	<FaFacebookSquare />,
];

const Footer = () => {
	return (
		<>
			<Box bg="gray.100" w="100%" style={{ backdropFilter: "blur(13px)" }}>
				<Grid
					py={10}
					templateColumns={{
						sm: "repeat(2,1fr)",
						md: "repeat(3,1fr)",
						lg: "repeat(4,1fr)",
					}}
					w="90%"
					m="auto">
					<Stack align={"flex-start"} px="5">
						<Heading fontSize={["1.7em", "1.5em", "2em"]}>Company</Heading>
						<Link href="#">About Us</Link>
						<Link href="#">Blog</Link>
						<Link href="#">Cart</Link>
						<Link href="#">Contact Me</Link>
						<Link href="#">Pricing</Link>
						<Link href="#">Testimonal</Link>
					</Stack>

					<Stack
						textAlign={"left"}
						px="5"
						display={["none", "none", "block", "block"]}>
						<Heading fontSize={["1.7em", "1.5em", "2em"]}>Support</Heading>
						<br />
						<Link href="#">Help Center</Link>
						<br />
						<Link href="#">Terms of Services</Link>
						<br />
						<Link href="#">Legal Prvacy and Policy</Link>
					</Stack>

					<Stack
						direction="column"
						px="5"
						display={["none", "none", "none", "block"]}>
						<Heading fontSize={"2em"} whiteSpace="nowrap">
							Download Our App
						</Heading>
						<Box alignItems="center" flexDirection={"column"}>
							<Image
								src="https://www.bbassets.com/static/v2616/custPage/build/content/img/Apple-App-store-icon.png"
								cursor={"pointer"}
								alt=""
								width={"50%"}
								py="2"
							/>
							<Image
								src="https://www.bbassets.com/static/v2616/custPage/build/content/img/Google-App-store-icon.png"
								cursor={"pointer"}
								alt=""
								width={"50%"}
							/>
						</Box>
					</Stack>

					<Stack align={"flex-start"}>
						<Heading fontSize={["1.7em", "1.5em", "2em"]} whiteSpace="nowrap">
							Stay up to date
						</Heading>
						<Stack direction={"row"}>
							<Input
								h={["2rem", "1.9rem", "2.1rem", "2.2rem"]}
								placeholder={"Your email address"}
								border={"1px"}
								borderColor="blackAlpha.700"
								_focus={{ bg: "whiteAlpha.500" }}
							/>
							<Box
								h={["2rem", "1.9rem", "2.1rem", "2.2rem"]}
								cursor={"pointer"}
								className="flex socialBtn BtnClickEffect"
								borderRadius={"5px"}
								w="50px"
								bg="red.600"
								_hover={{ backgroundColor: "red.500" }}
								color={"white"}>
								<SiMinutemailer />
							</Box>
						</Stack>
						<Box display={"flex"} fontSize="1.6em">
							{logoImage.map((el, i) => (
								<Logo key={i}>{el}</Logo>
							))}
						</Box>
					</Stack>
				</Grid>
			</Box>

			<Box bg={"blackAlpha.800"} color="white" display={"flex"} w="100%">
				<Box
					w={["98%", "98%", "90%"]}
					m="auto"
					p=""
					px="2"
					display={"flex"}
					justifyContent={["center", "center", "space-between"]}
					flexDirection={{ base: "column", sm: "column", md: "row" }}>
					<Box
						display={"flex"}
						m="auto"
						h="100%"
						w="fit-content"
						alignItems="center">
						<Image
							mr="10px"
							src="https://imgs.search.brave.com/qXmyQhW01h73EdXiAVi9Fnsp9mMysbka7oXKClcPQV0/rs:fit:400:300:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzExMzk1/ODcvc2NyZWVuc2hv/dHMvMTQ2NTA5MTMv/bWVkaWEvY2MwNDc1/NTA4MDhiMDU5MWRh/ZjhkZjUwZTdiMTgw/MDcucG5nP2NvbXBy/ZXNzPTEmcmVzaXpl/PTQwMHgzMDA"
							alt=""
							borderRadius="5px"
							boxSize={{ base: "30px", lg: "50px" }}
							width={{ base: "40px", lg: "60px" }}
						/>
						<Box
							fontSize={{ base: "1em", lg: "2em" }}
							fontWeight={"900"}
							h="100%"
							className="flex logoText"
							pt={{ base: "1", lg: "2" }}>
							<Text
								as="span"
								color={"red.500"}
								px={{ base: "1px", lg: "2px" }}
								className="flex">
								BIG
							</Text>
							<Text as="span" className="flex">
								BASKET
							</Text>
						</Box>
					</Box>
					<Spacer />
					<Text
						m="auto"
						fontSize={[".5em", ".5em", ".8em"]}
						whiteSpace={"nowrap"}
						letterSpacing=".1em">
						Copyright © 2021-2023 Supermarket Grocery Supplies Pvt Ltd
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
