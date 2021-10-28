import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterLinks = () => {
	return (
		<div className="flex footer">
			<Container>
				<Row>
					<Col>
						<div>
							<div
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<div>
									<a className="links" href="/home">
										Home
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-1">
										La Casa de tu vida
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-2">
										El terreno de tus sueños
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-3">
										Naves industriales
									</a>
								</div>
							</div>
						</div>
					</Col>
					<Col>
						<div>
							<div
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<div>
									<a
										className="links"
										href=""
										eventKey="link-7">
										Conoce nuestra historia
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-4">
										Mejor empresa 2051
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-5">
										Hogar dulce Hogar
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-6">
										Felpudo, la caca de tu suela
									</a>
								</div>
							</div>
						</div>
					</Col>
					<Col>
						<div>
							<div
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<div>
									<a
										className="links"
										href=""
										eventKey="link-8">
										No se espia por la ventana
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-9">
										Regulación de las cortinas a exterior
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-10">
										Navidad, no excederse
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-11">
										Seguridad en vacaciones
									</a>
								</div>
							</div>
						</div>
					</Col>
					<Col>
						<div>
							<div
								defaultActiveKey="/home"
								className="flex-column links__collums">
								<div>
									<a
										className="links"
										href=""
										eventKey="link-12">
										Tejados y sus triangulaciones
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-13">
										Metros Cuadrados
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-14">
										Me gusta mi página bonita
									</a>
								</div>
								<div>
									<a
										className="links"
										href=""
										eventKey="link-15">
										Babyshark turuturututu
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="socialMedia">
				<Container>
					<Row>
						<Col>
							<a className="facebook" href="www.facebook.com">
								<i className="fab fa-facebook-square"></i>
								Facebook
							</a>
						</Col>
						<Col>
							<a className="twitter" href="www.twitter.com">
								<i className="fab fa-twitter-square"></i>
								Twitter
							</a>
						</Col>
						<Col>
							<a className="insta" href="wwww.instagram.com">
								<i className="fab fa-instagram"></i>
								Instagram
							</a>
						</Col>
						<Col>
							<a className="linkedIn" href="www.linkedin.com">
								<i className="fab fa-linkedin"></i>
								LinkedIn
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default FooterLinks;
