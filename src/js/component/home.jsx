import React, { Fragment } from "react";
import CardBody from "./bodyCard.jsx";

import Carrousel from "./Carrousel.jsx";

import Navigator from "./navigator.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FooterLinks from "./footerLinks.jsx";

const CARD_NUMBER = 4;

const CARD_TITLE = ["AZUMA HOUSE", "FLEX HOUSE", "UNDERGROUND", "HIGHWAY"];

const CARD_TEXT = [
	"A beautiful home that you probably will not afford.",
	"Another beautiful home that you will never own. Stop being broke.",
	"You really are a masochist dude. You're broke...get over it!",
	"This property is really cool. Made out of concrete prefab highway components."
];
const CARD_IMAGE = [
	"https://mir-s3-cdn-cf.behance.net/project_modules/1400/53f4f833504413.56add072c8e84.jpg",
	"https://images.adsttc.com/media/images/5756/1a4e/e58e/cece/e700/00ad/slideshow/9_Flexhouse_External.jpg?1465260609",
	"https://static.homesandproperty.co.uk/s3fs-public/thumbnails/image/2017/01/12/14/villavals1creditvillavals.ch-.jpg?width=990",
	"https://images.adsttc.com/media/images/5ccf/4105/284d/d163/4700/0240/large_jpg/e-hh1.jpg?1557086462"
];

//const text1 = "A beautiful home that you probably will not afford.";
//const text2 =
//"Another beautiful home that you will never own. Stop being broke.";
//const text3 = "You really are a masochist dude. You're broke...get over it!";

//create your first component
const Home = () => {
	let cardsContainer = [];
	for (let i = 0; i < CARD_NUMBER; i++) {
		cardsContainer.push(
			<CardBody
				key={i.toString()}
				title={CARD_TITLE[i]}
				text={CARD_TEXT[i]}
				imageUrl={CARD_IMAGE[i]}
			/>
		);
		//textContainer.push(<CardBody key={i.toString()} text={CARD_TEXT[i]} />);
	}
	return (
		<div className="text-center mt-5">
			<Navigator />
			<Carrousel />
			<Fragment>
				<div className="cardSample">{cardsContainer}</div>
			</Fragment>
			<FooterLinks />
		</div>
	);
};

export default Home;
