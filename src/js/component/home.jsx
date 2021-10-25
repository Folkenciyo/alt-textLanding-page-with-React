import React from "react";
import Navigator from "./navigator.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FooterLinks from "./footerLinks.jsx";

//create your first component
const Home = () => {
	return (
    <Navigator />;
		<div>
			<FooterLinks />
		</div>
};

export default Home;
