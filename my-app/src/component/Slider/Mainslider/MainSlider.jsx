import React, { useEffect, useState } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const MainSlider = () => {
	const [image, setImage] = useState(0);

	var id;
	useEffect(() => {
		id = setInterval(() => {
			if (image === 3) {
				setImage(0);
			} else {
				setImage((prev) => prev + 1);
			}
		}, 4000);
		return () => clearInterval(id);
	}, [image]);

	const slidesImages = [
		{
			// url: "https://www.bigbasket.com/media/uploads/banner_images/hp_m_FMCG-PL_TastiesOrigins_460px-250123.jpg",
			url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/6db4ddfd2434d69f.jpg?q=50",
		},
		{
			url: "https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_200223_Bangalore.jpg",
		},
		{
			url: "https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg",
		},
		{
			url: "https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_221012.jpg",
		},
	];

	const triggerData = [
		{ title: "Offer on", subtitle: "Stapples" },
		{ title: "Dairy", subtitle: "Store" },
		{ title: "Good", subtitle: "Diet" },
		{ title: "Home & Kitchen", subtitle: "Sale" },
	];

	return (
		<Box w="100%" h="100%" pos="relative">
			<Box>
				<Image src={slidesImages[image]?.url} />
			</Box>
			<Box className="flex" pos={"absolute"} bottom="0" width={"100%"}>
				{triggerData.map((el, i) => (
					<Box
						as="button"
						borderBottom="4px"
						borderBottomColor={i === image ? "red.500" : "transparent"}
						textAlign="center"
						key={i}
						whiteSpace="nowrap"
						px={[2, 3, "5"]}
						py="1"
						style={{ backdropFilter: "blur(14px)" }}
						bg="whiteAlpha.500"
						transition="600ms"
						onClick={() => setImage(i)}>
						<Text
							lineHeight={["15px", "15px", "20px", "25px"]}
							fontSize={[".7em", ".7em", "1em"]}>
							{el.title}
						</Text>
						<Text
							lineHeight={["15px", "15px", "20px", "25px"]}
							fontSize={[".7em", ".7em", "1em"]}>
							{el.subtitle}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default MainSlider;
