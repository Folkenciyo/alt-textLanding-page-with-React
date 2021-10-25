import React from "react";
import Carrousel from "./Carrousel.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FooterLinks from "./footerLinks.jsx";

//create your first component
const Home = () => {
	return (

		<div>
			
		
			<Carrousel />
      <FooterLinks />
		</div>
	);
};

export default Home;
