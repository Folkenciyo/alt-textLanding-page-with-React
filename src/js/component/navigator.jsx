import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigator = () => {
	return (
		<Container fluid>
			<Row>
				<Nav
					className="Nav"
					activeKey="/home"
					onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
					<Col lg={1} className="my-auto">
						<span className="Nav__Icon">
							<i className="fas fa-home"></i>
						</span>
					</Col>
					<Col lg={1} className="my-auto">
						<Nav.Item className="Nav__Item">
							<Nav.Link className="Nav__Item--Link" href="/home">
								Inicio
							</Nav.Link>
						</Nav.Item>
					</Col>
					<Col lg={1} className="my-auto">
						<Nav.Item className="Nav__Item">
							<Nav.Link
								className="Nav__Item--Link"
								eventKey="link-1">
								Alquiler
							</Nav.Link>
						</Nav.Item>
					</Col>
					<Col lg={1} className="my-auto">
						<Nav.Item className="Nav__Item">
							<Nav.Link
								className="Nav__Item--Link"
								eventKey="link-2">
								Compra
							</Nav.Link>
						</Nav.Item>
					</Col>
					<Col lg={1} className="my-auto">
						<Nav.Item className="Nav__Item">
							<Nav.Link
								className="Nav__Item--Link"
								eventKey="disabled">
								Contacto
							</Nav.Link>
						</Nav.Item>
					</Col>
					<Col
						lg={{ span: 3, offset: 4 }}
						className="my-auto justify-content-right">
						<form>
							<input type="text" name="Search" id="search" />
							<input type="submit" value="Search" />
						</form>
					</Col>
				</Nav>
			</Row>
		</Container>
	);
};
export default Navigator;
