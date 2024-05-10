import React from "react";
import { Navbar, Container, Nav, Image, Col, Row } from "react-bootstrap";


const Header: React.FC = () => {
    return (
        <section className="header">
            <Container>
                <Row>
                    <Col>
                        <Image
                            src= "../image/logo2.jpeg"
                            alt="Logo do Casarão Saudade"
                            className="logo"
                        />
                    </Col>
                    <Col>
                        <Navbar bg="light" data-bs-theme="light">
                            <Container>
                                <Navbar.Brand href="#home">Casarão Saudade</Navbar.Brand>
                                <Nav className="ma-auto">
                                    <Nav.Link className="navbar-link" href="https://www.instagram.com/casaraosaudade/">
                                        Instagram
                                    </Nav.Link>
                                    <Nav.Link className="navbar-link" href="/sobre-nos">
                                        Sobre Nós
                                    </Nav.Link>
                                    <Nav.Link className="navbar-link" href="/cardapio">
                                        Cardápio
                                    </Nav.Link>
                                    <Nav.Link className="navbar-link" href="/galeria">
                                        Galeria
                                    </Nav.Link>
                                    <Nav.Link className="navbar-link" href="/contato">
                                        Contato
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
