import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs: React.FC = () => {
    return (
        <section className="about-us">
            <Container>
                <h2>Sobre Nós</h2>
                <Row>
                    <Col md={8}>
                        <p>
                            O Casarão Saudade é um lugar especial para você relaxar e desfrutar de
                            um café delicioso com amigos e familiares.
                        </p>
                        <p>
                            Oferecemos uma variedade de cafés, chás, doces e salgados, todos
                            preparados com ingredientes frescos e de alta qualidade.
                        </p>
                    </Col>
                    <Col md={4}>
                        <img
                            src="imagem-cafe.jpg"
                            alt="Imagem do café"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;
