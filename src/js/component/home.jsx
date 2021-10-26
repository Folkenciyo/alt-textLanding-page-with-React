import React from "react";


import Carrousel from "./Carrousel.jsx";

import Navigator from "./navigator.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FooterLinks from "./footerLinks.jsx";

//create your first component
const Home = () => {
	return (

		<div className="text-center mt-5">
			<Navigator />
			<Carrousel />
			<FooterLinks />
		</div>
	);
};

export default Home;
