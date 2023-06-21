import { useState, useEffect } from "react";
import { Box, Image, Button } from "@chakra-ui/react";

const images = [
	"https://rukminim1.flixcart.com/flap/1000/1000/image/5655d35aa959ffe8.jpg",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/c7d2b98b5ac01799.jpg",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/938d2f267807952f.jpg",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/d72cac86423a498b.jpg",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/a9193a4988ff1328.jpg",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/e284b77bb80114f7.jpg",
];

const Carousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((currentImageIndex + 1) % images.length);
		}, 4000);

		return () => clearInterval(intervalId);
	}, [currentImageIndex]);

	const handlePrevClick = () => {
		setCurrentImageIndex(
			(currentImageIndex - 1 + images.length) % images.length
		);
	};

	const handleNextClick = () => {
		setCurrentImageIndex((currentImageIndex + 1) % images.length);
	};

	return (
		<Box display="flex" alignItems="center" justifyContent="center" w="100%">
			<Button onClick={handlePrevClick}></Button>
			<Image
				w="100%"
				src={images[currentImageIndex]}
				alt={`Image ${currentImageIndex + 1}`}
			/>
			<Button onClick={handleNextClick}></Button>
		</Box>
	);
};

export default Carousel;
