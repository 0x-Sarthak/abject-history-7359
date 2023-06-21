import { SimpleGrid, Input, Select, Box, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function ProductList() {
	const [products, setProducts] = useState([]);
	const [sortOption, setSortOption] = useState("priceLowToHigh");
	const [searchTerm, setSearchTerm] = useState("");
	const [cart, setCart] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get("http://localhost:8080/vegetable");
			setProducts(response?.data);
		}
		fetchData();
	}, []);

	const sortProducts = (option) => {
		let sortedProducts = [...products];
		if (option === "priceLowToHigh") {
			sortedProducts.sort((a, b) => a.price - b.price);
		} else if (option === "priceHighToLow") {
			sortedProducts.sort((a, b) => b.price - a.price);
		}
		setSortOption(option);
		setProducts(sortedProducts);
	};

	const filterProducts = (searchTerm) => {
		let filteredProducts = [...products].filter((product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setProducts(filteredProducts);
		setSearchTerm(searchTerm);
	};

	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	const removeFromCart = (product) => {
		setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<Box maxW="1200px" mx="auto" p={8}>
			<Box display="flex" justifyContent="space-between" mb={4}>
				<Select
					w={1 / 3}
					value={sortOption}
					onChange={(e) => sortProducts(e.target.value)}>
					<option value="priceLowToHigh">Price: Low to High</option>
					<option value="priceHighToLow">Price: High to Low</option>
				</Select>
				<Input
					w={1 / 3}
					placeholder="Search"
					value={searchTerm}
					onChange={(e) => filterProducts(e.target.value)}
				/>
				<Box textAlign="right" w={1 / 3}>
					<Button colorScheme="blue" onClick={clearCart}>
						Clear Cart
					</Button>

					<Text fontSize="lg" fontWeight="bold">
						Cart ({cart.length})
					</Text>
				</Box>
			</Box>
			<Box>
				<SimpleGrid columns={3} spacing={8}>
					{products.map((vegitable) => (
						<Product
							key={vegitable.id}
							vegitable={vegitable}
							addToCart={addToCart}
						/>
					))}
				</SimpleGrid>
			</Box>
		</Box>
	);
}

export default ProductList;
