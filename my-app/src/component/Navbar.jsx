import {
	Box,
	Text,
	Center,
	HStack,
	Button,
	Divider,
	Stack,
} from "@chakra-ui/react";
import {
	Link,
	DrawerHeader,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Drawer,
} from "@chakra-ui/react";
// import { InputGroup, InputRightElement, CloseButton } from "@chakra-ui/react";
import { Flex, Input, Spacer, Image } from "@chakra-ui/react";
import { BsSearch, BsMailbox2 } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
	return (
		<Flex
			p="3"
			alignItems="center"
			pos="sticky"
			top="0"
			left="0"
			style={{ backdropFilter: "blur(13px)" }}
			bg="whiteAlpha.800"
			zIndex="999">
			<Spacer />
			<Link href="/">
				<Box
					fontSize={["1.3em", "1.3em", "1.8em", "1.8em"]}
					fontWeight={"900"}
					h="100%"
					className="flex logoText"
					pt={{ base: "1", lg: "2" }}>
					<Image
						mr="10px"
						src="https://imgs.search.brave.com/qXmyQhW01h73EdXiAVi9Fnsp9mMysbka7oXKClcPQV0/rs:fit:400:300:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzExMzk1/ODcvc2NyZWVuc2hv/dHMvMTQ2NTA5MTMv/bWVkaWEvY2MwNDc1/NTA4MDhiMDU5MWRh/ZjhkZjUwZTdiMTgw/MDcucG5nP2NvbXBy/ZXNzPTEmcmVzaXpl/PTQwMHgzMDA"
						alt=""
						borderRadius="5px"
						boxSize={{ base: "30px", lg: "50px" }}
						width={{ base: "40px", lg: "60px" }}
					/>
					<Spacer />
					<Text
						as="span"
						color={"black.600"}
						px={{ base: "1px", lg: "3px" }}
						className="flex">
						BIG
					</Text>
					<Text as="span" className="flex" color={"red.500"}>
						BASKET
					</Text>
				</Box>
			</Link>
			<Spacer />
			<Input
				borderRadius="10px"
				type="text"
				width={600}
				placeholder="Search"
				ml="2"
				size="sm"
				bg="white.20"
			/>

			<Spacer />
			<Text bgColor="white" onClick={onOpen} fontSize="1.6em" href="/">
				<BiCategory />
			</Text>

			<Spacer />
			{/* <Link fontSize="1.6em" href="/products">
				<FaShoppingBag />
			</Link>
			<Spacer />
			<Link fontSize="1.6em" href="/login">
				<FaUserAlt />
			</Link>
			<Spacer />
			<Link fontSize="1.6em" href="/contact">
				<BsMailbox2 />
			</Link> */}
			{isAuthenticated && <p> {user.name} </p>}
			<Spacer />
			{isAuthenticated ? (
				<Button onClick={() => logout({ returnTo: window.location.origin })}>
					Log Out
				</Button>
			) : (
				<Button onClick={() => loginWithRedirect()}>Log In</Button>
			)}

			<Spacer />
			<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader as="span" borderBottomWidth="1px" fontWeight="400">
						<Center height="50px">
							<h1 fontSize="100px">C A T E G O R I E S </h1>
						</Center>
					</DrawerHeader>

					<DrawerBody>
						<Link fontSize="1.6em" href="/products">
							<Text fontSize="2xl">Fresh Fruits</Text>
							<Text fontSize="2xl">Fresh Vegitables</Text>
							<Text fontSize="2xl">Foodgrain , Oil & Masala</Text>
							<Text fontSize="2xl">Snacks & Branded Foods</Text>
							<Text fontSize="2xl">Food</Text>
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}

export default Navbar;
