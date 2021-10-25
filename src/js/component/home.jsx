import React from "react";
import Carrousel from "./Carrousel.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<Carrousel />
		</div>
	);
};

export default Home;
