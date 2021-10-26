import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterLinks = () => {
	return (
		<div className="flex navFooter">
			<Container>
				<Row>
					<Col>
						<div>
							<Nav
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<Nav.Link className="links" href="/home">
									Home
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-1">
									La Casa de tu vida
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-2">
									El terreno de tus sueños
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-3">
									Naves industriales
								</Nav.Link>
							</Nav>
						</div>
					</Col>
					<Col>
						<div>
							<Nav
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<Nav.Link className="links" eventKey="link-7">
									Conoce nuestra historia
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-4">
									Mejor empresa 2051
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-5">
									Hogar dulce Hogar
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-6">
									Felpudo, la caca de tu suela
								</Nav.Link>
							</Nav>
						</div>
					</Col>
					<Col>
						<div>
							<Nav
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<Nav.Link className="links" eventKey="link-8">
									No se espia por la ventana
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-9">
									Regulación de las cortinas a exterior
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-10">
									Navidad, no excederse
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-11">
									Seguridad en vacaciones
								</Nav.Link>
							</Nav>
						</div>
					</Col>
					<Col>
						<div>
							<Nav
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<Nav.Link className="links" eventKey="link-12">
									Tejados y sus triangulaciones
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-13">
									Metros Cuadrados
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-14">
									Me gusta mi página bonita
								</Nav.Link>
								<Nav.Link className="links" eventKey="link-15">
									Babyshark turuturututu
								</Nav.Link>
							</Nav>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="socialMedia">
				<Container>
					<Row>
						<Nav className="justify-content-center">
							<Nav.Item>
								<Nav.Link
									className="facebook"
									href="www.facebook.com">
									<i className="fab fa-facebook-square"></i>
									Facebook
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									className="twitter"
									href="www.twitter.com">
									<i className="fab fa-twitter-square"></i>
									Twitter
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									className="insta"
									href="wwww.instagram.com">
									<i className="fab fa-instagram"></i>
									Instagram
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									className="linkedIn"
									href="www.linkedin.com">
									<i className="fab fa-linkedin"></i>
									LinkedIn
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default FooterLinks;
