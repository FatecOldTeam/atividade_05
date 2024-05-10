import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact: React.FC = () => {
    return (
        <section className="contact">
            <Container>
                <h2>Contato</h2>
                <Row>
                    <Col md={8}>
                        <Form>
                            <Form.Group controlId="nome">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" />
                            </Form.Group>

                            <Form.Group controlId="mensagem">
                                <Form.Label>Mensagem:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="primary" type="submit">Enviar</Button>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <p>
                            <strong>Endereço:</strong> Rua X, Y - Bairro Z, Cidade - UF
                        </p>
                        <p>
                            <strong>Telefone:</strong> (XX) XXXX-XXXX
                        </p>
                        <p>
                            <strong>Email:</strong> contato@cafe-aconchegante.com.br
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
