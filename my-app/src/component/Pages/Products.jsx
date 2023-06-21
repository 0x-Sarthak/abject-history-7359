import React from "react";
import { Box } from "@chakra-ui/react";
import ProductList from "../Product page/ProductList";
import Navbar from "../Navbar";
import Footer from "../Foter/Footer";

const Products = () => {
	return (
		<>
			<Navbar />
			<Box maxW="1200px" mx="auto" p={8}>
				<ProductList />
			</Box>
			<Footer />
		</>
	);
};

export default Products;
