import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <Container>
                <Row>
                    <Col>
                        <h1>Casarão Saudade</h1>
                        <p>O seu refúgio de café e aconchego.</p>
                        <Button className="btn btn-primary">Conheça o Menu</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
