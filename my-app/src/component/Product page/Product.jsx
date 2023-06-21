import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

function Product({ vegitable, addToCart, removeFromCart }) {
	return (
		<Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="300px">
			<Image src={vegitable.image} alt={vegitable.title} height="200px" />
			<Box p="6">
				<Heading size="md" mb="2">
					{vegitable.title}
				</Heading>
				<Text fontSize="lg" fontWeight="bold" mb="2">
					${vegitable.price}
				</Text>
				<Button colorScheme="red" onClick={() => addToCart(vegitable)}>
					Add to cart
				</Button>
				<Button colorScheme="blue" onClick={removeFromCart}>
					Remove fromcart
				</Button>
			</Box>
		</Box>
	);
}

export default Product;
