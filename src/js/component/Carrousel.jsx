import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const Carrousel = () => {
	return (
		<div className="container-fluid">
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						style={{ maxHeight: "75%" }}
						src="https://www.pexels.com/photo/7061395/download/"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						style={{ maxHeight: "75%" }}
						src="https://images.pexels.com/photos/6957085/pexels-photo-6957085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						style={{ maxHeight: "75%" }}
						src="https://images.pexels.com/photos/7031578/pexels-photo-7031578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						style={{ maxHeight: "75%" }}
						src="https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Carrousel;
