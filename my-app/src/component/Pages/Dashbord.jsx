import React from "react";
import Navbar from "../Navbar";
import {
	bankoffer,
	fruitVegCard,
	staples,
	cleaningHousehold,
	snacks,
	beautyAndHygiene,
	beaverage,
	offer,
} from ".././Compo/exportData";
import MainSlider from "../Slider/Mainslider/MainSlider";
import Footer from "../Foter/Footer";

import Cards from "../Cards";

import { Grid, GridItem } from "@chakra-ui/react";
import CardMaker from "../Compo/CardMaker";
import Buttons from "../Compo/Buttons";
import GridCardMaker from "../Compo/GridCardMaker";
import Carousel from "../Compo/Carousel";

// import ProductList from "";

const Dashbord = () => {
	return (
		<>
			<Navbar />
			<MainSlider />
			<Buttons />
			<CardMaker data={bankoffer} heading="Bank Offers" />
			<CardMaker data={offer} heading="Top Offers" />

			<Grid width="80%" m="auto" templateColumns="repeat(3, 1fr)" gap={2}>
				{[1, 2, 3].map((i) => {
					return <Cards key={i} />;
				})}
			</Grid>
			<CardMaker data={fruitVegCard} heading="Fruits and Vegetables" />
			<CardMaker data={staples} heading="Your Daily Staples" />
			<GridCardMaker data={beaverage} heading={"Beaverages"} />

			<CardMaker data={snacks} heading="Snacks Store" />
			<CardMaker data={cleaningHousehold} heading="Cleaning and Household" />
			<GridCardMaker data={beautyAndHygiene} heading={"Beauty and Hygiene"} />
			<Carousel />
			<Footer />
		</>
	);
};

export default Dashbord;
