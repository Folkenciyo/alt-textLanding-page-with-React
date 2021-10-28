import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const cardBody = props => {
	return (
		<Container>
			<Row>
				<Col>
					<div>
						<Card
							style={{
								width: "18rem"
								//borderRadius: "0.9rem"
							}}>
							<Card.Img variant="top" src={props.imageUrl} />
							<Card.Body>
								<Card.Title>{props.title}</Card.Title>
								<Card.Text>{props.text}</Card.Text>
								<Button variant="primary">Learn more...</Button>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

cardBody.proptypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	imageUrl: PropTypes.string
};

export default cardBody;
