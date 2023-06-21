import * as React from "react";
// import Homescreen from "./component/Homescreen";

// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashbord from "./component/Pages/Dashbord";

import Contact from "./component/Pages/Contact";
import NotFound from "./component/Pages/NotFound";
import Login from "./component/Pages/Login";

import Products from "./component/Pages/Products";
import Cart from "./component/Pages/Cart";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
	// 2. Wrap ChakraProvider at the root of your app

	const theme = extendTheme({
		Link: {
			baseStyle: {
				textDecoration: "none",
				_hover: {
					textDecoration: "none",
				},
			},
		},
	});
	return (
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<Routes>
					<Route path="/" element={<Dashbord />} />

					<Route path="/login" element={<Login />} />
					<Route path="/carts" element={<Cart />} />

					<Route path="/products" element={<Products />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				{/* <Navbar /> */}
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
